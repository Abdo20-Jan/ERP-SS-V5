import { ConflictError } from "@sunset/contracts";
import {
  AccountDimensionRestriction,
  AccountingDimension,
  type AccountingDimensionSnapshot,
  type DimensionRepository,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

export class PrismaDimensionRepository implements DimensionRepository {
  constructor(private readonly db: PrismaClient = defaultPrisma) {}

  async save(dimension: AccountingDimension): Promise<void> {
    const s = dimension.toSnapshot();
    try {
      await this.db.dimensionDefinition.upsert({
        where: {
          type_code: { type: s.type, code: s.code },
        },
        create: {
          id: s.id,
          type: s.type,
          code: s.code,
          name: s.name,
          description: s.description,
          parentId: s.parentId,
          isActive: s.isActive,
          createdAt: new Date(s.createdAt),
          updatedAt: new Date(s.updatedAt),
        },
        update: {
          name: s.name,
          description: s.description,
          parentId: s.parentId,
          isActive: s.isActive,
          updatedAt: new Date(s.updatedAt),
        },
      });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        throw new ConflictError(
          "Dimension type+code already exists",
          "Dimension",
        );
      }
      throw err;
    }
  }

  async findById(id: string): Promise<AccountingDimension | null> {
    const row = await this.db.dimensionDefinition.findUnique({ where: { id } });
    return row ? this.toDimension(row) : null;
  }

  async findByTypeAndCode(
    type: string,
    code: string,
  ): Promise<AccountingDimension | null> {
    const row = await this.db.dimensionDefinition.findUnique({
      where: { type_code: { type, code } },
    });
    return row ? this.toDimension(row) : null;
  }

  async findByType(type: string): Promise<AccountingDimension[]> {
    const rows = await this.db.dimensionDefinition.findMany({
      where: { type },
      orderBy: { code: "asc" },
    });
    return rows.map((r) => this.toDimension(r));
  }

  async findChildren(parentId: string): Promise<AccountingDimension[]> {
    const rows = await this.db.dimensionDefinition.findMany({
      where: { parentId },
      orderBy: { code: "asc" },
    });
    return rows.map((r) => this.toDimension(r));
  }

  async findAll(params?: {
    type?: string;
    isActive?: boolean;
  }): Promise<AccountingDimension[]> {
    const rows = await this.db.dimensionDefinition.findMany({
      where: {
        ...(params?.type ? { type: params.type } : {}),
        ...(params?.isActive !== undefined
          ? { isActive: params.isActive }
          : {}),
      },
      orderBy: [{ type: "asc" }, { code: "asc" }],
    });
    return rows.map((r) => this.toDimension(r));
  }

  async setRestriction(
    accountId: string,
    dimensionId: string,
    restriction: string,
  ): Promise<AccountDimensionRestriction> {
    const vo = AccountDimensionRestriction.create(
      accountId,
      dimensionId,
      restriction,
    );
    await this.db.accountDimensionRestriction.upsert({
      where: {
        accountId_dimensionId: {
          accountId: vo.accountId,
          dimensionId: vo.dimensionId,
        },
      },
      create: {
        accountId: vo.accountId,
        dimensionId: vo.dimensionId,
        restriction: vo.restriction,
      },
      update: { restriction: vo.restriction },
    });
    return vo;
  }

  async getRestrictionsByAccount(
    accountId: string,
  ): Promise<AccountDimensionRestriction[]> {
    const rows = await this.db.accountDimensionRestriction.findMany({
      where: { accountId },
    });
    return rows.map((r) =>
      AccountDimensionRestriction.rehydrate({
        accountId: r.accountId,
        dimensionId: r.dimensionId,
        restriction: r.restriction as "REQUIRED" | "PROHIBITED" | "OPTIONAL",
      }),
    );
  }

  async getRestrictionsByDimension(
    dimensionId: string,
  ): Promise<AccountDimensionRestriction[]> {
    const rows = await this.db.accountDimensionRestriction.findMany({
      where: { dimensionId },
    });
    return rows.map((r) =>
      AccountDimensionRestriction.rehydrate({
        accountId: r.accountId,
        dimensionId: r.dimensionId,
        restriction: r.restriction as "REQUIRED" | "PROHIBITED" | "OPTIONAL",
      }),
    );
  }

  async removeRestriction(
    accountId: string,
    dimensionId: string,
  ): Promise<void> {
    await this.db.accountDimensionRestriction.deleteMany({
      where: { accountId, dimensionId },
    });
  }

  async countJournalLines(_dimensionId: string): Promise<number> {
    return 0;
  }

  private toDimension(row: {
    id: string;
    type: string;
    code: string;
    name: string;
    description: string | null;
    parentId: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  }): AccountingDimension {
    const snap: AccountingDimensionSnapshot = {
      id: row.id,
      type: row.type,
      code: row.code,
      name: row.name,
      description: row.description,
      parentId: row.parentId,
      isActive: row.isActive,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
    return AccountingDimension.rehydrate(snap);
  }
}
