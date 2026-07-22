import type { PrismaClient } from "@prisma/client"
import { ProformaVersion, type ProformaVersionSnapshot } from "@sunset/domain"
import type { ProformaVersionRepository } from "@sunset/domain"
import { prisma as dp } from "../client"

function map(row: any): ProformaVersion {
  return ProformaVersion.rehydrate({
    id: row.id, orderId: row.orderId, organizationId: row.organizationId,
    supplierPartyId: row.supplierPartyId, proformaNumber: row.proformaNumber,
    versionNumber: row.versionNumber,
    issueDate: row.issueDate ? new Date(row.issueDate).toISOString().slice(0,10) : null,
    totalAmount: row.totalAmount?.toString() ?? null, currencyCode: row.currencyCode,
    status: row.status, createdBy: row.createdBy, confirmedBy: row.confirmedBy,
    confirmedAt: row.confirmedAt ? new Date(row.confirmedAt).toISOString() : null,
    correlationId: row.correlationId,
    createdAt: row.createdAt ? new Date(row.createdAt).toISOString() : new Date().toISOString(),
  })
}

export class ProformaVersionRepositoryPrisma implements ProformaVersionRepository {
  db: PrismaClient
  constructor(db?: PrismaClient) { this.db = db ?? (dp as unknown as PrismaClient) }
  private c(tx?: unknown): PrismaClient { return (tx as PrismaClient) ?? this.db }

  async save(pv: ProformaVersion, tx?: unknown): Promise<void> {
    const s = pv.snapshot()
    const d = { orderId: s.orderId, organizationId: s.organizationId, supplierPartyId: s.supplierPartyId,
      proformaNumber: s.proformaNumber, versionNumber: s.versionNumber,
      issueDate: s.issueDate ? new Date(s.issueDate) : null, totalAmount: s.totalAmount ? Number(s.totalAmount) : null,
      currencyCode: s.currencyCode, status: s.status, createdBy: s.createdBy,
      confirmedBy: s.confirmedBy, confirmedAt: s.confirmedAt ? new Date(s.confirmedAt) : null,
      correlationId: s.correlationId }
    await (this.c(tx) as any).proformaVersion.upsert({ where: { id: s.id }, create: { id: s.id, ...d }, update: d })
  }
  async findLatestByOrder(orderId: string, tx?: unknown): Promise<ProformaVersion | null> {
    const r = await (this.c(tx) as any).proformaVersion.findFirst({ where: { orderId, status: { not: "SUPERSEDED" } }, orderBy: { versionNumber: "desc" } })
    return r ? map(r) : null
  }
  async findByOrgSupplierNumber(orgId: string, supId: string, num: string, tx?: unknown): Promise<ProformaVersion | null> {
    const r = await (this.c(tx) as any).proformaVersion.findFirst({ where: { organizationId: orgId, supplierPartyId: supId, proformaNumber: num } })
    return r ? map(r) : null
  }
}
