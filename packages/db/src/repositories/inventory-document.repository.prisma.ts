import {
  InventoryDocument,
  type InventoryDocumentListFilters,
  type InventoryDocumentListResult,
  type InventoryDocumentRepository,
  type InventoryDocumentSnapshot,
} from "@sunset/domain";
import type { Prisma, PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

type DbClient = PrismaClient | Prisma.TransactionClient;

type Row = {
  id: string;
  organizationId: string;
  warehouseId: string | null;
  locationId: string | null;
  documentType: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  sha256Hash: string;
  storagePath: string;
  version: number;
  previousVersionId: string | null;
  classification: string | null;
  retentionDays: number | null;
  description: string | null;
  tags: string[];
  uploadedById: string;
  uploadedAt: Date;
  isArchived: boolean;
  archivedAt: Date | null;
  archivedById: string | null;
  createdAt: Date;
  updatedAt: Date;
};

function delegate(db: DbClient) {
  const d = (db as unknown as Record<string, unknown>)["inventoryDocument"] as
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
      "PrismaInventoryDocumentRepository: inventoryDocument delegate missing — run prisma generate",
    );
  }
  return d;
}

export class PrismaInventoryDocumentRepository
  implements InventoryDocumentRepository
{
  constructor(private readonly db: DbClient = defaultPrisma) {}

  async save(doc: InventoryDocument, db?: DbClient): Promise<void> {
    const client = db ?? this.db;
    const d = delegate(client);
    const s = doc.toSnapshot();
    const existing = await d.findUnique({ where: { id: s.id } });
    const data = {
      organizationId: s.organizationId,
      warehouseId: s.warehouseId,
      locationId: s.locationId,
      documentType: s.documentType,
      fileName: s.fileName,
      fileSize: s.fileSize,
      mimeType: s.mimeType,
      sha256Hash: s.sha256Hash,
      storagePath: s.storagePath,
      version: s.version,
      previousVersionId: s.previousVersionId,
      classification: s.classification,
      retentionDays: s.retentionDays,
      description: s.description,
      tags: s.tags,
      uploadedById: s.uploadedById,
      uploadedAt: new Date(s.uploadedAt),
      isArchived: s.isArchived,
      archivedAt: s.archivedAt ? new Date(s.archivedAt) : null,
      archivedById: s.archivedById,
      updatedAt: new Date(s.updatedAt),
    };
    if (!existing) {
      await d.create({
        data: { id: s.id, ...data, createdAt: new Date(s.createdAt) },
      });
    } else {
      await d.update({ where: { id: s.id }, data });
    }
  }

  async findById(id: string): Promise<InventoryDocument | null> {
    const row = await delegate(this.db).findUnique({ where: { id } });
    return row ? this.toDomain(row) : null;
  }

  async findByHashAndOwner(
    sha256Hash: string,
    documentType: string,
    warehouseId: string | null,
    locationId: string | null,
  ): Promise<InventoryDocument | null> {
    const row = await delegate(this.db).findFirst({
      where: {
        sha256Hash,
        documentType,
        warehouseId: warehouseId ?? null,
        locationId: locationId ?? null,
        isArchived: false,
      },
      orderBy: { version: "desc" },
    });
    return row ? this.toDomain(row) : null;
  }

  async findLatestVersion(
    documentType: string,
    warehouseId: string | null,
    locationId: string | null,
  ): Promise<InventoryDocument | null> {
    const row = await delegate(this.db).findFirst({
      where: {
        documentType,
        warehouseId: warehouseId ?? null,
        locationId: locationId ?? null,
      },
      orderBy: { version: "desc" },
    });
    return row ? this.toDomain(row) : null;
  }

  async findVersions(
    documentType: string,
    warehouseId: string | null,
    locationId: string | null,
  ): Promise<InventoryDocument[]> {
    const rows = await delegate(this.db).findMany({
      where: {
        documentType,
        warehouseId: warehouseId ?? null,
        locationId: locationId ?? null,
      },
      orderBy: { version: "desc" },
    });
    return rows.map((r) => this.toDomain(r));
  }

  async findAll(
    filters: InventoryDocumentListFilters = {},
    page = 1,
    limit = 20,
  ): Promise<InventoryDocumentListResult> {
    const where: Record<string, unknown> = {};
    if (filters.warehouseId) where.warehouseId = filters.warehouseId;
    if (filters.locationId) where.locationId = filters.locationId;
    if (filters.documentType) where.documentType = filters.documentType;
    if (filters.organizationId) where.organizationId = filters.organizationId;
    if (filters.sha256Hash) where.sha256Hash = filters.sha256Hash;
    if (filters.isArchived !== undefined) where.isArchived = filters.isArchived;
    else where.isArchived = false;
    const take = Math.min(Math.max(limit, 1), 100);
    const skip = (Math.max(page, 1) - 1) * take;
    const d = delegate(this.db);
    const [total, rows] = await Promise.all([
      d.count({ where }),
      d.findMany({
        where,
        orderBy: [{ uploadedAt: "desc" }, { version: "desc" }],
        skip,
        take,
      }),
    ]);
    return { data: rows.map((r) => this.toDomain(r)), total };
  }

  private toDomain(row: Row): InventoryDocument {
    const snap: InventoryDocumentSnapshot = {
      id: row.id,
      organizationId: row.organizationId,
      warehouseId: row.warehouseId,
      locationId: row.locationId,
      documentType: row.documentType,
      fileName: row.fileName,
      fileSize: row.fileSize,
      mimeType: row.mimeType,
      sha256Hash: row.sha256Hash,
      storagePath: row.storagePath,
      version: row.version,
      previousVersionId: row.previousVersionId,
      classification: row.classification,
      retentionDays: row.retentionDays,
      description: row.description,
      tags: row.tags ?? [],
      uploadedById: row.uploadedById,
      uploadedAt: row.uploadedAt.toISOString(),
      isArchived: row.isArchived,
      archivedAt: row.archivedAt?.toISOString() ?? null,
      archivedById: row.archivedById,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
    return InventoryDocument.rehydrate(snap);
  }
}
