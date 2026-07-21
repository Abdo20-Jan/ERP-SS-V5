import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import {
  AppError,
  type CreateDimensionDto,
  type DimensionDto,
  type DimensionRestrictionDto,
  type SetDimensionRestrictionDto,
  type UpdateDimensionDto,
  ValidationError,
} from "@sunset/contracts";
import {
  ACCOUNT_REPOSITORY,
  type AccountRepository,
  AccountingDimension,
  DIMENSION_REPOSITORY,
  type DimensionRepository,
  DomainError,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

@Injectable()
export class DimensionService {
  private readonly logger = createLogger({ name: "api.dimension" });

  constructor(
    @Inject(DIMENSION_REPOSITORY)
    private readonly dimensionRepo: DimensionRepository,
    @Inject(ACCOUNT_REPOSITORY)
    private readonly accountRepo: AccountRepository,
  ) {}

  async findAll(type?: string): Promise<DimensionDto[]> {
    const list = await this.dimensionRepo.findAll(
      type ? { type } : undefined,
    );
    return this.buildTree(list.map((d) => this.toDto(d)));
  }

  async findById(id: string): Promise<DimensionDto> {
    const d = await this.dimensionRepo.findById(id);
    if (!d) throw new NotFoundException(`Dimension not found: ${id}`);
    return this.toDto(d);
  }

  async create(
    dto: CreateDimensionDto,
    userId?: string,
  ): Promise<DimensionDto> {
    try {
      let parentType: string | null = null;
      let parentExists: boolean | undefined;
      if (dto.parentId) {
        const parent = await this.dimensionRepo.findById(dto.parentId);
        if (!parent) {
          throw new NotFoundException(
            `Parent dimension not found: ${dto.parentId}`,
          );
        }
        parentType = parent.type;
        parentExists = true;
      }

      const existing = await this.dimensionRepo.findByTypeAndCode(
        dto.type,
        dto.code.trim(),
      );
      if (existing) {
        throw new ConflictException(
          `Dimension already exists: ${dto.type}/${dto.code}`,
        );
      }

      const dimension = AccountingDimension.create({
        type: dto.type,
        code: dto.code,
        name: dto.name,
        description: dto.description,
        parentId: dto.parentId,
        parentType,
        parentExists,
      });
      await this.dimensionRepo.save(dimension);
      const snap = dimension.toSnapshot();
      dimension.pullEvents();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "dimension.create",
          entityType: "dimension",
          entityId: dimension.id,
          after: snap as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      this.logger.info(
        {
          action: "DIMENSION_CREATED",
          type: dimension.type,
          code: dimension.code,
        },
        "Dimension created",
      );
      return this.toDto(dimension);
    } catch (err) {
      this.rethrow(err);
    }
  }

  async update(
    id: string,
    dto: UpdateDimensionDto,
    userId?: string,
  ): Promise<DimensionDto> {
    try {
      const dimension = await this.dimensionRepo.findById(id);
      if (!dimension) throw new NotFoundException(`Dimension not found: ${id}`);
      const before = dimension.toSnapshot();
      dimension.update({
        name: dto.name,
        description: dto.description,
      });
      await this.dimensionRepo.save(dimension);
      const after = dimension.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "dimension.update",
          entityType: "dimension",
          entityId: id,
          before: before as object,
          after: after as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      return this.toDto(dimension);
    } catch (err) {
      this.rethrow(err);
    }
  }

  async deactivate(id: string, userId?: string): Promise<DimensionDto> {
    try {
      const dimension = await this.dimensionRepo.findById(id);
      if (!dimension) throw new NotFoundException(`Dimension not found: ${id}`);
      // SS7 will enforce journal-line checks; skeleton always allows deactivate
      await this.dimensionRepo.countJournalLines(id);
      const before = dimension.toSnapshot();
      dimension.deactivate();
      await this.dimensionRepo.save(dimension);
      const after = dimension.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "dimension.deactivate",
          entityType: "dimension",
          entityId: id,
          before: before as object,
          after: after as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      return this.toDto(dimension);
    } catch (err) {
      this.rethrow(err);
    }
  }

  async activate(id: string, userId?: string): Promise<DimensionDto> {
    try {
      const dimension = await this.dimensionRepo.findById(id);
      if (!dimension) throw new NotFoundException(`Dimension not found: ${id}`);
      const before = dimension.toSnapshot();
      dimension.activate();
      await this.dimensionRepo.save(dimension);
      const after = dimension.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "dimension.activate",
          entityType: "dimension",
          entityId: id,
          before: before as object,
          after: after as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      return this.toDto(dimension);
    } catch (err) {
      this.rethrow(err);
    }
  }

  async setRestriction(
    accountId: string,
    dto: SetDimensionRestrictionDto,
    userId?: string,
  ): Promise<DimensionRestrictionDto> {
    try {
      const account = await this.accountRepo.findById(accountId);
      if (!account) {
        throw new NotFoundException(`Account not found: ${accountId}`);
      }
      const dimension = await this.dimensionRepo.findById(dto.dimensionId);
      if (!dimension) {
        throw new NotFoundException(
          `Dimension not found: ${dto.dimensionId}`,
        );
      }
      const restriction = await this.dimensionRepo.setRestriction(
        accountId,
        dto.dimensionId,
        dto.restriction,
      );
      const snap = restriction.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "dimension.restriction.set",
          entityType: "account_dimension_restriction",
          entityId: accountId,
          after: snap as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      this.logger.info(
        {
          action: "RESTRICTION_SET",
          accountId,
          dimensionId: dto.dimensionId,
          restriction: dto.restriction,
        },
        "Account dimension restriction set",
      );
      return {
        ...snap,
        dimension: this.toDto(dimension),
      };
    } catch (err) {
      this.rethrow(err);
    }
  }

  async getRestrictions(
    accountId: string,
  ): Promise<DimensionRestrictionDto[]> {
    const account = await this.accountRepo.findById(accountId);
    if (!account) {
      throw new NotFoundException(`Account not found: ${accountId}`);
    }
    const list =
      await this.dimensionRepo.getRestrictionsByAccount(accountId);
    const result: DimensionRestrictionDto[] = [];
    for (const r of list) {
      const dim = await this.dimensionRepo.findById(r.dimensionId);
      result.push({
        ...r.toSnapshot(),
        dimension: dim ? this.toDto(dim) : undefined,
      });
    }
    return result;
  }

  async removeRestriction(
    accountId: string,
    dimensionId: string,
    userId?: string,
  ): Promise<void> {
    try {
      const account = await this.accountRepo.findById(accountId);
      if (!account) {
        throw new NotFoundException(`Account not found: ${accountId}`);
      }
      await this.dimensionRepo.removeRestriction(accountId, dimensionId);
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "dimension.restriction.remove",
          entityType: "account_dimension_restriction",
          entityId: accountId,
          after: { accountId, dimensionId } as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
    } catch (err) {
      this.rethrow(err);
    }
  }

  private toDto(d: AccountingDimension): DimensionDto {
    const s = d.toSnapshot();
    return {
      id: s.id,
      type: s.type,
      code: s.code,
      name: s.name,
      description: s.description,
      parentId: s.parentId,
      isActive: s.isActive,
      createdAt: s.createdAt,
      updatedAt: s.updatedAt,
    };
  }

  private buildTree(flat: DimensionDto[]): DimensionDto[] {
    const byId = new Map<string, DimensionDto>();
    for (const d of flat) {
      byId.set(d.id, { ...d, children: [] });
    }
    const roots: DimensionDto[] = [];
    for (const d of byId.values()) {
      if (d.parentId && byId.has(d.parentId)) {
        byId.get(d.parentId)!.children!.push(d);
      } else {
        roots.push(d);
      }
    }
    return roots;
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
      if (err.code === "INVALID_DIMENSION_TYPE") {
        throw new AppError(err.message, "INVALID_DIMENSION_TYPE", 400);
      }
      if (err.code === "INVALID_DIMENSION_HIERARCHY") {
        throw new AppError(err.message, "INVALID_DIMENSION_HIERARCHY", 400);
      }
      if (err.code === "INVALID_RESTRICTION") {
        throw new AppError(err.message, "INVALID_RESTRICTION", 400);
      }
      if (err.code === "VALIDATION_ERROR") {
        throw new ValidationError(err.message, { domain: [err.code] });
      }
      throw new AppError(err.message, err.code, 400);
    }
    throw err;
  }
}
