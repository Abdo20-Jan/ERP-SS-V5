import type {
  InventoryDocumentClassification,
  InventoryDocumentType,
} from "./inventory-document.enums";

export interface UploadInventoryDocumentCommand {
  organizationId?: string;
  warehouseId?: string | null;
  locationId?: string | null;
  documentType: InventoryDocumentType | string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  sha256Hash: string;
  storagePath: string;
  classification?: InventoryDocumentClassification | string | null;
  retentionDays?: number | null;
  description?: string | null;
  tags?: string[];
  uploadedById: string;
  id?: string;
  /** When creating a new version chain link */
  previousVersionId?: string | null;
  version?: number;
}

export interface ArchiveInventoryDocumentCommand {
  documentId: string;
  archivedById: string;
}

export interface RestoreInventoryDocumentCommand {
  documentId: string;
  restoredById: string;
}
