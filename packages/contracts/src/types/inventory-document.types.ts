export interface UploadInventoryDocumentDto {
  /** Base64 file content (Fastify API; multipart deferred) */
  fileBase64: string;
  fileName: string;
  mimeType: string;
  documentType: string;
  warehouseId?: string | null;
  locationId?: string | null;
  description?: string | null;
  classification?: string | null;
  retentionDays?: number | null;
  tags?: string[];
  organizationId?: string;
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
  idempotent?: boolean;
}

export interface InventoryDocumentListDto {
  data: InventoryDocumentDto[];
  total: number;
  page: number;
  limit: number;
}
