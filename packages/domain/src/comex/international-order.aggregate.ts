import { Decimal } from "../common/decimal.vo";
import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import { OrderConcurrencyError, OrderValidationError } from "../common/errors";
import type { InternationalOrderDomainEvent, OrderLineSnapshot } from "./international-order.events";
import {
  orderApprovedEvent,
  orderCancelledEvent,
  orderCreatedEvent,
  orderLineAddedEvent,
  orderLineCancelledEvent,
  orderLineUpdatedEvent,
  orderProductionStartedEvent,
  orderProductionUpdatedEvent,
  orderProformaConfirmedEvent,
  orderReadyToShipEvent,
  orderRejectedEvent,
  orderResumedEvent,
  orderSentEvent,
  orderSubmittedEvent,
  orderSuspendedEvent,
  orderUpdatedEvent,
} from "./international-order.events";
import { OrderStatus, type OperationType } from "./international-order.enums";
import { assertTransition, canSuspend } from "./international-order.state-machine";
import { validateApprovalReady, validateCreateOrder } from "./international-order.validator";
import type {
  AddOrderLineCommand,
  CancelOrderLineCommand,
  CreateInternationalOrderCommand,
  ProductionProgressCommand,
  UpdateInternationalOrderCommand,
  UpdateOrderLineCommand,
} from "./international-order.commands";

const SCALE_QTY = 3;
const SCALE_PRICE = 4;
const SCALE_MONEY = 2;

function toDecimal(value: string, scale: number, field: string): Decimal {
  if (typeof value !== "string" || value.trim() === "") {
    throw new OrderValidationError(`${field} must be a decimal string`);
  }
  let decimal: Decimal;
  try {
    decimal = new Decimal(value.trim());
  } catch {
    throw new OrderValidationError(`${field} is not a valid decimal`);
  }
  if (decimal.unwrap().decimalPlaces() > scale) {
    throw new OrderValidationError(`${field} supports at most ${scale} decimal places`);
  }
  return decimal;
}

class OrderLine {
  constructor(
    readonly id: EntityId,
    private _lineNumber: number,
    readonly productId: string,
    readonly skuSnapshot: string,
    readonly descriptionSnapshot: string | null,
    private _quantityOrdered: Decimal,
    private _quantityConfirmed: Decimal,
    private _quantityProduced: Decimal,
    private _quantityCancelled: Decimal,
    private _unitPrice: Decimal,
    private _lineTotalOriginal: Decimal,
    private _version: number,
  ) {}

  get lineNumber(): number { return this._lineNumber; }
  get quantityOrdered(): Decimal { return this._quantityOrdered; }
  get quantityConfirmed(): Decimal { return this._quantityConfirmed; }
  get quantityProduced(): Decimal { return this._quantityProduced; }
  get quantityCancelled(): Decimal { return this._quantityCancelled; }
  get unitPrice(): Decimal { return this._unitPrice; }
  get lineTotalOriginal(): Decimal { return this._lineTotalOriginal; }
  get version(): number { return this._version; }
  get openBalance(): Decimal { return this._quantityOrdered.subtract(this._quantityCancelled); }
  get pendingProduction(): Decimal {
    return this._quantityConfirmed.subtract(this._quantityProduced).subtract(this._quantityCancelled);
  }

  private assertVersion(expected: number): void {
    if (expected !== this._version) {
      throw new OrderConcurrencyError(
        `Line version mismatch: expected ${expected}, current ${this._version}`,
        { lineNumber: this._lineNumber, expectedVersion: expected, currentVersion: this._version },
      );
    }
  }

  update(quantity: string, unitPrice: string, expectedVersion: number): void {
    this.assertVersion(expectedVersion);
    const nextQuantity = toDecimal(quantity, SCALE_QTY, "quantity");
    const nextPrice = toDecimal(unitPrice, SCALE_PRICE, "unitPrice");
    if (!nextQuantity.isPositive()) throw new OrderValidationError("quantity must be greater than zero");
    if (nextPrice.isNegative()) throw new OrderValidationError("unitPrice must be greater than or equal to zero");
    if (nextQuantity.lessThan(this._quantityProduced.add(this._quantityCancelled))) {
      throw new OrderValidationError("quantity cannot be lower than produced plus cancelled quantity");
    }
    this._quantityOrdered = nextQuantity;
    this._quantityConfirmed = nextQuantity;
    this._unitPrice = nextPrice;
    this._lineTotalOriginal = nextQuantity.multiply(nextPrice).round(SCALE_MONEY);
    this._version += 1;
  }

