import { DomainError } from "../common/errors";
import { SalesInvoiceStatus } from "./sales-invoice-status.enum";

const ALLOWED: Record<SalesInvoiceStatus, SalesInvoiceStatus[]> = {
  [SalesInvoiceStatus.DRAFT]: [
    SalesInvoiceStatus.PENDING_AUTHORIZATION,
    SalesInvoiceStatus.CANCELLED,
  ],
  [SalesInvoiceStatus.PENDING_AUTHORIZATION]: [
    SalesInvoiceStatus.AUTHORIZED,
    SalesInvoiceStatus.CONTINGENCY,
    SalesInvoiceStatus.CANCELLED,
  ],
  [SalesInvoiceStatus.AUTHORIZED]: [SalesInvoiceStatus.AWAITING_PAYMENT],
  [SalesInvoiceStatus.AWAITING_PAYMENT]: [
    SalesInvoiceStatus.PARTIALLY_PAID,
    SalesInvoiceStatus.PAID,
  ],
  [SalesInvoiceStatus.PARTIALLY_PAID]: [SalesInvoiceStatus.PAID],
  [SalesInvoiceStatus.PAID]: [SalesInvoiceStatus.RELEASED],
  [SalesInvoiceStatus.RELEASED]: [],
  [SalesInvoiceStatus.CANCELLED]: [],
  [SalesInvoiceStatus.CONTINGENCY]: [
    SalesInvoiceStatus.AUTHORIZED,
    SalesInvoiceStatus.CANCELLED,
  ],
};

export function canTransitionSalesInvoice(
  from: SalesInvoiceStatus,
  to: SalesInvoiceStatus,
): boolean {
  return (ALLOWED[from] ?? []).includes(to);
}

export function assertTransitionSalesInvoice(
  from: SalesInvoiceStatus,
  to: SalesInvoiceStatus,
): void {
  if (!canTransitionSalesInvoice(from, to)) {
    throw new DomainError(
      `Invalid sales invoice transition: ${from} → ${to}`,
      "SALES_INVALID_TRANSITION",
      { from, to },
    );
  }
}
