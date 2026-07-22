import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import {
  AppError,
  ConflictError,
  type AssignInventoryTaskDto,
  type BlockInventoryTaskDto,
  type CancelInventoryTaskDto,
  type CompleteInventoryTaskDto,
  type CreateInventoryTaskDto,
  type EscalateInventoryTaskDto,
  type InventoryTaskDto,
  type InventoryTaskListDto,
  type InventoryTaskSummaryDto,
  type ResumeDependencyInventoryTaskDto,
  type StartInventoryTaskDto,
  type UnblockInventoryTaskDto,
  type WaitDependencyInventoryTaskDto,
  ValidationError,
} from "@sunset/contracts";
import {
  DomainError,
  InventoryTask,
  INVENTORY_TASK_REPOSITORY,
  InventoryTaskStatus,
  type InventoryTaskRepository,
  WAREHOUSE_LOCATION_REPOSITORY,
  WAREHOUSE_REPOSITORY,
  type WarehouseLocationRepository,
  type WarehouseRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

@Injectable()
export class InventoryTaskService {
  private readonly logger = createLogger({ name: "api.inventory.task" });

  constructor(
    @Inject(INVENTORY_TASK_REPOSITORY)
    private readonly taskRepository: InventoryTaskRepository,
    @Inject(WAREHOUSE_REPOSITORY)
    private readonly warehouseRepository: WarehouseRepository,
    @Inject(WAREHOUSE_LOCATION_REPOSITORY)
    private readonly locationRepository: WarehouseLocationRepository,
  ) {}

  async create(dto: CreateInventoryTaskDto, userId: string): Promise<InventoryTaskDto> {
    try {
      await this.assertRefs(dto.warehouseId, dto.locationId);
      const task = InventoryTask.create({
        type: dto.type,
        title: dto.title,
        description: dto.description,
        priority: dto.priority,
        ownerUserId: dto.ownerUserId,
        ownerRole: dto.ownerRole,
        dueAt: dto.dueAt,
        slaMinutes: dto.slaMinutes,
        sourceType: dto.sourceType,
        sourceId: dto.sourceId,
        warehouseId: dto.warehouseId,
        locationId: dto.locationId,
        organizationId: dto.organizationId,
        createdById: userId,
      });
      const snap = task.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.taskRepository.save(task, tx);
        await tx.auditLog.create({
          data: {
            userId,
            action: "inventory.task.created",
            entityType: "inventory_task",
            entityId: task.id,
            after: snap as object,
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      task.pullEvents();
      this.logger.info({ action: "TASK_CREATED", taskId: task.id }, "Inventory task created");
      return this.toDto(task);
    } catch (err) {
      this.rethrow(err);
    }
  }

  async list(query: {
    status?: string;
    priority?: string;
    ownerUserId?: string;
    warehouseId?: string;
    locationId?: string;
    sourceType?: string;
    sourceId?: string;
    type?: string;
    overdueOnly?: boolean | string;
    organizationId?: string;
    page?: number;
    limit?: number;
  }): Promise<InventoryTaskListDto> {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const overdueOnly =
      query.overdueOnly === true ||
      query.overdueOnly === "true" ||
      query.overdueOnly === "1";
    const result = await this.taskRepository.findAll(
      {
        status: query.status,
        priority: query.priority,
        ownerUserId: query.ownerUserId,
        warehouseId: query.warehouseId,
        locationId: query.locationId,
        sourceType: query.sourceType,
        sourceId: query.sourceId,
        type: query.type,
        overdueOnly,
        organizationId: query.organizationId,
      },
      page,
      limit,
    );
    return {
      data: result.data.map((t) => this.toDto(t)),
      total: result.total,
      page,
      limit,
    };
  }

  async summary(query: {
    organizationId?: string;
    ownerUserId?: string;
    warehouseId?: string;
  }): Promise<InventoryTaskSummaryDto> {
    return this.taskRepository.summary({
      organizationId: query.organizationId,
      ownerUserId: query.ownerUserId,
      warehouseId: query.warehouseId,
    });
  }

  async getById(id: string): Promise<InventoryTaskDto> {
    const t = await this.requireTask(id);
    return this.toDto(t);
  }

  async assign(
    id: string,
    dto: AssignInventoryTaskDto,
    userId: string,
  ): Promise<InventoryTaskDto> {
    return this.mutate(id, userId, "inventory.task.assigned", (t) => {
      t.assign({
        taskId: id,
        actorId: userId,
        ownerUserId: dto.ownerUserId,
        ownerRole: dto.ownerRole,
        expectedVersion: dto.expectedVersion,
      });
    });
  }

  async start(
    id: string,
    dto: StartInventoryTaskDto,
    userId: string,
  ): Promise<InventoryTaskDto> {
    return this.mutate(id, userId, "inventory.task.started", (t) => {
      t.start({
        taskId: id,
        actorId: userId,
        expectedVersion: dto?.expectedVersion,
      });
    });
  }

  async block(
    id: string,
    dto: BlockInventoryTaskDto,
    userId: string,
  ): Promise<InventoryTaskDto> {
    return this.mutate(id, userId, "inventory.task.blocked", (t) => {
      t.block({
        taskId: id,
        actorId: userId,
        reason: dto.reason,
        expectedVersion: dto.expectedVersion,
      });
    });
  }

  async unblock(
    id: string,
    dto: UnblockInventoryTaskDto,
    userId: string,
  ): Promise<InventoryTaskDto> {
    return this.mutate(id, userId, "inventory.task.unblocked", (t) => {
      t.unblock({
        taskId: id,
        actorId: userId,
        targetStatus: dto?.targetStatus,
        expectedVersion: dto?.expectedVersion,
      });
    });
  }

  async waitDependency(
    id: string,
    dto: WaitDependencyInventoryTaskDto,
    userId: string,
  ): Promise<InventoryTaskDto> {
    return this.mutate(id, userId, "inventory.task.waiting_dependency", (t) => {
      t.waitForDependency({
        taskId: id,
        actorId: userId,
        dependencyType: dto.dependencyType,
        dependencyId: dto.dependencyId,
        expectedVersion: dto.expectedVersion,
      });
    });
  }

  async resumeDependency(
    id: string,
    dto: ResumeDependencyInventoryTaskDto,
    userId: string,
  ): Promise<InventoryTaskDto> {
    return this.mutate(id, userId, "inventory.task.unblocked", (t) => {
      const target =
        dto?.targetStatus === "OPEN"
          ? InventoryTaskStatus.OPEN
          : InventoryTaskStatus.IN_PROGRESS;
      t.resumeFromDependency(target, userId, dto?.expectedVersion);
    });
  }

  async escalate(
    id: string,
    dto: EscalateInventoryTaskDto,
    userId: string,
  ): Promise<InventoryTaskDto> {
    return this.mutate(id, userId, "inventory.task.escalated", (t) => {
      t.escalate({
        taskId: id,
        actorId: userId,
        reason: dto.reason,
        ownerUserId: dto.ownerUserId,
        expectedVersion: dto.expectedVersion,
      });
    });
  }

  async complete(
    id: string,
    dto: CompleteInventoryTaskDto,
    userId: string,
  ): Promise<InventoryTaskDto> {
    return this.mutate(id, userId, "inventory.task.completed", (t) => {
      t.complete({
        taskId: id,
        actorId: userId,
        expectedVersion: dto?.expectedVersion,
      });
    });
  }

  async cancel(
    id: string,
    dto: CancelInventoryTaskDto,
    userId: string,
  ): Promise<InventoryTaskDto> {
    return this.mutate(id, userId, "inventory.task.cancelled", (t) => {
      t.cancel({
        taskId: id,
        actorId: userId,
        reason: dto?.reason,
        expectedVersion: dto?.expectedVersion,
      });
    });
  }

  private async mutate(
    id: string,
    userId: string,
    action: string,
    fn: (t: InventoryTask) => void,
  ): Promise<InventoryTaskDto> {
    try {
      const t = await this.requireTask(id);
      const before = t.toSnapshot();
      fn(t);
      const after = t.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.taskRepository.save(t, tx);
        await tx.auditLog.create({
          data: {
            userId,
            action,
            entityType: "inventory_task",
            entityId: t.id,
            before: before as object,
            after: after as object,
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      t.pullEvents();
      return this.toDto(t);
    } catch (err) {
      this.rethrow(err);
    }
  }

  private async assertRefs(
    warehouseId?: string | null,
    locationId?: string | null,
  ): Promise<void> {
    if (warehouseId) {
      const wh = await this.warehouseRepository.findById(warehouseId);
      if (!wh) throw new NotFoundException(`Warehouse not found: ${warehouseId}`);
    }
    if (locationId) {
      const loc = await this.locationRepository.findById(locationId);
      if (!loc) throw new NotFoundException(`Location not found: ${locationId}`);
    }
  }

  private async requireTask(id: string): Promise<InventoryTask> {
    const t = await this.taskRepository.findById(id);
    if (!t) throw new NotFoundException(`Inventory task not found: ${id}`);
    return t;
  }

  private toDto(t: InventoryTask, now: Date = new Date()): InventoryTaskDto {
    const snap = t.toSnapshot();
    return { ...snap, isOverdue: t.isOverdue(now) };
  }

  private rethrow(err: unknown): never {
    if (err instanceof NotFoundException || err instanceof AppError) throw err;
    if (err instanceof DomainError) {
      if (err.code === "VERSION_CONFLICT") {
        throw new ConflictError(err.message, "InventoryTask");
      }
      if (err.code === "INVENTORY_TASK_INVALID_STATE") {
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