  produce(additional: string): void {
    const quantity = toDecimal(additional, SCALE_QTY, "quantityProduced");
    if (!quantity.isPositive()) throw new OrderValidationError("quantityProduced must be greater than zero");
    const nextProduced = this._quantityProduced.add(quantity);
    const maximum = this._quantityConfirmed.subtract(this._quantityCancelled);
    if (nextProduced.greaterThan(maximum)) {
      throw new OrderValidationError(`produced ${nextProduced.toString()} exceeds maximum ${maximum.toString()}`);
    }
    this._quantityProduced = nextProduced;
    this._version += 1;
  }

  cancel(expectedVersion?: number): void {
    if (expectedVersion !== undefined) this.assertVersion(expectedVersion);
    const remaining = this._quantityConfirmed
      .subtract(this._quantityProduced)
      .subtract(this._quantityCancelled);
    if (!remaining.isPositive()) return;
    this._quantityCancelled = this._quantityCancelled.add(remaining);
    this._version += 1;
  }

  snapshot(): OrderLineSnapshot {
    return {
      id: String(this.id),
      lineNumber: this._lineNumber,
      productId: this.productId,
      skuSnapshot: this.skuSnapshot,
      descriptionSnapshot: this.descriptionSnapshot,
      quantityOrdered: this._quantityOrdered.toString(),
      quantityConfirmed: this._quantityConfirmed.toString(),
      quantityProduced: this._quantityProduced.toString(),
      quantityCancelled: this._quantityCancelled.toString(),
      unitPrice: this._unitPrice.toString(),
      lineTotalOriginal: this._lineTotalOriginal.toString(),
      version: this._version,
    };
  }

  static rehydrate(snapshot: OrderLineSnapshot): OrderLine {
    return new OrderLine(
      createEntityId(snapshot.id),
      snapshot.lineNumber,
      snapshot.productId,
      snapshot.skuSnapshot,
      snapshot.descriptionSnapshot,
      toDecimal(snapshot.quantityOrdered, SCALE_QTY, "quantityOrdered"),
      toDecimal(snapshot.quantityConfirmed, SCALE_QTY, "quantityConfirmed"),
      toDecimal(snapshot.quantityProduced, SCALE_QTY, "quantityProduced"),
      toDecimal(snapshot.quantityCancelled, SCALE_QTY, "quantityCancelled"),
      toDecimal(snapshot.unitPrice, SCALE_PRICE, "unitPrice"),
      toDecimal(snapshot.lineTotalOriginal, SCALE_MONEY, "lineTotalOriginal"),
      snapshot.version,
    );
  }
}

export interface InternationalOrderSnapshot {
  id: string;
  organizationId: string;
  code: string;
  operationType: string;
  status: string;
  previousStatus: string | null;
  supplierPartyId: string;
  exporterPartyId: string | null;
  manufacturerPartyId: string | null;
  incoterm: string | null;
  paymentTerms: string | null;
  originCountry: string | null;
  currencyCode: string | null;
  expectedReadyDate: string | null;
  responsibleUserId: string | null;
  subtotalOriginal: string | null;
  fxRate: string | null;
  fxRateDate: string | null;
  fxSource: string | null;
  subtotalFunctional: string | null;
  idempotencyKey: string | null;
  idempotencyPayloadHash: string | null;
  version: number;
  createdBy: string;
  cancelledAt: string | null;
  cancelledBy: string | null;
  cancelReason: string | null;
  suspendedAt: string | null;
  suspendedBy: string | null;
  suspendReason: string | null;
  resumedAt: string | null;
  lines: OrderLineSnapshot[];
  createdAt: string;
  updatedAt: string;
}

function assertVersion(order: InternationalOrder, expected: number): void {
  if (expected !== order._version) {
    throw new OrderConcurrencyError(
      `Version mismatch: expected ${expected}, current ${order._version}`,
      { orderId: String(order.id), expectedVersion: expected, currentVersion: order._version },
    );
  }
}

