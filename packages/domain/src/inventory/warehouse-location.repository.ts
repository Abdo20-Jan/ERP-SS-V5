import type { WarehouseLocation } from "./warehouse-location.aggregate";
import type { WarehouseLocationConfig } from "./warehouse-location-config.aggregate";

export interface WarehouseLocationListFilters {
  parentId?: string | null;
  level?: number;
  isActive?: boolean;
  isVirtual?: boolean;
  search?: string;
}

export interface WarehouseLocationListResult {
  data: WarehouseLocation[];
  total: number;
}

export type WarehouseLocationDbClient = unknown;

export interface WarehouseLocationRepository {
  saveConfig(
    config: WarehouseLocationConfig,
    db?: WarehouseLocationDbClient,
  ): Promise<void>;

  findConfigByWarehouseId(
    warehouseId: string,
  ): Promise<WarehouseLocationConfig | null>;

  save(
    location: WarehouseLocation,
    db?: WarehouseLocationDbClient,
  ): Promise<void>;

  findById(id: string): Promise<WarehouseLocation | null>;

  /**
   * Uniqueness scope: (warehouseId, parentKey, code).
   * parentKey is parentId or 'ROOT' for top-level / virtual.
   */
  findByWarehouseAndCode(
    warehouseId: string,
    parentKey: string,
    code: string,
  ): Promise<WarehouseLocation | null>;

  findByWarehouse(
    warehouseId: string,
    filters?: WarehouseLocationListFilters,
  ): Promise<WarehouseLocationListResult>;

  countActiveChildren(locationId: string): Promise<number>;

  /**
   * Ordered ancestors from root to immediate parent (exclusive of self),
   * or empty when location is root/virtual.
   */
  findPathChain(locationId: string): Promise<WarehouseLocation[]>;

  findHighestPhysicalLevel(warehouseId: string): Promise<number>;
}

export const WAREHOUSE_LOCATION_REPOSITORY = Symbol(
  "WarehouseLocationRepository",
);
