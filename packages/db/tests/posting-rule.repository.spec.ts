import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { PostingRule } from "@sunset/domain";
import { PrismaClient } from "@prisma/client";
import { PrismaPostingRuleRepository } from "../src/repositories/posting-rule.repository.prisma";

const DATABASE_URL = process.env.DATABASE_URL;
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("PrismaPostingRuleRepository (integration)", () => {
  let prisma: PrismaClient;
  let repo: PrismaPostingRuleRepository;
  const stamp = Date.now();

  beforeAll(async () => {
    prisma = new PrismaClient();
    repo = new PrismaPostingRuleRepository(prisma);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("saves and finds by id", async () => {
    const rule = PostingRule.create({
      name: `Rule ${stamp}`,
      eventType: `EVT_${stamp}`,
      originModule: "ACCOUNTING",
      lines: [
        {
          sequence: 1,
          debitAccountCode: "1",
          creditAccountCode: "4",
        },
      ],
    });
    await repo.save(rule);
    const found = await repo.findById(rule.id);
    expect(found?.name).toBe(`Rule ${stamp}`);
    expect(found?.lines).toHaveLength(1);
  });

  it("finds by event", async () => {
    const found = await repo.findByEvent(`EVT_${stamp}`, "ACCOUNTING");
    expect(found?.eventType).toBe(`EVT_${stamp}`);
  });

  it("finds active for date", async () => {
    const found = await repo.findActiveRulesForDate(
      `EVT_${stamp}`,
      "ACCOUNTING",
      new Date(),
    );
    expect(found).not.toBeNull();
  });

  it("lists with filter", async () => {
    const list = await repo.findAll({
      eventType: `EVT_${stamp}`,
      isActive: true,
    });
    expect(list.length).toBeGreaterThanOrEqual(1);
  });

  it("duplicate eventType+module+validFrom conflicts", async () => {
    const vf = new Date("2026-01-01T00:00:00.000Z");
    const a = PostingRule.create({
      name: "A",
      eventType: `DUP_${stamp}`,
      originModule: "SALES",
      validFrom: vf,
      lines: [
        { sequence: 1, debitAccountCode: "1", creditAccountCode: "4" },
      ],
    });
    await repo.save(a);
    const b = PostingRule.create({
      name: "B",
      eventType: `DUP_${stamp}`,
      originModule: "SALES",
      validFrom: vf,
      lines: [
        { sequence: 1, debitAccountCode: "1", creditAccountCode: "4" },
      ],
    });
    await expect(repo.save(b)).rejects.toThrow();
  });
});

describe("PrismaPostingRuleRepository export", () => {
  it("is defined", () => {
    expect(PrismaPostingRuleRepository).toBeDefined();
  });
});
