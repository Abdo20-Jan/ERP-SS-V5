export type InventoryTaskStatusDto =
  | "OPEN"
  | "IN_PROGRESS"
  | "BLOCKED"
  | "WAITING_DEPENDENCY"
  | "ESCALATED"
  | "DONE"
  | "CANCELLED";

export type InventoryTaskPriorityDto = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export type InventoryTaskSourceTypeDto =
  | "warehouse"
  | "location"
  | "document"
  | "override"
  | "manual";

export interface CreateInventoryTaskDto {
  type: string;
  title: string;
  description?: string | null;
  priority?: InventoryTaskPriorityDto | string;
  ownerUserId?: string | null;
  ownerRole?: string | null;
  dueAt?: string | null;
  slaMinutes?: number | null;
  sourceType: InventoryTaskSourceTypeDto | string;
  sourceId?: string | null;
  warehouseId?: string | null;
  locationId?: string | null;
  organizationId?: string;
}

export interface InventoryTaskDto {
  id: string;
  organizationId: string;
  type: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  ownerUserId: string | null;
  ownerRole: string | null;
  dueAt: string | null;
  slaMinutes: number | null;
  sourceType: string;
  sourceId: string | null;
  warehouseId: string | null;
  locationId: string | null;
  blockedReason: string | null;
  dependencyType: string | null;
  dependencyId: string | null;
  completedAt: string | null;
  cancelledAt: string | null;
  cancelReason: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
  isOverdue: boolean;
}

export interface InventoryTaskListDto {
  data: InventoryTaskDto[];
  total: number;
  page: number;
  limit: number;
}

export interface InventoryTaskSummaryDto {
  open: number;
  inProgress: number;
  blocked: number;
  escalated: number;
  overdue: number;
  doneToday: number;
}

export interface AssignInventoryTaskDto {
  ownerUserId?: string | null;
  ownerRole?: string | null;
  expectedVersion?: number;
}

export interface StartInventoryTaskDto {
  expectedVersion?: number;
}

export interface BlockInventoryTaskDto {
  reason: string;
  expectedVersion?: number;
}

export interface UnblockInventoryTaskDto {
  targetStatus?: "OPEN" | "IN_PROGRESS" | string;
  expectedVersion?: number;
}

export interface WaitDependencyInventoryTaskDto {
  dependencyType: string;
  dependencyId?: string | null;
  expectedVersion?: number;
}

export interface EscalateInventoryTaskDto {
  reason: string;
  ownerUserId?: string | null;
  expectedVersion?: number;
}

export interface CompleteInventoryTaskDto {
  expectedVersion?: number;
}

export interface CancelInventoryTaskDto {
  reason?: string | null;
  expectedVersion?: number;
}

export interface ResumeDependencyInventoryTaskDto {
  targetStatus?: "OPEN" | "IN_PROGRESS" | string;
  expectedVersion?: number;
}
