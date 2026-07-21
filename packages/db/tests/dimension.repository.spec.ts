import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { AccountingDimension } from "@sunset/domain";
import { PrismaClient } from "@prisma/client";
import { PrismaDimensionRepository } from "../src/repositories/dimension.repository.prisma";

const DATABASE_URL = process.env.DATABASE_URL;
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("PrismaDimensionRepository (integration)", () => {
  let prisma: PrismaClient;
  let repo: PrismaDimensionRepository;
  const stamp = Date.now();

  beforeAll(async () => {
    prisma = new PrismaClient();
    repo = new PrismaDimensionRepository(prisma);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("saves and finds by type+code", async () => {
    const d = AccountingDimension.create({
      type: "COST_CENTER",
      code: `CC-T-${stamp}`,
      name: "Test CC",
    });
    await repo.save(d);
    const found = await repo.findByTypeAndCode("COST_CENTER", `CC-T-${stamp}`);
    expect(found?.code).toBe(`CC-T-${stamp}`);
    expect(found?.name).toBe("Test CC");
  });

  it("saves hierarchy and finds children", async () => {
    const parent = AccountingDimension.create({
      type: "PROJECT",
      code: `PR-P-${stamp}`,
      name: "Parent",
    });
    await repo.save(parent);
    const child = parent.createChild(`PR-C-${stamp}`, "Child");
    await repo.save(child);
    const children = await repo.findChildren(parent.id);
    expect(children.some((c) => c.code === `PR-C-${stamp}`)).toBe(true);
  });

  it("lists by type", async () => {
    const list = await repo.findByType("COST_CENTER");
    expect(list.every((d) => d.type === "COST_CENTER")).toBe(true);
  });

  it("sets and reads restrictions", async () => {
    const account = await prisma.account.findFirst();
    if (!account) {
      // no COA seed in empty DB — skip soft
      expect(true).toBe(true);
      return;
    }
    const dim = AccountingDimension.create({
      type: "REGION",
      code: `RG-${stamp}`,
      name: "Region",
    });
    await repo.save(dim);
    await repo.setRestriction(account.id, dim.id, "REQUIRED");
    const list = await repo.getRestrictionsByAccount(account.id);
    expect(
      list.some(
        (r) => r.dimensionId === dim.id && r.restriction === "REQUIRED",
      ),
    ).toBe(true);
    await repo.removeRestriction(account.id, dim.id);
    const after = await repo.getRestrictionsByAccount(account.id);
    expect(after.some((r) => r.dimensionId === dim.id)).toBe(false);
  });
});

describe("PrismaDimensionRepository export", () => {
  it("is defined", () => {
    expect(PrismaDimensionRepository).toBeDefined();
  });
});
