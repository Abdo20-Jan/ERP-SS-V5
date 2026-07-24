import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { AppError, ConflictError, ValidationError, type ConfirmProformaDto, type ProformaVersionDto, type RegisterProformaDto } from "@sunset/contracts";
import {
  COMEX_COMMAND_RECEIPT_REPOSITORY,
  COMEX_OUTBOX_REPOSITORY,
  ComexCommandName,
  DomainError,
  INTERNATIONAL_ORDER_REPOSITORY,
  PROFORMA_VERSION_REPOSITORY,
  ProformaVersion,
  generateEntityId,
  isComexCommandReplay,
  OverrideConcurrencyError,
  type ComexCommandReceiptRepository,
  type ComexOutboxRepository,
  type InternationalOrderRepository,
  type StrictProformaVersionRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { getCorrelationId } from "@sunset/observability";
import { resolveOrganizationId } from "./comex-org.util";
import { makeComexEvent } from "./comex-event.util";
import { stableHash } from "./comex-hash.util";

type Actor = { id?: string; organizationId?: string | null };


@Injectable()
export class ProformaService {
  constructor(
    @Inject(PROFORMA_VERSION_REPOSITORY) private readonly repo: StrictProformaVersionRepository,
    @Inject(INTERNATIONAL_ORDER_REPOSITORY) private readonly orders: InternationalOrderRepository,
    @Inject(COMEX_OUTBOX_REPOSITORY) private readonly outbox: ComexOutboxRepository,
    @Inject(COMEX_COMMAND_RECEIPT_REPOSITORY) private readonly receipts: ComexCommandReceiptRepository,
  ) {}

  async register(orderId: string, dto: RegisterProformaDto, idempotencyKey?: string, user?: Actor): Promise<ProformaVersionDto> {
    try {
      const orgId = resolveOrganizationId(user);
      if (!user?.id) throw new ValidationError("Authenticated user ID is required for proforma registration", {});
      const uid = user.id;
      const key = idempotencyKey;
      return await prisma.$transaction(async (tx) => {

        // Idempotency: check for replay via command receipt
        if (key) {
          const keyHash = stableHash(key);
          const previous = await this.receipts.find({
            organizationId: orgId,
            commandName: ComexCommandName.PROFORMA_REGISTER,
            keyHash,
          }, tx);
          if (previous) {
            if (!isComexCommandReplay(previous, stableHash({ commandName: ComexCommandName.PROFORMA_REGISTER, organizationId: orgId, actorId: uid, route: { orderId }, payload: dto }))) {
              throw new ConflictError("Idempotency key already used with different request", "ProformaCommandReceipt");
            }
            const replayed = await this.repo.findById(previous.proformaVersionId!, orgId, tx);
            if (replayed) return replayed.snapshot() as ProformaVersionDto;
          }
        }
        const order = await this.orders.findById(orderId, orgId, tx);
        if (!order) throw new NotFoundException(`Order not found: ${orderId}`);
        if (order.version !== dto.expectedOrderVersion) {
          throw new ConflictError("Order version conflict while registering proforma", "InternationalOrder");
        }
        const existing = await this.repo.findLatestByOrder(orderId, orgId, tx);

        // Idempotency fallback: if latest proforma matches, treat as replay
        if (key && existing && existing.snapshot().proformaNumber === dto.proformaNumber) {
          return existing.snapshot() as ProformaVersionDto;
        }
        const versionNumber = existing ? existing.versionNumber + 1 : 1;
        if (existing) {
          const expectedVersion = existing.version;
          existing.supersede();
          await this.repo.saveWithVersion(existing, expectedVersion, tx);
        }
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
        const correlationId = getCorrelationId() ?? "unknown";
        await this.outbox.enqueue([makeComexEvent("international-order.proforma-registered.v1", orderId, orgId, correlationId, {
          proformaId: String(pv.snapshot().id), proformaNumber: pv.snapshot().proformaNumber,
          proformaVersion: pv.snapshot().versionNumber, status: pv.snapshot().status,
          issueDate: pv.snapshot().issueDate, totalAmount: pv.snapshot().totalAmount,
          currencyCode: pv.snapshot().currencyCode, createdBy: uid,
        }, order.version)], { organizationId: orgId, correlationId }, tx);
        await this.repo.saveWithVersion(pv, null, tx);
        await tx.auditLog.create({
          data: {
            userId: uid,
            action: "comex.proforma.registered",
            entityType: "proforma_version",
            entityId: String(pv.snapshot().id),
            after: pv.snapshot() as object,
            correlationId,
          },
        });
        const result = pv.snapshot() as ProformaVersionDto;

        // Store receipt for future idempotency replays
        if (key) {
          const keyHash = stableHash(key);
          const requestHash = stableHash({ commandName: ComexCommandName.PROFORMA_REGISTER, organizationId: orgId, actorId: uid, route: { orderId }, payload: dto });
          await this.receipts.append({
            id: String(generateEntityId()),
            organizationId: orgId,
            orderId,
            commandName: ComexCommandName.PROFORMA_REGISTER,
            keyHash,
            requestHash,
            actorId: uid,
            correlationId,
            recordedAt: new Date().toISOString(),
            proformaVersionId: String(pv.snapshot().id),
          }, tx);
        }

        return result;
      });
    } catch (e) { this.rethrow(e); }
  }

  async confirm(orderId: string, versionNumber: number, dto: ConfirmProformaDto, idempotencyKey?: string, user?: Actor): Promise<ProformaVersionDto> {
    try {
      const orgId = resolveOrganizationId(user);
      if (!user?.id) throw new ValidationError("Authenticated user ID is required for proforma confirmation", {});
      const uid = user.id;
      return await prisma.$transaction(async (tx) => {
        const order = await this.orders.findById(orderId, orgId, tx);
        if (!order) throw new NotFoundException(`Order not found: ${orderId}`);
        const pv = await this.repo.findLatestByOrder(orderId, orgId, tx);
        if (!pv || pv.versionNumber !== versionNumber) throw new NotFoundException(`Proforma v${versionNumber} not found`);

        // Replay check: if receipt already recorded and proforma is already CONFIRMED
        if (idempotencyKey) {
          const keyHash = stableHash(idempotencyKey);
          const previous = await this.receipts.find({
            organizationId: orgId,
            commandName: ComexCommandName.PROFORMA_CONFIRM,
            keyHash,
          }, tx);
          if (previous && pv.snapshot().status === "CONFIRMED") {
            return pv.snapshot() as ProformaVersionDto;
          }
        }
        const expectedOrderVersion = order.version;
        pv.confirm(uid, dto.expectedVersion);
        order.confirmProforma(dto.expectedOrderVersion, versionNumber);
        await this.repo.saveWithVersion(pv, dto.expectedVersion, tx);
        await this.orders.save(order, expectedOrderVersion, tx);
        const correlationId = getCorrelationId() ?? "unknown";
        await tx.auditLog.create({
          data: {
            userId: uid,
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
            idempotencyKey: idempotencyKey ?? null,
            requestHash: null,
          },
        });
        await this.outbox.enqueue(order.pullEvents(), { organizationId: orgId, correlationId }, tx);

        // Append receipt for idempotency
        if (idempotencyKey) {
          const keyHash = stableHash(idempotencyKey);
          const requestHash = stableHash({ commandName: ComexCommandName.PROFORMA_CONFIRM, organizationId: orgId, actorId: uid, route: { orderId, proformaVersionNumber: versionNumber }, payload: dto });
          await this.receipts.append({
            id: String(generateEntityId()),
            organizationId: orgId,
            orderId,
            commandName: ComexCommandName.PROFORMA_CONFIRM,
            keyHash,
            requestHash,
            actorId: uid,
            correlationId,
            recordedAt: new Date().toISOString(),
            proformaVersionId: String(pv.snapshot().id),
          }, tx);
        }

        return pv.snapshot() as ProformaVersionDto;
      });
    } catch (e) { this.rethrow(e); }
  }

  private rethrow(e: unknown): never {
    if (e instanceof NotFoundException || e instanceof AppError) throw e;
    if (e instanceof OverrideConcurrencyError) throw new ConflictError(e.message, "ProformaVersion");
    if (e instanceof DomainError) {
      if (e.code === "VERSION_CONFLICT") throw new ConflictError(e.message, "ProformaVersion");
      if (e.code === "VALIDATION_ERROR") throw new ValidationError(e.message, { domain: [e.code] });
      throw new AppError(e.message, e.code, 400);
    }
    throw e;
  }
}
