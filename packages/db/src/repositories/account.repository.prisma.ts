import { ConflictError } from "@sunset/contracts";
import {
  Account,
  type AccountRepository,
  type AccountSnapshot,
  ChartOfAccounts,
  type ChartOfAccountsSnapshot,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

export class PrismaAccountRepository implements AccountRepository {
  constructor(private readonly db: PrismaClient = defaultPrisma) {}

  async saveCoa(coa: ChartOfAccounts): Promise<void> {
    const s = coa.toSnapshot();
    await this.db.chartOfAccounts.upsert({
      where: { id: s.id },
      create: {
        id: s.id,
        name: s.name,
        description: s.description,
        version: s.version,
        validFrom: new Date(s.validFrom),
        validUntil: s.validUntil ? new Date(s.validUntil) : null,
        isActive: s.isActive,
        createdAt: new Date(s.createdAt),
      },
      update: {
        name: s.name,
        description: s.description,
        isActive: s.isActive,
        validUntil: s.validUntil ? new Date(s.validUntil) : null,
      },
    });
  }

  async findCoaById(id: string): Promise<ChartOfAccounts | null> {
    const row = await this.db.chartOfAccounts.findUnique({ where: { id } });
    return row ? this.toCoa(row) : null;
  }

  async findActiveCoa(): Promise<ChartOfAccounts | null> {
    const row = await this.db.chartOfAccounts.findFirst({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });
    return row ? this.toCoa(row) : null;
  }

  async save(account: Account): Promise<void> {
    const s = account.toSnapshot();
    try {
      await this.db.account.upsert({
        where: { id: s.id },
        create: {
          id: s.id,
          coaId: s.coaId,
          code: s.code,
          name: s.name,
          type: s.type,
          nature: s.nature,
          parentId: s.parentId,
          level: s.level,
          isSystem: s.isSystem,
          isActive: s.isActive,
          allowManualPosting: s.allowManualPosting,
          description: s.description,
          validFrom: new Date(s.validFrom),
          validUntil: s.validUntil ? new Date(s.validUntil) : null,
          createdAt: new Date(s.createdAt),
          updatedAt: new Date(s.updatedAt),
        },
        update: {
          name: s.name,
          description: s.description,
          isActive: s.isActive,
          allowManualPosting: s.allowManualPosting,
          updatedAt: new Date(s.updatedAt),
        },
      });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        throw new ConflictError(
          "Account code already exists in this chart of accounts",
          "Account",
        );
      }
      throw err;
    }
  }

  async findById(id: string): Promise<Account | null> {
    const row = await this.db.account.findUnique({ where: { id } });
    return row ? this.toAccount(row) : null;
  }

  async findByCode(coaId: string, code: string): Promise<Account | null> {
    const row = await this.db.account.findUnique({
      where: { coaId_code: { coaId, code } },
    });
    return row ? this.toAccount(row) : null;
  }

  async findChildren(parentId: string): Promise<Account[]> {
    const rows = await this.db.account.findMany({
      where: { parentId },
      orderBy: { code: "asc" },
    });
    return rows.map((r) => this.toAccount(r));
  }

  async findTree(coaId: string): Promise<Account[]> {
    const rows = await this.db.account.findMany({
      where: { coaId },
      orderBy: { code: "asc" },
    });
    return rows.map((r) => this.toAccount(r));
  }

  async findActiveAccounts(coaId: string): Promise<Account[]> {
    const rows = await this.db.account.findMany({
      where: { coaId, isActive: true },
      orderBy: { code: "asc" },
    });
    return rows.map((r) => this.toAccount(r));
  }

  async delete(id: string): Promise<void> {
    await this.db.account.delete({ where: { id } });
  }

  async countChildren(accountId: string): Promise<number> {
    return this.db.account.count({ where: { parentId: accountId } });
  }

  async countJournalLines(_accountId: string): Promise<number> {
    // SS7 will implement journal lines; until then no postings exist.
    return 0;
  }

  private toCoa(row: {
    id: string;
    name: string;
    description: string | null;
    version: number;
    validFrom: Date;
    validUntil: Date | null;
    isActive: boolean;
    createdAt: Date;
  }): ChartOfAccounts {
    const snap: ChartOfAccountsSnapshot = {
      id: row.id,
      name: row.name,
      description: row.description,
      version: row.version,
      validFrom: row.validFrom.toISOString(),
      validUntil: row.validUntil ? row.validUntil.toISOString() : null,
      isActive: row.isActive,
      createdAt: row.createdAt.toISOString(),
    };
    return ChartOfAccounts.rehydrate(snap);
  }

  private toAccount(row: {
    id: string;
    coaId: string;
    code: string;
    name: string;
    type: string;
    nature: string;
    parentId: string | null;
    level: number;
    isSystem: boolean;
    isActive: boolean;
    allowManualPosting: boolean;
    description: string | null;
    validFrom: Date;
    validUntil: Date | null;
    createdAt: Date;
    updatedAt: Date;
  }): Account {
    const snap: AccountSnapshot = {
      id: row.id,
      coaId: row.coaId,
      code: row.code,
      name: row.name,
      type: row.type,
      nature: row.nature,
      parentId: row.parentId,
      level: row.level,
      isSystem: row.isSystem,
      isActive: row.isActive,
      allowManualPosting: row.allowManualPosting,
      description: row.description,
      validFrom: row.validFrom.toISOString(),
      validUntil: row.validUntil ? row.validUntil.toISOString() : null,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
    return Account.rehydrate(snap);
  }
}
