import { Prisma, type PrismaClient } from "@prisma/client";
import { ConflictError } from "@sunset/contracts";
import {
  InternationalOrder,
  OrderConcurrencyError,
  type InternationalOrderRepository,
  type InternationalOrderSnapshot,
} from "@sunset/domain";
import { prisma as defaultPrisma } from "../client";

type DbClient = PrismaClient | Prisma.TransactionClient;
const client = (tx?: unknown): DbClient => (tx as DbClient | undefined) ?? defaultPrisma;

function decimalString(value: unknown): string {
  return value == null ? "0" : String(value);
}

function iso(value: unknown): string | null {
  return value ? new Date(value as string | number | Date).toISOString() : null;
}

function mapOrder(row: any): InternationalOrderSnapshot {
  return {
    id: row.id,
    organizationId: row.organizationId,
    code: row.code,
    operationType: row.operationType,
    status: row.status,
    previousStatus: row.previousStatus ?? null,
    supplierPartyId: row.supplierPartyId,
    exporterPartyId: row.exporterPartyId ?? null,
    manufacturerPartyId: row.manufacturerPartyId ?? null,
    incoterm: row.incoterm ?? null,
    paymentTerms: row.paymentTerms ?? null,
    originCountry: row.originCountry ?? null,
    currencyCode: row.currencyCode ?? null,
    expectedReadyDate: row.expectedReadyDate ? (iso(row.expectedReadyDate) ?? "").slice(0, 10) : null,
    responsibleUserId: row.responsibleUserId ?? null,
    subtotalOriginal: row.subtotalOriginal == null ? null : decimalString(row.subtotalOriginal),
    fxRate: row.fxRate == null ? null : decimalString(row.fxRate),
    fxRateDate: iso(row.fxRateDate),
    fxSource: row.fxSource ?? null,
    subtotalFunctional: row.subtotalFunctional == null ? null : decimalString(row.subtotalFunctional),
    idempotencyKey: row.idempotencyKey ?? null,
    idempotencyPayloadHash: row.idempotencyPayloadHash ?? null,
    version: row.version,
    createdBy: row.createdBy,
    cancelledAt: iso(row.cancelledAt),
    cancelledBy: row.cancelledBy ?? null,
    cancelReason: row.cancelReason ?? null,
    suspendedAt: iso(row.suspendedAt),
    suspendedBy: row.suspendedBy ?? null,
    suspendReason: row.suspendReason ?? null,
    resumedAt: iso(row.resumedAt),
    lines: (row.lines ?? []).map((line: any) => ({
      id: line.id,
      lineNumber: line.lineNumber,
      productId: line.productId,
      skuSnapshot: line.skuSnapshot,
      descriptionSnapshot: line.descriptionSnapshot ?? null,
      quantityOrdered: decimalString(line.quantityOrdered),
      quantityConfirmed: decimalString(line.quantityConfirmed),
      quantityProduced: decimalString(line.quantityProduced),
      quantityCancelled: decimalString(line.quantityCancelled),
      unitPrice: decimalString(line.unitPrice),
      lineTotalOriginal: decimalString(line.lineTotalOriginal),
      version: line.version,
    })),
    createdAt: iso(row.createdAt) ?? new Date(0).toISOString(),
    updatedAt: iso(row.updatedAt) ?? new Date(0).toISOString(),
  };
}

function orderData(snapshot: InternationalOrderSnapshot): Record<string, unknown> {
  return {
    organizationId: snapshot.organizationId,
    code: snapshot.code,
    operationType: snapshot.operationType,
    status: snapshot.status,
    previousStatus: snapshot.previousStatus,
    supplierPartyId: snapshot.supplierPartyId,
    exporterPartyId: snapshot.exporterPartyId,
    manufacturerPartyId: snapshot.manufacturerPartyId,
    incoterm: snapshot.incoterm,
    paymentTerms: snapshot.paymentTerms,
    originCountry: snapshot.originCountry,
    currencyCode: snapshot.currencyCode,
    expectedReadyDate: snapshot.expectedReadyDate ? new Date(`${snapshot.expectedReadyDate}T00:00:00.000Z`) : null,
    responsibleUserId: snapshot.responsibleUserId,
    subtotalOriginal: snapshot.subtotalOriginal == null ? null : new Prisma.Decimal(snapshot.subtotalOriginal),
    fxRate: snapshot.fxRate == null ? null : new Prisma.Decimal(snapshot.fxRate),
    fxRateDate: snapshot.fxRateDate ? new Date(snapshot.fxRateDate) : null,
    fxSource: snapshot.fxSource,
    subtotalFunctional: snapshot.subtotalFunctional == null ? null : new Prisma.Decimal(snapshot.subtotalFunctional),
    idempotencyKey: snapshot.idempotencyKey,
    idempotencyPayloadHash: snapshot.idempotencyPayloadHash,
    version: snapshot.version,
    createdBy: snapshot.createdBy,
    cancelledAt: snapshot.cancelledAt ? new Date(snapshot.cancelledAt) : null,
    cancelledBy: snapshot.cancelledBy,
    cancelReason: snapshot.cancelReason,
    suspendedAt: snapshot.suspendedAt ? new Date(snapshot.suspendedAt) : null,
    suspendedBy: snapshot.suspendedBy,
    suspendReason: snapshot.suspendReason,
    resumedAt: snapshot.resumedAt ? new Date(snapshot.resumedAt) : null,
  };
}

