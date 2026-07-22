import { Decimal } from "../common/decimal.vo";
import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import { OrderValidationError } from "../common/errors";
import type { InternationalOrderDomainEvent, OrderLineSnapshot } from "./international-order.events";
import {
  orderCreatedEvent, orderSubmittedEvent, orderApprovedEvent, orderRejectedEvent,
  orderSentEvent, orderProformaConfirmedEvent, orderProductionStartedEvent,
  orderProductionUpdatedEvent, orderReadyToShipEvent, orderSuspendedEvent,
  orderResumedEvent, orderCancelledEvent, orderUpdatedEvent,
  orderLineAddedEvent, orderLineUpdatedEvent, orderLineCancelledEvent,
} from "./international-order.events";
import { AlertSeverity, OrderStatus, isValidOperationType, type OperationType } from "./international-order.enums";
import { assertTransition, canSuspend } from "./international-order.state-machine";
import { validateApprovalReady, validateCreateOrder } from "./international-order.validator";
import type {
  CreateInternationalOrderCommand, UpdateInternationalOrderCommand,
  AddOrderLineCommand, UpdateOrderLineCommand, ProductionProgressCommand,
} from "./international-order.commands";

const SCALE_QTY = 3;
const SCALE_PRICE = 4;
const SCALE_MONEY = 2;

function toDec(v: string | number, s: number): Decimal {
  const d = new Decimal(v);
  if (!d.unwrap().isFinite()) throw new OrderValidationError("Invalid decimal: "+v);
  return d;
}

class OrderLine {
  constructor(
    readonly id: EntityId, private _ln: number, readonly productId: string,
    readonly skuSnapshot: string, readonly descSnapshot: string | null,
    private _qtyOrd: Decimal, private _qtyConf: Decimal,
    private _qtyProd: Decimal, private _qtyCanc: Decimal,
    private _price: Decimal, private _total: Decimal,
    private _ver: number,
  ) {}
  get lineNumber(): number { return this._ln; }
  get quantityOrdered(): Decimal { return this._qtyOrd; }
  get quantityConfirmed(): Decimal { return this._qtyConf; }
  get quantityProduced(): Decimal { return this._qtyProd; }
  get quantityCancelled(): Decimal { return this._qtyCanc; }
  get unitPrice(): Decimal { return this._price; }
  get lineTotalOriginal(): Decimal { return this._total; }
  get version(): number { return this._ver; }
  get openBalance(): Decimal { return this._qtyOrd.subtract(this._qtyCanc); }
  get pendingProduction(): Decimal { return this._qtyConf.subtract(this._qtyProd); }

  update(qty: string|number, price: string|number): void {
    const nQ = toDec(qty, SCALE_QTY); if (!nQ.isPositive()) throw new OrderValidationError("qty > 0");
    const nP = toDec(price, SCALE_PRICE); if (nP.unwrap().isNegative()) throw new OrderValidationError("price >= 0");
    this._qtyOrd = nQ; this._qtyConf = nQ; this._price = nP;
    this._total = nQ.multiply(nP).round(SCALE_MONEY); this._ver++;
  }

  produce(add: string|number): void {
    const a = toDec(add, SCALE_QTY); if (!a.isPositive()) throw new OrderValidationError("produce > 0");
    const np = this._qtyProd.add(a);
    const max = this._qtyConf.subtract(this._qtyCanc);
    if (np.unwrap().greaterThan(max.unwrap())) throw new OrderValidationError(`produced ${np} > max ${max}`);
    this._qtyProd = np; this._ver++;
  }

  cancel(): void {
    const r = this.openBalance; if (r.isZero()) return;
    this._qtyCanc = this._qtyCanc.add(r); this._ver++;
  }

  snapshot(): OrderLineSnapshot {
    return { id:String(this.id), lineNumber:this._ln, productId:this.productId,
      skuSnapshot:this.skuSnapshot, descriptionSnapshot:this.descSnapshot,
      quantityOrdered:this._qtyOrd.toString(), quantityConfirmed:this._qtyConf.toString(),
      quantityProduced:this._qtyProd.toString(), quantityCancelled:this._qtyCanc.toString(),
      unitPrice:this._price.toString(), lineTotalOriginal:this._total.toString(), version:this._ver };
  }
  static rehydrate(s: OrderLineSnapshot): OrderLine {
    return new OrderLine(createEntityId(s.id), s.lineNumber, s.productId, s.skuSnapshot,
      s.descriptionSnapshot, toDec(s.quantityOrdered,SCALE_QTY), toDec(s.quantityConfirmed,SCALE_QTY),
      toDec(s.quantityProduced,SCALE_QTY), toDec(s.quantityCancelled,SCALE_QTY),
      toDec(s.unitPrice,SCALE_PRICE), toDec(s.lineTotalOriginal,SCALE_MONEY), s.version);
  }
}

