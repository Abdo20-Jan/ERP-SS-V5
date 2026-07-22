import type { InventoryDocumentDto } from "./inventory-document.types";
import type { OverrideRequestDto } from "./override-request.types";
import type { WarehouseDto } from "./warehouse.types";
import type {
  LocationPathDto,
  WarehouseLocationConfigDto,
  WarehouseLocationDto,
} from "./warehouse-location.types";

/** Object-page tab descriptor for warehouse/location detail BFF. */
export interface DetailTabDto {
  id: string;
  label: string;
  count?: number | null;
}

/** Recent audit row embedded in inventory detail (inventory:read scope). */
export interface DetailHistoryItemDto {
  id: string;
  action: string;
  entityType: string | null;
  entityId: string | null;
  userId: string | null;
  createdAt: string;
  correlationId: string | null;
}

export interface WarehouseDetailSummaryDto {
  locationTotal: number;
  locationActive: number;
  documentTotal: number;
  openOverrideCount: number;
  /** Always false until inventory balance slice (D-003.14 stub). */
  balanceAvailable: false;
}

export interface LocationDetailSummaryDto {
  documentTotal: number;
  openOverrideCount: number;
  activeChildCount: number;
  /** Always false until inventory balance slice (D-003.14 stub). */
  balanceAvailable: false;
}

export interface WarehouseDetailDto {
  header: WarehouseDto;
  config: WarehouseLocationConfigDto | null;
  summary: WarehouseDetailSummaryDto;
  tabs: DetailTabDto[];
  locationsPreview: WarehouseLocationDto[];
  documentsPreview: InventoryDocumentDto[];
  overridesPreview: OverrideRequestDto[];
  recentHistory: DetailHistoryItemDto[];
  availableActions: string[];
  primaryAction: string | null;
}

export interface LocationDetailDto {
  header: WarehouseLocationDto;
  warehouse: WarehouseDto;
  path: LocationPathDto;
  summary: LocationDetailSummaryDto;
  tabs: DetailTabDto[];
  documentsPreview: InventoryDocumentDto[];
  overridesPreview: OverrideRequestDto[];
  recentHistory: DetailHistoryItemDto[];
  availableActions: string[];
  primaryAction: string | null;
}

export interface ProgressiveValidationIssueDto {
  field: string;
  message: string;
  code: string;
}

export interface ProgressiveValidationResultDto {
  valid: boolean;
  errors: ProgressiveValidationIssueDto[];
  warnings: ProgressiveValidationIssueDto[];
}

export type ProgressiveValidationMode = "create" | "update";

/** Dry-run payload for warehouse create/update wizard (no persist). */
export interface ValidateWarehouseDto {
  mode: ProgressiveValidationMode;
  /** Required when mode=update */
  id?: string;
  code?: string;
  name?: string;
  type?: string;
  organizationId?: string;
  address?: {
    street?: string | null;
    number?: string | null;
    city?: string | null;
    province?: string | null;
    country?: string;
    postalCode?: string | null;
  };
  zones?: string[];
  capacity?: number | null;
  capacityUnit?: string | null;
  expectedVersion?: number;
}

/** Dry-run payload for location create/update wizard (no persist). */
export interface ValidateLocationDto {
  mode: ProgressiveValidationMode;
  warehouseId: string;
  /** Required when mode=update */
  id?: string;
  parentId?: string | null;
  level?: number;
  code?: string;
  name?: string;
  isVirtual?: boolean;
  virtualType?: string | null;
  capacity?: number | null;
  capacityUnit?: string | null;
  expectedVersion?: number;
}
