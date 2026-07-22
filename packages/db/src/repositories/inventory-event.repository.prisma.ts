import {
  InventoryEventOutbox,
  type InventoryEventListFilters,
  type InventoryEventListResult,
  type InventoryEventRepository,
  type InventoryEventSnapshot,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

type DbClient = PrismaClient | Prisma.TransactionClient;

export class PrismaInventoryEventRepository implements InventoryEventRepository {
  constructor(private readonly db: DbClient = defaultPrisma) {}

  async save(event: InventoryEventOutbox, db?: DbClient): Promise<void> {
    const client = db ?? this.db;
    const snap = event.toSnapshot();
    const existing = await (client as any).inventoryEventOutbox.findUnique({ where: { id: snap.id } });
    const data = {
      organizationId: snap.organizationId,
      eventType: snap.eventType,
      eventVersion: snap.eventVersion,
      aggregateType: snap.aggregateType,
      aggregateId: snap.aggregateId,
      producer: snap.producer,
      payload: snap.payload,
      status: snap.status,
      correlationId: snap.correlationId,
      idempotencyKey: snap.idempotencyKey,
      occurredAt: new Date(snap.occurredAt),
      availableAt: snap.availableAt ? new Date(snap.availableAt) : null,
      publishedAt: snap.publishedAt ? new Date(snap.publishedAt) : null,
      consumedAt: snap.consumedAt ? new Date(snap.consumedAt) : null,
      failedAt: snap.failedAt ? new Date(snap.failedAt) : null,
      retryCount: snap.retryCount,
      lastErrorCode: snap.lastErrorCode,
      lastErrorMessage: snap.lastErrorMessage,
      version: snap.version,
      updatedAt: new Date(snap.updatedAt),
    };
    if (!existing) {
      await (client as any).inventoryEventOutbox.create({
        data: { id: snap.id, ...data, createdAt: new Date(snap.createdAt) },
      });
    } else {
      await (client as any).inventoryEventOutbox.update({ where: { id: snap.id }, data });
    }
  }

  async findById(id: string): Promise<InventoryEventOutbox | null> {
    const row = await (this.db as any).inventoryEventOutbox.findUnique({ where: { id } });
    return row ? InventoryEventOutbox.rehydrate(this.toSnapshot(row)) : null;
  }

  async findAll(filters: InventoryEventListFilters = {}, page = 1, limit = 20): Promise<InventoryEventListResult> {
    const where: any = {};
    if (filters.organizationId) where.organizationId = filters.organizationId;
    if (filters.eventType) where.eventType = filters.eventType;
    if (filters.eventVersion) where.eventVersion = filters.eventVersion;
    if (filters.aggregateType) where.aggregateType = filters.aggregateType;
    if (filters.aggregateId) where.aggregateId = filters.aggregateId;
    if (filters.status) where.status = filters.status;
    if (filters.producer) where.producer = filters.producer;
    if (filters.correlationId) where.correlationId = filters.correlationId;
    if (filters.failedOnly) where.status = { in: ["FAILED", "DEAD_LETTER"] };
    
    const take = Math.min(Math.max(limit, 1), 100);
    const skip = (Math.max(page, 1) - 1) * take;
    
    const total = await (this.db as any).inventoryEventOutbox.count({ where });
    const rows = await (this.db as any).inventoryEventOutbox.findMany({ where, take, skip, orderBy: { occurredAt: 'desc' } });
    
    return {
      data: rows.map((r: any) => InventoryEventOutbox.rehydrate(this.toSnapshot(r))),
      total,
    };
  }

  async summary(organizationId: string): Promise<Record<string, number>> {
    const rows = await (this.db as any).inventoryEventOutbox.groupBy({
      by: ['status'],
      where: { organizationId },
      _count: { id: true },
    });
    const result: Record<string, number> = {};
    for (const r of rows) {
      result[r.status] = r._count.id;
    }
    return result;
  }

  private toSnapshot(row: any): InventoryEventSnapshot {
    return {
      id: row.id,
      organizationId: row.organizationId,
      eventType: row.eventType,
      eventVersion: row.eventVersion,
      aggregateType: row.aggregateType,
      aggregateId: row.aggregateId,
      producer: row.producer,
      payload: row.payload,
      status: row.status,
      correlationId: row.correlationId,
      idempotencyKey: row.idempotencyKey,
      occurredAt: row.occurredAt.toISOString(),
      availableAt: row.availableAt?.toISOString() ?? null,
      publishedAt: row.publishedAt?.toISOString() ?? null,
      consumedAt: row.consumedAt?.toISOString() ?? null,
      failedAt: row.failedAt?.toISOString() ?? null,
      retryCount: row.retryCount,
      lastErrorCode: row.lastErrorCode,
      lastErrorMessage: row.lastErrorMessage,
      version: row.version,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
  }
}
