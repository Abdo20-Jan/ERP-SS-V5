export const COMEX_ORDER_EVENT_TYPES = [
  "international-order.created.v1",
  "international-order.updated.v1",
  "international-order.submitted.v1",
  "international-order.approved.v1",
  "international-order.rejected.v1",
  "international-order.sent.v1",
  "international-order.proforma-confirmed.v1",
  "international-order.production-started.v1",
  "international-order.production-updated.v1",
  "international-order.ready-to-ship.v1",
  "international-order.suspended.v1",
  "international-order.resumed.v1",
  "international-order.cancelled.v1",
  "international-order.line-added.v1",
  "international-order.line-updated.v1",
  "international-order.line-cancelled.v1",
  "international-order.proforma-registered.v1",
  "international-order.alert-raised.v1",
  "international-order.alert-resolved.v1",
  "international-order.override-executed.v1",
] as const;

export type ComexOrderEventType = (typeof COMEX_ORDER_EVENT_TYPES)[number];

export interface ComexOrderEventPayload {
  type: ComexOrderEventType;
  orderId: string;
  orderCode?: string;
  organizationId?: string;
  version: number;
  correlationId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}
