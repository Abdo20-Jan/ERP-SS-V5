import { beforeEach, describe, expect, it, vi } from "vitest";
import { InventorySoDService } from "../inventory-sod.service";
import { SoDEvaluationResult } from "@sunset/domain";

vi.mock("@sunset/db", () => ({
  prisma: {
    $transaction: vi.fn(async (fn: any) => fn({ auditLog: { create: vi.fn() } })),
    auditLog: { create: vi.fn() },
  },
}));

vi.mock("@sunset/observability", () => ({
  createLogger: () => ({ info: vi.fn(), error: vi.fn(), warn: vi.fn() }),
  getCorrelationId: () => "corr-test",
}));

describe("InventorySoDService", () => {
  let service: InventorySoDService;
  let repo: any;

  beforeEach(() => {
    repo = {
      saveRule: vi.fn(), findRuleById: vi.fn(), findActiveRules: vi.fn().mockResolvedValue([]),
      findRules: vi.fn().mockResolvedValue({ data: [], total: 0 }),
      saveViolation: vi.fn(), findViolationById: vi.fn(), findViolations: vi.fn().mockResolvedValue({ data: [], total: 0 }),
      saveException: vi.fn(), findExceptionById: vi.fn(), findExceptions: vi.fn().mockResolvedValue({ data: [], total: 0 }),
      findApprovedActiveException: vi.fn().mockResolvedValue(null),
    };
    service = new InventorySoDService(repo);
  });

  it("evaluates allowed when no rules", async () => {
    const res = await service.evaluate({ action: "test", resourceType: "wh", resourceId: "w1" }, "u1", [], []);
    expect(res.result).toBe(SoDEvaluationResult.ALLOWED);
  });

  it("creates rule", async () => {
    const res = await service.createRule({
      code: "R1", name: "Rule 1", action: "test", resourceType: "wh", severity: "HIGH", incompatiblePermission: "other:write",
    }, "u1");
    expect(res.code).toBe("R1");
    expect(repo.saveRule).toHaveBeenCalled();
  });
});
