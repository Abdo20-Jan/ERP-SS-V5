/**
 * Cross-module AR/AP obligation status for the Finance worklist.
 * Source documents remain owned by Purchasing/Sales/Treasury.
 */
export enum ObligationStatus {
  OPEN = "OPEN",
  PARTIALLY_SETTLED = "PARTIALLY_SETTLED",
  SETTLED = "SETTLED",
  OVERDUE = "OVERDUE",
  DISPUTED = "DISPUTED",
  CANCELLED = "CANCELLED",
}
