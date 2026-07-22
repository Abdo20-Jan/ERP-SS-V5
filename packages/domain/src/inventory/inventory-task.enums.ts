export enum InventoryTaskStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  BLOCKED = "BLOCKED",
  WAITING_DEPENDENCY = "WAITING_DEPENDENCY",
  ESCALATED = "ESCALATED",
  DONE = "DONE",
  CANCELLED = "CANCELLED",
}

const STATUSES = Object.values(InventoryTaskStatus);

export function isInventoryTaskStatus(value: string): value is InventoryTaskStatus {
  return STATUSES.includes(value as InventoryTaskStatus);
}

export const INVENTORY_TASK_TERMINAL_STATUSES: ReadonlySet<InventoryTaskStatus> = new Set([
  InventoryTaskStatus.DONE,
  InventoryTaskStatus.CANCELLED,
]);

export enum InventoryTaskPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  URGENT = "URGENT",
}

const PRIORITIES = Object.values(InventoryTaskPriority);

export function isInventoryTaskPriority(
  value: string,
): value is InventoryTaskPriority {
  return PRIORITIES.includes(value as InventoryTaskPriority);
}

/** Lower rank sorts first in worklist. */
export const INVENTORY_TASK_PRIORITY_RANK: Record<InventoryTaskPriority, number> = {
  [InventoryTaskPriority.URGENT]: 0,
  [InventoryTaskPriority.HIGH]: 1,
  [InventoryTaskPriority.MEDIUM]: 2,
  [InventoryTaskPriority.LOW]: 3,
};

export enum InventoryTaskSourceType {
  WAREHOUSE = "warehouse",
  LOCATION = "location",
  DOCUMENT = "document",
  OVERRIDE = "override",
  MANUAL = "manual",
}

const SOURCE_TYPES = Object.values(InventoryTaskSourceType);

export function isInventoryTaskSourceType(
  value: string,
): value is InventoryTaskSourceType {
  return SOURCE_TYPES.includes(value as InventoryTaskSourceType);
}

export const INVENTORY_TASK_REASON_MIN_LENGTH = 1;
