import { ConflictError } from "@sunset/contracts";
import {
  PostingRule,
  type PostingRuleListParams,
  type PostingRuleRepository,
  type PostingRuleSnapshot,
  type PostingRuleLineSnapshot,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

type RuleRow = {
  id: string;
  name: string;
  description: string | null;
  eventType: string;
  originModule: string;
  validFrom: Date;
  validUntil: Date | null;
  isActive: boolean;
  createdAt: Date;
  createdBy: string | null;
  lines: Array<{
    id: string;
    sequence: number;
    debitAccountCode: string;
    creditAccountCode: string;
    condition: string | null;
    dimensionMapping: Prisma.JsonValue | null;
    placeholders: Prisma.JsonValue | null;
  }>;
};

export class PrismaPostingRuleRepository implements PostingRuleRepository {
  constructor(private readonly db: PrismaClient = defaultPrisma) {}

  async save(rule: PostingRule): Promise<void> {
    const s = rule.toSnapshot();
    try {
      await this.db.$transaction(async (tx) => {
        await tx.postingRule.upsert({
          where: { id: s.id },
          create: {
            id: s.id,
            name: s.name,
            description: s.description,
            eventType: s.eventType,
            originModule: s.originModule,
            validFrom: new Date(s.validFrom),
            validUntil: s.validUntil ? new Date(s.validUntil) : null,
            isActive: s.isActive,
            createdAt: new Date(s.createdAt),
            createdBy: s.createdById,
            lines: {
              create: s.lines.map((l) => this.lineCreate(l)),
            },
          },
          update: {
            name: s.name,
            description: s.description,
            validUntil: s.validUntil ? new Date(s.validUntil) : null,
            isActive: s.isActive,
            lines: {
              deleteMany: {},
              create: s.lines.map((l) => this.lineCreate(l)),
            },
          },
        });
      });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        throw new ConflictError(
          "Posting rule already exists for eventType/originModule/validFrom",
          "PostingRule",
        );
      }
      throw err;
    }
  }

  private lineCreate(l: PostingRuleLineSnapshot) {
    return {
      id: l.id,
      sequence: l.sequence,
      debitAccountCode: l.debitAccountCode,
      creditAccountCode: l.creditAccountCode,
      condition: l.condition,
      dimensionMapping: l.dimensionMapping
        ? (l.dimensionMapping as Prisma.InputJsonValue)
        : Prisma.JsonNull,
      placeholders: l.placeholders as unknown as Prisma.InputJsonValue,
    };
  }

  async findById(id: string): Promise<PostingRule | null> {
    const row = await this.db.postingRule.findUnique({
      where: { id },
      include: { lines: { orderBy: { sequence: "asc" } } },
    });
    return row ? this.toRule(row as RuleRow) : null;
  }

  async findByEvent(
    eventType: string,
    originModule: string,
  ): Promise<PostingRule | null> {
    const row = await this.db.postingRule.findFirst({
      where: { eventType, originModule, isActive: true },
      include: { lines: { orderBy: { sequence: "asc" } } },
      orderBy: { validFrom: "desc" },
    });
    return row ? this.toRule(row as RuleRow) : null;
  }

  async findAll(params?: PostingRuleListParams): Promise<PostingRule[]> {
    const rows = await this.db.postingRule.findMany({
      where: {
        ...(params?.eventType ? { eventType: params.eventType } : {}),
        ...(params?.originModule
          ? { originModule: params.originModule }
          : {}),
        ...(params?.isActive !== undefined
          ? { isActive: params.isActive }
          : {}),
      },
      include: { lines: { orderBy: { sequence: "asc" } } },
      orderBy: [{ eventType: "asc" }, { originModule: "asc" }],
    });
    return rows.map((r) => this.toRule(r as RuleRow));
  }

  async findActiveRulesForDate(
    eventType: string,
    originModule: string,
    date: Date,
  ): Promise<PostingRule | null> {
    const row = await this.db.postingRule.findFirst({
      where: {
        eventType,
        originModule,
        isActive: true,
        validFrom: { lte: date },
        OR: [{ validUntil: null }, { validUntil: { gt: date } }],
      },
      include: { lines: { orderBy: { sequence: "asc" } } },
      orderBy: { validFrom: "desc" },
    });
    return row ? this.toRule(row as RuleRow) : null;
  }

  private toRule(row: RuleRow): PostingRule {
    const lines: PostingRuleLineSnapshot[] = row.lines.map((l) => ({
      id: l.id,
      sequence: l.sequence,
      debitAccountCode: l.debitAccountCode,
      creditAccountCode: l.creditAccountCode,
      condition: l.condition,
      dimensionMapping: (l.dimensionMapping as PostingRuleLineSnapshot["dimensionMapping"]) ?? null,
      placeholders: Array.isArray(l.placeholders)
        ? (l.placeholders as unknown as PostingRuleLineSnapshot["placeholders"])
        : [],
    }));
    const snap: PostingRuleSnapshot = {
      id: row.id,
      name: row.name,
      description: row.description,
      eventType: row.eventType,
      originModule: row.originModule,
      validFrom: row.validFrom.toISOString(),
      validUntil: row.validUntil ? row.validUntil.toISOString() : null,
      isActive: row.isActive,
      createdById: row.createdBy,
      lines,
      createdAt: row.createdAt.toISOString(),
    };
    return PostingRule.rehydrate(snap);
  }
}
