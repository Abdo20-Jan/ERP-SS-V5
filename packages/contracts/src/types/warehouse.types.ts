export interface WarehouseAddressDto {
  street?: string | null;
  number?: string | null;
  city?: string | null;
  province?: string | null;
  country?: string;
  postalCode?: string | null;
}

export interface CreateWarehouseDto {
  code: string;
  name: string;
  type: string;
  organizationId?: string;
  address?: WarehouseAddressDto;
  zones?: string[];
  capacity?: number | null;
  capacityUnit?: string | null;
}

export interface UpdateWarehouseDto {
  name?: string;
  type?: string;
  address?: WarehouseAddressDto;
  zones?: string[];
  capacity?: number | null;
  capacityUnit?: string | null;
  expectedVersion?: number;
}

export interface DeactivateWarehouseDto {
  reason: string;
}

export interface WarehouseDto {
  id: string;
  organizationId: string;
  code: string;
  name: string;
  type: string;
  addressStreet: string | null;
  addressNumber: string | null;
  addressCity: string | null;
  addressProvince: string | null;
  addressCountry: string;
  addressPostalCode: string | null;
  zones: string[];
  capacity: number | null;
  capacityUnit: string | null;
  isActive: boolean;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface WarehouseListDto {
  data: WarehouseDto[];
  total: number;
  page: number;
  limit: number;
}