function checkVer(order: InternationalOrder, e?: number): void {
  if (e !== undefined && e !== order._ver) throw new OrderValidationError(`Version mismatch: expected ${e}, current ${order._ver}`);
}

export interface InternationalOrderSnapshot {
  id: string; organizationId: string; code: string; operationType: string;
  status: string; previousStatus: string|null; supplierPartyId: string;
  exporterPartyId: string|null; manufacturerPartyId: string|null;
  incoterm: string|null; paymentTerms: string|null; originCountry: string|null;
  currencyCode: string|null; expectedReadyDate: string|null;
  responsibleUserId: string|null; subtotalOriginal: string|null;
  fxRate: string|null; fxRateDate: string|null; fxSource: string|null;
  subtotalFunctional: string|null; idempotencyKey: string|null;
  version: number; createdBy: string;
  cancelledAt: string|null; cancelledBy: string|null; cancelReason: string|null;
  suspendedAt: string|null; suspendedBy: string|null; suspendReason: string|null;
  resumedAt: string|null; lines: OrderLineSnapshot[];
  createdAt: string; updatedAt: string;
}

export class InternationalOrder {
  private _evts: InternationalOrderDomainEvent[] = [];
  private _lines: OrderLine[] = [];
  constructor(
    readonly id: EntityId, readonly orgId: string, readonly code: string,
    private _opType: OperationType, private _status: OrderStatus, private _prev: OrderStatus|null,
    private _sup: string, private _exp: string|null, private _mfr: string|null,
    private _inc: string|null, private _pay: string|null, private _orig: string|null,
    private _cur: string|null, private _ready: string|null, private _resp: string|null,
    private _sub: Decimal|null, private _fxR: Decimal|null, private _fxD: Date|null,
    private _fxS: string|null, private _subF: Decimal|null,
    readonly idemKey: string|null, public _ver: number, readonly createdBy: string,
    private _cAt: Date|null, private _cBy: string|null, private _cR: string|null,
    private _sAt: Date|null, private _sBy: string|null, private _sR: string|null,
    private _resAt: Date|null, readonly createdAt: Date, private _upd: Date,
    lines: OrderLine[],
  ) { this._lines = lines; }

  get status(): OrderStatus { return this._status; }
  get operationType(): OperationType { return this._opType; }
  get supplierPartyId(): string { return this._sup; }
  get incoterm(): string|null { return this._inc; }
  get paymentTerms(): string|null { return this._pay; }
  get originCountry(): string|null { return this._orig; }
  get currencyCode(): string|null { return this._cur; }
  get expectedReadyDate(): string|null { return this._ready; }
  get responsibleUserId(): string|null { return this._resp; }
  get lines(): readonly OrderLine[] { return this._lines; }
  get version(): number { return this._ver; }
  get previousStatus(): OrderStatus|null { return this._prev; }
  get exporterPartyId(): string|null { return this._exp; }
  get manufacturerPartyId(): string|null { return this._mfr; }

  pullEvents(): InternationalOrderDomainEvent[] { const e=this._evts; this._evts=[]; return e; }
  private push(e: InternationalOrderDomainEvent): void { this._evts.push(e); }
  private bump(): void { this._ver++; this._upd=new Date(); }
  private recalc(): void {
    let t=new Decimal(0); for(const l of this._lines) t=t.add(l.lineTotalOriginal); this._sub=t;
  }
  private getLn(n: number): OrderLine {
    const l=this._lines.find(x=>x.lineNumber===n); if(!l)throw new OrderValidationError(`Line ${n} not found`); return l;
  }
  private assertDraft(): void {
    if(this._status!==OrderStatus.DRAFT) throw new OrderValidationError(`Order not in DRAFT (${this._status})`);
  }

  static create(cmd: CreateInternationalOrderCommand): InternationalOrder {
    validateCreateOrder({ operationType: cmd.operationType });
    const now=new Date(); const id=cmd.id?createEntityId(cmd.id):generateEntityId();
    const o=new InternationalOrder(id, cmd.organizationId??"org_001", "", cmd.operationType as OperationType,
      OrderStatus.DRAFT, null, cmd.supplierPartyId, cmd.exporterPartyId??null,
      cmd.manufacturerPartyId??null, cmd.incoterm??null, cmd.paymentTerms??null,
      cmd.originCountry??null, cmd.currencyCode??null, cmd.expectedReadyDate??null,
      cmd.responsibleUserId??null, null, null, null, null, null,
      cmd.idempotencyKey??null, 0, cmd.createdBy, null,null,null,null,null,null,null,
      now,now,[]);
    o.push(orderCreatedEvent(id, {orgId:o.orgId, opType:o._opType, supplierId:o._sup, idemKey:cmd.idempotencyKey??null}));
    return o;
  }

