import type { OrderAlert } from "./order-alert.aggregate";

export type OrderAlertRepositoryTransaction = unknown;

export interface OrderAlertRepository {
  save(
    alert: OrderAlert,
    tx?: OrderAlertRepositoryTransaction,
  ): Promise<void>;

  saveWithVersion?(
    alert: OrderAlert,
    expectedPersistedVersion: number | null,
    tx?: OrderAlertRepositoryTransaction,
  ): Promise<void>;

  findByOrder(
    orderId: string,
    organizationId: string,
    tx?: OrderAlertRepositoryTransaction,
  ): Promise<OrderAlert[]>;

  findById(
    id: string,
    organizationId: string,
    tx?: OrderAlertRepositoryTransaction,
  ): Promise<OrderAlert | null>;
}

export interface StrictOrderAlertRepository extends OrderAlertRepository {
  saveWithVersion(
    alert: OrderAlert,
    expectedPersistedVersion: number | null,
    tx?: OrderAlertRepositoryTransaction,
  ): Promise<void>;
}

export const ORDER_ALERT_REPOSITORY = Symbol("ORDER_ALERT_REPOSITORY");
