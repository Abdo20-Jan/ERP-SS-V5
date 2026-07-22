import { describe, expect, it } from "vitest";
import {
  INVENTORY_DOCUMENT_EVENT_TYPES,
  type InventoryDocumentDto,
  type UploadInventoryDocumentDto,
} from "@sunset/contracts";

describe("Inventory document contracts", () => {
  it("UploadInventoryDocumentDto shape", () => {
    const dto: UploadInventoryDocumentDto = {
      fileBase64: Buffer.from("x").toString("base64"),
      fileName: "a.pdf",
      mimeType: "application/pdf",
      documentType: "BLUEPRINT",
      warehouseId: "22222222-2222-7222-8222-222222222222",
    };
    expect(dto.documentType).toBe("BLUEPRINT");
  });

  it("InventoryDocumentDto has version and hash", () => {
    const dto = {
      id: "x",
      organizationId: "org_001",
      warehouseId: "w",
      locationId: null,
      documentType: "PHOTO",
      fileName: "f.jpg",
      fileSize: 10,
      mimeType: "image/jpeg",
      sha256Hash: "a".repeat(64),
      storagePath: "p",
      version: 1,
      previousVersionId: null,
      classification: "INTERNAL",
      retentionDays: 365,
      description: null,
      tags: [],
      uploadedById: "u",
      uploadedAt: new Date().toISOString(),
      isArchived: false,
      archivedAt: null,
      archivedById: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } satisfies InventoryDocumentDto;
    expect(dto.version).toBe(1);
  });

  it("event types stable", () => {
    expect(INVENTORY_DOCUMENT_EVENT_TYPES.UPLOADED).toBe(
      "inventory.document.uploaded",
    );
  });
});
