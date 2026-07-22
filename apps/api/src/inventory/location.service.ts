import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import {
  AppError,
  ConflictError,
  type ConfigureWarehouseLevelsDto,
  type CreateLocationDto,
  type DeactivateLocationDto,
  type LocationPathDto,
  type LocationTreeNodeDto,
  type UpdateLocationDto,
  type WarehouseLocationConfigDto,
  type WarehouseLocationDto,
  type WarehouseLocationListDto,
  ValidationError,
} from "@sunset/contracts";
import {
  DomainError,
  LOCATION_ROOT_PARENT_KEY,
  WAREHOUSE_LOCATION_REPOSITORY,
  WAREHOUSE_REPOSITORY,
  WarehouseLocation,
  WarehouseLocationConfig,
  type WarehouseLocationRepository,
  type WarehouseRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

@Injectable()
export class LocationService {
  private readonly logger = createLogger({ name: "api.inventory.location" });

  constructor(
    @Inject(WAREHOUSE_LOCATION_REPOSITORY)
    private readonly locationRepository: WarehouseLocationRepository,
    @Inject(WAREHOUSE_REPOSITORY)
    private readonly warehouseRepository: WarehouseRepository,
  ) {}

  async getConfig(warehouseId: string): Promise<WarehouseLocationConfigDto> {
    try {
      await this.requireWarehouse(warehouseId);
      const config = await this.ensureConfig(warehouseId);
      return config.toSnapshot() as WarehouseLocationConfigDto;
    } catch (err) {
      this.rethrowDomain(err);
    }
  }

  async configureLevels(
    warehouseId: string,
    dto: ConfigureWarehouseLevelsDto,
    userId?: string,
  ): Promise<WarehouseLocationConfigDto> {
    try {
      await this.requireWarehouse(warehouseId);
      const config = await this.ensureConfig(warehouseId);
      const before = config.toSnapshot();
      const highest =
        await this.locationRepository.findHighestPhysicalLevel(warehouseId);
      config.configure(
        {
          warehouseId,
          maxLevels: dto.maxLevels,
          level1Name: dto.level1Name,
          level2Name: dto.level2Name,
          level3Name: dto.level3Name,
          level4Name: dto.level4Name,
          level5Name: dto.level5Name,
          useLevel2: dto.useLevel2,
          useLevel3: dto.useLevel3,
          useLevel4: dto.useLevel4,
          useLevel5: dto.useLevel5,
          expectedVersion: dto.expectedVersion,
        },
        { highestExistingPhysicalLevel: highest },
      );
      const after = config.toSnapshot();

      await prisma.$transaction(async (tx) => {
        await this.locationRepository.saveConfig(config, tx);
        await tx.auditLog.create({
          data: {
            userId: userId ?? null,
            action: "location.config.updated",
            entityType: "warehouse_location_config",
            entityId: config.id,
            before: before as object,
            after: after as object,
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      config.pullEvents();

      this.logger.info(
        {
          action: "LOCATION_CONFIG_UPDATED",
          warehouseId,
          configId: config.id,
          maxLevels: after.maxLevels,
          correlationId: getCorrelationId(),
        },
        "Warehouse location levels configured",
      );

      return after as WarehouseLocationConfigDto;
    } catch (err) {
      this.rethrowDomain(err);
    }
  }

  async create(
    warehouseId: string,
    dto: CreateLocationDto,
    userId?: string,
  ): Promise<WarehouseLocationDto> {
    try {
      await this.requireWarehouse(warehouseId);
      const config = await this.ensureConfig(warehouseId);

      let location: WarehouseLocation;
      if (dto.isVirtual) {
        location = WarehouseLocation.createVirtual(
          {
            warehouseId,
            level: dto.level ?? 0,
            code: dto.code,
            name: dto.name,
            isVirtual: true,
            virtualType: dto.virtualType,
            capacity: dto.capacity,
            capacityUnit: dto.capacityUnit,
            parentId: dto.parentId,
          },
          warehouseId,
        );
      } else {
        let parentRef = null as {
          id: string;
          level: number;
          path: string;
          isVirtual: boolean;
          isActive: boolean;
        } | null;
        if (dto.parentId) {
          const parent = await this.locationRepository.findById(dto.parentId);
          if (!parent || parent.warehouseId !== warehouseId) {
            throw new NotFoundException(
              `Parent location not found: ${dto.parentId}`,
            );
          }
          parentRef = {
            id: parent.id,
            level: parent.level,
            path: parent.path,
            isVirtual: parent.isVirtual,
            isActive: parent.isActive,
          };
        }
        location = WarehouseLocation.createPhysical(
          {
            warehouseId,
            parentId: dto.parentId,
            level: dto.level,
            code: dto.code,
            name: dto.name,
            capacity: dto.capacity,
            capacityUnit: dto.capacityUnit,
          },
          { parent: parentRef, config },
        );
      }

      const parentKey = location.parentKey || LOCATION_ROOT_PARENT_KEY;
      const duplicate = await this.locationRepository.findByWarehouseAndCode(
        warehouseId,
        parentKey,
        location.code,
      );
      if (duplicate) {
        throw new ConflictError(
          `Location code already exists under parent: ${location.code}`,
          "WarehouseLocation",
        );
      }

      const snapshot = location.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.locationRepository.save(location, tx);
        await tx.auditLog.create({
          data: {
            userId: userId ?? null,
            action: "location.created",
            entityType: "warehouse_location",
            entityId: location.id,
            after: snapshot as object,
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      location.pullEvents();

      this.logger.info(
        {
          action: "LOCATION_CREATED",
          warehouseId,
          locationId: location.id,
          code: location.code,
          level: location.level,
          correlationId: getCorrelationId(),
        },
        "Warehouse location created",
      );

      return snapshot as WarehouseLocationDto;
    } catch (err) {
      this.rethrowDomain(err);
    }
  }

  async findAll(
    warehouseId: string,
    query: {
      view?: "tree" | "flat" | string;
      page?: number;
      limit?: number;
      isActive?: boolean | string;
      level?: number | string;
      search?: string;
    },
  ): Promise<WarehouseLocationListDto> {
    await this.requireWarehouse(warehouseId);
    const view = query.view === "tree" ? "tree" : "flat";
    const page = Math.max(1, Number(query.page ?? 1));
    const limit = Math.min(100, Math.max(1, Number(query.limit ?? 20)));

    let isActive: boolean | undefined;
    if (query.isActive === true || query.isActive === "true") isActive = true;
    if (query.isActive === false || query.isActive === "false") isActive = false;

    let level: number | undefined;
    if (query.level !== undefined && query.level !== "") {
      level = Number(query.level);
    }

    const result = await this.locationRepository.findByWarehouse(warehouseId, {
      isActive,
      level,
      search: query.search,
    });

    if (view === "tree") {
      const nodes = this.buildTree(
        result.data.map((l) => l.toSnapshot() as WarehouseLocationDto),
      );
      return {
        data: nodes,
        total: result.total,
        page: 1,
        limit: result.total,
        view: "tree",
      };
    }

    const start = (page - 1) * limit;
    const slice = result.data.slice(start, start + limit);
    return {
      data: slice.map((l) => l.toSnapshot() as WarehouseLocationDto),
      total: result.total,
      page,
      limit,
      view: "flat",
    };
  }

  async findById(
    warehouseId: string,
    id: string,
  ): Promise<WarehouseLocationDto> {
    const location = await this.locationRepository.findById(id);
    if (!location || location.warehouseId !== warehouseId) {
      throw new NotFoundException(`Location not found: ${id}`);
    }
    return location.toSnapshot() as WarehouseLocationDto;
  }

  async update(
    warehouseId: string,
    id: string,
    dto: UpdateLocationDto,
    userId?: string,
  ): Promise<WarehouseLocationDto> {
    try {
      const location = await this.loadInWarehouse(warehouseId, id);
      const before = location.toSnapshot();
      location.update({
        name: dto.name,
        capacity: dto.capacity,
        capacityUnit: dto.capacityUnit,
        expectedVersion: dto.expectedVersion,
      });
      const after = location.toSnapshot();

      await prisma.$transaction(async (tx) => {
        await this.locationRepository.save(location, tx);
        await tx.auditLog.create({
          data: {
            userId: userId ?? null,
            action: "location.updated",
            entityType: "warehouse_location",
            entityId: location.id,
            before: before as object,
            after: after as object,
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      location.pullEvents();

      return after as WarehouseLocationDto;
    } catch (err) {
      this.rethrowDomain(err);
    }
  }

  async activate(
    warehouseId: string,
    id: string,
    userId?: string,
  ): Promise<WarehouseLocationDto> {
    try {
      const location = await this.loadInWarehouse(warehouseId, id);
      const before = location.toSnapshot();
      location.activate();
      const after = location.toSnapshot();

      await prisma.$transaction(async (tx) => {
        await this.locationRepository.save(location, tx);
        await tx.auditLog.create({
          data: {
            userId: userId ?? null,
            action: "location.activated",
            entityType: "warehouse_location",
            entityId: location.id,
            before: before as object,
            after: after as object,
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      location.pullEvents();

      return after as WarehouseLocationDto;
    } catch (err) {
      this.rethrowDomain(err);
    }
  }

  async deactivate(
    warehouseId: string,
    id: string,
    dto: DeactivateLocationDto,
    userId?: string,
  ): Promise<WarehouseLocationDto> {
    try {
      const location = await this.loadInWarehouse(warehouseId, id);
      const before = location.toSnapshot();
      const activeChildren =
        await this.locationRepository.countActiveChildren(id);
      location.deactivate(dto?.reason ?? "", activeChildren > 0);
      const after = location.toSnapshot();

      await prisma.$transaction(async (tx) => {
        await this.locationRepository.save(location, tx);
        await tx.auditLog.create({
          data: {
            userId: userId ?? null,
            action: "location.deactivated",
            entityType: "warehouse_location",
            entityId: location.id,
            before: before as object,
            after: after as object,
            metadata: { reason: dto?.reason ?? "" },
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      location.pullEvents();

      this.logger.info(
        {
          action: "LOCATION_DEACTIVATED",
          warehouseId,
          locationId: location.id,
          correlationId: getCorrelationId(),
        },
        "Warehouse location deactivated",
      );

      return after as WarehouseLocationDto;
    } catch (err) {
      this.rethrowDomain(err);
    }
  }

  async getPath(id: string): Promise<LocationPathDto> {
    const location = await this.locationRepository.findById(id);
    if (!location) {
      throw new NotFoundException(`Location not found: ${id}`);
    }
    const ancestors = await this.locationRepository.findPathChain(id);
    const chain = [
      ...ancestors.map((a) => a.toSnapshot() as WarehouseLocationDto),
      location.toSnapshot() as WarehouseLocationDto,
    ];
    return {
      locationId: location.id,
      warehouseId: location.warehouseId,
      path: location.path,
      chain,
    };
  }

  private async requireWarehouse(warehouseId: string): Promise<void> {
    const warehouse = await this.warehouseRepository.findById(warehouseId);
    if (!warehouse) {
      throw new NotFoundException(`Warehouse not found: ${warehouseId}`);
    }
  }

  private async ensureConfig(
    warehouseId: string,
  ): Promise<WarehouseLocationConfig> {
    const existing =
      await this.locationRepository.findConfigByWarehouseId(warehouseId);
    if (existing) return existing;

    const config = WarehouseLocationConfig.createDefault(warehouseId);
    await prisma.$transaction(async (tx) => {
      await this.locationRepository.saveConfig(config, tx);
      await tx.auditLog.create({
        data: {
          userId: null,
          action: "location.config.updated",
          entityType: "warehouse_location_config",
          entityId: config.id,
          after: config.toSnapshot() as object,
          metadata: { createdDefault: true },
          correlationId: getCorrelationId() ?? null,
        },
      });
    });
    config.pullEvents();
    return config;
  }

  private async loadInWarehouse(
    warehouseId: string,
    id: string,
  ): Promise<WarehouseLocation> {
    const location = await this.locationRepository.findById(id);
    if (!location || location.warehouseId !== warehouseId) {
      throw new NotFoundException(`Location not found: ${id}`);
    }
    return location;
  }

  private buildTree(items: WarehouseLocationDto[]): LocationTreeNodeDto[] {
    const byId = new Map<string, LocationTreeNodeDto>();
    for (const item of items) {
      byId.set(item.id, { ...item, children: [] });
    }
    const roots: LocationTreeNodeDto[] = [];
    for (const node of byId.values()) {
      if (node.parentId && byId.has(node.parentId)) {
        byId.get(node.parentId)!.children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }

  private rethrowDomain(err: unknown): never {
    if (err instanceof NotFoundException || err instanceof AppError) {
      throw err;
    }
    if (err instanceof DomainError) {
      if (
        err.code === "VERSION_CONFLICT" ||
        err.code === "LOCATION_HAS_ACTIVE_CHILDREN"
      ) {
        throw new ConflictError(err.message, "WarehouseLocation");
      }
      if (
        err.code === "VALIDATION_ERROR" ||
        err.code === "LOCATION_INACTIVE"
      ) {
        throw new ValidationError(err.message, {
          domain: [err.code],
        });
      }
      throw new AppError(err.message, err.code, 400);
    }
    throw err;
  }
}
