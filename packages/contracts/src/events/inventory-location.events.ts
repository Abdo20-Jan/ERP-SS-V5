export const LOCATION_EVENT_TYPES = [
  "LocationCreated",
  "LocationUpdated",
  "LocationDeactivated",
  "LocationActivated",
  "WarehouseLevelsConfigured",
] as const;

export type LocationEventType = (typeof LOCATION_EVENT_TYPES)[number];

export interface LocationEventPayload {
  type: LocationEventType;
  locationId?: string;
  warehouseId?: string;
  configId?: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}