export class InternationalOrder {
  private events: InternationalOrderDomainEvent[] = [];
  private orderLines: OrderLine[];

  private constructor(
    readonly id: EntityId,
    readonly orgId: string,
    readonly code: string,
    private operation: OperationType,
    private currentStatus: OrderStatus,
    private priorStatus: OrderStatus | null,
    private supplierId: string,
    private exporterId: string | null,
    private manufacturerId: string | null,
    private currentIncoterm: string | null,
    private currentPaymentTerms: string | null,
    private origin: string | null,
    private currency: string | null,
    private readyDate: string | null,
    private responsibleId: string | null,
    private subtotal: Decimal | null,
    private exchangeRate: Decimal | null,
    private exchangeRateDate: Date | null,
    private exchangeRateSource: string | null,
    private functionalSubtotal: Decimal | null,
    readonly idemKey: string | null,
    readonly idemPayloadHash: string | null,
    public _version: number,
    readonly createdBy: string,
    private cancelledAt: Date | null,
    private cancelledBy: string | null,
    private cancelReason: string | null,
    private suspendedAt: Date | null,
    private suspendedBy: string | null,
    private suspendReason: string | null,
    private resumedAt: Date | null,
    readonly createdAt: Date,
    private updatedAt: Date,
    lines: OrderLine[],
  ) {
    this.orderLines = lines;
  }

  get status(): OrderStatus { return this.currentStatus; }
  get operationType(): OperationType { return this.operation; }
  get supplierPartyId(): string { return this.supplierId; }
  get incoterm(): string | null { return this.currentIncoterm; }
  get paymentTerms(): string | null { return this.currentPaymentTerms; }
  get originCountry(): string | null { return this.origin; }
  get currencyCode(): string | null { return this.currency; }
  get expectedReadyDate(): string | null { return this.readyDate; }
  get responsibleUserId(): string | null { return this.responsibleId; }
  get lines(): readonly OrderLine[] { return this.orderLines; }
  get version(): number { return this._version; }
  get previousStatus(): OrderStatus | null { return this.priorStatus; }
  get exporterPartyId(): string | null { return this.exporterId; }
  get manufacturerPartyId(): string | null { return this.manufacturerId; }

  pullEvents(): InternationalOrderDomainEvent[] {
    const pending = [...this.events];
    this.events = [];
    return pending;
  }

  private push(event: InternationalOrderDomainEvent): void {
    event.organizationId = this.orgId;
    event.aggregateVersion = this._version;
    this.events.push(event);
  }

  private bump(): void {
    this._version += 1;
    this.updatedAt = new Date();
  }

  private recalculate(): void {
    let total = new Decimal("0");
    for (const line of this.orderLines) total = total.add(line.lineTotalOriginal);
    this.subtotal = total.round(SCALE_MONEY);
  }

  private line(number: number): OrderLine {
    const found = this.orderLines.find((item) => item.lineNumber === number);
    if (!found) throw new OrderValidationError(`Line ${number} not found`);
    return found;
  }

  private assertDraft(): void {
    if (this.currentStatus !== OrderStatus.DRAFT) {
      throw new OrderValidationError(`Order not in DRAFT (${this.currentStatus})`);
    }
  }

  static create(command: CreateInternationalOrderCommand): InternationalOrder {
    validateCreateOrder({ operationType: command.operationType });
    if (!command.organizationId.trim()) throw new OrderValidationError("organizationId is required");
    if (!command.code.trim()) throw new OrderValidationError("code is required");
    const now = new Date();
    const id = command.id ? createEntityId(command.id) : generateEntityId();
    const order = new InternationalOrder(
      id,
      command.organizationId.trim(),
      command.code.trim(),
      command.operationType as OperationType,
      OrderStatus.DRAFT,
      null,
      command.supplierPartyId,
      command.exporterPartyId ?? null,
      command.manufacturerPartyId ?? null,
      command.incoterm ?? null,
      command.paymentTerms ?? null,
      command.originCountry ?? null,
      command.currencyCode ?? null,
      command.expectedReadyDate ?? null,
      command.responsibleUserId ?? null,
      null,
      null,
      null,
      null,
      null,
      command.idempotencyKey ?? null,
      command.idempotencyPayloadHash ?? null,
      0,
      command.createdBy,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      now,
      now,
      [],
    );
    order.push(orderCreatedEvent(id, {
      organizationId: order.orgId,
      operationType: order.operation,
      supplierPartyId: order.supplierId,
      code: order.code,
    }));
    return order;
  }

