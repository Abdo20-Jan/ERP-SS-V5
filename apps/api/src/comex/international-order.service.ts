import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { AppError, ConflictError, ValidationError } from "@sunset/contracts";
import type {
  CreateInternationalOrderDto, UpdateInternationalOrderDto,
  AddOrderLineDto, UpdateOrderLineDto, ProductionProgressDto, TransitionDto,
  InternationalOrderDto, InternationalOrderListDto,
} from "@sunset/contracts";
import {
  DomainError, InternationalOrder,
  INTERNATIONAL_ORDER_REPOSITORY, type InternationalOrderRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

@Injectable()
export class InternationalOrderService {
  private readonly log = createLogger({ name: "api.comex.order" });
  constructor(@Inject(INTERNATIONAL_ORDER_REPOSITORY) private readonly repo: InternationalOrderRepository) {}

  async create(dto: CreateInternationalOrderDto, uid?: string): Promise<InternationalOrderDto> {
    try {
      if (dto.idempotencyKey) {
        const ex = await this.repo.findByIdempotencyKey("org_001", dto.idempotencyKey);
        if (ex) return ex.snapshot() as InternationalOrderDto;
      }
      const o = InternationalOrder.create({
        operationType: dto.operationType, supplierPartyId: dto.supplierPartyId,
        exporterPartyId: dto.exporterPartyId ?? null, manufacturerPartyId: dto.manufacturerPartyId ?? null,
        incoterm: dto.incoterm ?? null, paymentTerms: dto.paymentTerms ?? null,
        originCountry: dto.originCountry ?? null, currencyCode: dto.currencyCode ?? null,
        expectedReadyDate: dto.expectedReadyDate ?? null, responsibleUserId: dto.responsibleUserId ?? null,
        createdBy: uid ?? "system",
        idempotencyKey: dto.idempotencyKey,
      });
      const s = o.snapshot();
      await prisma.$transaction(async tx => {
        await this.repo.save(o, tx);
        await tx.auditLog.create({ data: { userId: uid ?? null, action: "comex.order.created", entityType: "international_order", entityId: String(o.id), after: s as object, correlationId: getCorrelationId() ?? null } });
      });
      o.pullEvents();
      return s as InternationalOrderDto;
    } catch (e) { this.rethrow(e); }
  }

  async findAll(q: { page?: number; limit?: number; status?: string; supplierId?: string; from?: string; to?: string }): Promise<InternationalOrderListDto> {
    const pg = Number(q.page ?? 1); const lim = Number(q.limit ?? 20);
    const r = await this.repo.findAll({ page: pg, limit: lim, status: q.status, supplierId: q.supplierId, from: q.from, to: q.to });
    return { data: r.data.map(o => o.snapshot() as InternationalOrderDto), total: r.total, page: pg, limit: lim };
  }

  async findById(id: string): Promise<InternationalOrderDto> { const o = await this.must(id); return o.snapshot() as InternationalOrderDto; }

  async update(id: string, dto: UpdateInternationalOrderDto, uid?: string): Promise<InternationalOrderDto> {
    try { const o=await this.must(id); const b=o.snapshot(); o.update(dto); const a=o.snapshot(); await this.saveAudit(o,"comex.order.updated",b,a,uid); return a as InternationalOrderDto; } catch(e){this.rethrow(e);}
  }

  async addLine(oid: string, dto: AddOrderLineDto, uid?: string): Promise<InternationalOrderDto> {
    try { const o=await this.must(oid); const b=o.snapshot(); o.addLine({productId:dto.productId,sku:dto.sku,description:dto.description,quantity:dto.quantity,unitPrice:dto.unitPrice}); const a=o.snapshot(); await this.saveAudit(o,"comex.order.line-added",b,a,uid); return a as InternationalOrderDto; } catch(e){this.rethrow(e);}
  }

  async updateLine(oid: string, ln: number, dto: UpdateOrderLineDto, uid?: string): Promise<InternationalOrderDto> {
    try { const o=await this.must(oid); const b=o.snapshot(); o.updateLine(ln,{quantity:dto.quantity,unitPrice:dto.unitPrice,expectedLineVersion:dto.expectedLineVersion}); const a=o.snapshot(); await this.saveAudit(o,"comex.order.line-updated",b,a,uid); return a as InternationalOrderDto; } catch(e){this.rethrow(e);}
  }

  async cancelLine(oid: string, ln: number, uid?: string): Promise<InternationalOrderDto> {
    try { const o=await this.must(oid); const b=o.snapshot(); o.cancelLine(ln); const a=o.snapshot(); await this.saveAudit(o,"comex.order.line-cancelled",b,a,uid); return a as InternationalOrderDto; } catch(e){this.rethrow(e);}
  }

  async submit(id: string, dto: TransitionDto, uid?: string): Promise<InternationalOrderDto> {
    try { const o=await this.must(id); const b=o.snapshot(); o.submit(dto.expectedVersion); const a=o.snapshot(); await this.saveTransition(o,"comex.order.submitted",b,a,uid,dto.reason); return a as InternationalOrderDto; } catch(e){this.rethrow(e);}
  }

  async approve(id: string, dto: TransitionDto, uid?: string): Promise<InternationalOrderDto> {
    try { const o=await this.must(id); const b=o.snapshot(); o.approve(uid??"system",dto.expectedVersion); const a=o.snapshot(); await this.saveTransition(o,"comex.order.approved",b,a,uid,dto.reason); return a as InternationalOrderDto; } catch(e){this.rethrow(e);}
  }

  async reject(id: string, dto: TransitionDto, uid?: string): Promise<InternationalOrderDto> {
    try { const o=await this.must(id); const b=o.snapshot(); o.reject(dto.reason??"Rejected",dto.expectedVersion); const a=o.snapshot(); await this.saveTransition(o,"comex.order.rejected",b,a,uid,dto.reason); return a as InternationalOrderDto; } catch(e){this.rethrow(e);}
  }

  async send(id: string, dto: TransitionDto, uid?: string): Promise<InternationalOrderDto> {
    try { const o=await this.must(id); const b=o.snapshot(); o.send(dto.expectedVersion); const a=o.snapshot(); await this.saveTransition(o,"comex.order.sent",b,a,uid); return a as InternationalOrderDto; } catch(e){this.rethrow(e);}
  }

  async startProduction(id: string, dto: TransitionDto, uid?: string): Promise<InternationalOrderDto> {
    try { const o=await this.must(id); const b=o.snapshot(); o.startProduction(dto.expectedVersion); const a=o.snapshot(); await this.saveTransition(o,"comex.order.production-started",b,a,uid); return a as InternationalOrderDto; } catch(e){this.rethrow(e);}
  }

  async productionProgress(id: string, dto: ProductionProgressDto, uid?: string): Promise<InternationalOrderDto> {
    try { const o=await this.must(id); const b=o.snapshot(); o.productionProgress({lines:dto.lines,expectedVersion:dto.expectedVersion}); const a=o.snapshot(); await this.saveAudit(o,"comex.order.production-updated",b,a,uid); return a as InternationalOrderDto; } catch(e){this.rethrow(e);}
  }

  async readyToShip(id: string, dto: TransitionDto, uid?: string): Promise<InternationalOrderDto> {
    try { const o=await this.must(id); const b=o.snapshot(); o.readyToShip(dto.expectedVersion); const a=o.snapshot(); await this.saveTransition(o,"comex.order.ready-to-ship",b,a,uid); return a as InternationalOrderDto; } catch(e){this.rethrow(e);}
  }

  async suspend(id: string, dto: TransitionDto, uid?: string): Promise<InternationalOrderDto> {
    try { const o=await this.must(id); const b=o.snapshot(); o.suspend(dto.reason??"Suspended",dto.expectedVersion); const a=o.snapshot(); await this.saveTransition(o,"comex.order.suspended",b,a,uid,dto.reason); return a as InternationalOrderDto; } catch(e){this.rethrow(e);}
  }

  async resume(id: string, dto: TransitionDto, uid?: string): Promise<InternationalOrderDto> {
    try { const o=await this.must(id); const b=o.snapshot(); o.resume(dto.expectedVersion); const a=o.snapshot(); await this.saveTransition(o,"comex.order.resumed",b,a,uid); return a as InternationalOrderDto; } catch(e){this.rethrow(e);}
  }

  async cancel(id: string, dto: TransitionDto, uid?: string): Promise<InternationalOrderDto> {
    try { const o=await this.must(id); const b=o.snapshot(); o.cancel(dto.reason??"Cancelled",dto.expectedVersion); const a=o.snapshot(); await this.saveTransition(o,"comex.order.cancelled",b,a,uid,dto.reason); return a as InternationalOrderDto; } catch(e){this.rethrow(e);}
  }

  private async must(id: string) { const o=await this.repo.findById(id); if(!o)throw new NotFoundException(`Order not found: ${id}`); return o; }

  private async saveAudit(o: InternationalOrder, action: string, before: object, after: object, uid?: string) {
    await prisma.$transaction(async tx => {
      await this.repo.save(o, tx);
      await tx.auditLog.create({ data: { userId: uid ?? null, action, entityType: "international_order", entityId: String(o.id), before, after, correlationId: getCorrelationId() ?? null } });
    });
    o.pullEvents();
  }

  private async saveTransition(o: InternationalOrder, action: string, before: object, after: object, uid?: string, reason?: string) {
    const b = before as Record<string,unknown>; const a = after as Record<string,unknown>;
    await prisma.$transaction(async tx => {
      await this.repo.save(o, tx);
      await tx.auditLog.create({ data: { userId: uid ?? null, action, entityType: "international_order", entityId: String(o.id), before, after, correlationId: getCorrelationId() ?? null } });
      await tx.internationalOrderStateTransition.create({ data: { orderId: String(o.id), fromStatus: (b.status as string)??"", toStatus: (a.status as string)??"", actorUserId: uid ?? "system", reason: reason ?? null, correlationId: getCorrelationId() ?? "unknown" } });
    });
    o.pullEvents();
  }

  private rethrow(e: unknown): never {
    if (e instanceof NotFoundException || e instanceof AppError) throw e;
    if (e instanceof DomainError) {
      if (e.code==="VERSION_CONFLICT") throw new ConflictError(e.message,"InternationalOrder");
      const msg = String((e as any).message ?? "");
      if (msg.includes("SOD_VIOLATION")) throw new ConflictError(msg,"InternationalOrder");
      if (e.code==="VALIDATION_ERROR") throw new ValidationError(e.message,{domain:[e.code]});
      if (msg.includes("transition")) throw new ConflictError(msg,"InternationalOrder");
      throw new AppError(msg, e.code, 400);
    }
    throw e;
  }
}
