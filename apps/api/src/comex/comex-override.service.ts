import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { ConflictError, ValidationError, type OverrideRequestDto } from "@sunset/contracts";
import {
  COMEX_OUTBOX_REPOSITORY,
  INTERNATIONAL_ORDER_REPOSITORY,
  type ComexOutboxRepository,
  type InternationalOrderRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { getCorrelationId } from "@sunset/observability";
import { resolveOrganizationId } from "./comex-org.util";

type Actor = { id?: string; organizationId?: string | null };
type CreateOverrideDto = { resourceId: string; action: string; reason: string; evidenceUrl?: string };

const COMEX_PARTIAL_READY = "ready_to_ship_partial";

@Injectable()
export class ComexOverrideService {
  constructor(
    @Inject(INTERNATIONAL_ORDER_REPOSITORY) private readonly orders: InternationalOrderRepository,
    @Inject(COMEX_OUTBOX_REPOSITORY) private readonly outbox: ComexOutboxRepository,
  ) {}

  async request(dto: CreateOverrideDto, user?: Actor): Promise<OverrideRequestDto> {
    const orgId = resolveOrganizationId(user);
    const uid = user?.id ?? "system";
    if (dto.action !== COMEX_PARTIAL_READY) {
      throw new ValidationError("Unsupported COMEX override action", { action: [dto.action] });
    }
    const order = await this.orders.findById(dto.resourceId, orgId);
    if (!order) throw new NotFoundException(`Order not found: ${dto.resourceId}`);

    const created = await prisma.overrideRequest.create({
      data: {
        organizationId: orgId,
        action: dto.action,
        resourceType: "international_order",
        resourceId: dto.resourceId,
        reason: dto.reason,
        evidenceUrl: dto.evidenceUrl ?? null,
        status: "PENDING",
        requestedById: uid,
        requestedAt: new Date(),
      },
    });
    await prisma.auditLog.create({
      data: {
        userId: uid === "system" ? null : uid,
        action: "comex.override.requested",
        entityType: "override_request",
        entityId: created.id,
        after: created as object,
        correlationId: getCorrelationId() ?? null,
      },
    });
    return this.toDto(created);
  }

  async approve(id: string, user?: Actor): Promise<OverrideRequestDto> {
    return this.changeStatus(id, user, "APPROVED", "comex.override.approved");
  }

  async reject(id: string, user?: Actor, reason?: string): Promise<OverrideRequestDto> {
    return this.changeStatus(id, user, "REJECTED", "comex.override.rejected", reason);
  }

  async execute(id: string, dto: { expectedOrderVersion: number }, user?: Actor): Promise<OverrideRequestDto> {
    const orgId = resolveOrganizationId(user);
    const uid = user?.id ?? "system";
    return await prisma.$transaction(async (tx) => {
      const or = await tx.overrideRequest.findFirst({
        where: { id, organizationId: orgId, resourceType: "international_order" },
      });
      if (!or) throw new NotFoundException(`Override ${id} not found`);
      if (or.status === "EXECUTED") return this.toDto(or);
      if (or.status !== "APPROVED") throw new ConflictError("Override not APPROVED", "OverrideRequest");
      if (or.requestedById === uid) throw new ConflictError("Executor must differ from requester", "OverrideRequest");

      const order = await this.orders.findById(or.resourceId, orgId, tx);
      if (!order) throw new NotFoundException(`Order not found: ${or.resourceId}`);
      const expected = order.version;
      order.readyToShipWithOverride(dto.expectedOrderVersion, or.id);
      await this.orders.save(order, expected, tx);
      const updated = await tx.overrideRequest.update({
        where: { id },
        data: { status: "EXECUTED", executedById: uid, executedAt: new Date() },
      });
      const correlationId = getCorrelationId() ?? "unknown";
      await tx.auditLog.create({
        data: {
          userId: uid === "system" ? null : uid,
          action: "comex.override.executed",
          entityType: "override_request",
          entityId: id,
          after: updated as object,
          correlationId,
        },
      });
      await tx.internationalOrderStateTransition.create({
        data: {
          organizationId: orgId,
          orderId: or.resourceId,
          fromStatus: "IN_PRODUCTION",
          toStatus: "READY_TO_SHIP",
          actorUserId: uid,
          reason: or.reason,
          overrideRequestId: or.id,
          correlationId,
        },
      });
      await this.outbox.enqueue(order.pullEvents(), { organizationId: orgId, correlationId }, tx);
      return this.toDto(updated);
    });
  }

  async findAll(user?: Actor): Promise<OverrideRequestDto[]> {
    const orgId = resolveOrganizationId(user);
    const list = await prisma.overrideRequest.findMany({
      where: { organizationId: orgId, resourceType: "international_order" },
      orderBy: { createdAt: "desc" },
    });
    return list.map((row) => this.toDto(row));
  }

  private async changeStatus(
    id: string,
    user: Actor | undefined,
    status: "APPROVED" | "REJECTED",
    action: string,
    reason?: string,
  ): Promise<OverrideRequestDto> {
    const orgId = resolveOrganizationId(user);
    const uid = user?.id ?? "system";
    const or = await prisma.overrideRequest.findFirst({
      where: { id, organizationId: orgId, resourceType: "international_order" },
    });
    if (!or) throw new NotFoundException(`Override ${id} not found`);
    if (or.status !== "PENDING") throw new ConflictError("Override not in PENDING", "OverrideRequest");
    if (status === "APPROVED" && or.requestedById === uid) {
      throw new ConflictError("Approver must differ from requester", "OverrideRequest");
    }
    const updated = await prisma.overrideRequest.update({
      where: { id },
      data: status === "APPROVED"
        ? { status, approvedById: uid, approvedAt: new Date() }
        : { status, rejectedById: uid, rejectedAt: new Date(), rejectionReason: reason ?? null },
    });
    await prisma.auditLog.create({
      data: {
        userId: uid === "system" ? null : uid,
        action,
        entityType: "override_request",
        entityId: id,
        after: updated as object,
        correlationId: getCorrelationId() ?? null,
      },
    });
    return this.toDto(updated);
  }

  private toDto(or: any): OverrideRequestDto {
    return {
      id: or.id,
      organizationId: or.organizationId,
      action: or.action,
      resourceType: or.resourceType,
      resourceId: or.resourceId,
      reason: or.reason,
      evidenceUrl: or.evidenceUrl ?? null,
      requestedById: or.requestedById,
      requestedAt: or.requestedAt.toISOString(),
      approvedById: or.approvedById ?? null,
      approvedAt: or.approvedAt?.toISOString() ?? null,
      rejectedById: or.rejectedById ?? null,
      rejectedAt: or.rejectedAt?.toISOString() ?? null,
      rejectionReason: or.rejectionReason ?? null,
      cancelledById: or.cancelledById ?? null,
      cancelledAt: or.cancelledAt?.toISOString() ?? null,
      status: or.status,
      executedById: or.executedById ?? null,
      executedAt: or.executedAt?.toISOString() ?? null,
      expiresAt: or.expiresAt?.toISOString() ?? null,
      version: or.version,
      createdAt: or.createdAt.toISOString(),
      updatedAt: or.updatedAt.toISOString(),
    };
  }
}