  addLine(command: AddOrderLineCommand): OrderLine {
    this.assertDraft();
    assertVersion(this, command.expectedVersion);
    const quantity = toDecimal(command.quantity, SCALE_QTY, "quantity");
    const price = toDecimal(command.unitPrice, SCALE_PRICE, "unitPrice");
    if (!quantity.isPositive()) throw new OrderValidationError("quantity must be greater than zero");
    if (price.isNegative()) throw new OrderValidationError("unitPrice must be greater than or equal to zero");
    const max = this.orderLines.length === 0 ? 0 : Math.max(...this.orderLines.map((item) => item.lineNumber));
    const line = new OrderLine(
      generateEntityId(),
      max + 1,
      command.productId,
      command.sku,
      command.description ?? null,
      quantity,
      quantity,
      new Decimal("0"),
      new Decimal("0"),
      price,
      quantity.multiply(price).round(SCALE_MONEY),
      0,
    );
    this.orderLines.push(line);
    this.bump();
    this.recalculate();
    this.push(orderLineAddedEvent(this.id, line.snapshot()));
    return line;
  }

  updateLine(number: number, command: UpdateOrderLineCommand): OrderLine {
    this.assertDraft();
    assertVersion(this, command.expectedVersion);
    const line = this.line(number);
    line.update(
      command.quantity ?? line.quantityOrdered.toString(),
      command.unitPrice ?? line.unitPrice.toString(),
      command.expectedLineVersion,
    );
    this.bump();
    this.recalculate();
    this.push(orderLineUpdatedEvent(this.id, line.snapshot()));
    return line;
  }

  cancelLine(number: number, command: CancelOrderLineCommand): OrderLine {
    this.assertDraft();
    assertVersion(this, command.expectedVersion);
    const line = this.line(number);
    line.cancel(command.expectedLineVersion);
    this.bump();
    this.recalculate();
    this.push(orderLineCancelledEvent(this.id, line.snapshot()));
    return line;
  }

  update(command: UpdateInternationalOrderCommand): void {
    this.assertDraft();
    assertVersion(this, command.expectedVersion);
    if (command.incoterm !== undefined) this.currentIncoterm = command.incoterm;
    if (command.paymentTerms !== undefined) this.currentPaymentTerms = command.paymentTerms;
    if (command.originCountry !== undefined) this.origin = command.originCountry;
    if (command.currencyCode !== undefined) this.currency = command.currencyCode;
    if (command.expectedReadyDate !== undefined) this.readyDate = command.expectedReadyDate;
    if (command.responsibleUserId !== undefined) this.responsibleId = command.responsibleUserId;
    if (command.supplierPartyId !== undefined) this.supplierId = command.supplierPartyId;
    if (command.exporterPartyId !== undefined) this.exporterId = command.exporterPartyId;
    if (command.manufacturerPartyId !== undefined) this.manufacturerId = command.manufacturerPartyId;
    this.bump();
    this.push(orderUpdatedEvent(this.id));
  }

  submit(expectedVersion: number): void {
    assertVersion(this, expectedVersion);
    assertTransition(this.currentStatus, OrderStatus.PENDING_APPROVAL);
    const errors = validateApprovalReady({
      operationType: this.operation,
      supplierPartyId: this.supplierId,
      incoterm: this.currentIncoterm,
      paymentTerms: this.currentPaymentTerms,
      originCountry: this.origin,
      currencyCode: this.currency,
      expectedReadyDate: this.readyDate,
      responsibleUserId: this.responsibleId,
      hasLines: this.orderLines.some((line) => line.openBalance.isPositive()),
    });
    if (errors.length > 0) throw new OrderValidationError(`Submit blocked: ${errors.join("; ")}`);
    const from = this.currentStatus;
    this.currentStatus = OrderStatus.PENDING_APPROVAL;
    this.bump();
    this.push(orderSubmittedEvent(this.id, from));
  }

