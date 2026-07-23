import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { AppError, ConflictError, ValidationError, type ConfirmProformaDto, type ProformaVersionDto, type RegisterProformaDto } from "@sunset/contracts";
import {
  COMEX_OUTBOX_REPOSITORY,
  DomainError,
  INTERNATIONAL_ORDER_REPOSITORY,
  PROFORMA_VERSION_REPOSITORY,
  ProformaVersion,
  type ComexOutboxRepository,
  type InternationalOrderRepository,
  type ProformaVersionRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { getCorrelationId } from "@sunset/observability";
import { resolveOrganizationId } from "./comex-org.util";

type Actor = { id?: string; organizationId?: string | null };

@Injectable()
export class ProformaService {
  constructor(
    @Inject(PROFORMA_VERSION_REPOSITORY) private readonly repo: ProformaVersionRepository,
    @Inject(INTERNATIONAL_ORDER_REPOSITORY) private readonly orders: InternationalOrderRepository,
    @Inject(COMEX_OUTBOX_REPOSITORY) private readonly outbox: ComexOutboxRepository,
  ) {}

  async register(orderId: string, dto: RegisterProformaDto, user?: Actor): Promise<ProformaVersionDto> {
    try {
      const orgId = resolveOrganizationId(user);
      const uid = user?.id ?? "system";
      return await prisma.$transaction(async (tx) => {
        const order = await this.orders.findById(orderId, orgId, tx);
        if (!order) throw new NotFoundException(`Order not found: ${orderId}`);
        if (order.version !== dto.expectedOrderVersion) {
          throw new ConflictError("Order version conflict while registering proforma", "InternationalOrder");
        }
        const existing = await this.repo.findLatestByOrder(orderId, orgId, tx);
        const versionNumber = existing ? existing.versionNumber + 1 : 1;
        if (existing) existing.supersede();
        const pv = ProformaVersion.create({
          orderId,
          organizationId: orgId,
          supplierPartyId: order.supplierPartyId,
          proformaNumber: dto.proformaNumber,
          versionNumber,
          issueDate: dto.issueDate,
          totalAmount: dto.totalAmount,
          currencyCode: dto.currencyCode ?? order.currencyCode ?? undefined,
          createdBy: uid,
          correlationId: getCorrelationId() ?? undefined,
        });
        if (existing) await this.repo.save(existing, tx);
        await this.repo.save(pv, tx);
        await tx.auditLog.create({
          data: {
            userId: uid === "system" ? null : uid,
            action: "comex.proforma.registered",
            entityType: "proforma_version",
            entityId: String(pv.snapshot().id),
            after: pv.snapshot() as object,
            correlationId: getCorrelationId() ?? null,
          },
        });
        return pv.snapshot() as ProformaVersionDto;
      });
    } catch (e) { this.rethrow(e); }
  }

  async confirm(orderId: string, versionNumber: number, dto: ConfirmProformaDto, user?: Actor): Promise<ProformaVersionDto> {
    try {
      const orgId = resolveOrganizationId(user);
      const uid = user?.id ?? "system";
      return await prisma.$transaction(async (tx) => {
        const order = await this.orders.findById(orderId, orgId, tx);
        if (!order) throw new NotFoundException(`Order not found: ${orderId}`);
        const pv = await this.repo.findLatestByOrder(orderId, orgId, tx);
        if (!pv || pv.versionNumber !== versionNumber) throw new NotFoundException(`Proforma v${versionNumber} not found`);
        const expectedOrderVersion = order.version;
        pv.confirm(uid);
        order.confirmProforma(dto.expectedOrderVersion, versionNumber);
        await this.repo.save(pv, tx);
        await this.orders.save(order, expectedOrderVersion, tx);
        const correlationId = getCorrelationId() ?? "unknown";
        await tx.auditLog.create({
          data: {
            userId: uid === "system" ? null : uid,
            action: "comex.proforma.confirmed",
            entityType: "proforma_version",
            entityId: String(pv.snapshot().id),
            after: pv.snapshot() as object,
            correlationId,
          },
        });
        await tx.internationalOrderStateTransition.create({
          data: {
            organizationId: orgId,
            orderId,
            fromStatus: "ORDER_SENT",
            toStatus: "PROFORMA_CONFIRMED",
            actorUserId: uid,
            reason: null,
            correlationId,
            idempotencyKey: dto.idempotencyKey ?? null,
            requestHash: null,
          },
        });
        await this.outbox.enqueue(order.pullEvents(), { organizationId: orgId, correlationId }, tx);
        return pv.snapshot() as ProformaVersionDto;
      });
    } catch (e) { this.rethrow(e); }
  }

  private rethrow(e: unknown): never {
    if (e instanceof NotFoundException || e instanceof AppError) throw e;
    if (e instanceof DomainError) {
      if (e.code === "VERSION_CONFLICT") throw new ConflictError(e.message, "ProformaVersion");
      if (e.code === "VALIDATION_ERROR") throw new ValidationError(e.message, { domain: [e.code] });
      throw new AppError(e.message, e.code, 400);
    }
    throw e;
  }
}
