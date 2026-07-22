export const INVENTORY_EVENT_TYPES = {
  RECORDED: "inventory.event.recorded",
  READY: "inventory.event.ready",
  PUBLISHED: "inventory.event.published",
  CONSUMED: "inventory.event.consumed",
  FAILED: "inventory.event.failed",
  REPLAY_REQUESTED: "inventory.event.replay.requested",
  DEAD_LETTERED: "inventory.event.dead_lettered",
  CANCELLED: "inventory.event.cancelled",
} as const;

export type InventoryEventEventType =
  (typeof INVENTORY_EVENT_TYPES)[keyof typeof INVENTORY_EVENT_TYPES];
