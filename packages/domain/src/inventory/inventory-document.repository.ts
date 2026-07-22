import type { InventoryDocument } from "./inventory-document.aggregate";

export interface InventoryDocumentListFilters {
  warehouseId?: string;
  locationId?: string;
  documentType?: string;
  isArchived?: boolean;
  organizationId?: string;
  sha256Hash?: string;
}

export interface InventoryDocumentListResult {
  data: InventoryDocument[];
  total: number;
}

export type InventoryDocumentDbClient = unknown;

export interface InventoryDocumentRepository {
  save(
    doc: InventoryDocument,
    db?: InventoryDocumentDbClient,
  ): Promise<void>;
  findById(id: string): Promise<InventoryDocument | null>;
  findByHashAndOwner(
    sha256Hash: string,
    documentType: string,
    warehouseId: string | null,
    locationId: string | null,
  ): Promise<InventoryDocument | null>;
  findLatestVersion(
    documentType: string,
    warehouseId: string | null,
    locationId: string | null,
  ): Promise<InventoryDocument | null>;
  findVersions(
    documentType: string,
    warehouseId: string | null,
    locationId: string | null,
  ): Promise<InventoryDocument[]>;
  findAll(
    filters?: InventoryDocumentListFilters,
    page?: number,
    limit?: number,
  ): Promise<InventoryDocumentListResult>;
}

export const INVENTORY_DOCUMENT_REPOSITORY = Symbol(
  "InventoryDocumentRepository",
);
