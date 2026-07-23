import type { OrderAlert } from "./order-alert.aggregate";
export interface OrderAlertRepository {
  save(a: OrderAlert, tx?: unknown): Promise<void>;
  findByOrder(orderId: string, organizationId: string, tx?: unknown): Promise<OrderAlert[]>;
  findById(id: string, organizationId: string, tx?: unknown): Promise<OrderAlert | null>;
}
export const ORDER_ALERT_REPOSITORY = Symbol("ORDER_ALERT_REPOSITORY");
