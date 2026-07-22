import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import {
  AppError,
  ConflictError,
  type InventoryEventDto,
  type InventoryEventWithPayloadDto,
  type InventoryEventListDto,
} from "@sunset/contracts";
import {
  DomainError,
  InventoryEventOutbox,
  INVENTORY_EVENT_REPOSITORY,
  type InventoryEventRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";
import type { RequestReplayDto, MoveToDeadLetterDto, CancelEventDto } from "./dto/inventory-event.dto";

@Injectable()
export class InventoryEventService {
  private readonly logger = createLogger({ name: "api.inventory.event" });

  constructor(
    @Inject(INVENTORY_EVENT_REPOSITORY)
    private readonly eventRepository: InventoryEventRepository,
  ) {}

  async list(query: any): Promise<InventoryEventListDto> {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const result = await this.eventRepository.findAll({
      organizationId: query.organizationId,
      eventType: query.eventType,
      eventVersion: query.eventVersion ? Number(query.eventVersion) : undefined,
      aggregateType: query.aggregateType,
      aggregateId: query.aggregateId,
      status: query.status,
      producer: query.producer,
      correlationId: query.correlationId,
      failedOnly: query.failedOnly === "true" || query.failedOnly === true,
    }, page, limit);
    
    return {
      data: result.data.map(e => {
        const snap = e.toSnapshot();
        const { payload, ...rest } = snap;
        return rest as InventoryEventDto;
      }),
      total: result.total,
      page,
      limit,
    };
  }

  async getById(id: string): Promise<InventoryEventDto> {
    const e = await this.requireEvent(id);
    const snap = e.toSnapshot();
    const { payload, ...rest } = snap;
    return rest as InventoryEventDto;
  }

  async getPayload(id: string, userId: string): Promise<InventoryEventWithPayloadDto> {
    const e = await this.requireEvent(id);
    await prisma.auditLog.create({
      data: {
        userId, action: "inventory.event.payload.viewed", entityType: "inventory_event_outbox", entityId: e.id,
        correlationId: getCorrelationId() ?? null,
      },
    });
    return e.toSnapshot() as InventoryEventWithPayloadDto;
  }

  async requestReplay(id: string, dto: RequestReplayDto, userId: string): Promise<InventoryEventDto> {
    try {
      const e = await this.requireEvent(id);
      const before = e.toSnapshot();
      e.requestReplay({ eventId: id, actorId: userId, reason: dto.reason });
      const after = e.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.eventRepository.save(e, tx);
        await tx.auditLog.create({
          data: {
            userId, action: "inventory.event.replay.requested", entityType: "inventory_event_outbox", entityId: e.id,
            before: before as object, after: after as object, correlationId: getCorrelationId() ?? null,
          },
        });
      });
      e.pullEvents();
      const { payload, ...rest } = after;
      return rest as InventoryEventDto;
    } catch (err) { this.rethrow(err); }
  }

  async moveToDeadLetter(id: string, dto: MoveToDeadLetterDto, userId: string): Promise<InventoryEventDto> {
    try {
      const e = await this.requireEvent(id);
      const before = e.toSnapshot();
      e.moveToDeadLetter({ eventId: id, actorId: userId, reason: dto.reason });
      const after = e.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.eventRepository.save(e, tx);
        await tx.auditLog.create({
          data: {
            userId, action: "inventory.event.dead_lettered", entityType: "inventory_event_outbox", entityId: e.id,
            before: before as object, after: after as object, correlationId: getCorrelationId() ?? null,
          },
        });
      });
      e.pullEvents();
      const { payload, ...rest } = after;
      return rest as InventoryEventDto;
    } catch (err) { this.rethrow(err); }
  }

  async cancel(id: string, dto: CancelEventDto, userId: string): Promise<InventoryEventDto> {
    try {
      const e = await this.requireEvent(id);
      const before = e.toSnapshot();
      e.cancel({ eventId: id, actorId: userId, reason: dto.reason });
      const after = e.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.eventRepository.save(e, tx);
        await tx.auditLog.create({
          data: {
            userId, action: "inventory.event.cancelled", entityType: "inventory_event_outbox", entityId: e.id,
            before: before as object, after: after as object, correlationId: getCorrelationId() ?? null,
          },
        });
      });
      e.pullEvents();
      const { payload, ...rest } = after;
      return rest as InventoryEventDto;
    } catch (err) { this.rethrow(err); }
  }

  async summary(organizationId: string): Promise<Record<string, number>> {
    return this.eventRepository.summary(organizationId);
  }

  private async requireEvent(id: string): Promise<InventoryEventOutbox> {
    const e = await this.eventRepository.findById(id);
    if (!e) throw new NotFoundException(`Inventory event not found: ${id}`);
    return e;
  }

  private rethrow(err: unknown): never {
    if (err instanceof NotFoundException || err instanceof AppError) throw err;
    if (err instanceof DomainError) {
      if (err.code === "INVENTORY_EVENT_INVALID_STATE") throw new AppError(err.message, err.code, 422);
      throw new AppError(err.message, err.code, 400);
    }
    throw err;
  }
}
