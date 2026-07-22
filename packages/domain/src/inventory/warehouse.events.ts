export type WarehouseDomainEventType =
  | "WarehouseCreated"
  | "WarehouseUpdated"
  | "WarehouseActivated"
  | "WarehouseDeactivated";

export interface WarehouseDomainEvent {
  type: WarehouseDomainEventType;
  warehouseId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

export function warehouseCreatedEvent(
  warehouseId: string,
  payload?: Record<string, unknown>,
): WarehouseDomainEvent {
  return {
    type: "WarehouseCreated",
    warehouseId,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function warehouseUpdatedEvent(
  warehouseId: string,
  payload?: Record<string, unknown>,
): WarehouseDomainEvent {
  return {
    type: "WarehouseUpdated",
    warehouseId,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function warehouseActivatedEvent(
  warehouseId: string,
): WarehouseDomainEvent {
  return {
    type: "WarehouseActivated",
    warehouseId,
    occurredAt: new Date().toISOString(),
  };
}

export function warehouseDeactivatedEvent(
  warehouseId: string,
  reason: string,
): WarehouseDomainEvent {
  return {
    type: "WarehouseDeactivated",
    warehouseId,
    occurredAt: new Date().toISOString(),
    payload: { reason },
  };
}
