/**
 * Billing / release gate states (SM-SALES-04).
 * Fiscal emission itself is owned by Fiscal module — not computed here.
 */
export enum SalesInvoiceStatus {
  DRAFT = "DRAFT",
  PENDING_AUTHORIZATION = "PENDING_AUTHORIZATION",
  AUTHORIZED = "AUTHORIZED",
  AWAITING_PAYMENT = "AWAITING_PAYMENT",
  PARTIALLY_PAID = "PARTIALLY_PAID",
  PAID = "PAID",
  RELEASED = "RELEASED",
  CANCELLED = "CANCELLED",
  CONTINGENCY = "CONTINGENCY",
}
