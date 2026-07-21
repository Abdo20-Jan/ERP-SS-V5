import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  Account,
  AccountNature,
  AccountType,
  ChartOfAccounts,
} from "@sunset/domain";
import { PrismaClient } from "@prisma/client";
import { PrismaAccountRepository } from "../src/repositories/account.repository.prisma";

const DATABASE_URL = process.env.DATABASE_URL;
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("PrismaAccountRepository (integration)", () => {
  let prisma: PrismaClient;
  let repo: PrismaAccountRepository;

  beforeAll(async () => {
    prisma = new PrismaClient();
    repo = new PrismaAccountRepository(prisma);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("saves and reloads COA", async () => {
    const coa = ChartOfAccounts.create({
      name: `COA ${Date.now()}`,
      description: "test",
    });
    await repo.saveCoa(coa);
    const loaded = await repo.findCoaById(coa.id);
    expect(loaded?.name).toBe(coa.name);
  });

  it("saves account hierarchy", async () => {
    const coa = ChartOfAccounts.create({ name: `COA-H ${Date.now()}` });
    await repo.saveCoa(coa);
    const parent = Account.create({
      coaId: coa.id,
      code: "1",
      name: "ATIVO",
      type: AccountType.ASSET,
      nature: AccountNature.DEBITOR,
      isSystem: true,
    });
    await repo.save(parent);
    const child = parent.createChild("01", "Circulante");
    await repo.save(child);
    const children = await repo.findChildren(parent.id);
    expect(children.some((c) => c.code === "1.01")).toBe(true);
    const tree = await repo.findTree(coa.id);
    expect(tree.length).toBeGreaterThanOrEqual(2);
  });

  it("finds by code", async () => {
    const coa = ChartOfAccounts.create({ name: `COA-C ${Date.now()}` });
    await repo.saveCoa(coa);
    const acc = Account.create({
      coaId: coa.id,
      code: "9",
      name: "CTRL",
      type: AccountType.CONTROL,
      nature: AccountNature.DEBITOR,
    });
    await repo.save(acc);
    const found = await repo.findByCode(coa.id, "9");
    expect(found?.id).toBe(acc.id);
  });

  it("lists active accounts only", async () => {
    const coa = ChartOfAccounts.create({ name: `COA-A ${Date.now()}` });
    await repo.saveCoa(coa);
    const a = Account.create({
      coaId: coa.id,
      code: "8",
      name: "X",
      type: AccountType.ASSET,
      nature: AccountNature.DEBITOR,
    });
    await repo.save(a);
    a.deactivate();
    await repo.save(a);
    const active = await repo.findActiveAccounts(coa.id);
    expect(active.every((x) => x.isActive)).toBe(true);
  });
});

describe("PrismaAccountRepository export", () => {
  it("is defined", () => {
    expect(PrismaAccountRepository).toBeDefined();
  });
});
