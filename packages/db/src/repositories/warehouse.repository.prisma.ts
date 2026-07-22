import { ConflictError } from "@sunset/contracts";
import {
  Warehouse,
  type WarehouseListParams,
  type WarehouseListResult,
  type WarehouseRepository,
  type WarehouseSnapshot,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

type DbClient = PrismaClient | Prisma.TransactionClient;

function dec(v: Prisma.Decimal | number | null | undefined): number | null {
  if (v == null) return null;
  return typeof v === "number" ? v : Number(v.toString());
}

export class PrismaWarehouseRepository implements WarehouseRepository {
  constructor(private readonly db: PrismaClient = defaultPrisma) {}

  async save(warehouse: Warehouse, db: DbClient = this.db): Promise<void> {
    const snap = warehouse.toSnapshot();
    try {
      const existing = await db.warehouse.findUnique({ where: { id: snap.id } });
      const data = {
        organizationId: snap.organizationId,
        code: snap.code,
        name: snap.name,
        type: snap.type,
        addressStreet: snap.addressStreet,
        addressNumber: snap.addressNumber,
        addressCity: snap.addressCity,
        addressProvince: snap.addressProvince,
        addressCountry: snap.addressCountry,
        addressPostalCode: snap.addressPostalCode,
        zones: snap.zones,
        capacity: snap.capacity,
        capacityUnit: snap.capacityUnit,
        isActive: snap.isActive,
        version: snap.version,
        updatedAt: new Date(snap.updatedAt),
      };

      if (!existing) {
        await db.warehouse.create({
          data: {
            id: snap.id,
            ...data,
            createdAt: new Date(snap.createdAt),
          },
        });
        return;
      }

      await db.warehouse.update({
        where: { id: snap.id },
        data,
      });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        throw new ConflictError(
          "Warehouse code already exists",
          "Warehouse",
        );
      }
      throw err;
    }
  }

  async findById(id: string): Promise<Warehouse | null> {
    const row = await this.db.warehouse.findUnique({ where: { id } });
    return row ? this.toDomain(row) : null;
  }

  async findByCode(
    organizationId: string,
    code: string,
  ): Promise<Warehouse | null> {
    const normalized = Warehouse.normalizeCode(code);
    const row = await this.db.warehouse.findUnique({
      where: {
        organizationId_code: {
          organizationId,
          code: normalized,
        },
      },
    });
    return row ? this.toDomain(row) : null;
  }

  async findAll(params: WarehouseListParams): Promise<WarehouseListResult> {
    const page = Math.max(1, params.page || 1);
    const limit = Math.min(100, Math.max(1, params.limit || 20));
    const where: Prisma.WarehouseWhereInput = {};

    if (params.organizationId) {
      where.organizationId = params.organizationId;
    }
    if (params.type) {
      where.type = params.type;
    }
    if (params.isActive !== undefined) {
      where.isActive = params.isActive;
    }
    if (params.search?.trim()) {
      const q = params.search.trim();
      where.OR = [
        { code: { contains: q, mode: "insensitive" } },
        { name: { contains: q, mode: "insensitive" } },
      ];
    }

    const [total, rows] = await Promise.all([
      this.db.warehouse.count({ where }),
      this.db.warehouse.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    return {
      data: rows.map((r) => this.toDomain(r)),
      total,
    };
  }

  private toDomain(row: {
    id: string;
    organizationId: string;
    code: string;
    name: string;
    type: string;
    addressStreet: string | null;
    addressNumber: string | null;
    addressCity: string | null;
    addressProvince: string | null;
    addressCountry: string;
    addressPostalCode: string | null;
    zones: string[];
    capacity: Prisma.Decimal | null;
    capacityUnit: string | null;
    isActive: boolean;
    version: number;
    createdAt: Date;
    updatedAt: Date;
  }): Warehouse {
    const snapshot: WarehouseSnapshot = {
      id: row.id,
      organizationId: row.organizationId,
      code: row.code,
      name: row.name,
      type: row.type,
      addressStreet: row.addressStreet,
      addressNumber: row.addressNumber,
      addressCity: row.addressCity,
      addressProvince: row.addressProvince,
      addressCountry: row.addressCountry,
      addressPostalCode: row.addressPostalCode,
      zones: row.zones,
      capacity: dec(row.capacity),
      capacityUnit: row.capacityUnit,
      isActive: row.isActive,
      version: row.version,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
    return Warehouse.rehydrate(snapshot);
  }
}
