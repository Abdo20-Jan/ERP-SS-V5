export enum InventoryDocumentType {
  BLUEPRINT = "BLUEPRINT",
  PHOTO = "PHOTO",
  CERTIFICATE = "CERTIFICATE",
  LEASE = "LEASE",
  INSURANCE = "INSURANCE",
  OTHER = "OTHER",
}

const DOC_TYPES = Object.values(InventoryDocumentType);

export function isInventoryDocumentType(
  value: string,
): value is InventoryDocumentType {
  return DOC_TYPES.includes(value as InventoryDocumentType);
}

export enum InventoryDocumentClassification {
  PUBLIC = "PUBLIC",
  INTERNAL = "INTERNAL",
  CONFIDENTIAL = "CONFIDENTIAL",
}

const CLASSIFICATIONS = Object.values(InventoryDocumentClassification);

export function isInventoryDocumentClassification(
  value: string,
): value is InventoryDocumentClassification {
  return CLASSIFICATIONS.includes(value as InventoryDocumentClassification);
}

/** Default max upload size: 10 MiB */
export const INVENTORY_DOCUMENT_MAX_BYTES = 10 * 1024 * 1024;

export const INVENTORY_DOCUMENT_ALLOWED_MIME = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/jpg",
  "application/dxf",
  "image/vnd.dxf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export function isAllowedInventoryDocumentMime(mime: string): boolean {
  const m = mime.toLowerCase().trim();
  return (INVENTORY_DOCUMENT_ALLOWED_MIME as readonly string[]).includes(m);
}

export const DOWNLOAD_URL_TTL_SECONDS = 3600;
