import { beforeEach, describe, expect, it, vi } from "vitest";
import { InventoryImportExportService } from "../inventory-import-export.service";
vi.mock("@sunset/db", () => ({ prisma: { $transaction: vi.fn(async (fn: any) => fn({ auditLog: { create: vi.fn() } })), auditLog: { create: vi.fn() } } }));
vi.mock("@sunset/observability", () => ({ createLogger: () => ({ info: vi.fn(), error: vi.fn() }), getCorrelationId: () => "corr-test" }));
describe("InventoryImportExportService", () => {
  let svc: InventoryImportExportService; let repo: any;
  beforeEach(() => { repo = { saveImportJob: vi.fn(), findImportJobById: vi.fn(), findImportJobByIdempotencyKey: vi.fn().mockResolvedValue(null), listImportJobs: vi.fn().mockResolvedValue({ data: [], total: 0 }), saveImportErrors: vi.fn(), getImportErrors: vi.fn().mockResolvedValue([]), saveExportJob: vi.fn(), findExportJobById: vi.fn(), listExportJobs: vi.fn().mockResolvedValue({ data: [], total: 0 }) }; svc = new InventoryImportExportService(repo); });
  it("creates import job", async () => { const r = await svc.createImport({ kind: "WAREHOUSE", fileName: "f.csv", fileMimeType: "text/csv", fileSize: 100, fileHash: "abc" }, "u1"); expect(r.status).toBe("PENDING"); });
  it("creates export job", async () => { const r = await svc.createExport({ kind: "WAREHOUSE", format: "csv" }, "u1"); expect(r.status).toBe("PENDING"); });
});
