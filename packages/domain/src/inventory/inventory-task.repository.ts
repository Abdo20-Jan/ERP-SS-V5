import type { InventoryTask } from "./inventory-task.aggregate";

export interface InventoryTaskListFilters {
  organizationId?: string;
  status?: string;
  statuses?: string[];
  priority?: string;
  ownerUserId?: string;
  warehouseId?: string;
  locationId?: string;
  sourceType?: string;
  sourceId?: string;
  overdueOnly?: boolean;
  type?: string;
}

export interface InventoryTaskListResult {
  data: InventoryTask[];
  total: number;
}

export interface InventoryTaskSummary {
  open: number;
  inProgress: number;
  blocked: number;
  escalated: number;
  overdue: number;
  doneToday: number;
}

export type InventoryTaskDbClient = unknown;

export interface InventoryTaskRepository {
  save(task: InventoryTask, db?: InventoryTaskDbClient): Promise<void>;
  findById(id: string): Promise<InventoryTask | null>;
  findAll(
    filters?: InventoryTaskListFilters,
    page?: number,
    limit?: number,
    now?: Date,
  ): Promise<InventoryTaskListResult>;
  summary(
    filters?: Pick<InventoryTaskListFilters, "organizationId" | "ownerUserId" | "warehouseId">,
    now?: Date,
  ): Promise<InventoryTaskSummary>;
}

export const INVENTORY_TASK_REPOSITORY = Symbol("InventoryTaskRepository");
