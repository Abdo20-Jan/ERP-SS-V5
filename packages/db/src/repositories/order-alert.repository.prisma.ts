import type { PrismaClient } from "@prisma/client"
import { OrderAlert, type OrderAlertSnapshot } from "@sunset/domain"
import type { OrderAlertRepository } from "@sunset/domain"
import { prisma as dp } from "../client"

function map(row: any): OrderAlert {
  return OrderAlert.rehydrate({
    id: row.id, orderId: row.orderId, code: row.code, severity: row.severity, message: row.message,
    status: row.status, acknowledgedBy: row.acknowledgedBy,
    acknowledgedAt: row.acknowledgedAt ? new Date(row.acknowledgedAt).toISOString() : null,
    resolvedBy: row.resolvedBy,
    resolvedAt: row.resolvedAt ? new Date(row.resolvedAt).toISOString() : null,
    resolutionReason: row.resolutionReason,
    createdAt: row.createdAt ? new Date(row.createdAt).toISOString() : new Date().toISOString(),
  })
}

export class OrderAlertRepositoryPrisma implements OrderAlertRepository {
  db: PrismaClient
  constructor(db?: PrismaClient) { this.db = db ?? (dp as unknown as PrismaClient) }
  private c(tx?: unknown): PrismaClient { return (tx as PrismaClient) ?? this.db }
  async save(a: OrderAlert, tx?: unknown): Promise<void> {
    const s = a.snapshot()
    const d = { orderId: s.orderId, code: s.code, severity: s.severity, message: s.message, status: s.status,
      acknowledgedBy: s.acknowledgedBy, acknowledgedAt: s.acknowledgedAt ? new Date(s.acknowledgedAt) : null,
      resolvedBy: s.resolvedBy, resolvedAt: s.resolvedAt ? new Date(s.resolvedAt) : null,
      resolutionReason: s.resolutionReason }
    await (this.c(tx) as any).internationalOrderAlert.upsert({ where: { id: s.id }, create: { id: s.id, ...d }, update: d })
  }
  async findByOrder(orderId: string, tx?: unknown): Promise<OrderAlert[]> {
    const rows = await (this.c(tx) as any).internationalOrderAlert.findMany({ where: { orderId }, orderBy: { createdAt: "desc" } })
    return rows.map(map)
  }
  async findById(id: string, tx?: unknown): Promise<OrderAlert | null> {
    const r = await (this.c(tx) as any).internationalOrderAlert.findUnique({ where: { id } })
    return r ? map(r) : null
  }
}
