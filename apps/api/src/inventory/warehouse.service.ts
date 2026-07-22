import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import {
  AppError,
  ConflictError,
  type CreateWarehouseDto,
  type UpdateWarehouseDto,
  type WarehouseDto,
  type WarehouseListDto,
  ValidationError,
} from "@sunset/contracts";
import {
  DomainError,
  INVENTORY_BALANCE_PORT,
  type InventoryBalancePort,
  WAREHOUSE_LOCATION_REPOSITORY,
  WAREHOUSE_REPOSITORY,
  Warehouse,
  type WarehouseLocationRepository,
  type WarehouseRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";
import { assertWarehouseDeactivateAllowed } from "./override.service";

@Injectable()
export class WarehouseService {
  private readonly logger = createLogger({ name: "api.inventory.warehouse" });

  constructor(
    @Inject(WAREHOUSE_REPOSITORY)
    private readonly warehouseRepository: WarehouseRepository,
    @Inject(WAREHOUSE_LOCATION_REPOSITORY)
    private readonly locationRepository: WarehouseLocationRepository,
    @Inject(INVENTORY_BALANCE_PORT)
    private readonly balancePort: InventoryBalancePort,
  ) {}

  async create(
    dto: CreateWarehouseDto,
    userId?: string,
  ): Promise<WarehouseDto> {
    try {
      const warehouse = Warehouse.create({
        code: dto.code,
        name: dto.name,
        type: dto.type,
        organizationId: dto.organizationId,
        address: dto.address,
        zones: dto.zones,
        capacity: dto.capacity,
        capacityUnit: dto.capacityUnit,
      });

      const snapshot = warehouse.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.warehouseRepository.save(warehouse, tx);
        await tx.auditLog.create({
          data: {
            userId: userId ?? null,
            action: "warehouse.created",
            entityType: "warehouse",
            entityId: warehouse.id,
            after: snapshot as object,
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      warehouse.pullEvents();

      this.logger.info(
        {
          action: "WAREHOUSE_CREATED",
          warehouseId: warehouse.id,
          organizationId: warehouse.organizationId,
          correlationId: getCorrelationId(),
        },
        "Warehouse created",
      );

      return snapshot as WarehouseDto;
    } catch (err) {
      this.rethrowDomain(err);
    }
  }

  async findAll(query: {
    page?: number;
    limit?: number;
    type?: string;
    isActive?: boolean | string;
    search?: string;
  }): Promise<WarehouseListDto> {
    const page = Number(query.page ?? 1);
    const limit = Number(query.limit ?? 20);
    let isActive: boolean | undefined;
    if (query.isActive === true || query.isActive === "true") isActive = true;
    if (query.isActive === false || query.isActive === "false") isActive = false;

    const result = await this.warehouseRepository.findAll({
      page,
      limit,
      type: query.type,
      isActive,
      search: query.search,
    });

    return {
      data: result.data.map((w) => w.toSnapshot() as WarehouseDto),
      total: result.total,
      page,
      limit,
    };
  }

  async findById(id: string): Promise<WarehouseDto> {
    const warehouse = await this.warehouseRepository.findById(id);
    if (!warehouse) {
      throw new NotFoundException(`Warehouse not found: ${id}`);
    }
    return warehouse.toSnapshot() as WarehouseDto;
  }

  async update(
    id: string,
    dto: UpdateWarehouseDto,
    userId?: string,
  ): Promise<WarehouseDto> {
    try {
      const warehouse = await this.warehouseRepository.findById(id);
      if (!warehouse) {
        throw new NotFoundException(`Warehouse not found: ${id}`);
      }
      const before = warehouse.toSnapshot();
      warehouse.update({
        name: dto.name,
        type: dto.type,
        address: dto.address,
        zones: dto.zones,
        capacity: dto.capacity,
        capacityUnit: dto.capacityUnit,
        expectedVersion: dto.expectedVersion,
      });
      const after = warehouse.toSnapshot();

      await prisma.$transaction(async (tx) => {
        await this.warehouseRepository.save(warehouse, tx);
        await tx.auditLog.create({
          data: {
            userId: userId ?? null,
            action: "warehouse.updated",
            entityType: "warehouse",
            entityId: warehouse.id,
            before: before as object,
            after: after as object,
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      warehouse.pullEvents();

      return after as WarehouseDto;
    } catch (err) {
      this.rethrowDomain(err);
    }
  }

  async activate(id: string, userId?: string): Promise<WarehouseDto> {
    try {
      const warehouse = await this.warehouseRepository.findById(id);
      if (!warehouse) {
        throw new NotFoundException(`Warehouse not found: ${id}`);
      }
      const before = warehouse.toSnapshot();
      warehouse.activate();
      const after = warehouse.toSnapshot();

      await prisma.$transaction(async (tx) => {
        await this.warehouseRepository.save(warehouse, tx);
        await tx.auditLog.create({
          data: {
            userId: userId ?? null,
            action: "warehouse.activated",
            entityType: "warehouse",
            entityId: warehouse.id,
            before: before as object,
            after: after as object,
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      warehouse.pullEvents();

      return after as WarehouseDto;
    } catch (err) {
      this.rethrowDomain(err);
    }
  }

  async deactivate(
    id: string,
    reason: string,
    userId?: string,
  ): Promise<WarehouseDto> {
    try {
      const warehouse = await this.warehouseRepository.findById(id);
      if (!warehouse) {
        throw new NotFoundException(`Warehouse not found: ${id}`);
      }
      await assertWarehouseDeactivateAllowed(
        id,
        this.locationRepository,
        this.balancePort,
      );
      const before = warehouse.toSnapshot();
      warehouse.deactivate(reason);
      const after = warehouse.toSnapshot();

      await prisma.$transaction(async (tx) => {
        await this.warehouseRepository.save(warehouse, tx);
        await tx.auditLog.create({
          data: {
            userId: userId ?? null,
            action: "warehouse.deactivated",
            entityType: "warehouse",
            entityId: warehouse.id,
            before: before as object,
            after: after as object,
            metadata: { reason },
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      warehouse.pullEvents();

      this.logger.info(
        {
          action: "WAREHOUSE_DEACTIVATED",
          warehouseId: warehouse.id,
          organizationId: warehouse.organizationId,
          correlationId: getCorrelationId(),
        },
        "Warehouse deactivated",
      );

      return after as WarehouseDto;
    } catch (err) {
      this.rethrowDomain(err);
    }
  }

  private rethrowDomain(err: unknown): never {
    if (err instanceof NotFoundException || err instanceof AppError) {
      throw err;
    }
    if (err instanceof DomainError) {
      if (err.code === "VERSION_CONFLICT") {
        throw new ConflictError(err.message, "Warehouse");
      }
      if (
        err.code === "WAREHOUSE_HAS_ACTIVE_LOCATIONS" ||
        err.code === "WAREHOUSE_HAS_POSITIVE_BALANCE"
      ) {
        throw new ConflictError(err.message, "Warehouse");
      }
      if (
        err.code === "WAREHOUSE_HAS_ACTIVE_LOCATIONS" ||
        err.code === "WAREHOUSE_HAS_POSITIVE_BALANCE"
      ) {
        throw new ConflictError(err.message, "Warehouse");
      }
      if (
        err.code === "WAREHOUSE_HAS_ACTIVE_LOCATIONS" ||
        err.code === "WAREHOUSE_HAS_POSITIVE_BALANCE"
      ) {
        throw new ConflictError(err.message, "Warehouse");
      }
      if (
        err.code === "WAREHOUSE_HAS_ACTIVE_LOCATIONS" ||
        err.code === "WAREHOUSE_HAS_POSITIVE_BALANCE"
      ) {
        throw new ConflictError(err.message, "Warehouse");
      }
      if (
        err.code === "WAREHOUSE_HAS_ACTIVE_LOCATIONS" ||
        err.code === "WAREHOUSE_HAS_POSITIVE_BALANCE"
      ) {
        throw new ConflictError(err.message, "Warehouse");
      }
      if (
        err.code === "WAREHOUSE_HAS_ACTIVE_LOCATIONS" ||
        err.code === "WAREHOUSE_HAS_POSITIVE_BALANCE"
      ) {
        throw new ConflictError(err.message, "Warehouse");
      }
      if (
        err.code === "WAREHOUSE_HAS_ACTIVE_LOCATIONS" ||
        err.code === "WAREHOUSE_HAS_POSITIVE_BALANCE"
      ) {
        throw new ConflictError(err.message, "Warehouse");
      }
      if (
        err.code === "VALIDATION_ERROR" ||
        err.code === "WAREHOUSE_INACTIVE"
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
