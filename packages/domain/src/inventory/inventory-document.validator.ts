import {
  InventoryDocumentFileTooLargeError,
  InventoryDocumentMimeNotAllowedError,
  InventoryDocumentValidationError,
} from "../common/errors";
import {
  INVENTORY_DOCUMENT_MAX_BYTES,
  InventoryDocumentClassification,
  InventoryDocumentType,
  isAllowedInventoryDocumentMime,
  isInventoryDocumentClassification,
  isInventoryDocumentType,
} from "./inventory-document.enums";

export function validateDocumentOwner(
  warehouseId?: string | null,
  locationId?: string | null,
): { warehouseId: string | null; locationId: string | null } {
  const w = warehouseId?.trim() || null;
  const l = locationId?.trim() || null;
  if (!w && !l) {
    throw new InventoryDocumentValidationError(
      "At least one of warehouseId or locationId is required",
    );
  }
  return { warehouseId: w, locationId: l };
}

export function validateDocumentType(value: string): InventoryDocumentType {
  if (!isInventoryDocumentType(value)) {
    throw new InventoryDocumentValidationError(
      `Invalid documentType: ${value}`,
      { documentType: value },
    );
  }
  return value;
}

export function validateClassification(
  value?: string | null,
): InventoryDocumentClassification | null {
  if (value == null || value.trim() === "") return null;
  if (!isInventoryDocumentClassification(value)) {
    throw new InventoryDocumentValidationError(
      `Invalid classification: ${value}`,
      { classification: value },
    );
  }
  return value;
}

export function validateFileMeta(
  fileName: string,
  fileSize: number,
  mimeType: string,
  sha256Hash: string,
): { fileName: string; mimeType: string; sha256Hash: string } {
  const name = fileName?.trim() ?? "";
  if (!name) {
    throw new InventoryDocumentValidationError("fileName is required");
  }
  if (!Number.isFinite(fileSize) || fileSize <= 0) {
    throw new InventoryDocumentValidationError("fileSize must be positive");
  }
  if (fileSize > INVENTORY_DOCUMENT_MAX_BYTES) {
    throw new InventoryDocumentFileTooLargeError(
      `File exceeds max size of ${INVENTORY_DOCUMENT_MAX_BYTES} bytes`,
      { fileSize, maxBytes: INVENTORY_DOCUMENT_MAX_BYTES },
    );
  }
  const mime = mimeType?.trim().toLowerCase() ?? "";
  if (!isAllowedInventoryDocumentMime(mime)) {
    throw new InventoryDocumentMimeNotAllowedError(
      `MIME type not allowed: ${mimeType}`,
      { mimeType },
    );
  }
  const hash = sha256Hash?.trim().toLowerCase() ?? "";
  if (!/^[0-9a-f]{64}$/.test(hash)) {
    throw new InventoryDocumentValidationError(
      "sha256Hash must be 64 hex characters",
    );
  }
  return { fileName: name, mimeType: mime, sha256Hash: hash };
}

export function validateRetentionDays(value?: number | null): number | null {
  if (value == null) return null;
  if (!Number.isInteger(value) || value < 1) {
    throw new InventoryDocumentValidationError(
      "retentionDays must be a positive integer",
      { retentionDays: value },
    );
  }
  return value;
}

export function validateDocumentActorId(id: string, field = "actorId"): string {
  const v = id?.trim() ?? "";
  if (!v) throw new InventoryDocumentValidationError(`${field} is required`);
  return v;
}
