export const INVENTORY_TASK_EVENT_TYPES = {
  CREATED: "inventory.task.created",
  ASSIGNED: "inventory.task.assigned",
  STARTED: "inventory.task.started",
  BLOCKED: "inventory.task.blocked",
  UNBLOCKED: "inventory.task.unblocked",
  WAITING_DEPENDENCY: "inventory.task.waiting_dependency",
  ESCALATED: "inventory.task.escalated",
  COMPLETED: "inventory.task.completed",
  CANCELLED: "inventory.task.cancelled",
} as const;

export type InventoryTaskEventType =
  (typeof INVENTORY_TASK_EVENT_TYPES)[keyof typeof INVENTORY_TASK_EVENT_TYPES];
