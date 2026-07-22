import type {
  InventoryTaskPriority,
  InventoryTaskSourceType,
  InventoryTaskStatus,
} from "./inventory-task.enums";

export interface CreateInventoryTaskCommand {
  type: string;
  title: string;
  description?: string | null;
  priority?: InventoryTaskPriority | string;
  ownerUserId?: string | null;
  ownerRole?: string | null;
  dueAt?: string | Date | null;
  slaMinutes?: number | null;
  sourceType: InventoryTaskSourceType | string;
  sourceId?: string | null;
  warehouseId?: string | null;
  locationId?: string | null;
  organizationId?: string;
  id?: string;
  createdById?: string;
}

export interface AssignInventoryTaskCommand {
  taskId: string;
  ownerUserId?: string | null;
  ownerRole?: string | null;
  expectedVersion?: number;
  actorId: string;
}

export interface StartInventoryTaskCommand {
  taskId: string;
  expectedVersion?: number;
  actorId: string;
}

export interface BlockInventoryTaskCommand {
  taskId: string;
  reason: string;
  expectedVersion?: number;
  actorId: string;
}

export interface UnblockInventoryTaskCommand {
  taskId: string;
  /** OPEN or IN_PROGRESS; default IN_PROGRESS */
  targetStatus?: InventoryTaskStatus | string;
  expectedVersion?: number;
  actorId: string;
}

export interface WaitDependencyInventoryTaskCommand {
  taskId: string;
  dependencyType: string;
  dependencyId?: string | null;
  expectedVersion?: number;
  actorId: string;
}

export interface EscalateInventoryTaskCommand {
  taskId: string;
  reason: string;
  ownerUserId?: string | null;
  expectedVersion?: number;
  actorId: string;
}

export interface CompleteInventoryTaskCommand {
  taskId: string;
  expectedVersion?: number;
  actorId: string;
}

export interface CancelInventoryTaskCommand {
  taskId: string;
  reason?: string | null;
  expectedVersion?: number;
  actorId: string;
}
