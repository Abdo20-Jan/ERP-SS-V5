import { DomainError } from "../common/errors";
import { InternationalOrderStatus } from "./international-order-status.enum";

const ALLOWED: Record<InternationalOrderStatus, InternationalOrderStatus[]> = {
  [InternationalOrderStatus.DRAFT]: [
    InternationalOrderStatus.PENDING_APPROVAL,
    InternationalOrderStatus.CANCELLED,
  ],
  [InternationalOrderStatus.PENDING_APPROVAL]: [
    InternationalOrderStatus.APPROVED,
    InternationalOrderStatus.DRAFT,
    InternationalOrderStatus.CANCELLED,
  ],
  [InternationalOrderStatus.APPROVED]: [
    InternationalOrderStatus.IN_PRODUCTION,
    InternationalOrderStatus.CANCELLED,
  ],
  [InternationalOrderStatus.IN_PRODUCTION]: [
    InternationalOrderStatus.READY_TO_SHIP,
  ],
  [InternationalOrderStatus.READY_TO_SHIP]: [InternationalOrderStatus.SHIPPED],
  [InternationalOrderStatus.SHIPPED]: [InternationalOrderStatus.IN_CUSTOMS],
  [InternationalOrderStatus.IN_CUSTOMS]: [InternationalOrderStatus.RECEIVED],
  [InternationalOrderStatus.RECEIVED]: [InternationalOrderStatus.CLOSED],
  [InternationalOrderStatus.CLOSED]: [],
  [InternationalOrderStatus.CANCELLED]: [],
};

export function canTransitionInternationalOrder(
  from: InternationalOrderStatus,
  to: InternationalOrderStatus,
): boolean {
  return (ALLOWED[from] ?? []).includes(to);
}

export function assertTransitionInternationalOrder(
  from: InternationalOrderStatus,
  to: InternationalOrderStatus,
): void {
  if (!canTransitionInternationalOrder(from, to)) {
    throw new DomainError(
      `Invalid COMEX order transition: ${from} → ${to}`,
      "COMEX_INVALID_TRANSITION",
      { from, to },
    );
  }
}