export class InternationalOrderRepositoryPrisma implements InternationalOrderRepository {
  constructor(private readonly db: DbClient = defaultPrisma) {}

  async save(
    order: InternationalOrder,
    expectedPersistedVersion: number | null,
    tx?: unknown,
  ): Promise<void> {
    const db = client(tx) as any;
    const snapshot = order.snapshot();
    const data = orderData(snapshot);
    try {
      if (expectedPersistedVersion === null) {
        await db.internationalOrder.create({ data: { id: snapshot.id, ...data } });
      } else {
        const updated = await db.internationalOrder.updateMany({
          where: {
            id: snapshot.id,
            organizationId: snapshot.organizationId,
            version: expectedPersistedVersion,
          },
          data,
        });
        if (updated.count !== 1) {
          throw new OrderConcurrencyError("International order was changed by another command", {
            orderId: snapshot.id,
            expectedVersion: expectedPersistedVersion,
          });
        }
      }

      for (const line of snapshot.lines) {
        const lineData = {
          orderId: snapshot.id,
          lineNumber: line.lineNumber,
          productId: line.productId,
          skuSnapshot: line.skuSnapshot,
          descriptionSnapshot: line.descriptionSnapshot,
          quantityOrdered: new Prisma.Decimal(line.quantityOrdered),
          quantityConfirmed: new Prisma.Decimal(line.quantityConfirmed),
          quantityProduced: new Prisma.Decimal(line.quantityProduced),
          quantityCancelled: new Prisma.Decimal(line.quantityCancelled),
          unitPrice: new Prisma.Decimal(line.unitPrice),
          lineTotalOriginal: new Prisma.Decimal(line.lineTotalOriginal),
          version: line.version,
        };
        await db.internationalOrderLine.upsert({
          where: { id: line.id },
          create: { id: line.id, ...lineData },
          update: lineData,
        });
      }
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
        throw new ConflictError("International order conflicts with an existing code or idempotency key", "InternationalOrder");
      }
      throw error;
    }
  }

  async findById(id: string, organizationId: string, tx?: unknown): Promise<InternationalOrder | null> {
    const row = await (client(tx) as any).internationalOrder.findFirst({
      where: { id, organizationId },
      include: { lines: { orderBy: { lineNumber: "asc" } } },
    });
    return row ? InternationalOrder.rehydrate(mapOrder(row)) : null;
  }

  async findByIdempotencyKey(organizationId: string, key: string, tx?: unknown): Promise<InternationalOrder | null> {
    const row = await (client(tx) as any).internationalOrder.findFirst({
      where: { organizationId, idempotencyKey: key },
      include: { lines: { orderBy: { lineNumber: "asc" } } },
    });
    return row ? InternationalOrder.rehydrate(mapOrder(row)) : null;
  }

  async findAll(params: {
    page: number;
    limit: number;
    status?: string;
    supplierId?: string;
    from?: string;
    to?: string;
    organizationId: string;
  }, tx?: unknown): Promise<{ data: InternationalOrder[]; total: number }> {
    const db = client(tx) as any;
    const page = Math.max(1, Number.isFinite(params.page) ? Math.trunc(params.page) : 1);
    const limit = Math.min(100, Math.max(1, Number.isFinite(params.limit) ? Math.trunc(params.limit) : 20));
    const where: Record<string, unknown> = { organizationId: params.organizationId };
    if (params.status) where.status = params.status;
    if (params.supplierId) where.supplierPartyId = params.supplierId;
    if (params.from || params.to) {
      const createdAt: Record<string, Date> = {};
      if (params.from) createdAt.gte = new Date(params.from);
      if (params.to) createdAt.lte = new Date(params.to);
      where.createdAt = createdAt;
    }
    const [rows, total] = await Promise.all([
      db.internationalOrder.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        include: { lines: { orderBy: { lineNumber: "asc" } } },
      }),
      db.internationalOrder.count({ where }),
    ]);
    return { data: rows.map((row: any) => InternationalOrder.rehydrate(mapOrder(row))), total };
  }

  async nextCode(_organizationId: string, tx?: unknown): Promise<string> {
    const rows = await (client(tx) as any).$queryRaw(
      Prisma.sql`SELECT nextval('international_order_code_seq') AS seq`,
    ) as Array<{ seq: bigint | number | string }>;
    const sequence = String(rows[0]?.seq ?? "1");
    return `PI-${sequence.padStart(6, "0")}`;
  }

  async findTransitionReplay(
    organizationId: string,
    idempotencyKey: string,
    tx?: unknown,
  ): Promise<{ order: InternationalOrder; requestHash: string | null } | null> {
    const row = await (client(tx) as any).internationalOrderStateTransition.findFirst({
      where: { organizationId, idempotencyKey },
      include: { order: { include: { lines: { orderBy: { lineNumber: "asc" } } } } },
    });
    if (!row?.order) return null;
    return {
      order: InternationalOrder.rehydrate(mapOrder(row.order)),
      requestHash: row.requestHash ?? null,
    };
  }
}
