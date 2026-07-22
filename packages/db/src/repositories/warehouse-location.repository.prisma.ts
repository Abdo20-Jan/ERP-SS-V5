import { ConflictError } from "@sunset/contracts";
import {
  LOCATION_ROOT_PARENT_KEY,
  WarehouseLocation,
  WarehouseLocationConfig,
  type WarehouseLocationListFilters,
  type WarehouseLocationListResult,
  type WarehouseLocationRepository,
  type WarehouseLocationSnapshot,
  type WarehouseLocationConfigSnapshot,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

type DbClient = PrismaClient | Prisma.TransactionClient;

function dec(v: Prisma.Decimal | number | null | undefined): number | null {
  if (v == null) return null;
  return typeof v === "number" ? v : Number(v.toString());
}

type LocationRow = {
  id: string;
  warehouseId: string;
  parentId: string | null;
  parentKey: string;
  level: number;
  code: string;
  name: string;
  path: string;
  isVirtual: boolean;
  virtualType: string | null;
  isActive: boolean;
  capacity: Prisma.Decimal | null;
  capacityUnit: string | null;
  version: number;
  createdAt: Date;
  updatedAt: Date;
};

type ConfigRow = {
  id: string;
  warehouseId: string;
  maxLevels: number;
  level1Name: string;
  level2Name: string;
  level3Name: string;
  level4Name: string;
  level5Name: string;
  useLevel2: boolean;
  useLevel3: boolean;
  useLevel4: boolean;
  useLevel5: boolean;
  version: number;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Prisma delegate accessors. Uses bracket access so the package still typechecks
 * before `prisma generate` picks up S02 models in every environment.
 */
function locationDelegate(db: DbClient) {
  const d = (db as unknown as Record<string, unknown>)["warehouseLocation"] as
    | {
        findUnique: (a: unknown) => Promise<LocationRow | null>;
        findFirst: (a: unknown) => Promise<LocationRow | null>;
        findMany: (a: unknown) => Promise<LocationRow[]>;
        count: (a: unknown) => Promise<number>;
        create: (a: unknown) => Promise<LocationRow>;
        update: (a: unknown) => Promise<LocationRow>;
        aggregate: (a: unknown) => Promise<{ _max: { level: number | null } }>;
      }
    | undefined;
  if (!d) {
    throw new Error(
      "PrismaWarehouseLocationRepository: warehouseLocation delegate missing — run prisma generate",
    );
  }
  return d;
}

function configDelegate(db: DbClient) {
  const d = (db as unknown as Record<string, unknown>)[
    "warehouseLocationConfig"
  ] as
    | {
        findUnique: (a: unknown) => Promise<ConfigRow | null>;
        create: (a: unknown) => Promise<ConfigRow>;
        update: (a: unknown) => Promise<ConfigRow>;
      }
    | undefined;
  if (!d) {
    throw new Error(
      "PrismaWarehouseLocationRepository: warehouseLocationConfig delegate missing — run prisma generate",
    );
  }
  return d;
}

export class PrismaWarehouseLocationRepository
  implements WarehouseLocationRepository
{
  constructor(private readonly db: PrismaClient = defaultPrisma) {}

  async saveConfig(
    config: WarehouseLocationConfig,
    db: DbClient = this.db,
  ): Promise<void> {
    const snap = config.toSnapshot();
    const delegate = configDelegate(db);
    try {
      const existing = await delegate.findUnique({ where: { id: snap.id } });
      const data = {
        warehouseId: snap.warehouseId,
        maxLevels: snap.maxLevels,
        level1Name: snap.level1Name,
        level2Name: snap.level2Name,
        level3Name: snap.level3Name,
        level4Name: snap.level4Name,
        level5Name: snap.level5Name,
        useLevel2: snap.useLevel2,
        useLevel3: snap.useLevel3,
        useLevel4: snap.useLevel4,
        useLevel5: snap.useLevel5,
        version: snap.version,
        updatedAt: new Date(snap.updatedAt),
      };
      if (!existing) {
        await delegate.create({
          data: {
            id: snap.id,
            ...data,
            createdAt: new Date(snap.createdAt),
          },
        });
        return;
      }
      await delegate.update({ where: { id: snap.id }, data });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        throw new ConflictError(
          "Warehouse location config already exists for warehouse",
          "WarehouseLocationConfig",
        );
      }
      throw err;
    }
  }

  async findConfigByWarehouseId(
    warehouseId: string,
  ): Promise<WarehouseLocationConfig | null> {
    const row = await configDelegate(this.db).findUnique({
      where: { warehouseId },
    });
    return row ? this.configToDomain(row) : null;
  }

  async save(
    location: WarehouseLocation,
    db: DbClient = this.db,
  ): Promise<void> {
    const snap = location.toSnapshot();
    const delegate = locationDelegate(db);
    try {
      const existing = await delegate.findUnique({ where: { id: snap.id } });
      const data = {
        warehouseId: snap.warehouseId,
        parentId: snap.parentId,
        parentKey: snap.parentKey,
        level: snap.level,
        code: snap.code,
        name: snap.name,
        path: snap.path,
        isVirtual: snap.isVirtual,
        virtualType: snap.virtualType,
        isActive: snap.isActive,
        capacity: snap.capacity,
        capacityUnit: snap.capacityUnit,
        version: snap.version,
        updatedAt: new Date(snap.updatedAt),
      };
      if (!existing) {
        await delegate.create({
          data: {
            id: snap.id,
            ...data,
            createdAt: new Date(snap.createdAt),
          },
        });
        return;
      }
      await delegate.update({ where: { id: snap.id }, data });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        throw new ConflictError(
          "Location code already exists under parent",
          "WarehouseLocation",
        );
      }
      throw err;
    }
  }

  async findById(id: string): Promise<WarehouseLocation | null> {
    const row = await locationDelegate(this.db).findUnique({ where: { id } });
    return row ? this.locationToDomain(row) : null;
  }

  async findByWarehouseAndCode(
    warehouseId: string,
    parentKey: string,
    code: string,
  ): Promise<WarehouseLocation | null> {
    const normalized = WarehouseLocation.normalizeCode(code);
    const row = await locationDelegate(this.db).findFirst({
      where: { warehouseId, parentKey, code: normalized },
    });
    return row ? this.locationToDomain(row) : null;
  }

  async findByWarehouse(
    warehouseId: string,
    filters?: WarehouseLocationListFilters,
  ): Promise<WarehouseLocationListResult> {
    const where: Record<string, unknown> = { warehouseId };
    if (filters?.parentId !== undefined) where.parentId = filters.parentId;
    if (filters?.level !== undefined) where.level = filters.level;
    if (filters?.isActive !== undefined) where.isActive = filters.isActive;
    if (filters?.isVirtual !== undefined) where.isVirtual = filters.isVirtual;
    if (filters?.search?.trim()) {
      const q = filters.search.trim();
      where.OR = [
        { code: { contains: q, mode: "insensitive" } },
        { name: { contains: q, mode: "insensitive" } },
        { path: { contains: q, mode: "insensitive" } },
      ];
    }

    const delegate = locationDelegate(this.db);
    const [total, rows] = await Promise.all([
      delegate.count({ where }),
      delegate.findMany({
        where,
        orderBy: [{ path: "asc" }, { code: "asc" }],
      }),
    ]);

    return {
      data: rows.map((r) => this.locationToDomain(r)),
      total,
    };
  }

  async countActiveChildren(locationId: string): Promise<number> {
    return locationDelegate(this.db).count({
      where: { parentId: locationId, isActive: true },
    });
  }

  async findPathChain(locationId: string): Promise<WarehouseLocation[]> {
    const delegate = locationDelegate(this.db);
    const self = await delegate.findUnique({ where: { id: locationId } });
    if (!self) return [];

    const chain: WarehouseLocation[] = [];
    let parentId = self.parentId;
    const guard = new Set<string>();

    while (parentId) {
      if (guard.has(parentId)) break;
      guard.add(parentId);
      const parent = await delegate.findUnique({ where: { id: parentId } });
      if (!parent) break;
      chain.unshift(this.locationToDomain(parent));
      parentId = parent.parentId;
    }
    return chain;
  }

  async findHighestPhysicalLevel(warehouseId: string): Promise<number> {
    const result = await locationDelegate(this.db).aggregate({
      where: { warehouseId, isVirtual: false },
      _max: { level: true },
    });
    return result._max.level ?? 0;
  }

  private configToDomain(row: ConfigRow): WarehouseLocationConfig {
    const snapshot: WarehouseLocationConfigSnapshot = {
      id: row.id,
      warehouseId: row.warehouseId,
      maxLevels: row.maxLevels,
      level1Name: row.level1Name,
      level2Name: row.level2Name,
      level3Name: row.level3Name,
      level4Name: row.level4Name,
      level5Name: row.level5Name,
      useLevel2: row.useLevel2,
      useLevel3: row.useLevel3,
      useLevel4: row.useLevel4,
      useLevel5: row.useLevel5,
      version: row.version,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
    return WarehouseLocationConfig.rehydrate(snapshot);
  }

  private locationToDomain(row: LocationRow): WarehouseLocation {
    const snapshot: WarehouseLocationSnapshot = {
      id: row.id,
      warehouseId: row.warehouseId,
      parentId: row.parentId,
      parentKey: row.parentKey || LOCATION_ROOT_PARENT_KEY,
      level: row.level,
      code: row.code,
      name: row.name,
      path: row.path,
      isVirtual: row.isVirtual,
      virtualType: row.virtualType,
      isActive: row.isActive,
      capacity: dec(row.capacity),
      capacityUnit: row.capacityUnit,
      version: row.version,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
    return WarehouseLocation.rehydrate(snapshot);
  }
}
