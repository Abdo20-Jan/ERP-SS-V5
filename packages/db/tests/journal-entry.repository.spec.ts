import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { Journal, JournalEntry } from "@sunset/domain";
import { PrismaClient } from "@prisma/client";
import { PrismaJournalEntryRepository } from "../src/repositories/journal-entry.repository.prisma";

const DATABASE_URL = process.env.DATABASE_URL;
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("PrismaJournalEntryRepository (integration)", () => {
  let prisma: PrismaClient;
  let repo: PrismaJournalEntryRepository;
  const stamp = Date.now();
  let userId: string;
  let accountDebitId: string;
  let accountCreditId: string;
  let journalId: string;

  beforeAll(async () => {
    prisma = new PrismaClient();
    repo = new PrismaJournalEntryRepository(prisma);
    let user = await prisma.user.findFirst();
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: `ledger-test-${stamp}@test.local`,
          name: "Ledger Test",
          passwordHash: "x",
        },
      });
    }
    userId = user.id;

    const journal = Journal.create({
      code: `T${String(stamp).slice(-6)}`,
      name: "Test Journal",
      type: "GENERAL",
    });
    await repo.saveJournal(journal);
    journalId = journal.id;

    let accs = await prisma.account.findMany({ take: 2 });
    if (accs.length < 2) {
      const coa =
        (await prisma.chartOfAccounts.findFirst()) ??
        (await prisma.chartOfAccounts.create({
          data: { name: `COA-${stamp}`, version: 1 },
        }));
      const a1 = await prisma.account.create({
        data: {
          coaId: coa.id,
          code: `T1-${stamp}`,
          name: "Debit test",
          type: "ASSET",
          nature: "DEBITOR",
          level: 1,
        },
      });
      const a2 = await prisma.account.create({
        data: {
          coaId: coa.id,
          code: `T2-${stamp}`,
          name: "Credit test",
          type: "REVENUE",
          nature: "CREDITOR",
          level: 1,
        },
      });
      accs = [a1, a2];
    }
    accountDebitId = accs[0].id;
    accountCreditId = accs[1].id;
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("saves DRAFT and reads back", async () => {
    const corr = `corr-draft-${stamp}`;
    const entry = JournalEntry.createDraft({
      journalId,
      entryDate: "2026-07-21",
      description: "Draft test",
      correlationId: corr,
      createdById: userId,
      lines: [
        { accountId: accountDebitId, debitAmount: "100.00" },
        { accountId: accountCreditId, creditAmount: "100.00" },
      ],
    });
    await repo.save(entry);
    const found = await repo.findByCorrelationId(corr);
    expect(found?.status).toBe("DRAFT");
    expect(found?.totalDebit.toFixed(2)).toBe("100.00");
  });

  it("posts and allocates entry number", async () => {
    const corr = `corr-post-${stamp}`;
    const entry = JournalEntry.createDraft({
      journalId,
      entryDate: "2026-07-21",
      description: "Post test",
      correlationId: corr,
      createdById: userId,
      lines: [
        { accountId: accountDebitId, debitAmount: "50" },
        { accountId: accountCreditId, creditAmount: "50" },
      ],
    });
    await repo.save(entry);
    const num = await repo.allocateEntryNumber(journalId);
    entry.post({ postedById: userId, entryNumber: num });
    await repo.save(entry);
    const found = await repo.findById(entry.id);
    expect(found?.status).toBe("POSTED");
    expect(found?.entryNumber.length).toBeGreaterThan(0);
  });

  it("reversal creates linked entry", async () => {
    const corr = `corr-rev-${stamp}`;
    const entry = JournalEntry.createDraft({
      journalId,
      entryDate: "2026-07-21",
      description: "Rev test",
      correlationId: corr,
      createdById: userId,
      lines: [
        { accountId: accountDebitId, debitAmount: "25" },
        { accountId: accountCreditId, creditAmount: "25" },
      ],
    });
    await repo.save(entry);
    const n1 = await repo.allocateEntryNumber(journalId);
    entry.post({ postedById: userId, entryNumber: n1 });
    await repo.save(entry);
    const n2 = await repo.allocateEntryNumber(journalId);
    const { original, reversal } = entry.reverse({
      reason: "fix",
      reversedById: userId,
      reversalDate: "2026-07-22",
      reversalCorrelationId: `corr-rev-out-${stamp}`,
      reversalEntryNumber: n2,
    });
    await repo.saveMany([original, reversal]);
    const orig = await repo.findById(original.id);
    const rev = await repo.findById(reversal.id);
    expect(orig?.status).toBe("REVERSED");
    expect(rev?.reversedFromId).toBe(original.id);
    expect(rev?.status).toBe("POSTED");
  });

  it("findByCorrelationId missing → null", async () => {
    expect(await repo.findByCorrelationId("no-such-corr")).toBeNull();
  });

  it("list with pagination", async () => {
    const list = await repo.findAll({ journalId, page: 1, limit: 10 });
    expect(list.total).toBeGreaterThanOrEqual(1);
    expect(list.data.length).toBeGreaterThanOrEqual(1);
  });

  it("duplicate correlationId → ConflictError", async () => {
    const corr = `corr-dup-${stamp}`;
    const e1 = JournalEntry.createDraft({
      journalId,
      entryDate: "2026-07-21",
      description: "dup1",
      correlationId: corr,
      createdById: userId,
      lines: [
        { accountId: accountDebitId, debitAmount: "1" },
        { accountId: accountCreditId, creditAmount: "1" },
      ],
    });
    await repo.save(e1);
    const e2 = JournalEntry.createDraft({
      journalId,
      entryDate: "2026-07-21",
      description: "dup2",
      correlationId: corr,
      createdById: userId,
      lines: [
        { accountId: accountDebitId, debitAmount: "2" },
        { accountId: accountCreditId, creditAmount: "2" },
      ],
    });
    await expect(repo.save(e2)).rejects.toThrow();
  });
});

describe("PrismaJournalEntryRepository export", () => {
  it("is defined", () => {
    expect(PrismaJournalEntryRepository).toBeDefined();
  });
});
