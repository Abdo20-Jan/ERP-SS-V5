import type { OrderStatus, OperationType } from "./international-order.enums";

export interface CreateInternationalOrderCommand {
  id?: string;
  organizationId?: string;
  operationType: OperationType | string;
  supplierPartyId: string;
  exporterPartyId?: string | null;
  manufacturerPartyId?: string | null;
  incoterm?: string | null;
  paymentTerms?: string | null;
  originCountry?: string | null;
  currencyCode?: string | null;
  expectedReadyDate?: string | null;
  responsibleUserId?: string | null;
  createdBy: string;
  idempotencyKey?: string;
}

export interface UpdateInternationalOrderCommand {
  incoterm?: string | null;
  paymentTerms?: string | null;
  originCountry?: string | null;
  currencyCode?: string | null;
  expectedReadyDate?: string | null;
  responsibleUserId?: string | null;
  supplierPartyId?: string;
  exporterPartyId?: string | null;
  manufacturerPartyId?: string | null;
  expectedVersion: number;
}

export interface AddOrderLineCommand {
  productId: string;
  sku: string;
  description?: string | null;
  quantity: string | number;
  unitPrice: string | number;
  expectedVersion?: number;
}

export interface UpdateOrderLineCommand {
  quantity?: string | number;
  unitPrice?: string | number;
  expectedLineVersion: number;
}

export interface ProductionUpdateCommand {
  lineNumber: number;
  quantityProduced: string | number;
}

export interface SubmitOrderCommand {
  expectedVersion: number;
}

export interface ApproveOrderCommand {
  actorUserId: string;
  expectedVersion: number;
}

export interface SendOrderCommand {
  expectedVersion: number;
}

export interface ProductionProgressCommand {
  lines: ProductionUpdateCommand[];
  expectedVersion: number;
}

export interface TransitionCommand {
  reason?: string;
  expectedVersion: number;
  idempotencyKey?: string;
}

export interface SuspendCommand extends TransitionCommand {}
export interface ResumeCommand extends TransitionCommand {}
export interface CancelCommand extends TransitionCommand {}
export interface ReadyToShipCommand extends TransitionCommand {}
