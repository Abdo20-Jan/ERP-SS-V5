export const COMEX_OVERRIDE_EVENT_TYPES = {
  REQUESTED: "international-order.override-requested.v1",
  APPROVED: "international-order.override-approved.v1",
  REJECTED: "international-order.override-rejected.v1",
  EXECUTED: "international-order.override-executed.v1",
  EXPIRED: "international-order.override-expired.v1",
} as const;

export type ComexOverrideEventType =
  (typeof COMEX_OVERRIDE_EVENT_TYPES)[keyof typeof COMEX_OVERRIDE_EVENT_TYPES];

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
  COMEX_OVERRIDE_EVENT_TYPES.EXECUTED,
  COMEX_OVERRIDE_EVENT_TYPES.REQUESTED,
  COMEX_OVERRIDE_EVENT_TYPES.APPROVED,
  COMEX_OVERRIDE_EVENT_TYPES.REJECTED,
  COMEX_OVERRIDE_EVENT_TYPES.EXPIRED,
  "international-order.alert-acknowledged.v1",
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

export interface ComexOverrideEventData extends Record<string, unknown> {
  overrideRequestId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  status: string;
  version: number;
  requestedById?: string;
  approvedById?: string;
  rejectedById?: string;
  executedById?: string;
  reason?: string;
  rejectionReason?: string;
  expiresAt?: string;
  fromStatus?: string;
  toStatus?: string;
  expectedOrderVersion?: number;
}

export type ComexOverrideEventPayload = Omit<
  ComexOrderEventPayload,
  "type" | "payload"
> & {
  type: ComexOverrideEventType;
  payload: ComexOverrideEventData;
};
