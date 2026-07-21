import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import {
  AppError,
  type CreatePostingRuleDto,
  type PostingRuleDto,
  type UpdatePostingRuleDto,
  ValidationError,
} from "@sunset/contracts";
import {
  ACCOUNT_REPOSITORY,
  type AccountRepository,
  DomainError,
  PostingRule,
  POSTING_RULE_REPOSITORY,
  type PostingRuleRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

@Injectable()
export class PostingRuleService {
  private readonly logger = createLogger({ name: "api.posting-rule" });

  constructor(
    @Inject(POSTING_RULE_REPOSITORY)
    private readonly ruleRepo: PostingRuleRepository,
    @Inject(ACCOUNT_REPOSITORY)
    private readonly accountRepo: AccountRepository,
  ) {}

  async findAll(query: {
    eventType?: string;
    originModule?: string;
    isActive?: string;
  }): Promise<PostingRuleDto[]> {
    const isActive =
      query.isActive === undefined
        ? undefined
        : query.isActive === "true" || query.isActive === "1";
    const list = await this.ruleRepo.findAll({
      eventType: query.eventType,
      originModule: query.originModule,
      isActive,
    });
    return list.map((r) => this.toDto(r));
  }

  async findById(id: string): Promise<PostingRuleDto> {
    const rule = await this.ruleRepo.findById(id);
    if (!rule) throw new NotFoundException(`Posting rule not found: ${id}`);
    return this.toDto(rule);
  }

  async create(
    dto: CreatePostingRuleDto,
    userId?: string,
  ): Promise<PostingRuleDto> {
    try {
      await this.assertAccountCodes(dto.lines);

      const existing = await this.ruleRepo.findByEvent(
        dto.eventType.trim(),
        dto.originModule.trim(),
      );
      if (existing?.isActive) {
        throw new AppError(
          `Active posting rule already exists for ${dto.eventType}/${dto.originModule}`,
          "DUPLICATE_RULE",
          409,
        );
      }

      const rule = PostingRule.create({
        name: dto.name,
        description: dto.description,
        eventType: dto.eventType,
        originModule: dto.originModule,
        validFrom: dto.validFrom,
        validUntil: dto.validUntil,
        createdById: userId,
        lines: dto.lines.map((l) => ({
          sequence: l.sequence,
          debitAccountCode: l.debitAccountCode,
          creditAccountCode: l.creditAccountCode,
          condition: l.condition,
          dimensionMapping: l.dimensionMapping as never,
          placeholders: l.placeholders,
        })),
      });
      await this.ruleRepo.save(rule);
      const snap = rule.toSnapshot();
      rule.pullEvents();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "posting-rule.create",
          entityType: "posting_rule",
          entityId: rule.id,
          after: snap as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      this.logger.info(
        {
          action: "POSTING_RULE_CREATED",
          name: rule.name,
          eventType: rule.eventType,
          originModule: rule.originModule,
        },
        "Posting rule created",
      );
      return this.toDto(rule);
    } catch (err) {
      this.rethrow(err);
    }
  }

  async update(
    id: string,
    dto: UpdatePostingRuleDto,
    userId?: string,
  ): Promise<PostingRuleDto> {
    try {
      const rule = await this.ruleRepo.findById(id);
      if (!rule) throw new NotFoundException(`Posting rule not found: ${id}`);
      if (dto.lines) {
        await this.assertAccountCodes(dto.lines);
      }
      const before = rule.toSnapshot();
      rule.update({
        name: dto.name,
        description: dto.description,
        validUntil: dto.validUntil,
        lines: dto.lines?.map((l) => ({
          sequence: l.sequence,
          debitAccountCode: l.debitAccountCode,
          creditAccountCode: l.creditAccountCode,
          condition: l.condition,
          dimensionMapping: l.dimensionMapping as never,
          placeholders: l.placeholders,
        })),
      });
      await this.ruleRepo.save(rule);
      const after = rule.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "posting-rule.update",
          entityType: "posting_rule",
          entityId: id,
          before: before as object,
          after: after as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      return this.toDto(rule);
    } catch (err) {
      this.rethrow(err);
    }
  }

  async deactivate(id: string, userId?: string): Promise<PostingRuleDto> {
    try {
      const rule = await this.ruleRepo.findById(id);
      if (!rule) throw new NotFoundException(`Posting rule not found: ${id}`);
      const before = rule.toSnapshot();
      rule.deactivate();
      await this.ruleRepo.save(rule);
      const after = rule.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "posting-rule.deactivate",
          entityType: "posting_rule",
          entityId: id,
          before: before as object,
          after: after as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      this.logger.info(
        { action: "POSTING_RULE_DEACTIVATED", id },
        "Posting rule deactivated",
      );
      return this.toDto(rule);
    } catch (err) {
      this.rethrow(err);
    }
  }

  async activate(id: string, userId?: string): Promise<PostingRuleDto> {
    try {
      const rule = await this.ruleRepo.findById(id);
      if (!rule) throw new NotFoundException(`Posting rule not found: ${id}`);

      const existing = await this.ruleRepo.findByEvent(
        rule.eventType,
        rule.originModule,
      );
      if (existing && existing.id !== rule.id && existing.isActive) {
        throw new AppError(
          `Active posting rule already exists for ${rule.eventType}/${rule.originModule}`,
          "DUPLICATE_RULE",
          409,
        );
      }

      const before = rule.toSnapshot();
      rule.activate();
      await this.ruleRepo.save(rule);
      const after = rule.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "posting-rule.activate",
          entityType: "posting_rule",
          entityId: id,
          before: before as object,
          after: after as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      return this.toDto(rule);
    } catch (err) {
      this.rethrow(err);
    }
  }

  private async assertAccountCodes(
    lines: Array<{ debitAccountCode: string; creditAccountCode: string }>,
  ): Promise<void> {
    const coa = await this.accountRepo.findActiveCoa();
    if (!coa) {
      throw new ValidationError("No active chart of accounts", {
        coa: ["missing"],
      });
    }
    const codes = new Set<string>();
    for (const l of lines) {
      if (l.debitAccountCode?.trim()) codes.add(l.debitAccountCode.trim());
      if (l.creditAccountCode?.trim()) codes.add(l.creditAccountCode.trim());
    }
    for (const code of codes) {
      const acc = await this.accountRepo.findByCode(coa.id, code);
      if (!acc || !acc.isActive) {
        throw new AppError(
          `Invalid account code: ${code}`,
          "INVALID_ACCOUNT_CODE",
          400,
        );
      }
    }
  }

  private toDto(rule: PostingRule): PostingRuleDto {
    const s = rule.toSnapshot();
    return {
      id: s.id,
      name: s.name,
      description: s.description,
      eventType: s.eventType,
      originModule: s.originModule,
      isActive: s.isActive,
      validFrom: s.validFrom,
      validUntil: s.validUntil,
      lines: s.lines.map((l) => ({
        id: l.id,
        sequence: l.sequence,
        debitAccountCode: l.debitAccountCode,
        creditAccountCode: l.creditAccountCode,
        condition: l.condition,
        dimensionMapping: l.dimensionMapping as Record<string, unknown> | null,
        placeholders: l.placeholders,
      })),
      createdAt: s.createdAt,
    };
  }

  private rethrow(err: unknown): never {
    if (
      err instanceof NotFoundException ||
      err instanceof AppError ||
      err instanceof ConflictException
    ) {
      throw err;
    }
    if (err instanceof DomainError) {
      const map: Record<string, { code: string; status: number }> = {
        MISSING_DEBIT_CREDIT: { code: "MISSING_DEBIT_CREDIT", status: 400 },
        INVALID_PLACEHOLDER: { code: "INVALID_PLACEHOLDER", status: 400 },
        INVALID_SEQUENCE: { code: "INVALID_SEQUENCE", status: 400 },
        DUPLICATE_RULE: { code: "DUPLICATE_RULE", status: 409 },
        INVALID_DATE_RANGE: { code: "INVALID_DATE_RANGE", status: 400 },
        VALIDATION_ERROR: { code: "VALIDATION_ERROR", status: 400 },
      };
      const m = map[err.code];
      if (m) {
        this.logger.warn(
          { errCode: err.code, message: err.message },
          "Posting rule validation failed",
        );
        throw new AppError(err.message, m.code, m.status);
      }
      throw new AppError(err.message, err.code, 400);
    }
    throw err;
  }
}