  approve(actor: string, expectedVersion: number): void {
    assertVersion(this, expectedVersion);
    assertTransition(this.currentStatus, OrderStatus.APPROVED);
    if (actor === this.createdBy) throw new OrderValidationError("SOD_VIOLATION: creator cannot approve own order");
    this.currentStatus = OrderStatus.APPROVED;
    this.bump();
    this.push(orderApprovedEvent(this.id, actor));
  }

  reject(reason: string, expectedVersion: number): void {
    assertVersion(this, expectedVersion);
    assertTransition(this.currentStatus, OrderStatus.DRAFT);
    this.currentStatus = OrderStatus.DRAFT;
    this.bump();
    this.push(orderRejectedEvent(this.id, reason));
  }

  send(expectedVersion: number): void {
    assertVersion(this, expectedVersion);
    assertTransition(this.currentStatus, OrderStatus.ORDER_SENT);
    this.currentStatus = OrderStatus.ORDER_SENT;
    this.bump();
    this.push(orderSentEvent(this.id));
  }

  confirmProforma(expectedVersion: number, proformaVersion?: number): void {
    assertVersion(this, expectedVersion);
    assertTransition(this.currentStatus, OrderStatus.PROFORMA_CONFIRMED);
    this.currentStatus = OrderStatus.PROFORMA_CONFIRMED;
    this.bump();
    this.push(orderProformaConfirmedEvent(this.id, proformaVersion));
  }

  startProduction(expectedVersion: number): void {
    assertVersion(this, expectedVersion);
    assertTransition(this.currentStatus, OrderStatus.IN_PRODUCTION);
    this.currentStatus = OrderStatus.IN_PRODUCTION;
    this.bump();
    this.push(orderProductionStartedEvent(this.id));
  }

  productionProgress(command: ProductionProgressCommand): void {
    assertVersion(this, command.expectedVersion);
    if (this.currentStatus !== OrderStatus.IN_PRODUCTION) {
      throw new OrderValidationError(`production requires IN_PRODUCTION (${this.currentStatus})`);
    }
    for (const update of command.lines) this.line(update.lineNumber).produce(update.quantityProduced);
    this.bump();
    this.push(orderProductionUpdatedEvent(this.id, this.orderLines.map((line) => line.snapshot())));
  }

  readyToShip(expectedVersion: number): void {
    assertVersion(this, expectedVersion);
    assertTransition(this.currentStatus, OrderStatus.READY_TO_SHIP);
    if (this.orderLines.some((line) => !line.pendingProduction.isZero())) {
      throw new OrderValidationError("All lines must be fully produced. Use approved override for partial shipment.");
    }
    this.currentStatus = OrderStatus.READY_TO_SHIP;
    this.bump();
    this.push(orderReadyToShipEvent(this.id));
  }

  readyToShipWithOverride(expectedVersion: number, overrideRequestId: string): void {
    assertVersion(this, expectedVersion);
    assertTransition(this.currentStatus, OrderStatus.READY_TO_SHIP);
    const produced = this.orderLines.some((line) => line.quantityProduced.isPositive());
    if (!produced) throw new OrderValidationError("Partial shipment override requires produced quantity");
    this.currentStatus = OrderStatus.READY_TO_SHIP;
    this.bump();
    this.push(orderReadyToShipEvent(this.id, overrideRequestId));
  }

  suspend(reason: string, expectedVersion: number, actor: string): void {
    assertVersion(this, expectedVersion);
    if (!canSuspend(this.currentStatus)) throw new OrderValidationError(`Cannot suspend ${this.currentStatus}`);
    this.priorStatus = this.currentStatus;
    this.currentStatus = OrderStatus.SUSPENDED;
    this.suspendedAt = new Date();
    this.suspendedBy = actor;
    this.suspendReason = reason;
    this.bump();
    this.push(orderSuspendedEvent(this.id, reason, this.priorStatus));
  }

