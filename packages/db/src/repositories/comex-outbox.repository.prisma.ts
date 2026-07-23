import type { PrismaClient } from "@prisma/client";
import type { ComexOutboxRepository, InternationalOrderDomainEvent } from "@sunset/domain";
import { prisma as defaultPrisma } from "../client";

type DbClient = PrismaClient | import("@prisma/client").Prisma.TransactionClient;

export class PrismaComexOutboxRepository implements ComexOutboxRepository {
  constructor(private readonly db: DbClient = defaultPrisma) {}

  async enqueue(
    events: InternationalOrderDomainEvent[],
    context: { organizationId: string; correlationId: string },
    tx?: unknown,
  ): Promise<void> {
    if (events.length === 0) return;
    const db = (tx as DbClient | undefined) ?? this.db;
    await (db as any).comexEventOutbox.createMany({
      data: events.map((event) => ({
        id: event.eventId,
        organizationId: context.organizationId,
        eventType: event.eventType,
        eventVersion: event.eventVersion,
        aggregateType: "international_order",
        aggregateId: event.orderId,
        producer: "comex.order",
        payload: {
          type: event.eventType,
          orderId: event.orderId,
          organizationId: event.organizationId ?? context.organizationId,
          version: event.aggregateVersion ?? 0,
          correlationId: context.correlationId,
          occurredAt: event.timestamp,
          payload: event.data ?? {},
          fromStatus: event.fromStatus,
          toStatus: event.toStatus,
        },
        status: "PENDING",
        correlationId: context.correlationId,
        idempotencyKey: event.eventId,
        occurredAt: new Date(event.timestamp),
        availableAt: new Date(event.timestamp),
      })),
      skipDuplicates: true,
    });
  }
}
