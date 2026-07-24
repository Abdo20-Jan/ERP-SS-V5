import { Prisma, type PrismaClient } from "@prisma/client";
import { OverrideConcurrencyError, ProformaVersion, type ProformaVersionRepository } from "@sunset/domain";
import { prisma as dp } from "../client";

type Db = PrismaClient | Prisma.TransactionClient;
const c = (tx?: unknown): Db => (tx as Db | undefined) ?? (dp as unknown as Db);

function map(row: any): ProformaVersion {
  return ProformaVersion.rehydrate({
    id: row.id,
    orderId: row.orderId,
    organizationId: row.organizationId,
    supplierPartyId: row.supplierPartyId,
    proformaNumber: row.proformaNumber,
    versionNumber: row.versionNumber,
    issueDate: row.issueDate ? new Date(row.issueDate).toISOString().slice(0, 10) : null,
    totalAmount: row.totalAmount?.toString() ?? null,
    currencyCode: row.currencyCode,
    status: row.status,
    createdBy: row.createdBy,
    confirmedBy: row.confirmedBy,
    confirmedAt: row.confirmedAt ? new Date(row.confirmedAt).toISOString() : null,
    correlationId: row.correlationId,
    version: row.version ?? 0,
    createdAt: row.createdAt ? new Date(row.createdAt).toISOString() : new Date().toISOString(),
  });
}

export class ProformaVersionRepositoryPrisma implements ProformaVersionRepository {
  constructor(private readonly db: Db = dp as unknown as Db) {}
  private client(tx?: unknown): any { return c(tx); }

  async save(pv: ProformaVersion, tx?: unknown): Promise<void> {
    const s = pv.snapshot();
    const d = {
      orderId: s.orderId,
      organizationId: s.organizationId,
      supplierPartyId: s.supplierPartyId,
      proformaNumber: s.proformaNumber,
      versionNumber: s.versionNumber,
      issueDate: s.issueDate ? new Date(`${s.issueDate}T00:00:00.000Z`) : null,
      totalAmount: s.totalAmount == null ? null : new Prisma.Decimal(s.totalAmount),
      currencyCode: s.currencyCode,
      status: s.status,
      createdBy: s.createdBy,
      confirmedBy: s.confirmedBy,
      confirmedAt: s.confirmedAt ? new Date(s.confirmedAt) : null,
      correlationId: s.correlationId,
    };
    await this.client(tx).proformaVersion.upsert({
      where: { id: s.id },
      create: { id: s.id, ...d },
      update: d,
    });
  }

  async saveWithVersion(pv: ProformaVersion, expectedPersistedVersion: number | null, tx?: unknown): Promise<void> {
    const s = pv.snapshot();
    const d = {
      orderId: s.orderId,
      organizationId: s.organizationId,
      supplierPartyId: s.supplierPartyId,
      proformaNumber: s.proformaNumber,
      versionNumber: s.versionNumber,
      issueDate: s.issueDate ? new Date(`${s.issueDate}T00:00:00.000Z`) : null,
      totalAmount: s.totalAmount == null ? null : new Prisma.Decimal(s.totalAmount),
      currencyCode: s.currencyCode,
      status: s.status,
      createdBy: s.createdBy,
      confirmedBy: s.confirmedBy,
      confirmedAt: s.confirmedAt ? new Date(s.confirmedAt) : null,
      correlationId: s.correlationId,
    };

    if (expectedPersistedVersion === null) {
      await this.client(tx).proformaVersion.create({
        data: { id: s.id, ...d, version: 0, createdAt: new Date(s.createdAt) },
      });
      return;
    }

    const result = await this.client(tx).proformaVersion.updateMany({
      where: { id: s.id, organizationId: s.organizationId, version: expectedPersistedVersion },
      data: { ...d, version: expectedPersistedVersion + 1 },
    });

    if (result.count !== 1) {
      throw new OverrideConcurrencyError(
        "Proforma version was changed by another command",
        {
          proformaVersionId: s.id,
          organizationId: s.organizationId,
          expectedVersion: expectedPersistedVersion,
        },
      );
    }
  }

  async findById(id: string, organizationId: string, tx?: unknown): Promise<ProformaVersion | null> {
    const r = await this.client(tx).proformaVersion.findFirst({ where: { id, organizationId } });
    return r ? map(r) : null;
  }

  async findLatestByOrder(orderId: string, organizationId: string, tx?: unknown): Promise<ProformaVersion | null> {
    const r = await this.client(tx).proformaVersion.findFirst({
      where: { orderId, organizationId, status: { not: "SUPERSEDED" } },
      orderBy: { versionNumber: "desc" },
    });
    return r ? map(r) : null;
  }

  async findByOrgSupplierNumber(orgId: string, supId: string, num: string, tx?: unknown): Promise<ProformaVersion | null> {
    const r = await this.client(tx).proformaVersion.findFirst({
      where: { organizationId: orgId, supplierPartyId: supId, proformaNumber: num },
      orderBy: { versionNumber: "desc" },
    });
    return r ? map(r) : null;
  }
}
