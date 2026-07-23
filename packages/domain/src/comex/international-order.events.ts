import { generateEntityId, type EntityId } from "../common/entity-id";
import { OrderStatus } from "./international-order.enums";

export interface OrderLineSnapshot {
  id: string;
  lineNumber: number;
  productId: string;
  skuSnapshot: string;
  descriptionSnapshot: string | null;
  quantityOrdered: string;
  quantityConfirmed: string;
  quantityProduced: string;
  quantityCancelled: string;
  unitPrice: string;
  lineTotalOriginal: string;
  version: number;
}

export interface InternationalOrderDomainEvent {
  eventId: string;
  eventType: string;
  eventVersion: 1;
  orderId: string;
  organizationId?: string;
  aggregateVersion?: number;
  fromStatus?: string;
  toStatus?: string;
  timestamp: string;
  data?: Record<string, unknown>;
}

function makeEvent(
  type: string,
  orderId: EntityId,
  from?: OrderStatus,
  to?: OrderStatus,
  extra?: Record<string, unknown>,
): InternationalOrderDomainEvent {
  return {
    eventId: String(generateEntityId()),
    eventType: type,
    eventVersion: 1,
    orderId: String(orderId),
    fromStatus: from,
    toStatus: to,
    timestamp: new Date().toISOString(),
    data: extra,
  };
}

export const orderCreatedEvent = (id: EntityId, data: Record<string, unknown>) =>
  makeEvent("international-order.created.v1", id, undefined, OrderStatus.DRAFT, data);
export const orderSubmittedEvent = (id: EntityId, from: OrderStatus) =>
  makeEvent("international-order.submitted.v1", id, from, OrderStatus.PENDING_APPROVAL);
export const orderApprovedEvent = (id: EntityId, actorUserId: string) =>
  makeEvent("international-order.approved.v1", id, OrderStatus.PENDING_APPROVAL, OrderStatus.APPROVED, { actorUserId });
export const orderRejectedEvent = (id: EntityId, reason: string) =>
  makeEvent("international-order.rejected.v1", id, OrderStatus.PENDING_APPROVAL, OrderStatus.DRAFT, { reason });
export const orderSentEvent = (id: EntityId) =>
  makeEvent("international-order.sent.v1", id, OrderStatus.APPROVED, OrderStatus.ORDER_SENT);
export const orderProformaConfirmedEvent = (id: EntityId, proformaVersion?: number) =>
  makeEvent("international-order.proforma-confirmed.v1", id, OrderStatus.ORDER_SENT, OrderStatus.PROFORMA_CONFIRMED, { proformaVersion });
export const orderProductionStartedEvent = (id: EntityId) =>
  makeEvent("international-order.production-started.v1", id, OrderStatus.PROFORMA_CONFIRMED, OrderStatus.IN_PRODUCTION);
export const orderProductionUpdatedEvent = (id: EntityId, lines: OrderLineSnapshot[]) =>
  makeEvent("international-order.production-updated.v1", id, undefined, undefined, { lines });
export const orderReadyToShipEvent = (id: EntityId, overrideRequestId?: string) =>
  makeEvent("international-order.ready-to-ship.v1", id, OrderStatus.IN_PRODUCTION, OrderStatus.READY_TO_SHIP, { overrideRequestId });
export const orderSuspendedEvent = (id: EntityId, reason: string, previousStatus: OrderStatus) =>
  makeEvent("international-order.suspended.v1", id, previousStatus, OrderStatus.SUSPENDED, { reason, previousStatus });
export const orderResumedEvent = (id: EntityId, toStatus: OrderStatus) =>
  makeEvent("international-order.resumed.v1", id, OrderStatus.SUSPENDED, toStatus, { resumedTo: toStatus });
export const orderCancelledEvent = (id: EntityId, fromStatus: OrderStatus, reason: string) =>
  makeEvent("international-order.cancelled.v1", id, fromStatus, OrderStatus.CANCELLED, { reason });
export const orderUpdatedEvent = (id: EntityId) => makeEvent("international-order.updated.v1", id);
export const orderLineAddedEvent = (id: EntityId, line: OrderLineSnapshot) =>
  makeEvent("international-order.line-added.v1", id, undefined, undefined, { line });
export const orderLineUpdatedEvent = (id: EntityId, line: OrderLineSnapshot) =>
  makeEvent("international-order.line-updated.v1", id, undefined, undefined, { line });
export const orderLineCancelledEvent = (id: EntityId, line: OrderLineSnapshot) =>
  makeEvent("international-order.line-cancelled.v1", id, undefined, undefined, { line });
