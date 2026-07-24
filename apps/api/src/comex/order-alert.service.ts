import { createHash, randomUUID } from "node:crypto";
import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { ConflictError, ValidationError, type CreateOrderAlertDto, type OrderAlertDto } from "@sunset/contracts";
import {
  AlertSeverity,
  COMEX_OUTBOX_REPOSITORY,
  INTERNATIONAL_ORDER_REPOSITORY,
  ORDER_ALERT_REPOSITORY,
  OrderAlert,
  type ComexOutboxRepository,
  type InternationalOrderRepository,
  type OrderAlertRepository,
  COMEX_COMMAND_RECEIPT_REPOSITORY,
  ComexCommandName,
  type ComexCommandReceiptRepository,
  type ComexCommandReceipt,
  type ComexAlertCommandName,
  type StrictOrderAlertRepository,
  isComexCommandReplay,
  OverrideConcurrencyError,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { getCorrelationId } from "@sunset/observability";
import { makeComexEvent } from "./comex-event.util";
import { stableHash } from "./comex-hash.util";
import { resolveOrganizationId } from "./comex-org.util";

type Actor = { id?: string; organizationId?: string | null };


@Injectable()
export class OrderAlertService {
  constructor(
    @Inject(ORDER_ALERT_REPOSITORY) private readonly repo: StrictOrderAlertRepository,
    @Inject(INTERNATIONAL_ORDER_REPOSITORY) private readonly orders: InternationalOrderRepository,
    @Inject(COMEX_OUTBOX_REPOSITORY) private readonly outbox: ComexOutboxRepository,
    @Inject(COMEX_COMMAND_RECEIPT_REPOSITORY) private readonly receipts: ComexCommandReceiptRepository,
  ) {}

  async create(orderId: string, dto: CreateOrderAlertDto, user?: Actor, idempotencyKey?: string): Promise<OrderAlertDto> {
    const orgId = resolveOrganizationId(user);
    if (!user?.id) throw new ValidationError("Actor ID is required for command receipt", { user: ["authentication required"] });
    const uid = user.id;
    const order = await this.orders.findById(orderId, orgId);
    if (!order) throw new NotFoundException(`Order not found: ${orderId}`);
    const alert = OrderAlert.create({ orderId, code: dto.code, severity: dto.severity as AlertSeverity, message: dto.message });
    await prisma.$transaction(async (tx) => {
      await this.repo.saveWithVersion(alert, null, tx);
      const snapshot = alert.snapshot();
      const correlationId = getCorrelationId() ?? "unknown";
      await this.outbox.enqueue([makeComexEvent("international-order.alert-raised.v1", orderId, orgId, correlationId, {
        alertId: snapshot.id, code: snapshot.code, severity: snapshot.severity, status: snapshot.status, message: snapshot.message,
      })], { organizationId: orgId, correlationId }, tx);
      await tx.auditLog.create({
        data: { userId: uid, action: "comex.alert.raised", entityType: "international_order_alert", entityId: snapshot.id, after: snapshot as object, correlationId },
      });
      const keyHash = stableHash(idempotencyKey);
      const requestHash = stableHash({ commandName: ComexCommandName.ALERT_CREATE, organizationId: orgId, actorId: uid, route: { orderId }, payload: dto });
      await this.receipts.append({
        id: randomUUID(),
        organizationId: orgId,
        orderId,
        keyHash,
        requestHash,
        actorId: uid,
        correlationId,
        recordedAt: new Date().toISOString(),
        commandName: ComexCommandName.ALERT_CREATE,
        alertId: snapshot.id,
      } as ComexCommandReceipt, tx);
    });
    return { ...alert.snapshot(), organizationId: orgId } as OrderAlertDto;
  }

  async findByOrder(orderId: string, user?: Actor): Promise<OrderAlertDto[]> {
    const orgId = resolveOrganizationId(user);
    return (await this.repo.findByOrder(orderId, orgId)).map((a) => ({ ...a.snapshot(), organizationId: orgId }) as OrderAlertDto);
  }

  async acknowledge(orderId: string, id: string, user?: Actor, idempotencyKey?: string): Promise<OrderAlertDto> {
    return this.touch(orderId, id, user, (a, uid) => a.ack(uid), "comex.alert.acknowledged", ComexCommandName.ALERT_ACKNOWLEDGE, idempotencyKey);
  }

  async resolve(orderId: string, id: string, reason: string | undefined, user?: Actor, idempotencyKey?: string): Promise<OrderAlertDto> {
    return this.touch(orderId, id, user, (a, uid) => a.resolve(uid, reason), "comex.alert.resolved", ComexCommandName.ALERT_RESOLVE, idempotencyKey);
  }

  private async touch(
    orderId: string,
    id: string,
    user: Actor | undefined,
    apply: (alert: OrderAlert, uid: string) => void,
    action: string,
    commandName: ComexAlertCommandName,
    idempotencyKey?: string,
  ): Promise<OrderAlertDto> {
    const orgId = resolveOrganizationId(user);
    if (!user?.id) {
      throw new ValidationError("Actor ID is required for command receipt", { user: ["authentication required"] });
    }
    const uid = user.id;

    const keyHash = idempotencyKey
      ? createHash("sha256").update(idempotencyKey).digest("hex")
      : undefined;

    return prisma.$transaction(async (tx) => {
      if (keyHash) {
        const previous = await this.receipts.find({
          organizationId: orgId,
          commandName,
          keyHash,
        }, tx);
        if (previous) {
          const alert = await this.repo.findById(id, orgId, tx);
          if (!alert) throw new NotFoundException(`Alert not found: ${id}`);
          const expectedVersion = alert.snapshot().version ?? 0;
          const requestHash = stableHash({
            commandName,
            organizationId: orgId,
            actorId: uid,
            orderId,
            alertId: id,
            expectedVersion,
          });
          if (!isComexCommandReplay(previous, requestHash)) {
            throw new ConflictError(
              "Idempotency key already used with different request",
              "ComexCommandReceipt",
            );
          }
          return { ...alert.snapshot(), organizationId: orgId } as OrderAlertDto;
        }
      }

      const alert = await this.repo.findById(id, orgId, tx);
      if (!alert) throw new NotFoundException(`Alert not found: ${id}`);
      if (alert.snapshot().orderId !== orderId) throw new NotFoundException("Alert does not belong to order");
      const before = alert.snapshot();
      const expectedVersion = before.version ?? 0;
      apply(alert, uid);
      const after = alert.snapshot();
      if (before.status === after.status) {
        return { ...after, organizationId: orgId } as OrderAlertDto;
      }
      try {
        await this.repo.saveWithVersion(alert, expectedVersion, tx);
      } catch (err) {
        if (err instanceof OverrideConcurrencyError) {
          throw new ConflictError(err.message, "OrderAlert", id);
        }
        throw err;
      }
      const correlationId = getCorrelationId() ?? "unknown";
      const eventType = action.endsWith("acknowledged") ? "international-order.alert-acknowledged.v1" : "international-order.alert-resolved.v1";
      await this.outbox.enqueue([makeComexEvent(eventType, after.orderId, orgId, correlationId, {
        alertId: after.id, status: after.status, acknowledgedBy: after.acknowledgedBy, acknowledgedAt: after.acknowledgedAt,
        resolvedBy: after.resolvedBy, resolvedAt: after.resolvedAt, resolutionReason: after.resolutionReason,
      })], { organizationId: orgId, correlationId }, tx);
      await tx.auditLog.create({
        data: { userId: uid, action, entityType: "international_order_alert", entityId: id, before: before as object, after: after as object, correlationId },
      });
      const requestHash = stableHash({
        commandName,
        organizationId: orgId,
        actorId: uid,
        orderId,
        alertId: id,
        expectedVersion,
      });
      await this.receipts.append({
        id: randomUUID(),
        organizationId: orgId,
        orderId,
        keyHash: keyHash ?? createHash("sha256").update(commandName + ":" + id).digest("hex"),
        requestHash,
        actorId: uid,
        correlationId,
        recordedAt: new Date().toISOString(),
        commandName,
        alertId: after.id,
      } as ComexCommandReceipt, tx);
      return { ...alert.snapshot(), organizationId: orgId } as OrderAlertDto;
    });
  }
}
