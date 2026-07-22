import type { PrismaClient } from "@prisma/client"
import { InternationalOrder, type InternationalOrderSnapshot } from "@sunset/domain"
import type { InternationalOrderRepository } from "@sunset/domain"
import { prisma as dp } from "../client"

type Tx = PrismaClient
const cl = (tx?: unknown): Tx => (tx as Tx) ?? (dp as unknown as Tx)

function dStr(v: any): string { return (v ?? "").toString() }
function dDate(v: any): string | null { return v ? new Date(v).toISOString() : null }

function map(r: any, lns: any[]): InternationalOrderSnapshot {
  return {
    id: r.id, organizationId: r.organizationId, code: r.code,
    operationType: r.operationType, status: r.status, previousStatus: r.previousStatus,
    supplierPartyId: r.supplierPartyId, exporterPartyId: r.exporterPartyId ?? null,
    manufacturerPartyId: r.manufacturerPartyId ?? null, incoterm: r.incoterm,
    paymentTerms: r.paymentTerms, originCountry: r.originCountry,
    currencyCode: r.currencyCode,
    expectedReadyDate: r.expectedReadyDate ? (dDate(r.expectedReadyDate) ?? "").slice(0,10) : null,
    responsibleUserId: r.responsibleUserId,
    subtotalOriginal: r.subtotalOriginal ? dStr(r.subtotalOriginal) : null,
    fxRate: r.fxRate ? dStr(r.fxRate) : null, fxRateDate: dDate(r.fxRateDate),
    fxSource: r.fxSource,
    subtotalFunctional: r.subtotalFunctional ? dStr(r.subtotalFunctional) : null,
    idempotencyKey: r.idempotencyKey, version: r.version, createdBy: r.createdBy,
    cancelledAt: dDate(r.cancelledAt), cancelledBy: r.cancelledBy, cancelReason: r.cancelReason,
    suspendedAt: dDate(r.suspendedAt), suspendedBy: r.suspendedBy, suspendReason: r.suspendReason,
    resumedAt: dDate(r.resumedAt),
    lines: (lns || []).map((l: any) => ({
      id: l.id, lineNumber: l.lineNumber, productId: l.productId,
      skuSnapshot: l.skuSnapshot, descriptionSnapshot: l.descriptionSnapshot,
      quantityOrdered: dStr(l.quantityOrdered), quantityConfirmed: dStr(l.quantityConfirmed),
      quantityProduced: dStr(l.quantityProduced), quantityCancelled: dStr(l.quantityCancelled),
      unitPrice: dStr(l.unitPrice), lineTotalOriginal: dStr(l.lineTotalOriginal), version: l.version,
    })),
    createdAt: dDate(r.createdAt) ?? new Date().toISOString(), updatedAt: dDate(r.updatedAt) ?? new Date().toISOString(),
  }
}

export class InternationalOrderRepositoryPrisma implements InternationalOrderRepository {
  private db: Tx
  constructor(db?: Tx) { this.db = db ?? (dp as unknown as Tx) }
  async save(o: InternationalOrder, tx?: unknown): Promise<void> {
    const c = cl(tx); const s = o.snapshot()
    const d: any = { organizationId: s.organizationId, code: s.code, operationType: s.operationType,
      status: s.status, previousStatus: s.previousStatus, supplierPartyId: s.supplierPartyId,
      exporterPartyId: s.exporterPartyId, manufacturerPartyId: s.manufacturerPartyId,
      incoterm: s.incoterm, paymentTerms: s.paymentTerms, originCountry: s.originCountry,
      currencyCode: s.currencyCode,
      expectedReadyDate: s.expectedReadyDate ? new Date(s.expectedReadyDate) : null,
      responsibleUserId: s.responsibleUserId,
      subtotalOriginal: s.subtotalOriginal ? Number(s.subtotalOriginal) : null,
      fxRate: s.fxRate ? Number(s.fxRate) : null, fxRateDate: s.fxRateDate ? new Date(s.fxRateDate) : null,
      fxSource: s.fxSource, subtotalFunctional: s.subtotalFunctional ? Number(s.subtotalFunctional) : null,
      idempotencyKey: s.idempotencyKey, version: s.version, createdBy: s.createdBy,
      cancelledAt: s.cancelledAt ? new Date(s.cancelledAt) : null, cancelledBy: s.cancelledBy, cancelReason: s.cancelReason,
      suspendedAt: s.suspendedAt ? new Date(s.suspendedAt) : null, suspendedBy: s.suspendedBy, suspendReason: s.suspendReason,
      resumedAt: s.resumedAt ? new Date(s.resumedAt) : null }
    await (c as any).internationalOrder.upsert({ where: { id: s.id }, create: { id: s.id, ...d }, update: d })
    for (const ls of s.lines) {
      const ld: any = { orderId: s.id, lineNumber: ls.lineNumber, productId: ls.productId,
        skuSnapshot: ls.skuSnapshot, descriptionSnapshot: ls.descriptionSnapshot,
        quantityOrdered: Number(ls.quantityOrdered), quantityConfirmed: Number(ls.quantityConfirmed),
        quantityProduced: Number(ls.quantityProduced), quantityCancelled: Number(ls.quantityCancelled),
        unitPrice: Number(ls.unitPrice), lineTotalOriginal: Number(ls.lineTotalOriginal), version: ls.version }
      await (c as any).internationalOrderLine.upsert({ where: { id: ls.id }, create: { id: ls.id, ...ld }, update: ld })
    }
  }
  async findById(id: string, tx?: unknown): Promise<InternationalOrder | null> {
    const r = await cl(tx).internationalOrder.findUnique({ where: { id }, include: { lines: { orderBy: { lineNumber: "asc" } } } })
    return r ? InternationalOrder.rehydrate(map(r, (r as any).lines ?? [])) : null
  }
  async findByIdempotencyKey(oId: string, k: string, tx?: unknown): Promise<InternationalOrder | null> {
    const r = await cl(tx).internationalOrder.findFirst({ where: { organizationId: oId, idempotencyKey: k }, include: { lines: { orderBy: { lineNumber: "asc" } } } })
    return r ? InternationalOrder.rehydrate(map(r, (r as any).lines ?? [])) : null
  }
  async findAll(p: any, tx?: unknown): Promise<{ data: InternationalOrder[]; total: number }> {
    const c = cl(tx); const w: any = { organizationId: p.orgId ?? "org_001" }
    if (p.status) w.status = p.status
    if (p.supplierId) w.supplierPartyId = p.supplierId
    if (p.from || p.to) { w.createdAt = {}; if (p.from) w.createdAt.gte = new Date(p.from); if (p.to) w.createdAt.lte = new Date(p.to) }
    const [rows, total] = await Promise.all([
      c.internationalOrder.findMany({ where: w, orderBy: { createdAt: "desc" }, skip: (p.page-1)*p.limit, take: p.limit, include: { lines: { orderBy: { lineNumber: "asc" } } } }),
      c.internationalOrder.count({ where: w })])
    return { data: rows.map(r => InternationalOrder.rehydrate(map(r, (r as any).lines ?? []))), total }
  }
  async nextCode(_orgId: string, tx?: unknown): Promise<string> {
    const rows: any[] = await cl(tx).$queryRawUnsafe("SELECT nextval('international_order_code_seq') as seq")
    return "PI-" + String(Number(rows[0]?.seq ?? 1)).padStart(6, "0")
  }
}
