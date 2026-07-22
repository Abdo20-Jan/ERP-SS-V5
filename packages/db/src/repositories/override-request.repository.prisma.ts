import { ConflictError } from "@sunset/contracts";
import {
  OverrideRequest,
  type OverrideRequestListFilters,
  type OverrideRequestListResult,
  type OverrideRequestRepository,
  type OverrideRequestSnapshot,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

type DbClient = PrismaClient | Prisma.TransactionClient;

type Row = {
  id: string;
  organizationId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  reason: string;
  evidenceUrl: string | null;
  requestedById: string;
  requestedAt: Date;
  approvedById: string | null;
  approvedAt: Date | null;
  rejectedById: string | null;
  rejectedAt: Date | null;
  rejectionReason: string | null;
  cancelledById: string | null;
  cancelledAt: Date | null;
  status: string;
  executedById: string | null;
  executedAt: Date | null;
  expiresAt: Date | null;
  version: number;
  createdAt: Date;
  updatedAt: Date;
};

function delegate(db: DbClient) {
  const d = (db as unknown as Record<string, unknown>)["overrideRequest"] as
    | {
        findUnique: (a: unknown) => Promise<Row | null>;
        findFirst: (a: unknown) => Promise<Row | null>;
        findMany: (a: unknown) => Promise<Row[]>;
        count: (a: unknown) => Promise<number>;
        create: (a: unknown) => Promise<Row>;
        update: (a: unknown) => Promise<Row>;
      }
    | undefined;
  if (!d) {
    throw new Error(
      "PrismaOverrideRequestRepository: overrideRequest delegate missing — run prisma generate",
    );
  }
  return d;
}

export class PrismaOverrideRequestRepository implements OverrideRequestRepository {
  constructor(private readonly db: DbClient = defaultPrisma) {}

  async save(override: OverrideRequest, db?: DbClient): Promise<void> {
    const client = db ?? this.db;
    const d = delegate(client);
    const snap = override.toSnapshot();
    const existing = await d.findUnique({ where: { id: snap.id } });
    const data = {
      organizationId: snap.organizationId,
      action: snap.action,
      resourceType: snap.resourceType,
      resourceId: snap.resourceId,
      reason: snap.reason,
      evidenceUrl: snap.evidenceUrl,
      requestedById: snap.requestedById,
      requestedAt: new Date(snap.requestedAt),
      approvedById: snap.approvedById,
      approvedAt: snap.approvedAt ? new Date(snap.approvedAt) : null,
      rejectedById: snap.rejectedById,
      rejectedAt: snap.rejectedAt ? new Date(snap.rejectedAt) : null,
      rejectionReason: snap.rejectionReason,
      cancelledById: snap.cancelledById,
      cancelledAt: snap.cancelledAt ? new Date(snap.cancelledAt) : null,
      status: snap.status,
      executedById: snap.executedById,
      executedAt: snap.executedAt ? new Date(snap.executedAt) : null,
      expiresAt: snap.expiresAt ? new Date(snap.expiresAt) : null,
      version: snap.version,
      updatedAt: new Date(snap.updatedAt),
    };
    try {
      if (!existing) {
        await d.create({ data: { id: snap.id, ...data, createdAt: new Date(snap.createdAt) } });
      } else {
        if (existing.version !== snap.version - 1 && existing.version !== snap.version) {
          // allow same version no-op saves after rehydrate
        }
        await d.update({ where: { id: snap.id }, data });
      }
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        throw new ConflictError(
          "A pending override already exists for this resource/action",
          "OverrideRequest",
        );
      }
      throw err;
    }
  }

  async findById(id: string): Promise<OverrideRequest | null> {
    const row = await delegate(this.db).findUnique({ where: { id } });
    return row ? this.toDomain(row) : null;
  }

  async findPending(
    organizationId: string,
    action: string,
    resourceType: string,
    resourceId: string,
  ): Promise<OverrideRequest | null> {
    const row = await delegate(this.db).findFirst({
      where: { organizationId, action, resourceType, resourceId, status: "PENDING" },
    });
    return row ? this.toDomain(row) : null;
  }

  async findAll(
    filters: OverrideRequestListFilters = {},
    page = 1,
    limit = 20,
  ): Promise<OverrideRequestListResult> {
    const where: Record<string, unknown> = {};
    if (filters.status) where.status = filters.status;
    if (filters.action) where.action = filters.action;
    if (filters.requestedById) where.requestedById = filters.requestedById;
    if (filters.resourceType) where.resourceType = filters.resourceType;
    if (filters.resourceId) where.resourceId = filters.resourceId;
    if (filters.organizationId) where.organizationId = filters.organizationId;
    const take = Math.min(Math.max(limit, 1), 100);
    const skip = (Math.max(page, 1) - 1) * take;
    const d = delegate(this.db);
    const [total, rows] = await Promise.all([
      d.count({ where }),
      d.findMany({
        where,
        orderBy: { requestedAt: "desc" },
        skip,
        take,
      }),
    ]);
    return { data: rows.map((r) => this.toDomain(r)), total };
  }

  private toDomain(row: Row): OverrideRequest {
    const snapshot: OverrideRequestSnapshot = {
      id: row.id,
      organizationId: row.organizationId,
      action: row.action,
      resourceType: row.resourceType,
      resourceId: row.resourceId,
      reason: row.reason,
      evidenceUrl: row.evidenceUrl,
      requestedById: row.requestedById,
      requestedAt: row.requestedAt.toISOString(),
      approvedById: row.approvedById,
      approvedAt: row.approvedAt?.toISOString() ?? null,
      rejectedById: row.rejectedById,
      rejectedAt: row.rejectedAt?.toISOString() ?? null,
      rejectionReason: row.rejectionReason,
      cancelledById: row.cancelledById,
      cancelledAt: row.cancelledAt?.toISOString() ?? null,
      status: row.status,
      executedById: row.executedById,
      executedAt: row.executedAt?.toISOString() ?? null,
      expiresAt: row.expiresAt?.toISOString() ?? null,
      version: row.version,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
    return OverrideRequest.rehydrate(snapshot);
  }
}
