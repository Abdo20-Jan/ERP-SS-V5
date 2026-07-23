import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import type { CreateOrderAlertDto, OrderAlertDto } from "@sunset/contracts";
import {
  AlertSeverity,
  ORDER_ALERT_REPOSITORY,
  OrderAlert,
  type OrderAlertRepository,
  INTERNATIONAL_ORDER_REPOSITORY,
  type InternationalOrderRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { getCorrelationId } from "@sunset/observability";
import { resolveOrganizationId } from "./comex-org.util";

type Actor = { id?: string; organizationId?: string | null };

@Injectable()
export class OrderAlertService {
  constructor(
    @Inject(ORDER_ALERT_REPOSITORY) private readonly repo: OrderAlertRepository,
    @Inject(INTERNATIONAL_ORDER_REPOSITORY) private readonly orders: InternationalOrderRepository,
  ) {}

  async create(orderId: string, dto: CreateOrderAlertDto, user?: Actor): Promise<OrderAlertDto> {
    const orgId = resolveOrganizationId(user);
    const uid = user?.id ?? "system";
    const order = await this.orders.findById(orderId, orgId);
    if (!order) throw new NotFoundException(`Order not found: ${orderId}`);
    const alert = OrderAlert.create({
      orderId,
      code: dto.code,
      severity: dto.severity as AlertSeverity,
      message: dto.message,
    });
    await prisma.$transaction(async (tx) => {
      await this.repo.save(alert, tx);
      await tx.auditLog.create({
        data: {
          userId: uid === "system" ? null : uid,
          action: "comex.alert.raised",
          entityType: "international_order_alert",
          entityId: String(alert.snapshot().id),
          after: alert.snapshot() as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
    });
    return { ...alert.snapshot(), organizationId: orgId } as OrderAlertDto;
  }

  async findByOrder(orderId: string, user?: Actor): Promise<OrderAlertDto[]> {
    const orgId = resolveOrganizationId(user);
    return (await this.repo.findByOrder(orderId, orgId)).map((a) => ({ ...a.snapshot(), organizationId: orgId }) as OrderAlertDto);
  }

  async acknowledge(id: string, user?: Actor): Promise<OrderAlertDto> {
    return this.touch(id, user, (a, uid) => a.ack(uid), "comex.alert.acknowledged");
  }

  async resolve(id: string, reason: string | undefined, user?: Actor): Promise<OrderAlertDto> {
    return this.touch(id, user, (a, uid) => a.resolve(uid, reason), "comex.alert.resolved");
  }

  private async touch(
    id: string,
    user: Actor | undefined,
    apply: (alert: OrderAlert, uid: string) => void,
    action: string,
  ): Promise<OrderAlertDto> {
    const orgId = resolveOrganizationId(user);
    const uid = user?.id ?? "system";
    const alert = await this.repo.findById(id, orgId);
    if (!alert) throw new NotFoundException(`Alert not found: ${id}`);
    const before = alert.snapshot();
    apply(alert, uid);
    await prisma.$transaction(async (tx) => {
      await this.repo.save(alert, tx);
      await tx.auditLog.create({
        data: {
          userId: uid === "system" ? null : uid,
          action,
          entityType: "international_order_alert",
          entityId: id,
          before: before as object,
          after: alert.snapshot() as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
    });
    return { ...alert.snapshot(), organizationId: orgId } as OrderAlertDto;
  }
}
