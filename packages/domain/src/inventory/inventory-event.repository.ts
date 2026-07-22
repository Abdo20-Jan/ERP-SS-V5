import type { InventoryEventOutbox, InventoryEventSnapshot } from "./inventory-event.aggregate";

export interface InventoryEventListFilters {
  organizationId?: string;
  eventType?: string;
  eventVersion?: number;
  aggregateType?: string;
  aggregateId?: string;
  status?: string;
  producer?: string;
  correlationId?: string;
  failedOnly?: boolean;
}

export interface InventoryEventListResult {
  data: InventoryEventOutbox[];
  total: number;
}

export type InventoryEventDbClient = unknown;

export interface InventoryEventRepository {
  save(event: InventoryEventOutbox, db?: InventoryEventDbClient): Promise<void>;
  findById(id: string): Promise<InventoryEventOutbox | null>;
  findAll(filters?: InventoryEventListFilters, page?: number, limit?: number): Promise<InventoryEventListResult>;
  summary(organizationId: string): Promise<Record<string, number>>;
}

export const INVENTORY_EVENT_REPOSITORY = Symbol("InventoryEventRepository");
