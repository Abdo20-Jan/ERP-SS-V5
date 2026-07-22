import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import { OrderValidationError } from "../common/errors";
import { ProformaStatus } from "./international-order.enums";

export interface ProformaVersionSnapshot {
  id: string; orderId: string; organizationId: string; supplierPartyId: string;
  proformaNumber: string; versionNumber: number; issueDate: string|null;
  totalAmount: string|null; currencyCode: string|null; status: string;
  createdBy: string|null; confirmedBy: string|null; confirmedAt: string|null;
  correlationId: string|null; createdAt: string;
}

export class ProformaVersion {
  private constructor(
    readonly id: EntityId, readonly orderId: string, readonly orgId: string,
    readonly supplierId: string, readonly proformaNumber: string,
    readonly versionNumber: number, readonly issueDate: string|null,
    private _total: string|null, private _currency: string|null,
    private _status: ProformaStatus, readonly createdBy: string|null,
    private _confirmedBy: string|null, private _confirmedAt: Date|null,
    readonly correlationId: string|null, readonly createdAt: Date,
  ) {}
  get status(): ProformaStatus { return this._status; }

  static create(p: {
    orderId: string; organizationId: string; supplierPartyId: string;
    proformaNumber: string; versionNumber: number; issueDate?: string|null;
    totalAmount?: string|null; currencyCode?: string|null; createdBy?: string;
    correlationId?: string;
  }): ProformaVersion {
    return new ProformaVersion(generateEntityId(),p.orderId,p.organizationId,p.supplierPartyId,
      p.proformaNumber,p.versionNumber,p.issueDate??null,p.totalAmount??null,p.currencyCode??null,
      ProformaStatus.REGISTERED,p.createdBy??null,null,null,p.correlationId??null,new Date());
  }

  confirm(by: string): void {
    if(this._status===ProformaStatus.CONFIRMED)return;
    this._status=ProformaStatus.CONFIRMED; this._confirmedBy=by; this._confirmedAt=new Date();
  }
  supersede(): void { this._status=ProformaStatus.SUPERSEDED; }

  snapshot(): ProformaVersionSnapshot {
    return {id:String(this.id),orderId:this.orderId,organizationId:this.orgId,
      supplierPartyId:this.supplierId,proformaNumber:this.proformaNumber,
      versionNumber:this.versionNumber,issueDate:this.issueDate,totalAmount:this._total,
      currencyCode:this._currency,status:this._status,createdBy:this.createdBy,
      confirmedBy:this._confirmedBy,confirmedAt:this._confirmedAt?.toISOString()??null,
      correlationId:this.correlationId,createdAt:this.createdAt.toISOString()};
  }

  static rehydrate(s: ProformaVersionSnapshot): ProformaVersion {
    return new ProformaVersion(createEntityId(s.id),s.orderId,s.organizationId,s.supplierPartyId,
      s.proformaNumber,s.versionNumber,s.issueDate,s.totalAmount,s.currencyCode,
      s.status as ProformaStatus,s.createdBy,s.confirmedBy,
      s.confirmedAt?new Date(s.confirmedAt):null,s.correlationId,new Date(s.createdAt));
  }
}
