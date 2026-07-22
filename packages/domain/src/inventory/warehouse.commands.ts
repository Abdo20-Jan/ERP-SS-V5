import type { WarehouseType } from "./warehouse-type.enum";

export interface WarehouseAddressInput {
  street?: string | null;
  number?: string | null;
  city?: string | null;
  province?: string | null;
  country?: string;
  postalCode?: string | null;
}

export interface CreateWarehouseCommand {
  id?: string;
  organizationId?: string;
  code: string;
  name: string;
  type: WarehouseType | string;
  address?: WarehouseAddressInput;
  zones?: string[];
  capacity?: number | null;
  capacityUnit?: string | null;
}

export interface UpdateWarehouseCommand {
  name?: string;
  type?: WarehouseType | string;
  address?: WarehouseAddressInput;
  zones?: string[];
  capacity?: number | null;
  capacityUnit?: string | null;
  expectedVersion?: number;
}

export interface ActivateWarehouseCommand {
  warehouseId: string;
}

export interface DeactivateWarehouseCommand {
  warehouseId: string;
  reason: string;
}