  resume(expectedVersion: number): void {
    assertVersion(this, expectedVersion);
    if (this.currentStatus !== OrderStatus.SUSPENDED || !this.priorStatus) {
      throw new OrderValidationError("Cannot resume order");
    }
    const target = this.priorStatus;
    this.currentStatus = target;
    this.priorStatus = null;
    this.resumedAt = new Date();
    this.bump();
    this.push(orderResumedEvent(this.id, target));
  }

  cancel(reason: string, expectedVersion: number, actor: string): void {
    assertVersion(this, expectedVersion);
    if (this.currentStatus === OrderStatus.CANCELLED) return;
    const from = this.currentStatus;
    for (const line of this.orderLines) line.cancel();
    this.currentStatus = OrderStatus.CANCELLED;
    this.cancelledAt = new Date();
    this.cancelledBy = actor;
    this.cancelReason = reason;
    this.bump();
    this.push(orderCancelledEvent(this.id, from, reason));
  }

  snapshot(): InternationalOrderSnapshot {
    return {
      id: String(this.id),
      organizationId: this.orgId,
      code: this.code,
      operationType: this.operation,
      status: this.currentStatus,
      previousStatus: this.priorStatus,
      supplierPartyId: this.supplierId,
      exporterPartyId: this.exporterId,
      manufacturerPartyId: this.manufacturerId,
      incoterm: this.currentIncoterm,
      paymentTerms: this.currentPaymentTerms,
      originCountry: this.origin,
      currencyCode: this.currency,
      expectedReadyDate: this.readyDate,
      responsibleUserId: this.responsibleId,
      subtotalOriginal: this.subtotal?.toString() ?? null,
      fxRate: this.exchangeRate?.toString() ?? null,
      fxRateDate: this.exchangeRateDate?.toISOString() ?? null,
      fxSource: this.exchangeRateSource,
      subtotalFunctional: this.functionalSubtotal?.toString() ?? null,
      idempotencyKey: this.idemKey,
      idempotencyPayloadHash: this.idemPayloadHash,
      version: this._version,
      createdBy: this.createdBy,
      cancelledAt: this.cancelledAt?.toISOString() ?? null,
      cancelledBy: this.cancelledBy,
      cancelReason: this.cancelReason,
      suspendedAt: this.suspendedAt?.toISOString() ?? null,
      suspendedBy: this.suspendedBy,
      suspendReason: this.suspendReason,
      resumedAt: this.resumedAt?.toISOString() ?? null,
      lines: this.orderLines.map((line) => line.snapshot()),
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
    };
  }

  static rehydrate(snapshot: InternationalOrderSnapshot): InternationalOrder {
    return new InternationalOrder(
      createEntityId(snapshot.id),
      snapshot.organizationId,
      snapshot.code,
      snapshot.operationType as OperationType,
      snapshot.status as OrderStatus,
      snapshot.previousStatus as OrderStatus | null,
      snapshot.supplierPartyId,
      snapshot.exporterPartyId,
      snapshot.manufacturerPartyId,
      snapshot.incoterm,
      snapshot.paymentTerms,
      snapshot.originCountry,
      snapshot.currencyCode,
      snapshot.expectedReadyDate,
      snapshot.responsibleUserId,
      snapshot.subtotalOriginal ? new Decimal(snapshot.subtotalOriginal) : null,
      snapshot.fxRate ? new Decimal(snapshot.fxRate) : null,
      snapshot.fxRateDate ? new Date(snapshot.fxRateDate) : null,
      snapshot.fxSource,
      snapshot.subtotalFunctional ? new Decimal(snapshot.subtotalFunctional) : null,
      snapshot.idempotencyKey,
      snapshot.idempotencyPayloadHash ?? null,
      snapshot.version,
      snapshot.createdBy,
      snapshot.cancelledAt ? new Date(snapshot.cancelledAt) : null,
      snapshot.cancelledBy,
      snapshot.cancelReason,
      snapshot.suspendedAt ? new Date(snapshot.suspendedAt) : null,
      snapshot.suspendedBy,
      snapshot.suspendReason,
      snapshot.resumedAt ? new Date(snapshot.resumedAt) : null,
      new Date(snapshot.createdAt),
      new Date(snapshot.updatedAt),
      snapshot.lines.map((line) => OrderLine.rehydrate(line)),
    );
  }
}
