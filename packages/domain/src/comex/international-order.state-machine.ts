import { OrderStatus } from "./international-order.enums";
import { InvalidOrderStateError } from "../common/errors";

const ALLOWED: Record<OrderStatus, OrderStatus[]> = {
  [OrderStatus.DRAFT]: [OrderStatus.PENDING_APPROVAL, OrderStatus.CANCELLED],
  [OrderStatus.PENDING_APPROVAL]: [OrderStatus.APPROVED, OrderStatus.DRAFT, OrderStatus.CANCELLED],
  [OrderStatus.APPROVED]: [OrderStatus.ORDER_SENT, OrderStatus.CANCELLED],
  [OrderStatus.ORDER_SENT]: [OrderStatus.PROFORMA_CONFIRMED, OrderStatus.CANCELLED],
  [OrderStatus.PROFORMA_CONFIRMED]: [OrderStatus.IN_PRODUCTION, OrderStatus.CANCELLED],
  [OrderStatus.IN_PRODUCTION]: [OrderStatus.IN_PRODUCTION, OrderStatus.READY_TO_SHIP, OrderStatus.CANCELLED],
  [OrderStatus.READY_TO_SHIP]: [OrderStatus.CANCELLED],
  [OrderStatus.SUSPENDED]: [OrderStatus.DRAFT, OrderStatus.PENDING_APPROVAL, OrderStatus.APPROVED,
    OrderStatus.ORDER_SENT, OrderStatus.PROFORMA_CONFIRMED, OrderStatus.IN_PRODUCTION,
    OrderStatus.READY_TO_SHIP, OrderStatus.CANCELLED],
  [OrderStatus.CANCELLED]: [],
};

const ACTIVE: OrderStatus[] = [
  OrderStatus.DRAFT, OrderStatus.PENDING_APPROVAL, OrderStatus.APPROVED,
  OrderStatus.ORDER_SENT, OrderStatus.PROFORMA_CONFIRMED,
  OrderStatus.IN_PRODUCTION, OrderStatus.READY_TO_SHIP,
];

export function canTransition(from: OrderStatus, to: OrderStatus): boolean {
  return (ALLOWED[from] ?? []).includes(to);
}

export function assertTransition(from: OrderStatus, to: OrderStatus): void {
  if (!canTransition(from, to)) {
    throw new InvalidOrderStateError(
      `Invalid order transition: ${from} → ${to}`,
      { from, to },
    );
  }
}

export function isActive(status: OrderStatus): boolean {
  return ACTIVE.includes(status);
}

export function canSuspend(status: OrderStatus): boolean {
  return isActive(status) && status !== OrderStatus.SUSPENDED;
}

export function isTerminal(status: OrderStatus): boolean {
  return status === OrderStatus.CANCELLED;
}
