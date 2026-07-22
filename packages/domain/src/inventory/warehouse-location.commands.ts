import type { VirtualLocationType } from "./virtual-location-type.enum";

export interface ConfigureWarehouseLevelsCommand {
  warehouseId: string;
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

export interface CreateLocationCommand {
  id?: string;
  warehouseId: string;
  parentId?: string | null;
  level: number;
  code?: string;
  name: string;
  isVirtual?: boolean;
  virtualType?: VirtualLocationType | string | null;
  capacity?: number | null;
  capacityUnit?: string | null;
}

export interface UpdateLocationCommand {
  name?: string;
  capacity?: number | null;
  capacityUnit?: string | null;
  expectedVersion?: number;
}

export interface DeactivateLocationCommand {
  locationId: string;
  reason: string;
}

export interface ActivateLocationCommand {
  locationId: string;
}
