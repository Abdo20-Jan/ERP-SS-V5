/**
 * Inventory API client — warehouse list/detail and related reads.
 * Types mirror @sunset/contracts inventory DTOs (local copy to avoid web→contracts build coupling).
 */

import { apiRequest, type ApiError } from "../api";

export type { ApiError };

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

export interface DetailTabDto {
  id: string;
  label: string;
  count?: number | null;
}

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
  balanceAvailable: false;
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

export interface InventoryDocumentDto {
  id: string;
  organizationId: string;
  warehouseId: string | null;
  locationId: string | null;
  documentType: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  sha256Hash: string;
  storagePath: string;
  version: number;
  previousVersionId: string | null;
  classification: string | null;
  retentionDays: number | null;
  description: string | null;
  tags: string[];
  uploadedById: string;
  uploadedAt: string;
  isArchived: boolean;
  archivedAt: string | null;
  archivedById: string | null;
  createdAt: string;
  updatedAt: string;
  downloadUrl?: string | null;
  downloadUrlExpiresAt?: string | null;
}

export interface OverrideRequestDto {
  id: string;
  status: string;
  resourceType?: string;
  resourceId?: string;
  reason?: string | null;
  createdAt?: string;
  [key: string]: unknown;
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

export interface WarehouseLocationListDto {
  data: WarehouseLocationDto[];
  total: number;
  page?: number;
  limit?: number;
}

export interface InventoryDocumentListDto {
  data: InventoryDocumentDto[];
  total: number;
  page: number;
  limit: number;
}

export interface AuditListDto {
  data: DetailHistoryItemDto[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ListWarehousesParams {
  page?: number;
  limit?: number;
  type?: string;
  isActive?: string;
  search?: string;
}

function toQuery(params: Record<string, string | number | undefined>): string {
  const q = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === "") continue;
    q.set(key, String(value));
  }
  const s = q.toString();
  return s ? `?${s}` : "";
}

export function listWarehouses(
  params: ListWarehousesParams = {},
): Promise<WarehouseListDto> {
  return apiRequest<WarehouseListDto>(
    `/v1/inventory/warehouses${toQuery({
      page: params.page,
      limit: params.limit,
      type: params.type,
      isActive: params.isActive,
      search: params.search,
    })}`,
  );
}

export function getWarehouseDetail(id: string): Promise<WarehouseDetailDto> {
  return apiRequest<WarehouseDetailDto>(
    `/v1/inventory/warehouses/${encodeURIComponent(id)}/detail`,
  );
}

export function listLocations(
  warehouseId: string,
  params: { view?: string; page?: number; limit?: number; search?: string } = {},
): Promise<WarehouseLocationListDto> {
  return apiRequest<WarehouseLocationListDto>(
    `/v1/inventory/warehouses/${encodeURIComponent(warehouseId)}/locations${toQuery(
      {
        view: params.view,
        page: params.page,
        limit: params.limit,
        search: params.search,
      },
    )}`,
  );
}

export function listWarehouseDocuments(
  warehouseId: string,
  params: { page?: number; limit?: number } = {},
): Promise<InventoryDocumentListDto> {
  return apiRequest<InventoryDocumentListDto>(
    `/v1/inventory/warehouses/${encodeURIComponent(warehouseId)}/documents${toQuery(
      {
        page: params.page,
        limit: params.limit,
      },
    )}`,
  );
}

export function listAudit(params: {
  entityType: string;
  entityId: string;
  page?: number;
  limit?: number;
}): Promise<AuditListDto> {
  return apiRequest<AuditListDto>(
    `/v1/audit${toQuery({
      entityType: params.entityType,
      entityId: params.entityId,
      page: params.page,
      limit: params.limit,
    })}`,
  );
}

/** PT-BR labels for BFF primaryAction / availableActions. */
export const WAREHOUSE_ACTION_LABELS: Record<string, string> = {
  read: "Visualizar",
  update: "Editar",
  activate: "Ativar",
  deactivate: "Desativar",
  upload_document: "Enviar documento",
  create_location: "Nova posição",
  configure_levels: "Configurar níveis",
  request_override_deactivate: "Solicitar override",
};

export function primaryActionLabel(action: string | null | undefined): string {
  if (!action) return "Ação";
  return WAREHOUSE_ACTION_LABELS[action] ?? action;
}
