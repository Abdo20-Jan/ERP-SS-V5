import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ValidationError } from "@sunset/contracts";
import {
  InventoryDocument,
  LocalFileStorageAdapter,
  sha256OfBuffer,
  Warehouse,
  WarehouseType,
} from "@sunset/domain";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { InventoryDocumentService } from "../inventory-document.service";

vi.mock("@sunset/db", () => ({
  prisma: {
    $transaction: vi.fn(async (fn: (tx: unknown) => Promise<unknown>) => {
      const tx = { auditLog: { create: vi.fn().mockResolvedValue({}) } };
      return fn(tx);
    }),
  },
}));

vi.mock("@sunset/observability", () => ({
  createLogger: () => ({ info: vi.fn(), error: vi.fn(), warn: vi.fn() }),
  getCorrelationId: () => "corr-doc",
}));

const USER = "11111111-1111-7111-8111-111111111111";
const WH_ID = "22222222-2222-7222-8222-222222222222";

describe("InventoryDocumentService", () => {
  let service: InventoryDocumentService;
  let docRepo: Record<string, ReturnType<typeof vi.fn>>;
  let warehouseRepo: Record<string, ReturnType<typeof vi.fn>>;
  let locationRepo: Record<string, ReturnType<typeof vi.fn>>;
  let tmp: string;

  beforeEach(() => {
    tmp = mkdtempSync(join(tmpdir(), "inv-doc-svc-"));
    docRepo = {
      save: vi.fn().mockResolvedValue(undefined),
      findById: vi.fn(),
      findByHashAndOwner: vi.fn().mockResolvedValue(null),
      findLatestVersion: vi.fn().mockResolvedValue(null),
      findVersions: vi.fn().mockResolvedValue([]),
      findAll: vi.fn().mockResolvedValue({ data: [], total: 0 }),
    };
    warehouseRepo = {
      findById: vi.fn().mockResolvedValue(
        Warehouse.create({ code: "TPX", name: "TPX", type: WarehouseType.TERCEIRIZADO }),
      ),
    };
    locationRepo = { findById: vi.fn() };
    service = new InventoryDocumentService(
      docRepo as never,
      new LocalFileStorageAdapter(tmp),
      warehouseRepo as never,
      locationRepo as never,
    );
  });

  afterEach(() => {
    rmSync(tmp, { recursive: true, force: true });
  });

  it("upload without owner fails", async () => {
    await expect(
      service.upload(
        {
          fileBase64: Buffer.from("%PDF").toString("base64"),
          fileName: "a.pdf",
          mimeType: "application/pdf",
          documentType: "BLUEPRINT",
        },
        USER,
      ),
    ).rejects.toBeInstanceOf(ValidationError);
  });

  it("upload creates v1", async () => {
    const buf = Buffer.from("%PDF-1.4 content");
    const result = await service.upload(
      {
        fileBase64: buf.toString("base64"),
        fileName: "planta.pdf",
        mimeType: "application/pdf",
        documentType: "BLUEPRINT",
        warehouseId: WH_ID,
      },
      USER,
    );
    expect(result.version).toBe(1);
    expect(result.sha256Hash).toBe(sha256OfBuffer(buf));
    expect(result.idempotent).toBe(false);
    expect(docRepo.save).toHaveBeenCalled();
  });

  it("same hash is idempotent", async () => {
    const buf = Buffer.from("%PDF-1.4 same");
    const hash = sha256OfBuffer(buf);
    const existing = InventoryDocument.upload({
      warehouseId: WH_ID,
      documentType: "BLUEPRINT",
      fileName: "planta.pdf",
      fileSize: buf.length,
      mimeType: "application/pdf",
      sha256Hash: hash,
      storagePath: "org/x.pdf",
      uploadedById: USER,
      version: 1,
    });
    docRepo.findByHashAndOwner.mockResolvedValue(existing);
    const result = await service.upload(
      {
        fileBase64: buf.toString("base64"),
        fileName: "planta.pdf",
        mimeType: "application/pdf",
        documentType: "BLUEPRINT",
        warehouseId: WH_ID,
      },
      USER,
    );
    expect(result.idempotent).toBe(true);
    expect(docRepo.save).not.toHaveBeenCalled();
  });

  it("second upload bumps version", async () => {
    const prev = InventoryDocument.upload({
      warehouseId: WH_ID,
      documentType: "BLUEPRINT",
      fileName: "planta.pdf",
      fileSize: 10,
      mimeType: "application/pdf",
      sha256Hash: "b".repeat(64),
      storagePath: "org/old.pdf",
      uploadedById: USER,
      version: 1,
    });
    docRepo.findLatestVersion.mockResolvedValue(prev);
    const buf = Buffer.from("%PDF-1.4 v2");
    const result = await service.upload(
      {
        fileBase64: buf.toString("base64"),
        fileName: "planta-v2.pdf",
        mimeType: "application/pdf",
        documentType: "BLUEPRINT",
        warehouseId: WH_ID,
      },
      USER,
    );
    expect(result.version).toBe(2);
    expect(result.previousVersionId).toBe(prev.id);
  });
});

