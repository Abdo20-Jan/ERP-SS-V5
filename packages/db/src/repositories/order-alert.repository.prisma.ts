import type { Prisma, PrismaClient } from "@prisma/client";
import { OrderAlert, type OrderAlertRepository } from "@sunset/domain";
import { prisma as dp } from "../client";

type Db = PrismaClient | Prisma.TransactionClient;
const c = (tx?: unknown): Db => (tx as Db | undefined) ?? (dp as unknown as Db);

function map(row: any): OrderAlert {
  return OrderAlert.rehydrate({
    id: row.id,
    orderId: row.orderId,
    code: row.code,
    severity: row.severity,
    message: row.message,
    status: row.status,
    acknowledgedBy: row.acknowledgedBy,
    acknowledgedAt: row.acknowledgedAt ? new Date(row.acknowledgedAt).toISOString() : null,
    resolvedBy: row.resolvedBy,
    resolvedAt: row.resolvedAt ? new Date(row.resolvedAt).toISOString() : null,
    resolutionReason: row.resolutionReason,
    createdAt: row.createdAt ? new Date(row.createdAt).toISOString() : new Date().toISOString(),
  });
}

export class OrderAlertRepositoryPrisma implements OrderAlertRepository {
  constructor(private readonly db: Db = dp as unknown as Db) {}
  private client(tx?: unknown): any { return c(tx); }

  async save(a: OrderAlert, tx?: unknown): Promise<void> {
    const s = a.snapshot() as any;
    const d = {
      organizationId: s.organizationId ?? "org_001",
      orderId: s.orderId,
      code: s.code,
      severity: s.severity,
      message: s.message,
      status: s.status,
      acknowledgedBy: s.acknowledgedBy,
      acknowledgedAt: s.acknowledgedAt ? new Date(s.acknowledgedAt) : null,
      resolvedBy: s.resolvedBy,
      resolvedAt: s.resolvedAt ? new Date(s.resolvedAt) : null,
      resolutionReason: s.resolutionReason,
    };
    await this.client(tx).internationalOrderAlert.upsert({
      where: { id: s.id },
      create: { id: s.id, ...d },
      update: d,
    });
  }

  async findByOrder(orderId: string, organizationId: string, tx?: unknown): Promise<OrderAlert[]> {
    const rows = await this.client(tx).internationalOrderAlert.findMany({
      where: { orderId, organizationId },
      orderBy: { createdAt: "desc" },
    });
    return rows.map(map);
  }

  async findById(id: string, organizationId: string, tx?: unknown): Promise<OrderAlert | null> {
    const r = await this.client(tx).internationalOrderAlert.findFirst({ where: { id, organizationId } });
    return r ? map(r) : null;
  }
}
