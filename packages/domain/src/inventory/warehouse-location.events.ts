export type WarehouseLocationDomainEventType =
  | "LocationCreated"
  | "LocationUpdated"
  | "LocationDeactivated"
  | "LocationActivated"
  | "WarehouseLevelsConfigured";

export interface WarehouseLocationDomainEvent {
  type: WarehouseLocationDomainEventType;
  locationId?: string;
  warehouseId?: string;
  configId?: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

export function locationCreatedEvent(
  locationId: string,
  warehouseId: string,
  payload?: Record<string, unknown>,
): WarehouseLocationDomainEvent {
  return {
    type: "LocationCreated",
    locationId,
    warehouseId,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function locationUpdatedEvent(
  locationId: string,
  warehouseId: string,
  payload?: Record<string, unknown>,
): WarehouseLocationDomainEvent {
  return {
    type: "LocationUpdated",
    locationId,
    warehouseId,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function locationDeactivatedEvent(
  locationId: string,
  warehouseId: string,
  reason: string,
): WarehouseLocationDomainEvent {
  return {
    type: "LocationDeactivated",
    locationId,
    warehouseId,
    occurredAt: new Date().toISOString(),
    payload: { reason },
  };
}

export function locationActivatedEvent(
  locationId: string,
  warehouseId: string,
): WarehouseLocationDomainEvent {
  return {
    type: "LocationActivated",
    locationId,
    warehouseId,
    occurredAt: new Date().toISOString(),
  };
}

export function warehouseLevelsConfiguredEvent(
  configId: string,
  warehouseId: string,
  payload?: Record<string, unknown>,
): WarehouseLocationDomainEvent {
  return {
    type: "WarehouseLevelsConfigured",
    configId,
    warehouseId,
    occurredAt: new Date().toISOString(),
    payload,
  };
}
