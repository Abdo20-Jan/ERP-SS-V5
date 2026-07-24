import { ConflictError } from "@sunset/contracts";
import {
  OverrideConcurrencyError,
  OverrideRequest,
  type OverrideRequestDbClient,
  type OverrideRequestListFilters,
  type OverrideRequestListResult,
  type OverrideRequestSnapshot,
  type StrictOverrideRequestRepository,
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

type OverrideRequestDelegate = {
  findUnique: (args: unknown) => Promise<Row | null>;
  findFirst: (args: unknown) => Promise<Row | null>;
  findMany: (args: unknown) => Promise<Row[]>;
  count: (args: unknown) => Promise<number>;
  create: (args: unknown) => Promise<Row>;
  update: (args: unknown) => Promise<Row>;
  updateMany: (args: unknown) => Promise<{ count: number }>;
};

function delegate(db: DbClient): OverrideRequestDelegate {
  const overrideRequestDelegate = (db as unknown as Record<string, unknown>)[
    "overrideRequest"
  ] as OverrideRequestDelegate | undefined;

  if (!overrideRequestDelegate) {
    throw new Error(
      "PrismaOverrideRequestRepository: overrideRequest delegate missing — run prisma generate",
    );
  }

  return overrideRequestDelegate;
}

function client(
  db: OverrideRequestDbClient | undefined,
  fallback: DbClient,
): DbClient {
  return (db as DbClient | undefined) ?? fallback;
}

function persistenceData(snapshot: OverrideRequestSnapshot) {
  return {
    organizationId: snapshot.organizationId,
    action: snapshot.action,
    resourceType: snapshot.resourceType,
    resourceId: snapshot.resourceId,
    reason: snapshot.reason,
    evidenceUrl: snapshot.evidenceUrl,
    requestedById: snapshot.requestedById,
    requestedAt: new Date(snapshot.requestedAt),
    approvedById: snapshot.approvedById,
    approvedAt: snapshot.approvedAt ? new Date(snapshot.approvedAt) : null,
    rejectedById: snapshot.rejectedById,
    rejectedAt: snapshot.rejectedAt ? new Date(snapshot.rejectedAt) : null,
    rejectionReason: snapshot.rejectionReason,
    cancelledById: snapshot.cancelledById,
    cancelledAt: snapshot.cancelledAt ? new Date(snapshot.cancelledAt) : null,
    status: snapshot.status,
    executedById: snapshot.executedById,
    executedAt: snapshot.executedAt ? new Date(snapshot.executedAt) : null,
    expiresAt: snapshot.expiresAt ? new Date(snapshot.expiresAt) : null,
    version: snapshot.version,
    updatedAt: new Date(snapshot.updatedAt),
  };
}

function mapUniqueConflict(error: unknown): never {
  if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002"
  ) {
    throw new ConflictError(
      "A pending override already exists for this resource/action",
      "OverrideRequest",
    );
  }
  throw error;
}

export class PrismaOverrideRequestRepository
  implements StrictOverrideRequestRepository
{
  constructor(private readonly db: DbClient = defaultPrisma) {}

  /** Legacy Inventory save semantics are retained for compatibility. */
  async save(
    override: OverrideRequest,
    db?: OverrideRequestDbClient,
  ): Promise<void> {
    const persistenceClient = client(db, this.db);
    const overrideDelegate = delegate(persistenceClient);
    const snapshot = override.toSnapshot();
    const data = persistenceData(snapshot);
    const existing = await overrideDelegate.findUnique({
      where: { id: snapshot.id },
    });

    try {
      if (!existing) {
        await overrideDelegate.create({
          data: {
            id: snapshot.id,
            ...data,
            createdAt: new Date(snapshot.createdAt),
          },
        });
      } else {
        await overrideDelegate.update({
          where: { id: snapshot.id },
          data,
        });
      }
    } catch (error) {
      mapUniqueConflict(error);
    }
  }

  async saveWithVersion(
    override: OverrideRequest,
    expectedPersistedVersion: number | null,
    db?: OverrideRequestDbClient,
  ): Promise<void> {
    const overrideDelegate = delegate(client(db, this.db));
    const snapshot = override.toSnapshot();
    const data = persistenceData(snapshot);

    try {
      if (expectedPersistedVersion === null) {
        await overrideDelegate.create({
          data: {
            id: snapshot.id,
            ...data,
            createdAt: new Date(snapshot.createdAt),
          },
        });
        return;
      }

      const updated = await overrideDelegate.updateMany({
        where: {
          id: snapshot.id,
          organizationId: snapshot.organizationId,
          version: expectedPersistedVersion,
        },
        data,
      });

      if (updated.count !== 1) {
        throw new OverrideConcurrencyError(
          "Override request was changed by another command",
          {
            overrideId: snapshot.id,
            organizationId: snapshot.organizationId,
            expectedVersion: expectedPersistedVersion,
          },
        );
      }
    } catch (error) {
      mapUniqueConflict(error);
    }
  }

  async findById(id: string): Promise<OverrideRequest | null> {
    const row = await delegate(this.db).findUnique({ where: { id } });
    return row ? this.toDomain(row) : null;
  }

  async findByIdForOrganization(
    id: string,
    organizationId: string,
    db?: OverrideRequestDbClient,
  ): Promise<OverrideRequest | null> {
    const row = await delegate(client(db, this.db)).findFirst({
      where: { id, organizationId },
    });
    return row ? this.toDomain(row) : null;
  }

  async findPending(
    organizationId: string,
    action: string,
    resourceType: string,
    resourceId: string,
    db?: OverrideRequestDbClient,
  ): Promise<OverrideRequest | null> {
    const row = await delegate(client(db, this.db)).findFirst({
      where: {
        organizationId,
        action,
        resourceType,
        resourceId,
        status: "PENDING",
      },
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
    const overrideDelegate = delegate(this.db);
    const [total, rows] = await Promise.all([
      overrideDelegate.count({ where }),
      overrideDelegate.findMany({
        where,
        orderBy: { requestedAt: "desc" },
        skip,
        take,
      }),
    ]);
    return { data: rows.map((row) => this.toDomain(row)), total };
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
