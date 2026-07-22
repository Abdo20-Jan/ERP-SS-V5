export const INVENTORY_SOD_EVENT_TYPES = {
  RULE_CREATED: "inventory.sod.rule.created",
  RULE_UPDATED: "inventory.sod.rule.updated",
  RULE_DEACTIVATED: "inventory.sod.rule.deactivated",
  VIOLATION_DETECTED: "inventory.sod.violation.detected",
  VIOLATION_RESOLVED: "inventory.sod.violation.resolved",
  EXCEPTION_REQUESTED: "inventory.sod.exception.requested",
  EXCEPTION_APPROVED: "inventory.sod.exception.approved",
  EXCEPTION_REJECTED: "inventory.sod.exception.rejected",
  EXCEPTION_REVOKED: "inventory.sod.exception.revoked",
  EXCEPTION_EXPIRED: "inventory.sod.exception.expired",
} as const;

export type InventorySoDEventType =
  (typeof INVENTORY_SOD_EVENT_TYPES)[keyof typeof INVENTORY_SOD_EVENT_TYPES];