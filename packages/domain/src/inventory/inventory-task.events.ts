export type InventoryTaskDomainEventType =
  | "InventoryTaskCreated"
  | "InventoryTaskAssigned"
  | "InventoryTaskStarted"
  | "InventoryTaskBlocked"
  | "InventoryTaskUnblocked"
  | "InventoryTaskWaitingDependency"
  | "InventoryTaskEscalated"
  | "InventoryTaskCompleted"
  | "InventoryTaskCancelled";

export interface InventoryTaskDomainEvent {
  type: InventoryTaskDomainEventType;
  taskId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

function base(
  type: InventoryTaskDomainEventType,
  taskId: string,
  payload?: Record<string, unknown>,
  now?: Date,
): InventoryTaskDomainEvent {
  return {
    type,
    taskId,
    occurredAt: (now ?? new Date()).toISOString(),
    payload,
  };
}

export function inventoryTaskCreatedEvent(
  taskId: string,
  payload: Record<string, unknown>,
  now?: Date,
): InventoryTaskDomainEvent {
  return base("InventoryTaskCreated", taskId, payload, now);
}

export function inventoryTaskAssignedEvent(
  taskId: string,
  payload: Record<string, unknown>,
  now?: Date,
): InventoryTaskDomainEvent {
  return base("InventoryTaskAssigned", taskId, payload, now);
}

export function inventoryTaskStartedEvent(
  taskId: string,
  payload?: Record<string, unknown>,
  now?: Date,
): InventoryTaskDomainEvent {
  return base("InventoryTaskStarted", taskId, payload, now);
}

export function inventoryTaskBlockedEvent(
  taskId: string,
  payload: Record<string, unknown>,
  now?: Date,
): InventoryTaskDomainEvent {
  return base("InventoryTaskBlocked", taskId, payload, now);
}

export function inventoryTaskUnblockedEvent(
  taskId: string,
  payload: Record<string, unknown>,
  now?: Date,
): InventoryTaskDomainEvent {
  return base("InventoryTaskUnblocked", taskId, payload, now);
}

export function inventoryTaskWaitingDependencyEvent(
  taskId: string,
  payload: Record<string, unknown>,
  now?: Date,
): InventoryTaskDomainEvent {
  return base("InventoryTaskWaitingDependency", taskId, payload, now);
}

export function inventoryTaskEscalatedEvent(
  taskId: string,
  payload: Record<string, unknown>,
  now?: Date,
): InventoryTaskDomainEvent {
  return base("InventoryTaskEscalated", taskId, payload, now);
}

export function inventoryTaskCompletedEvent(
  taskId: string,
  payload?: Record<string, unknown>,
  now?: Date,
): InventoryTaskDomainEvent {
  return base("InventoryTaskCompleted", taskId, payload, now);
}

export function inventoryTaskCancelledEvent(
  taskId: string,
  payload?: Record<string, unknown>,
  now?: Date,
): InventoryTaskDomainEvent {
  return base("InventoryTaskCancelled", taskId, payload, now);
}
