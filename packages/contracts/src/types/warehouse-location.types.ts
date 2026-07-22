export interface ConfigureWarehouseLevelsDto {
  maxLevels: number;
  level1Name?: string;
  level2Name?: string;
  level3Name?: string;
  level4Name?: string;
  level5Name?: string;
  useLevel2?: boolean;
  useLevel3?: boolean;
  useLevel4?: boolean;
  useLevel5?: boolean;
  expectedVersion?: number;
}

export interface WarehouseLocationConfigDto {
  id: string;
  warehouseId: string;
  maxLevels: number;
  level1Name: string;
  level2Name: string;
  level3Name: string;
  level4Name: string;
  level5Name: string;
  useLevel2: boolean;
  useLevel3: boolean;
  useLevel4: boolean;
  useLevel5: boolean;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateLocationDto {
  parentId?: string | null;
  level: number;
  code?: string;
  name: string;
  isVirtual?: boolean;
  virtualType?: string | null;
  capacity?: number | null;
  capacityUnit?: string | null;
}

export interface UpdateLocationDto {
  name?: string;
  capacity?: number | null;
  capacityUnit?: string | null;
  expectedVersion?: number;
}

export interface DeactivateLocationDto {
  reason: string;
}

export interface WarehouseLocationDto {
  id: string;
  warehouseId: string;
  parentId: string | null;
  parentKey: string;
  level: number;
  code: string;
  name: string;
  path: string;
  isVirtual: boolean;
  virtualType: string | null;
  isActive: boolean;
  capacity: number | null;
  capacityUnit: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface LocationTreeNodeDto extends WarehouseLocationDto {
  children: LocationTreeNodeDto[];
}

export interface WarehouseLocationListDto {
  data: WarehouseLocationDto[] | LocationTreeNodeDto[];
  total: number;
  page: number;
  limit: number;
  view: "tree" | "flat";
}

export interface LocationPathDto {
  locationId: string;
  warehouseId: string;
  path: string;
  chain: WarehouseLocationDto[];
}
