import {
  InventoryTask,
  type InventoryTaskListFilters,
  type InventoryTaskListResult,
  type InventoryTaskRepository,
  type InventoryTaskSnapshot,
  type InventoryTaskSummary,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

type DbClient = PrismaClient | Prisma.TransactionClient;

type Row = {
  id: string;
  organizationId: string;
  type: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  ownerUserId: string | null;
  ownerRole: string | null;
  dueAt: Date | null;
  slaMinutes: number | null;
  sourceType: string;
  sourceId: string | null;
  warehouseId: string | null;
  locationId: string | null;
  blockedReason: string | null;
  dependencyType: string | null;
  dependencyId: string | null;
  completedAt: Date | null;
  cancelledAt: Date | null;
  cancelReason: string | null;
  version: number;
  createdAt: Date;
  updatedAt: Date;
};

function delegate(db: DbClient) {
  const d = (db as unknown as Record<string, unknown>)["inventoryTask"] as
    | {
        findUnique: (a: unknown) => Promise<Row | null>;
        findMany: (a: unknown) => Promise<Row[]>;
        count: (a: unknown) => Promise<number>;
        create: (a: unknown) => Promise<Row>;
        update: (a: unknown) => Promise<Row>;
      }
    | undefined;
  if (!d) {
    throw new Error(
      "PrismaInventoryTaskRepository: inventoryTask delegate missing — run prisma generate",
    );
  }
  return d;
}

function buildWhere(
  filters: InventoryTaskListFilters,
  now: Date,
): Record<string, unknown> {
  const where: Record<string, unknown> = {};
  if (filters.organizationId) where.organizationId = filters.organizationId;
  if (filters.status) where.status = filters.status;
  if (filters.statuses?.length) where.status = { in: filters.statuses };
  if (filters.priority) where.priority = filters.priority;
  if (filters.ownerUserId) where.ownerUserId = filters.ownerUserId;
  if (filters.warehouseId) where.warehouseId = filters.warehouseId;
  if (filters.locationId) where.locationId = filters.locationId;
  if (filters.sourceType) where.sourceType = filters.sourceType;
  if (filters.sourceId) where.sourceId = filters.sourceId;
  if (filters.type) where.type = filters.type;
  if (filters.overdueOnly) {
    where.AND = [
      { status: { notIn: ["DONE", "CANCELLED"] } },
      { dueAt: { not: null, lt: now } },
    ];
  }
  return where;
}

function worklistCompare(a: Row, b: Row, now: Date): number {
  const hot = (s: string) => (s === "BLOCKED" || s === "ESCALATED" ? 0 : 1);
  const ha = hot(a.status);
  const hb = hot(b.status);
  if (ha !== hb) return ha - hb;

  const overdue = (r: Row) =>
    r.status !== "DONE" &&
    r.status !== "CANCELLED" &&
    r.dueAt != null &&
    r.dueAt.getTime() < now.getTime()
      ? 0
      : 1;
  const oa = overdue(a);
  const ob = overdue(b);
  if (oa !== ob) return oa - ob;

  const da = a.dueAt?.getTime() ?? Number.POSITIVE_INFINITY;
  const dbv = b.dueAt?.getTime() ?? Number.POSITIVE_INFINITY;
  if (da !== dbv) return da - dbv;

  const rank: Record<string, number> = {
    URGENT: 0,
    HIGH: 1,
    MEDIUM: 2,
    LOW: 3,
  };
  const pa = rank[a.priority] ?? 4;
  const pb = rank[b.priority] ?? 4;
  if (pa !== pb) return pa - pb;

  return a.createdAt.getTime() - b.createdAt.getTime();
}

export class PrismaInventoryTaskRepository implements InventoryTaskRepository {
  constructor(private readonly db: DbClient = defaultPrisma) {}

  async save(task: InventoryTask, db?: DbClient): Promise<void> {
    const client = db ?? this.db;
    const d = delegate(client);
    const snap = task.toSnapshot();
    const existing = await d.findUnique({ where: { id: snap.id } });
    const data = {
      organizationId: snap.organizationId,
      type: snap.type,
      title: snap.title,
      description: snap.description,
      status: snap.status,
      priority: snap.priority,
      ownerUserId: snap.ownerUserId,
      ownerRole: snap.ownerRole,
      dueAt: snap.dueAt ? new Date(snap.dueAt) : null,
      slaMinutes: snap.slaMinutes,
      sourceType: snap.sourceType,
      sourceId: snap.sourceId,
      warehouseId: snap.warehouseId,
      locationId: snap.locationId,
      blockedReason: snap.blockedReason,
      dependencyType: snap.dependencyType,
      dependencyId: snap.dependencyId,
      completedAt: snap.completedAt ? new Date(snap.completedAt) : null,
      cancelledAt: snap.cancelledAt ? new Date(snap.cancelledAt) : null,
      cancelReason: snap.cancelReason,
      version: snap.version,
      updatedAt: new Date(snap.updatedAt),
    };
    if (!existing) {
      await d.create({
        data: { id: snap.id, ...data, createdAt: new Date(snap.createdAt) },
      });
    } else {
      await d.update({ where: { id: snap.id }, data });
    }
  }

  async findById(id: string): Promise<InventoryTask | null> {
    const row = await delegate(this.db).findUnique({ where: { id } });
    return row ? this.toDomain(row) : null;
  }

  async findAll(
    filters: InventoryTaskListFilters = {},
    page = 1,
    limit = 20,
    now: Date = new Date(),
  ): Promise<InventoryTaskListResult> {
    const where = buildWhere(filters, now);
    const take = Math.min(Math.max(limit, 1), 100);
    const skip = (Math.max(page, 1) - 1) * take;
    const d = delegate(this.db);
    const total = await d.count({ where });
    // Bounded fetch + in-memory worklist sort (SQL CASE ORDER BY deferred if volume grows).
    const fetchTake = Math.min(Math.max(total, take + skip), 5000);
    const allForSort = await d.findMany({
      where,
      take: fetchTake > 0 ? fetchTake : take,
      skip: 0,
    });
    allForSort.sort((a, b) => worklistCompare(a, b, now));
    const pageRows = allForSort.slice(skip, skip + take);
    return { data: pageRows.map((r) => this.toDomain(r)), total };
  }

  async summary(
    filters: Pick<
      InventoryTaskListFilters,
      "organizationId" | "ownerUserId" | "warehouseId"
    > = {},
    now: Date = new Date(),
  ): Promise<InventoryTaskSummary> {
    const base: Record<string, unknown> = {};
    if (filters.organizationId) base.organizationId = filters.organizationId;
    if (filters.ownerUserId) base.ownerUserId = filters.ownerUserId;
    if (filters.warehouseId) base.warehouseId = filters.warehouseId;
    const d = delegate(this.db);
    const startOfDay = new Date(now);
    startOfDay.setUTCHours(0, 0, 0, 0);
    const endOfDay = new Date(startOfDay);
    endOfDay.setUTCDate(endOfDay.getUTCDate() + 1);

    const [open, inProgress, blocked, escalated, overdue, doneToday] =
      await Promise.all([
        d.count({ where: { ...base, status: "OPEN" } }),
        d.count({ where: { ...base, status: "IN_PROGRESS" } }),
        d.count({ where: { ...base, status: "BLOCKED" } }),
        d.count({ where: { ...base, status: "ESCALATED" } }),
        d.count({
          where: {
            ...base,
            status: { notIn: ["DONE", "CANCELLED"] },
            dueAt: { not: null, lt: now },
          },
        }),
        d.count({
          where: {
            ...base,
            status: "DONE",
            completedAt: { gte: startOfDay, lt: endOfDay },
          },
        }),
      ]);
    return { open, inProgress, blocked, escalated, overdue, doneToday };
  }

  private toDomain(row: Row): InventoryTask {
    const snapshot: InventoryTaskSnapshot = {
      id: row.id,
      organizationId: row.organizationId,
      type: row.type,
      title: row.title,
      description: row.description,
      status: row.status,
      priority: row.priority,
      ownerUserId: row.ownerUserId,
      ownerRole: row.ownerRole,
      dueAt: row.dueAt?.toISOString() ?? null,
      slaMinutes: row.slaMinutes,
      sourceType: row.sourceType,
      sourceId: row.sourceId,
      warehouseId: row.warehouseId,
      locationId: row.locationId,
      blockedReason: row.blockedReason,
      dependencyType: row.dependencyType,
      dependencyId: row.dependencyId,
      completedAt: row.completedAt?.toISOString() ?? null,
      cancelledAt: row.cancelledAt?.toISOString() ?? null,
      cancelReason: row.cancelReason,
      version: row.version,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
    return InventoryTask.rehydrate(snapshot);
  }
}
