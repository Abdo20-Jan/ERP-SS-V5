import { describe, expect, it } from "vitest";
import {
  InventoryDocument,
  InventoryDocumentFileTooLargeError,
  InventoryDocumentMimeNotAllowedError,
  InventoryDocumentValidationError,
  INVENTORY_DOCUMENT_MAX_BYTES,
  LocalFileStorageAdapter,
  sha256OfBuffer,
  verifySignedPath,
} from "../../src";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const USER = "11111111-1111-7111-8111-111111111111";
const WH = "22222222-2222-7222-8222-222222222222";
const HASH = "a".repeat(64);

function baseCmd(over: Record<string, unknown> = {}) {
  return {
    warehouseId: WH,
    documentType: "BLUEPRINT",
    fileName: "planta.pdf",
    fileSize: 1024,
    mimeType: "application/pdf",
    sha256Hash: HASH,
    storagePath: "org_001/inventory/x/BLUEPRINT/a.pdf",
    uploadedById: USER,
    ...over,
  };
}

describe("InventoryDocument", () => {
  it("rejects upload without warehouseId and locationId", () => {
    expect(() =>
      InventoryDocument.upload(
        baseCmd({ warehouseId: null, locationId: null }) as never,
      ),
    ).toThrow(InventoryDocumentValidationError);
  });

  it("rejects file larger than max", () => {
    expect(() =>
      InventoryDocument.upload(
        baseCmd({ fileSize: INVENTORY_DOCUMENT_MAX_BYTES + 1 }) as never,
      ),
    ).toThrow(InventoryDocumentFileTooLargeError);
  });

  it("rejects disallowed mime", () => {
    expect(() =>
      InventoryDocument.upload(
        baseCmd({ mimeType: "application/zip" }) as never,
      ),
    ).toThrow(InventoryDocumentMimeNotAllowedError);
  });

  it("creates version 1 and archives", () => {
    const doc = InventoryDocument.upload(baseCmd() as never);
    expect(doc.version).toBe(1);
    expect(doc.isArchived).toBe(false);
    doc.archive({ documentId: doc.id, archivedById: USER });
    expect(doc.isArchived).toBe(true);
    doc.restore({ documentId: doc.id, restoredById: USER });
    expect(doc.isArchived).toBe(false);
  });

  it("rehydrate roundtrip", () => {
    const doc = InventoryDocument.upload(
      baseCmd({ version: 2, previousVersionId: "33333333-3333-7333-8333-333333333333" }) as never,
    );
    const snap = doc.toSnapshot();
    expect(InventoryDocument.rehydrate(snap).toSnapshot()).toEqual(snap);
  });
});

describe("LocalFileStorageAdapter", () => {
  it("saves file and signs download url", async () => {
    const dir = mkdtempSync(join(tmpdir(), "inv-doc-"));
    try {
      const storage = new LocalFileStorageAdapter(dir);
      const buf = Buffer.from("%PDF-1.4 test");
      const hash = sha256OfBuffer(buf);
      const saved = await storage.save({
        buffer: buf,
        fileName: "a.pdf",
        mimeType: "application/pdf",
        organizationId: "org_001",
        warehouseId: WH,
        documentType: "BLUEPRINT",
        sha256Hash: hash,
      });
      expect(saved.sha256Hash).toBe(hash);
      const read = await storage.read(saved.storagePath);
      expect(read.equals(buf)).toBe(true);
      const { url } = await storage.getDownloadUrl(saved.storagePath, 60);
      const u = new URL(url, "http://localhost");
      const exp = Number(u.searchParams.get("exp"));
      const sig = u.searchParams.get("sig")!;
      const path = u.searchParams.get("path")!;
      expect(verifySignedPath(path, exp, sig)).toBe(true);
      expect(verifySignedPath(path, exp - 7200, sig)).toBe(false);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
