import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import {
  AppError,
  ConflictError,
  type ExecuteOverrideDto,
  type OverrideExecuteResultDto,
  type OverrideHistoryItemDto,
  type OverrideListDto,
  type OverrideRequestDto,
  type RequestOverrideDto,
  type RejectOverrideDto,
  type WarningDto,
  ValidationError,
} from "@sunset/contracts";
import {
  DomainError,
  INVENTORY_BALANCE_PORT,
  type InventoryBalancePort,
  OVERRIDE_REQUEST_REPOSITORY,
  OverrideAction,
  OverridePendingExistsError,
  OverrideRequest,
  OverrideResourceType,
  type OverrideRequestRepository,
  WAREHOUSE_LOCATION_REPOSITORY,
  WAREHOUSE_REPOSITORY,
  WarehouseHasActiveLocationsError,
  WarehouseHasPositiveBalanceError,
  type WarehouseLocationRepository,
  type WarehouseRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

@Injectable()
export class OverrideService {
  private readonly logger = createLogger({ name: "api.inventory.override" });

  constructor(
    @Inject(OVERRIDE_REQUEST_REPOSITORY)
    private readonly overrideRepository: OverrideRequestRepository,
    @Inject(WAREHOUSE_REPOSITORY)
    private readonly warehouseRepository: WarehouseRepository,
    @Inject(WAREHOUSE_LOCATION_REPOSITORY)
    private readonly locationRepository: WarehouseLocationRepository,
    @Inject(INVENTORY_BALANCE_PORT)
    private readonly balancePort: InventoryBalancePort,
  ) {}

  async request(dto: RequestOverrideDto, userId: string): Promise<OverrideRequestDto> {
    try {
      const org = dto.organizationId ?? "org_001";
      const pending = await this.overrideRepository.findPending(org, dto.action, dto.resourceType, dto.resourceId);
      if (pending) {
        throw new OverridePendingExistsError("A pending override already exists for this resource/action", {
          resourceId: dto.resourceId, action: dto.action,
        });
      }
      await this.assertResourceExists(dto.resourceType, dto.resourceId);
      const warnings = await this.buildRequestWarnings(dto);
      const override = OverrideRequest.request({
        action: dto.action, resourceType: dto.resourceType, resourceId: dto.resourceId,
        reason: dto.reason, evidenceUrl: dto.evidenceUrl, requestedById: userId, organizationId: org,
      });
      const snap = override.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.overrideRepository.save(override, tx);
        await tx.auditLog.create({
          data: {
            userId, action: "override.requested", entityType: "override_request", entityId: override.id,
            before: null, after: snap as object, metadata: { warnings },
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      override.pullEvents();
      this.logger.info({ action: "OVERRIDE_REQUESTED", overrideId: override.id }, "Override requested");
      return { ...snap, warnings } as OverrideRequestDto;
    } catch (err) { this.rethrow(err); }
  }

  async list(query: { status?: string; action?: string; requestedById?: string; resourceType?: string; resourceId?: string; page?: number; limit?: number; }): Promise<OverrideListDto> {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const result = await this.overrideRepository.findAll({
      status: query.status, action: query.action, requestedById: query.requestedById,
      resourceType: query.resourceType, resourceId: query.resourceId,
    }, page, limit);
    const data: OverrideRequestDto[] = [];
    for (const o of result.data) {
      if (o.refreshExpiry()) await this.overrideRepository.save(o);
      data.push(o.toSnapshot() as OverrideRequestDto);
    }
    return { data, total: result.total, page, limit };
  }

  async getById(id: string): Promise<OverrideRequestDto> {
    const o = await this.requireOverride(id);
    if (o.refreshExpiry()) await this.overrideRepository.save(o);
    return o.toSnapshot() as OverrideRequestDto;
  }

  async approve(id: string, userId: string): Promise<OverrideRequestDto> {
    try {
      const o = await this.requireOverride(id);
      const before = o.toSnapshot();
      o.approve({ overrideId: id, approvedById: userId });
      const after = o.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.overrideRepository.save(o, tx);
        await tx.auditLog.create({ data: {
          userId, action: "override.approved", entityType: "override_request", entityId: o.id,
          before: before as object, after: after as object, correlationId: getCorrelationId() ?? null,
        }});
      });
      o.pullEvents();
      return after as OverrideRequestDto;
    } catch (err) { this.rethrow(err); }
  }

  async reject(id: string, dto: RejectOverrideDto, userId: string): Promise<OverrideRequestDto> {
    try {
      const o = await this.requireOverride(id);
      const before = o.toSnapshot();
      o.reject({ overrideId: id, rejectedById: userId, reason: dto.reason });
      const after = o.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.overrideRepository.save(o, tx);
        await tx.auditLog.create({ data: {
          userId, action: "override.rejected", entityType: "override_request", entityId: o.id,
          before: before as object, after: after as object, metadata: { reason: dto.reason },
          correlationId: getCorrelationId() ?? null,
        }});
      });
      o.pullEvents();
      return after as OverrideRequestDto;
    } catch (err) { this.rethrow(err); }
  }

  async cancel(id: string, userId: string): Promise<OverrideRequestDto> {
    try {
      const o = await this.requireOverride(id);
      const before = o.toSnapshot();
      o.cancel({ overrideId: id, cancelledById: userId });
      const after = o.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.overrideRepository.save(o, tx);
        await tx.auditLog.create({ data: {
          userId, action: "override.cancelled", entityType: "override_request", entityId: o.id,
          before: before as object, after: after as object, correlationId: getCorrelationId() ?? null,
        }});
      });
      o.pullEvents();
      return after as OverrideRequestDto;
    } catch (err) { this.rethrow(err); }
  }

  async execute(id: string, dto: ExecuteOverrideDto, userId: string): Promise<OverrideExecuteResultDto> {
    try {
      const o = await this.requireOverride(id);
      if (o.status === "EXECUTED") {
        return { override: o.toSnapshot() as OverrideRequestDto, result: { idempotent: true }, warnings: [] };
      }
      const before = o.toSnapshot();
      o.markExecuted({ overrideId: id, executedById: userId });
      const warnings: WarningDto[] = [];
      let result: Record<string, unknown> = {};
      await prisma.$transaction(async (tx) => {
        if (o.action === OverrideAction.DEACTIVATE_WAREHOUSE) {
          result = await this.execDeactivateWarehouse(o.resourceId, o.reason, userId, tx);
        } else if (o.action === OverrideAction.DEACTIVATE_LOCATION) {
          result = await this.execDeactivateLocationCascade(o.resourceId, o.reason, userId, tx);
        } else if (o.action === OverrideAction.RECONFIGURE_LEVELS) {
          if (!dto.reconfigure) {
            throw new ValidationError("reconfigure payload is required for reconfigure_levels", { reconfigure: ["required"] });
          }
          result = await this.execReconfigureLevels(o.resourceId, o.reason, dto.reconfigure, userId, tx);
        }
        const after = o.toSnapshot();
        await this.overrideRepository.save(o, tx);
        await tx.auditLog.create({ data: {
          userId, action: "override.executed", entityType: "override_request", entityId: o.id,
          before: before as object, after: after as object, metadata: { result },
          correlationId: getCorrelationId() ?? null,
        }});
      });
      o.pullEvents();
      this.logger.info({ action: "OVERRIDE_EXECUTED", overrideId: o.id }, "Override executed");
      return { override: o.toSnapshot() as OverrideRequestDto, result, warnings };
    } catch (err) { this.rethrow(err); }
  }

  async history(resourceType: string, resourceId: string): Promise<OverrideHistoryItemDto[]> {
    const rows = await prisma.auditLog.findMany({
      where: { action: { startsWith: "override." } },
      orderBy: { createdAt: "desc" },
      take: 200,
    });
    return rows
      .filter((r) => {
        const after = r.after as Record<string, unknown> | null;
        return !!after && after.resourceType === resourceType && after.resourceId === resourceId;
      })
      .map((r) => ({
        id: r.id, action: r.action, entityType: r.entityType, entityId: r.entityId,
        before: r.before, after: r.after, metadata: r.metadata, userId: r.userId,
        correlationId: r.correlationId, createdAt: r.createdAt.toISOString(),
      }));
  }

  private async execDeactivateWarehouse(warehouseId: string, reason: string, userId: string, tx: any): Promise<Record<string, unknown>> {
    const warehouse = await this.warehouseRepository.findById(warehouseId);
    if (!warehouse) throw new NotFoundException(`Warehouse not found: ${warehouseId}`);
    const before = warehouse.toSnapshot();
    warehouse.deactivate(reason);
    const after = warehouse.toSnapshot();
    await this.warehouseRepository.save(warehouse, tx);
    await tx.auditLog.create({ data: {
      userId, action: "warehouse.deactivated", entityType: "warehouse", entityId: warehouse.id,
      before: before as object, after: after as object, metadata: { reason, viaOverride: true },
      correlationId: getCorrelationId() ?? null,
    }});
    warehouse.pullEvents();
    return { warehouseId, isActive: after.isActive };
  }

  private async execDeactivateLocationCascade(locationId: string, reason: string, userId: string, tx: any): Promise<Record<string, unknown>> {
    const subtree = await this.locationRepository.findActiveSubtreeOrderedForCascade(locationId);
    if (subtree.length === 0) {
      const loc = await this.locationRepository.findById(locationId);
      if (!loc) throw new NotFoundException(`Location not found: ${locationId}`);
    }
    const cascadedIds: string[] = [];
    for (const loc of subtree) {
      if (!loc.isActive) continue;
      const before = loc.toSnapshot();
      loc.deactivate(`${reason} [override cascade]`, false);
      const after = loc.toSnapshot();
      await this.locationRepository.save(loc, tx);
      await tx.auditLog.create({ data: {
        userId, action: "location.deactivated", entityType: "warehouse_location", entityId: loc.id,
        before: before as object, after: after as object,
        metadata: { reason, viaOverride: true, cascade: true },
        correlationId: getCorrelationId() ?? null,
      }});
      loc.pullEvents();
      cascadedIds.push(loc.id);
    }
    return { locationId, cascadedIds };
  }

  private async execReconfigureLevels(
    warehouseId: string, reason: string,
    reconfigure: NonNullable<ExecuteOverrideDto["reconfigure"]>,
    userId: string, tx: any,
  ): Promise<Record<string, unknown>> {
    const config = await this.locationRepository.findConfigByWarehouseId(warehouseId);
    if (!config) throw new NotFoundException(`Location config not found for warehouse: ${warehouseId}`);
    const toDrop = await this.locationRepository.findActivePhysicalAboveLevel(warehouseId, reconfigure.maxLevels);
    const cascadedIds: string[] = [];
    for (const loc of toDrop) {
      const before = loc.toSnapshot();
      loc.deactivate(`${reason} [override reconfigure]`, false);
      const after = loc.toSnapshot();
      await this.locationRepository.save(loc, tx);
      await tx.auditLog.create({ data: {
        userId, action: "location.deactivated", entityType: "warehouse_location", entityId: loc.id,
        before: before as object, after: after as object,
        metadata: { reason, viaOverride: true, reconfigure: true },
        correlationId: getCorrelationId() ?? null,
      }});
      loc.pullEvents();
      cascadedIds.push(loc.id);
    }
    const beforeCfg = config.toSnapshot();
    config.configure({
      warehouseId, maxLevels: reconfigure.maxLevels,
      level1Name: reconfigure.level1Name, level2Name: reconfigure.level2Name,
      level3Name: reconfigure.level3Name, level4Name: reconfigure.level4Name,
      level5Name: reconfigure.level5Name, useLevel2: reconfigure.useLevel2,
      useLevel3: reconfigure.useLevel3, useLevel4: reconfigure.useLevel4,
      useLevel5: reconfigure.useLevel5, expectedVersion: reconfigure.expectedVersion,
    }, { skipHighestLevelGuard: true });
    const afterCfg = config.toSnapshot();
    await this.locationRepository.saveConfig(config, tx);
    await tx.auditLog.create({ data: {
      userId, action: "location.config.updated", entityType: "warehouse_location_config", entityId: config.id,
      before: beforeCfg as object, after: afterCfg as object,
      metadata: { reason, viaOverride: true }, correlationId: getCorrelationId() ?? null,
    }});
    config.pullEvents();
    return { warehouseId, configId: config.id, cascadedIds, maxLevels: afterCfg.maxLevels };
  }

  private async assertResourceExists(resourceType: string, resourceId: string): Promise<void> {
    if (resourceType === OverrideResourceType.WAREHOUSE) {
      if (!(await this.warehouseRepository.findById(resourceId))) {
        throw new NotFoundException(`Warehouse not found: ${resourceId}`);
      }
      return;
    }
    if (resourceType === OverrideResourceType.LOCATION) {
      if (!(await this.locationRepository.findById(resourceId))) {
        throw new NotFoundException(`Location not found: ${resourceId}`);
      }
      return;
    }
    if (resourceType === OverrideResourceType.LOCATION_CONFIG) {
      if (!(await this.locationRepository.findConfigByWarehouseId(resourceId))) {
        throw new NotFoundException(`Location config not found for warehouse: ${resourceId}`);
      }
    }
  }

  private async buildRequestWarnings(dto: RequestOverrideDto): Promise<WarningDto[]> {
    const warnings: WarningDto[] = [];
    if (dto.action === OverrideAction.DEACTIVATE_LOCATION) {
      const n = await this.locationRepository.countActiveChildren(dto.resourceId);
      if (n > 0) {
        warnings.push({
          code: "CASCADE_CHILDREN", severity: "warning",
          impact: `${n} direct active children will be cascade-deactivated on execute`,
          ownerRole: "gestor_estoque",
          message: "Execute will deactivate the location subtree (leaves first).",
        });
      }
    }
    if (dto.action === OverrideAction.DEACTIVATE_WAREHOUSE) {
      const n = await this.locationRepository.countActivePhysicalLocations(dto.resourceId);
      if (n > 0) {
        warnings.push({
          code: "WAREHOUSE_ACTIVE_LOCATIONS", severity: "warning",
          impact: `Warehouse has ${n} active physical locations; deactivate blocks new receipts only`,
          ownerRole: "gestor_estoque",
          message: "Locations remain; warehouse isActive becomes false.",
        });
      }
    }
    return warnings;
  }

  private async requireOverride(id: string): Promise<OverrideRequest> {
    const o = await this.overrideRepository.findById(id);
    if (!o) throw new NotFoundException(`Override not found: ${id}`);
    return o;
  }

  private rethrow(err: unknown): never {
    if (err instanceof NotFoundException || err instanceof AppError) throw err;
    if (err instanceof DomainError) {
      if (err.code === "VERSION_CONFLICT" || err.code === "OVERRIDE_ALREADY_PENDING") {
        throw new ConflictError(err.message, "OverrideRequest");
      }
      if (err.code === "OVERRIDE_SOD_VIOLATION") {
        throw new AppError(err.message, err.code, 403);
      }
      if (err.code === "OVERRIDE_INVALID_STATE" || err.code === "OVERRIDE_EXPIRED") {
        throw new AppError(err.message, err.code, 422);
      }
      if (err.code === "VALIDATION_ERROR") {
        throw new ValidationError(err.message, { domain: [err.code] });
      }
      throw new AppError(err.message, err.code, 400);
    }
    throw err;
  }
}

export async function assertWarehouseDeactivateAllowed(
  warehouseId: string,
  locationRepository: WarehouseLocationRepository,
  balancePort: InventoryBalancePort,
): Promise<void> {
  const activeLocs = await locationRepository.countActivePhysicalLocations(warehouseId);
  if (activeLocs > 0) {
    throw new WarehouseHasActiveLocationsError(
      `Warehouse has ${activeLocs} active physical locations. Request an override (deactivate_warehouse).`,
      { warehouseId, activeLocs },
    );
  }
  if (await balancePort.hasPositiveBalance(warehouseId)) {
    throw new WarehouseHasPositiveBalanceError(
      "Warehouse has positive balance. Request an override (deactivate_warehouse).",
      { warehouseId },
    );
  }
}
