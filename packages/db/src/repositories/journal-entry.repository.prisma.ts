import { ConflictError } from "@sunset/contracts";
import {
  Decimal,
  Journal,
  JournalEntry,
  type JournalEntryListParams,
  type JournalEntryListResult,
  type JournalEntryRepository,
  type JournalEntrySnapshot,
  type JournalSnapshot,
  type LineItemSnapshot,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

type EntryRow = {
  id: string;
  organizationId: string;
  journalId: string;
  entryNumber: string;
  entryDate: Date;
  description: string;
  correlationId: string;
  originModule: string | null;
  originEntityType: string | null;
  originEntityId: string | null;
  status: string;
  createdById: string;
  postedById: string | null;
  postedAt: Date | null;
  reversedById: string | null;
  reversedAt: Date | null;
  reversedFromId: string | null;
  reversalReason: string | null;
  createdAt: Date;
  lines: Array<{
    id: string;
    accountId: string;
    debitAmount: Prisma.Decimal;
    creditAmount: Prisma.Decimal;
    originCurrency: string | null;
    originAmount: Prisma.Decimal | null;
    originExchangeRate: Prisma.Decimal | null;
    costCenterId: string | null;
    projectId: string | null;
    partyId: string | null;
    productId: string | null;
    description: string | null;
    reference: string | null;
  }>;
};

export class PrismaJournalEntryRepository implements JournalEntryRepository {
  constructor(private readonly db: PrismaClient = defaultPrisma) {}

  async save(entry: JournalEntry): Promise<void> {
    await this.persistEntries([entry]);
  }

  async saveMany(entries: JournalEntry[]): Promise<void> {
    await this.persistEntries(entries);
  }

  private async persistEntries(entries: JournalEntry[]): Promise<void> {
    try {
      await this.db.$transaction(async (tx) => {
        for (const entry of entries) {
          const s = entry.toSnapshot();
          await tx.journalEntry.upsert({
            where: { id: s.id },
            create: {
              id: s.id,
              organizationId: s.organizationId,
              journalId: s.journalId,
              entryNumber: s.entryNumber,
              entryDate: new Date(s.entryDate),
              description: s.description,
              correlationId: s.correlationId,
              originModule: s.originModule,
              originEntityType: s.originEntityType,
              originEntityId: s.originEntityId,
              status: s.status,
              createdById: s.createdById,
              postedById: s.postedById,
              postedAt: s.postedAt ? new Date(s.postedAt) : null,
              reversedById: s.reversedById,
              reversedAt: s.reversedAt ? new Date(s.reversedAt) : null,
              reversedFromId: s.reversedFromId,
              reversalReason: s.reversalReason,
              createdAt: new Date(s.createdAt),
              lines: {
                create: s.lines.map((l) => this.lineCreate(l)),
              },
            },
            update: {
              entryNumber: s.entryNumber,
              description: s.description,
              status: s.status,
              postedById: s.postedById,
              postedAt: s.postedAt ? new Date(s.postedAt) : null,
              reversedById: s.reversedById,
              reversedAt: s.reversedAt ? new Date(s.reversedAt) : null,
              reversedFromId: s.reversedFromId,
              reversalReason: s.reversalReason,
              lines: {
                deleteMany: {},
                create: s.lines.map((l) => this.lineCreate(l)),
              },
            },
          });
        }
      });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        throw new ConflictError(
          "Duplicate correlationId for journal entry",
          "JournalEntry",
        );
      }
      throw err;
    }
  }

  private lineCreate(l: LineItemSnapshot) {
    return {
      id: l.id,
      accountId: l.accountId,
      debitAmount: l.debitAmount,
      creditAmount: l.creditAmount,
      originCurrency: l.originCurrency,
      originAmount: l.originAmount,
      originExchangeRate: l.originExchangeRate,
      costCenterId: l.costCenterId,
      projectId: l.projectId,
      partyId: l.partyId,
      productId: l.productId,
      description: l.description,
      reference: l.reference,
    };
  }

  async findById(id: string): Promise<JournalEntry | null> {
    const row = await this.db.journalEntry.findUnique({
      where: { id },
      include: { lines: true },
    });
    return row ? this.toEntry(row as EntryRow) : null;
  }

  async findByCorrelationId(
    correlationId: string,
  ): Promise<JournalEntry | null> {
    const row = await this.db.journalEntry.findUnique({
      where: { correlationId },
      include: { lines: true },
    });
    return row ? this.toEntry(row as EntryRow) : null;
  }

  async findAll(
    params: JournalEntryListParams,
  ): Promise<JournalEntryListResult> {
    const page = Math.max(1, params.page ?? 1);
    const limit = Math.min(100, Math.max(1, params.limit ?? 20));
    const where: Prisma.JournalEntryWhereInput = {};
    if (params.journalId) where.journalId = params.journalId;
    if (params.status) where.status = params.status;
    if (params.startDate || params.endDate) {
      where.entryDate = {};
      if (params.startDate) where.entryDate.gte = params.startDate;
      if (params.endDate) where.entryDate.lte = params.endDate;
    }
    const [total, rows] = await Promise.all([
      this.db.journalEntry.count({ where }),
      this.db.journalEntry.findMany({
        where,
        include: { lines: true },
        orderBy: [{ entryDate: "desc" }, { createdAt: "desc" }],
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);
    return {
      data: rows.map((r) => this.toEntry(r as EntryRow)),
      total,
      page,
      limit,
    };
  }

  async saveJournal(journal: Journal): Promise<void> {
    const s = journal.toSnapshot();
    try {
      await this.db.journal.upsert({
        where: { code: s.code },
        create: {
          id: s.id,
          code: s.code,
          name: s.name,
          type: s.type,
          isActive: s.isActive,
          nextSequence: s.nextSequence,
          createdAt: new Date(s.createdAt),
        },
        update: {
          name: s.name,
          type: s.type,
          isActive: s.isActive,
          nextSequence: s.nextSequence,
        },
      });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        throw new ConflictError("Journal code already exists", "Journal");
      }
      throw err;
    }
  }

  async findJournalById(id: string): Promise<Journal | null> {
    const row = await this.db.journal.findUnique({ where: { id } });
    return row ? this.toJournal(row) : null;
  }

  async findJournalByCode(code: string): Promise<Journal | null> {
    const row = await this.db.journal.findUnique({ where: { code } });
    return row ? this.toJournal(row) : null;
  }

  async findAllJournals(): Promise<Journal[]> {
    const rows = await this.db.journal.findMany({ orderBy: { code: "asc" } });
    return rows.map((r) => this.toJournal(r));
  }

  async allocateEntryNumber(journalId: string): Promise<string> {
    const updated = await this.db.$transaction(async (tx) => {
      const j = await tx.journal.findUnique({ where: { id: journalId } });
      if (!j) throw new Error(`Journal not found: ${journalId}`);
      const seq = j.nextSequence;
      await tx.journal.update({
        where: { id: journalId },
        data: { nextSequence: seq + 1 },
      });
      return { code: j.code, seq };
    });
    return `${updated.code}-${String(updated.seq).padStart(6, "0")}`;
  }

  private toJournal(row: {
    id: string;
    code: string;
    name: string;
    type: string;
    isActive: boolean;
    nextSequence: number;
    createdAt: Date;
  }): Journal {
    const snap: JournalSnapshot = {
      id: row.id,
      code: row.code,
      name: row.name,
      type: row.type,
      isActive: row.isActive,
      nextSequence: row.nextSequence,
      createdAt: row.createdAt.toISOString(),
    };
    return Journal.rehydrate(snap);
  }

  private toEntry(row: EntryRow): JournalEntry {
    const lines: LineItemSnapshot[] = row.lines.map((l) => ({
      id: l.id,
      accountId: l.accountId,
      debitAmount: l.debitAmount.toFixed(2),
      creditAmount: l.creditAmount.toFixed(2),
      originCurrency: l.originCurrency,
      originAmount: l.originAmount ? l.originAmount.toFixed(2) : null,
      originExchangeRate: l.originExchangeRate
        ? l.originExchangeRate.toString()
        : null,
      costCenterId: l.costCenterId,
      projectId: l.projectId,
      partyId: l.partyId,
      productId: l.productId,
      description: l.description,
      reference: l.reference,
    }));
    const totalDebit = lines
      .reduce((acc, l) => acc.add(l.debitAmount), new Decimal(0))
      .toFixed(2);
    const totalCredit = lines
      .reduce((acc, l) => acc.add(l.creditAmount), new Decimal(0))
      .toFixed(2);
    const snap: JournalEntrySnapshot = {
      id: row.id,
      organizationId: row.organizationId,
      journalId: row.journalId,
      entryNumber: row.entryNumber,
      entryDate: row.entryDate.toISOString().slice(0, 10),
      description: row.description,
      correlationId: row.correlationId,
      originModule: row.originModule,
      originEntityType: row.originEntityType,
      originEntityId: row.originEntityId,
      status: row.status,
      createdById: row.createdById,
      postedById: row.postedById,
      postedAt: row.postedAt ? row.postedAt.toISOString() : null,
      reversedById: row.reversedById,
      reversedAt: row.reversedAt ? row.reversedAt.toISOString() : null,
      reversedFromId: row.reversedFromId,
      reversalReason: row.reversalReason,
      lines,
      totalDebit,
      totalCredit,
      createdAt: row.createdAt.toISOString(),
    };
    return JournalEntry.rehydrate(snap);
  }
}
