import type { Warehouse } from "./warehouse.aggregate";

export interface WarehouseListParams {
  page: number;
  limit: number;
  type?: string;
  isActive?: boolean;
  search?: string;
  organizationId?: string;
}

export interface WarehouseListResult {
  data: Warehouse[];
  total: number;
}

export type WarehouseDbClient = unknown;

export interface WarehouseRepository {
  save(warehouse: Warehouse, db?: WarehouseDbClient): Promise<void>;
  findById(id: string): Promise<Warehouse | null>;
  findByCode(organizationId: string, code: string): Promise<Warehouse | null>;
  findAll(params: WarehouseListParams): Promise<WarehouseListResult>;
}

export const WAREHOUSE_REPOSITORY = Symbol("WarehouseRepository");
