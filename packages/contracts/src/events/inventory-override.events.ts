export const OVERRIDE_EVENT_TYPES = {
  REQUESTED: "inventory.override.requested",
  APPROVED: "inventory.override.approved",
  REJECTED: "inventory.override.rejected",
  CANCELLED: "inventory.override.cancelled",
  EXECUTED: "inventory.override.executed",
  EXPIRED: "inventory.override.expired",
} as const;

export type OverrideEventType =
  (typeof OVERRIDE_EVENT_TYPES)[keyof typeof OVERRIDE_EVENT_TYPES];
