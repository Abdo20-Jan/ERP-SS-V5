export const WAREHOUSE_EVENT_TYPES = [
  "WarehouseCreated",
  "WarehouseUpdated",
  "WarehouseActivated",
  "WarehouseDeactivated",
] as const;

export type WarehouseEventType = (typeof WAREHOUSE_EVENT_TYPES)[number];

export interface WarehouseEventPayload {
  type: WarehouseEventType;
  warehouseId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}
