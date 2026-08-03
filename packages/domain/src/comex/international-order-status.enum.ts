/**
 * COMEX international order lifecycle (SM-COMEX-01..05 catalog states).
 * Transitions are operational; customs valuation rules are out of scope here.
 */
export enum InternationalOrderStatus {
  DRAFT = "DRAFT",
  PENDING_APPROVAL = "PENDING_APPROVAL",
  APPROVED = "APPROVED",
  IN_PRODUCTION = "IN_PRODUCTION",
  READY_TO_SHIP = "READY_TO_SHIP",
  SHIPPED = "SHIPPED",
  IN_CUSTOMS = "IN_CUSTOMS",
  RECEIVED = "RECEIVED",
  CLOSED = "CLOSED",
  CANCELLED = "CANCELLED",
}
