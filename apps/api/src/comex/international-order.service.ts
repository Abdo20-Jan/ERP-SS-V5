import { Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { AppError, ConflictError, ValidationError } from "@sunset/contracts";
import type {
  AddOrderLineDto,
  CreateInternationalOrderDto,
  InternationalOrderDto,
  InternationalOrderListDto,
  ProductionProgressDto,
  TransitionDto,
  UpdateInternationalOrderDto,
  UpdateOrderLineDto,
} from "@sunset/contracts";
import {
  COMEX_OUTBOX_REPOSITORY,
  DomainError,
  INTERNATIONAL_ORDER_REPOSITORY,
  InternationalOrder,
  type ComexOutboxRepository,
  type InternationalOrderRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";
import { stableHash } from "./comex-hash.util";
import { resolveOrganizationId } from "./comex-org.util";

type Actor = { id?: string; organizationId?: string | null };

@Injectable()
export class InternationalOrderService {
  private readonly log = createLogger({ name: "api.comex.order" });

  constructor(
    @Inject(INTERNATIONAL_ORDER_REPOSITORY) private readonly repo: InternationalOrderRepository,
    @Inject(COMEX_OUTBOX_REPOSITORY) private readonly outbox: ComexOutboxRepository,
  ) {}

  async create(dto: CreateInternationalOrderDto, user?: Actor): Promise<InternationalOrderDto> {
    try {
      const orgId = resolveOrganizationId(user);
      const uid = user?.id ?? "system";
      const payloadHash = stableHash({
        operationType: dto.operationType,
        supplierPartyId: dto.supplierPartyId,
        exporterPartyId: dto.exporterPartyId ?? null,
        manufacturerPartyId: dto.manufacturerPartyId ?? null,
        incoterm: dto.incoterm ?? null,
        paymentTerms: dto.paymentTerms ?? null,
        originCountry: dto.originCountry ?? null,
        currencyCode: dto.currencyCode ?? null,
        expectedReadyDate: dto.expectedReadyDate ?? null,
        responsibleUserId: dto.responsibleUserId ?? null,
      });

      return await prisma.$transaction(async (tx) => {
        if (dto.idempotencyKey) {
          const existing = await this.repo.findByIdempotencyKey(orgId, dto.idempotencyKey, tx);
          if (existing) {
            const snap = existing.snapshot();
            if (snap.idempotencyPayloadHash && snap.idempotencyPayloadHash !== payloadHash) {
              throw new ConflictError("Idempotency-Key reused with different payload", "InternationalOrder");
            }
            return snap as InternationalOrderDto;
          }
        }

        const code = await this.repo.nextCode(orgId, tx);
        const order = InternationalOrder.create({
          organizationId: orgId,
          code,
          operationType: dto.operationType,
          supplierPartyId: dto.supplierPartyId,
          exporterPartyId: dto.exporterPartyId ?? null,
          manufacturerPartyId: dto.manufacturerPartyId ?? null,
          incoterm: dto.incoterm ?? null,
          paymentTerms: dto.paymentTerms ?? null,
          originCountry: dto.originCountry ?? null,
          currencyCode: dto.currencyCode ?? null,
          expectedReadyDate: dto.expectedReadyDate ?? null,
          responsibleUserId: dto.responsibleUserId ?? null,
          createdBy: uid,
          idempotencyKey: dto.idempotencyKey,
          idempotencyPayloadHash: payloadHash,
        });
        const snap = order.snapshot();
        await this.repo.save(order, null, tx);
        await this.persistSideEffects(order, orgId, uid, "comex.order.created", null, snap, tx);
        return snap as InternationalOrderDto;
      });
    } catch (e) {
      this.rethrow(e);
    }
  }

  async findAll(q: {
    page?: number; limit?: number; status?: string; supplierId?: string; from?: string; to?: string;
  }, user?: Actor): Promise<InternationalOrderListDto> {
    const orgId = resolveOrganizationId(user);
    const page = Math.max(1, Number(q.page ?? 1) || 1);
    const limit = Math.min(100, Math.max(1, Number(q.limit ?? 20) || 20));
    const r = await this.repo.findAll({
      page, limit, status: q.status, supplierId: q.supplierId, from: q.from, to: q.to, organizationId: orgId,
    });
    return { data: r.data.map((o) => o.snapshot() as InternationalOrderDto), total: r.total, page, limit };
  }

  async findById(id: string, user?: Actor): Promise<InternationalOrderDto> {
    return (await this.must(id, user)).snapshot() as InternationalOrderDto;
  }

  async update(id: string, dto: UpdateInternationalOrderDto, user?: Actor): Promise<InternationalOrderDto> {
    return this.mutate(id, user, async (order) => {
      const before = order.snapshot();
      order.update(dto);
      return { before, action: "comex.order.updated" };
    });
  }

  async addLine(id: string, dto: AddOrderLineDto, user?: Actor): Promise<InternationalOrderDto> {
    return this.mutate(id, user, async (order) => {
      const before = order.snapshot();
      order.addLine(dto);
      return { before, action: "comex.order.line-added" };
    });
  }

  async updateLine(id: string, lineNumber: number, dto: UpdateOrderLineDto, user?: Actor): Promise<InternationalOrderDto> {
    return this.mutate(id, user, async (order) => {
      const before = order.snapshot();
      order.updateLine(lineNumber, dto);
      return { before, action: "comex.order.line-updated" };
    });
  }

  async cancelLine(
    id: string,
    lineNumber: number,
    dto: { expectedVersion: number; expectedLineVersion: number },
    user?: Actor,
  ): Promise<InternationalOrderDto> {
    return this.mutate(id, user, async (order) => {
      const before = order.snapshot();
      order.cancelLine(lineNumber, dto);
      return { before, action: "comex.order.line-cancelled" };
    });
  }

  async submit(id: string, dto: TransitionDto, user?: Actor) {
    return this.transition(id, dto, user, (o, v) => o.submit(v), "comex.order.submitted");
  }
  async approve(id: string, dto: TransitionDto, user?: Actor) {
    const uid = user?.id ?? "system";
    return this.transition(id, dto, user, (o, v) => o.approve(uid, v), "comex.order.approved");
  }
  async reject(id: string, dto: TransitionDto, user?: Actor) {
    return this.transition(id, dto, user, (o, v) => o.reject(dto.reason ?? "Rejected", v), "comex.order.rejected");
  }
  async send(id: string, dto: TransitionDto, user?: Actor) {
    return this.transition(id, dto, user, (o, v) => o.send(v), "comex.order.sent");
  }
  async startProduction(id: string, dto: TransitionDto, user?: Actor) {
    return this.transition(id, dto, user, (o, v) => o.startProduction(v), "comex.order.production-started");
  }
  async productionProgress(id: string, dto: ProductionProgressDto, user?: Actor): Promise<InternationalOrderDto> {
    return this.mutate(id, user, async (order) => {
      const before = order.snapshot();
      order.productionProgress(dto);
      return { before, action: "comex.order.production-updated" };
    });
  }
  async readyToShip(id: string, dto: TransitionDto, user?: Actor) {
    return this.transition(id, dto, user, (o, v) => o.readyToShip(v), "comex.order.ready-to-ship");
  }
  async suspend(id: string, dto: TransitionDto, user?: Actor) {
    const uid = user?.id ?? "system";
    return this.transition(id, dto, user, (o, v) => o.suspend(dto.reason ?? "Suspended", v, uid), "comex.order.suspended");
  }
  async resume(id: string, dto: TransitionDto, user?: Actor) {
    return this.transition(id, dto, user, (o, v) => o.resume(v), "comex.order.resumed");
  }
  async cancel(id: string, dto: TransitionDto, user?: Actor) {
    const uid = user?.id ?? "system";
    return this.transition(id, dto, user, (o, v) => o.cancel(dto.reason ?? "Cancelled", v, uid), "comex.order.cancelled");
  }

  async loadForOrg(id: string, organizationId: string, tx?: unknown): Promise<InternationalOrder> {
    const order = await this.repo.findById(id, organizationId, tx);
    if (!order) throw new NotFoundException(`Order not found: ${id}`);
    return order;
  }

  private async transition(
    id: string,
    dto: TransitionDto,
    user: Actor | undefined,
    apply: (order: InternationalOrder, expectedVersion: number) => void,
    action: string,
  ): Promise<InternationalOrderDto> {
    try {
      const orgId = resolveOrganizationId(user);
      const uid = user?.id ?? "system";
      const requestHash = stableHash({ action, id, expectedVersion: dto.expectedVersion, reason: dto.reason ?? null });

      return await prisma.$transaction(async (tx) => {
        if (dto.idempotencyKey) {
          const replay = await this.repo.findTransitionReplay(orgId, dto.idempotencyKey, tx);
          if (replay) {
            if (replay.requestHash && replay.requestHash !== requestHash) {
              throw new ConflictError("Transition Idempotency-Key reused with different payload", "InternationalOrder");
            }
            return replay.order.snapshot() as InternationalOrderDto;
          }
        }

        const order = await this.loadForOrg(id, orgId, tx);
        const before = order.snapshot();
        const expectedPersistedVersion = order.version;
        apply(order, dto.expectedVersion);
        const after = order.snapshot();
        await this.repo.save(order, expectedPersistedVersion, tx);
        await this.persistSideEffects(
          order, orgId, uid, action, before, after, tx, dto.reason, dto.idempotencyKey, requestHash, true,
        );
        return after as InternationalOrderDto;
      });
    } catch (e) {
      this.rethrow(e);
    }
  }

  private async mutate(
    id: string,
    user: Actor | undefined,
    fn: (order: InternationalOrder) => Promise<{ before: object; action: string; reason?: string }>,
  ): Promise<InternationalOrderDto> {
    try {
      const orgId = resolveOrganizationId(user);
      const uid = user?.id ?? "system";
      return await prisma.$transaction(async (tx) => {
        const order = await this.loadForOrg(id, orgId, tx);
        const expectedPersistedVersion = order.version;
        const meta = await fn(order);
        const after = order.snapshot();
        await this.repo.save(order, expectedPersistedVersion, tx);
        await this.persistSideEffects(order, orgId, uid, meta.action, meta.before, after, tx, meta.reason);
        return after as InternationalOrderDto;
      });
    } catch (e) {
      this.rethrow(e);
    }
  }

  private async must(id: string, user?: Actor): Promise<InternationalOrder> {
    return this.loadForOrg(id, resolveOrganizationId(user));
  }

  private async persistSideEffects(
    order: InternationalOrder,
    orgId: string,
    uid: string,
    action: string,
    before: object | null,
    after: object,
    tx: any,
    reason?: string,
    idempotencyKey?: string,
    requestHash?: string,
    writeTransition = false,
  ): Promise<void> {
    const correlationId = getCorrelationId() ?? "unknown";
    await tx.auditLog.create({
      data: {
        userId: uid === "system" ? null : uid,
        action,
        entityType: "international_order",
        entityId: String(order.id),
        before: before as object | undefined,
        after: after as object,
        correlationId,
      },
    });
    if (writeTransition && before) {
      const b = before as Record<string, unknown>;
      const a = after as Record<string, unknown>;
      await tx.internationalOrderStateTransition.create({
        data: {
          organizationId: orgId,
          orderId: String(order.id),
          fromStatus: String(b.status ?? ""),
          toStatus: String(a.status ?? ""),
          actorUserId: uid,
          reason: reason ?? null,
          correlationId,
          idempotencyKey: idempotencyKey ?? null,
          requestHash: requestHash ?? null,
        },
      });
    }
    const events = order.pullEvents();
    await this.outbox.enqueue(events, { organizationId: orgId, correlationId }, tx);
  }

  private rethrow(e: unknown): never {
    if (e instanceof NotFoundException || e instanceof AppError) throw e;
    if (e instanceof Error && e.message === "AUTH_REQUIRED") throw new UnauthorizedException("Authentication required");
    if (e instanceof DomainError) {
      if (e.code === "VERSION_CONFLICT") throw new ConflictError(e.message, "InternationalOrder");
      const msg = String(e.message ?? "");
      if (msg.includes("SOD_VIOLATION")) throw new ConflictError(msg, "InternationalOrder");
      if (e.code === "VALIDATION_ERROR") throw new ValidationError(e.message, { domain: [e.code] });
      if (msg.includes("transition") || e.code === "INVALID_STATE") throw new ConflictError(msg, "InternationalOrder");
      throw new AppError(msg, e.code, 400);
    }
    throw e;
  }
}