  addLine(c: AddOrderLineCommand): OrderLine {
    this.assertDraft();
    const mx=this._lines.length===0?0:Math.max(...this._lines.map(l=>l.lineNumber));
    const q=toDec(c.quantity,SCALE_QTY); const p=toDec(c.unitPrice,SCALE_PRICE);
    const l=new OrderLine(generateEntityId(),mx+1,c.productId,c.sku,c.description??null,
      q,q,new Decimal(0),new Decimal(0),p,q.multiply(p).round(SCALE_MONEY),0);
    this._lines.push(l); this.bump(); this.recalc(); this.push(orderLineAddedEvent(this.id,l.snapshot())); return l;
  }

  updateLine(n: number, c: UpdateOrderLineCommand): OrderLine {
    this.assertDraft(); const l=this.getLn(n); l.update(c.quantity??l.quantityOrdered.toString(),c.unitPrice??l.unitPrice.toString());
    this.bump(); this.recalc(); this.push(orderLineUpdatedEvent(this.id,l.snapshot())); return l;
  }

  cancelLine(n: number): OrderLine {
    this.assertDraft(); const l=this.getLn(n); l.cancel();
    this.bump(); this.recalc(); this.push(orderLineCancelledEvent(this.id,l.snapshot())); return l;
  }

  update(c: UpdateInternationalOrderCommand): void {
    this.assertDraft();
    if(c.incoterm!==undefined)this._inc=c.incoterm; if(c.paymentTerms!==undefined)this._pay=c.paymentTerms;
    if(c.originCountry!==undefined)this._orig=c.originCountry; if(c.currencyCode!==undefined)this._cur=c.currencyCode;
    if(c.expectedReadyDate!==undefined)this._ready=c.expectedReadyDate;
    if(c.responsibleUserId!==undefined)this._resp=c.responsibleUserId;
    if(c.supplierPartyId!==undefined)this._sup=c.supplierPartyId;
    if(c.exporterPartyId!==undefined)this._exp=c.exporterPartyId;
    if(c.manufacturerPartyId!==undefined)this._mfr=c.manufacturerPartyId;
    this.bump(); this.push(orderUpdatedEvent(this.id));
  }

  submit(ev: number): void {
    checkVer(this,ev); assertTransition(this._status,OrderStatus.PENDING_APPROVAL);
    const errs=validateApprovalReady({operationType:this._opType,supplierPartyId:this._sup,incoterm:this._inc,
      paymentTerms:this._pay,originCountry:this._orig,currencyCode:this._cur,expectedReadyDate:this._ready,
      responsibleUserId:this._resp,hasLines:this._lines.some(l=>l.openBalance.isPositive())});
    if(errs.length>0)throw new OrderValidationError(`Submit blocked: ${errs.join("; ")}`);
    const f=this._status; this._status=OrderStatus.PENDING_APPROVAL; this.bump(); this.push(orderSubmittedEvent(this.id,f));
  }

  approve(actor: string, ev: number): void {
    checkVer(this,ev); assertTransition(this._status,OrderStatus.APPROVED);
    if(actor===this.createdBy)throw new OrderValidationError("SOD_VIOLATION: creator cannot approve own order");
    const errs=validateApprovalReady({operationType:this._opType,supplierPartyId:this._sup,incoterm:this._inc,
      paymentTerms:this._pay,originCountry:this._orig,currencyCode:this._cur,expectedReadyDate:this._ready,
      responsibleUserId:this._resp,hasLines:this._lines.some(l=>l.openBalance.isPositive())});
    if(errs.length>0)throw new OrderValidationError(`Approve blocked: ${errs.join("; ")}`);
    this._status=OrderStatus.APPROVED; this.bump(); this.push(orderApprovedEvent(this.id,actor));
  }

  reject(reason: string, ev: number): void {
    checkVer(this,ev); assertTransition(this._status,OrderStatus.DRAFT);
    this._status=OrderStatus.DRAFT; this.bump(); this.push(orderRejectedEvent(this.id,reason));
  }

  send(ev: number): void {
    checkVer(this,ev); assertTransition(this._status,OrderStatus.ORDER_SENT);
    this._status=OrderStatus.ORDER_SENT; this.bump(); this.push(orderSentEvent(this.id));
  }

  confirmProforma(ev: number): void {
    checkVer(this,ev); assertTransition(this._status,OrderStatus.PROFORMA_CONFIRMED);
    this._status=OrderStatus.PROFORMA_CONFIRMED; this.bump(); this.push(orderProformaConfirmedEvent(this.id));
  }

