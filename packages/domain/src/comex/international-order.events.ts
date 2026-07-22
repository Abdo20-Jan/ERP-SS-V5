import type { EntityId } from "../common/entity-id";
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
  eventType: string;
  eventVersion: number;
  orderId: string;
  fromStatus?: string;
  toStatus?: string;
  timestamp: string;
  data?: Record<string, unknown>;
}

function makeEvent(
  type: string, orderId: EntityId, from?: OrderStatus, to?: OrderStatus,
  extra?: Record<string, unknown>,
): InternationalOrderDomainEvent {
  return {
    eventType: type,
    eventVersion: 1,
    orderId: String(orderId),
    fromStatus: from ?? undefined,
    toStatus: to ?? undefined,
    timestamp: new Date().toISOString(),
    data: extra,
  };
}

export function orderCreatedEvent(orderId: EntityId, data: Record<string, unknown>): InternationalOrderDomainEvent {
  return makeEvent("international-order.created.v1", orderId, undefined, OrderStatus.DRAFT, data);
}

export function orderSubmittedEvent(orderId: EntityId, from: OrderStatus): InternationalOrderDomainEvent {
  return makeEvent("international-order.submitted.v1", orderId, from, OrderStatus.PENDING_APPROVAL);
}

export function orderApprovedEvent(orderId: EntityId, actorUserId: string): InternationalOrderDomainEvent {
  return makeEvent("international-order.approved.v1", orderId, OrderStatus.PENDING_APPROVAL, OrderStatus.APPROVED, { actorUserId });
}

export function orderRejectedEvent(orderId: EntityId, reason: string): InternationalOrderDomainEvent {
  return makeEvent("international-order.rejected.v1", orderId, OrderStatus.PENDING_APPROVAL, OrderStatus.DRAFT, { reason });
}

export function orderSentEvent(orderId: EntityId): InternationalOrderDomainEvent {
  return makeEvent("international-order.sent.v1", orderId, OrderStatus.APPROVED, OrderStatus.ORDER_SENT);
}

export function orderProformaConfirmedEvent(orderId: EntityId): InternationalOrderDomainEvent {
  return makeEvent("international-order.proforma-confirmed.v1", orderId, OrderStatus.ORDER_SENT, OrderStatus.PROFORMA_CONFIRMED);
}

export function orderProductionStartedEvent(orderId: EntityId): InternationalOrderDomainEvent {
  return makeEvent("international-order.production-started.v1", orderId, OrderStatus.PROFORMA_CONFIRMED, OrderStatus.IN_PRODUCTION);
}

export function orderProductionUpdatedEvent(orderId: EntityId, lines: OrderLineSnapshot[]): InternationalOrderDomainEvent {
  return makeEvent("international-order.production-updated.v1", orderId, undefined, undefined, { lines });
}

export function orderReadyToShipEvent(orderId: EntityId): InternationalOrderDomainEvent {
  return makeEvent("international-order.ready-to-ship.v1", orderId, OrderStatus.IN_PRODUCTION, OrderStatus.READY_TO_SHIP);
}

export function orderSuspendedEvent(orderId: EntityId, reason: string, previousStatus: OrderStatus): InternationalOrderDomainEvent {
  return makeEvent("international-order.suspended.v1", orderId, previousStatus, OrderStatus.SUSPENDED, { reason, previousStatus });
}

export function orderResumedEvent(orderId: EntityId, toStatus: OrderStatus): InternationalOrderDomainEvent {
  return makeEvent("international-order.resumed.v1", orderId, OrderStatus.SUSPENDED, toStatus, { resumedTo: toStatus });
}

export function orderCancelledEvent(orderId: EntityId, fromStatus: OrderStatus, reason: string): InternationalOrderDomainEvent {
  return makeEvent("international-order.cancelled.v1", orderId, fromStatus, OrderStatus.CANCELLED, { reason });
}

export function orderUpdatedEvent(orderId: EntityId): InternationalOrderDomainEvent {
  return makeEvent("international-order.updated.v1", orderId);
}

export function orderLineAddedEvent(orderId: EntityId, line: OrderLineSnapshot): InternationalOrderDomainEvent {
  return makeEvent("international-order.line-added.v1", orderId, undefined, undefined, { line });
}

export function orderLineUpdatedEvent(orderId: EntityId, line: OrderLineSnapshot): InternationalOrderDomainEvent {
  return makeEvent("international-order.line-updated.v1", orderId, undefined, undefined, { line });
}

export function orderLineCancelledEvent(orderId: EntityId, line: OrderLineSnapshot): InternationalOrderDomainEvent {
  return makeEvent("international-order.line-cancelled.v1", orderId, undefined, undefined, { line });
}

