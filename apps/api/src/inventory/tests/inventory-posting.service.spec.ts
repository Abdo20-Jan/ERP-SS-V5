import { beforeEach, describe, expect, it, vi } from "vitest";
import { InventoryPostingService } from "../inventory-posting.service";
vi.mock("@sunset/db", () => ({ prisma: { $transaction: vi.fn(async (fn: any) => fn({ auditLog: { create: vi.fn() } })), auditLog: { create: vi.fn() } } }));
vi.mock("@sunset/observability", () => ({ createLogger: () => ({ info: vi.fn(), error: vi.fn() }), getCorrelationId: () => "corr-test" }));
describe("InventoryPostingService", () => {
  let svc: InventoryPostingService; let repo: any;
  beforeEach(() => { repo = { save: vi.fn(), findById: vi.fn(), findByIdempotencyKey: vi.fn().mockResolvedValue(null), findAll: vi.fn().mockResolvedValue({ data: [], total: 0 }) }; svc = new InventoryPostingService(repo); });
  it("creates proposal", async () => {
    const res = await svc.create({ sourceType: "MANUAL", sourceId: "s1", postingDate: "2026-07-01", description: "test", lines: [{ accountCode: "1.01.05", debit: "100.00", credit: "0" }, { accountCode: "6.01.01", debit: "0", credit: "100.00" }] }, "u1");
    expect(res.status).toBe("DRAFT");
    expect(res.lines.length).toBe(2);
  });
});
