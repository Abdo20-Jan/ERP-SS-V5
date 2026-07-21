import { NotFoundException } from "@nestjs/common";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { AppError } from "@sunset/contracts";
import {
  Account,
  AccountNature,
  AccountType,
  ChartOfAccounts,
  generateEntityId,
} from "@sunset/domain";
import { AccountingService } from "../accounting.service";

vi.mock("@sunset/db", () => ({
  prisma: { auditLog: { create: vi.fn().mockResolvedValue({}) } },
}));
vi.mock("@sunset/observability", () => ({
  createLogger: () => ({ info: vi.fn(), error: vi.fn() }),
  getCorrelationId: () => "corr",
}));

describe("AccountingService", () => {
  let service: AccountingService;
  let repo: Record<string, ReturnType<typeof vi.fn>>;

  beforeEach(() => {
    repo = {
      saveCoa: vi.fn().mockResolvedValue(undefined),
      findCoaById: vi.fn(),
      findActiveCoa: vi.fn(),
      save: vi.fn().mockResolvedValue(undefined),
      findById: vi.fn(),
      findByCode: vi.fn(),
      findChildren: vi.fn().mockResolvedValue([]),
      findTree: vi.fn().mockResolvedValue([]),
      findActiveAccounts: vi.fn().mockResolvedValue([]),
      delete: vi.fn().mockResolvedValue(undefined),
      countChildren: vi.fn().mockResolvedValue(0),
      countJournalLines: vi.fn().mockResolvedValue(0),
    };
    service = new AccountingService(repo as never);
  });

  it("creates COA", async () => {
    const r = await service.createCoa({ name: "Plano" });
    expect(r.name).toBe("Plano");
    expect(repo.saveCoa).toHaveBeenCalled();
  });

  it("createAccount rejects inconsistent type/nature", async () => {
    const coa = ChartOfAccounts.create({ name: "C" });
    repo.findCoaById.mockResolvedValue(coa);
    await expect(
      service.createAccount(coa.id, {
        code: "1",
        name: "A",
        type: "ASSET",
        nature: "CREDITOR",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("createAccount with parent", async () => {
    const coa = ChartOfAccounts.create({ name: "C" });
    const parent = Account.create({
      coaId: coa.id,
      code: "1",
      name: "ATIVO",
      type: AccountType.ASSET,
      nature: AccountNature.DEBITOR,
      isSystem: true,
    });
    repo.findCoaById.mockResolvedValue(coa);
    repo.findById.mockResolvedValue(parent);
    const r = await service.createAccount(coa.id, {
      code: "1.01",
      name: "Circulante",
      type: "ASSET",
      nature: "DEBITOR",
      parentId: parent.id,
    });
    expect(r.code).toBe("1.01");
    expect(r.level).toBe(2);
  });

  it("delete system account fails", async () => {
    const a = Account.create({
      coaId: generateEntityId(),
      code: "1",
      name: "ATIVO",
      type: AccountType.ASSET,
      nature: AccountNature.DEBITOR,
      isSystem: true,
    });
    repo.findById.mockResolvedValue(a);
    await expect(service.deleteAccount(a.id)).rejects.toBeInstanceOf(AppError);
  });

  it("getActiveCoa not found", async () => {
    repo.findActiveCoa.mockResolvedValue(null);
    await expect(service.getActiveCoa()).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });
});