  startProduction(ev: number): void {
    checkVer(this,ev); assertTransition(this._status,OrderStatus.IN_PRODUCTION);
    this._status=OrderStatus.IN_PRODUCTION; this.bump(); this.push(orderProductionStartedEvent(this.id));
  }

  productionProgress(c: ProductionProgressCommand): void {
    checkVer(this,c.expectedVersion);
    if(this._status!==OrderStatus.IN_PRODUCTION)throw new OrderValidationError(`production requires IN_PRODUCTION (${this._status})`);
    for(const u of c.lines)this.getLn(u.lineNumber).produce(u.quantityProduced);
    this.bump(); this.push(orderProductionUpdatedEvent(this.id,this._lines.map(l=>l.snapshot())));
  }

  readyToShip(ev: number): void {
    checkVer(this,ev); assertTransition(this._status,OrderStatus.READY_TO_SHIP);
    const inc=this._lines.some(l=>!l.pendingProduction.isZero());
    if(inc)throw new OrderValidationError("All lines must be fully produced. Use override for partial.");
    this._status=OrderStatus.READY_TO_SHIP; this.bump(); this.push(orderReadyToShipEvent(this.id));
  }

  suspend(reason: string, ev: number): void {
    checkVer(this,ev); if(!canSuspend(this._status))throw new OrderValidationError(`Cannot suspend ${this._status}`);
    this._prev=this._status; this._status=OrderStatus.SUSPENDED;
    this._sAt=new Date(); this._sR=reason; this.bump();
    this.push(orderSuspendedEvent(this.id,reason,this._prev));
  }

  resume(ev: number): void {
    checkVer(this,ev);
    if(this._status!==OrderStatus.SUSPENDED||!this._prev)throw new OrderValidationError("Cannot resume");
    const t=this._prev; this._status=t; this._prev=null; this._resAt=new Date(); this.bump();
    this.push(orderResumedEvent(this.id,t));
  }

  cancel(reason: string, ev: number): void {
    checkVer(this,ev); if(this._status===OrderStatus.CANCELLED)return;
    const f=this._status; for(const l of this._lines)l.cancel();
    this._status=OrderStatus.CANCELLED; this._cAt=new Date(); this._cR=reason; this.bump();
    this.push(orderCancelledEvent(this.id,f,reason));
  }

  snapshot(): InternationalOrderSnapshot {
    return {id:String(this.id),organizationId:this.orgId,code:this.code,operationType:this._opType,
      status:this._status,previousStatus:this._prev,supplierPartyId:this._sup,
      exporterPartyId:this._exp,manufacturerPartyId:this._mfr,incoterm:this._inc,
      paymentTerms:this._pay,originCountry:this._orig,currencyCode:this._cur,
      expectedReadyDate:this._ready,responsibleUserId:this._resp,
      subtotalOriginal:this._sub?.toString()??null,fxRate:this._fxR?.toString()??null,
      fxRateDate:this._fxD?.toISOString()??null,fxSource:this._fxS,
      subtotalFunctional:this._subF?.toString()??null,idempotencyKey:this.idemKey,
      version:this._ver,createdBy:this.createdBy,
      cancelledAt:this._cAt?.toISOString()??null,cancelledBy:this._cBy,cancelReason:this._cR,
      suspendedAt:this._sAt?.toISOString()??null,suspendedBy:this._sBy,suspendReason:this._sR,
      resumedAt:this._resAt?.toISOString()??null,
      lines:this._lines.map(l=>l.snapshot()),createdAt:this.createdAt.toISOString(),
      updatedAt:this._upd.toISOString()};
  }

  static rehydrate(s: InternationalOrderSnapshot): InternationalOrder {
    return new InternationalOrder(createEntityId(s.id),s.organizationId,s.code,s.operationType as OperationType,
      s.status as OrderStatus,s.previousStatus as OrderStatus|null,s.supplierPartyId,
      s.exporterPartyId,s.manufacturerPartyId,s.incoterm,s.paymentTerms,s.originCountry,
      s.currencyCode,s.expectedReadyDate,s.responsibleUserId,
      s.subtotalOriginal?new Decimal(s.subtotalOriginal):null,
      s.fxRate?new Decimal(s.fxRate):null,s.fxRateDate?new Date(s.fxRateDate):null,
      s.fxSource,s.subtotalFunctional?new Decimal(s.subtotalFunctional):null,
      s.idempotencyKey,s.version,s.createdBy,
      s.cancelledAt?new Date(s.cancelledAt):null,s.cancelledBy,s.cancelReason,
      s.suspendedAt?new Date(s.suspendedAt):null,s.suspendedBy,s.suspendReason,
      s.resumedAt?new Date(s.resumedAt):null,new Date(s.createdAt),new Date(s.updatedAt),
      s.lines.map(l=>OrderLine.rehydrate(l)));
  }
}
