import { Prisma, type PrismaClient } from "@prisma/client";
import { ProformaVersion, type ProformaVersionRepository } from "@sunset/domain";
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
