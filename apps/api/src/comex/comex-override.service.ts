import { randomUUID } from "node:crypto";
import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import type { Prisma } from "@prisma/client";
import {
  AppError,
  AuthError,
  ConflictError,
  type ApproveComexOverrideRequestDto,
  type CreateComexOverrideRequestDto,
  type ExecuteComexOverrideRequestDto,
  type OverrideRequestDto,
  type RejectComexOverrideRequestDto,
  ValidationError,
} from "@sunset/contracts";
import { prisma } from "@sunset/db";
import {
  COMEX_OUTBOX_REPOSITORY,
  DomainError,
  INTERNATIONAL_ORDER_REPOSITORY,
  isOverrideCommandReplay,
  OVERRIDE_COMMAND_RECEIPT_REPOSITORY,
  OVERRIDE_REQUEST_REPOSITORY,
  OverrideAction,
  OverrideCommandName,
  OverrideCommandOutcomeType,
  type OverrideCommandReceipt,
  type OverrideCommandReceiptRepository,
  OverrideConcurrencyError,
  OverrideRequest,
  OverrideRequestContext,
  type OverrideRequestSnapshot,
  OverrideResourceType,
  OverrideSoDError,
  OverrideStatus,
  type ComexOutboxRepository,
  type InternationalOrderRepository,
  type StrictOverrideRequestRepository,
} from "@sunset/domain";
import { getCorrelationId } from "@sunset/observability";
import { makeComexOverrideEvents } from "./comex-event.util";
import { stableHash } from "./comex-hash.util";
import { resolveOrganizationId } from "./comex-org.util";

type Actor = { id?: string; organizationId?: string | null };

type IdempotencyContext = {
  organizationId: string;
  actorId: string;
  commandName: OverrideCommandName;
  keyHash: string;
  requestHash: string;
  correlationId: string;
};

type OverrideCommandResult = {
  override: OverrideRequestDto;
  error?: AppError;
};

const HTTP_CREATED = 201;
const HTTP_OK = 200;
const HTTP_CONFLICT = 409;

@Injectable()
export class ComexOverrideService {
  constructor(
    @Inject(INTERNATIONAL_ORDER_REPOSITORY)
    private readonly orders: InternationalOrderRepository,
    @Inject(COMEX_OUTBOX_REPOSITORY)
    private readonly outbox: ComexOutboxRepository,
    @Inject(OVERRIDE_REQUEST_REPOSITORY)
    private readonly overrides: StrictOverrideRequestRepository,
    @Inject(OVERRIDE_COMMAND_RECEIPT_REPOSITORY)
    private readonly receipts: OverrideCommandReceiptRepository,
  ) {}

  async request(
    dto: CreateComexOverrideRequestDto,
    user?: Actor,
    idempotencyKey?: string,
  ): Promise<OverrideRequestDto> {
    const actorId = this.requireActorId(user);
    const organizationId = resolveOrganizationId(user);
    const body = {
      resourceId: dto.resourceId?.trim() ?? "",
      action: dto.action?.trim() ?? "",
      reason: dto.reason?.trim() ?? "",
      evidenceUrl: dto.evidenceUrl?.trim() || null,
    };
    const context = this.idempotencyContext(
      OverrideCommandName.REQUEST,
      organizationId,
      actorId,
      idempotencyKey,
      { template: "/comex/override-requests", params: {} },
      body,
      { override: null, order: null },
    );

    return this.runIdempotent(context, async (tx) => {
      const override = OverrideRequest.requestForContext(
        {
          action: body.action,
          resourceType: OverrideResourceType.INTERNATIONAL_ORDER,
          resourceId: body.resourceId,
          reason: body.reason,
          evidenceUrl: body.evidenceUrl,
          requestedById: actorId,
          organizationId,
        },
        OverrideRequestContext.COMEX,
      );
      const snapshot = override.toSnapshot();
      const order = await this.orders.findById(
        snapshot.resourceId,
        organizationId,
        tx,
      );
      if (!order) {
        throw new NotFoundException(`Order not found: ${snapshot.resourceId}`);
      }

      await this.overrides.saveWithVersion(override, null, tx);
      await this.auditOverride(
        tx,
        "comex.override.requested",
        actorId,
        null,
        snapshot,
        context.correlationId,
      );
      await this.outbox.enqueue(
        makeComexOverrideEvents(
          override.pullEvents(),
          snapshot,
          organizationId,
          context.correlationId,
          order.version,
        ),
        { organizationId, correlationId: context.correlationId },
        tx,
      );
      await this.appendReceipt(
        context,
        snapshot,
        OverrideCommandOutcomeType.SUCCESS,
        HTTP_CREATED,
        tx,
      );

      return { override: this.toDto(snapshot) };
    });
  }

  async approve(
    id: string,
    dto: ApproveComexOverrideRequestDto,
    user?: Actor,
    idempotencyKey?: string,
  ): Promise<OverrideRequestDto> {
    const actorId = this.requireActorId(user);
    const organizationId = resolveOrganizationId(user);
    const expectedOverrideVersion = this.requireVersion(
      dto.expectedOverrideVersion,
      "expectedOverrideVersion",
    );
    const context = this.idempotencyContext(
      OverrideCommandName.APPROVE,
      organizationId,
      actorId,
      idempotencyKey,
      {
        template: "/comex/override-requests/:id/approve",
        params: { id },
      },
      {},
      { override: expectedOverrideVersion, order: null },
    );

    return this.runIdempotent(context, async (tx) => {
      const override = await this.requireComexOverride(id, organizationId, tx);
      const before = override.toSnapshot();
      override.approve(
        {
          overrideId: id,
          approvedById: actorId,
          expectedVersion: expectedOverrideVersion,
        },
        new Date(),
      );
      const after = override.toSnapshot();

      await this.overrides.saveWithVersion(override, before.version, tx);
      await this.auditOverride(
        tx,
        "comex.override.approved",
        actorId,
        before,
        after,
        context.correlationId,
      );
      await this.outbox.enqueue(
        makeComexOverrideEvents(
          override.pullEvents(),
          after,
          organizationId,
          context.correlationId,
          after.version,
        ),
        { organizationId, correlationId: context.correlationId },
        tx,
      );
      await this.appendReceipt(
        context,
        after,
        OverrideCommandOutcomeType.SUCCESS,
        HTTP_OK,
        tx,
      );

      return { override: this.toDto(after) };
    });
  }

  async reject(
    id: string,
    dto: RejectComexOverrideRequestDto,
    user?: Actor,
    idempotencyKey?: string,
  ): Promise<OverrideRequestDto> {
    const actorId = this.requireActorId(user);
    const organizationId = resolveOrganizationId(user);
    const expectedOverrideVersion = this.requireVersion(
      dto.expectedOverrideVersion,
      "expectedOverrideVersion",
    );
    const body = { reason: dto.reason?.trim() ?? "" };
    const context = this.idempotencyContext(
      OverrideCommandName.REJECT,
      organizationId,
      actorId,
      idempotencyKey,
      {
        template: "/comex/override-requests/:id/reject",
        params: { id },
      },
      body,
      { override: expectedOverrideVersion, order: null },
    );

    return this.runIdempotent(context, async (tx) => {
      const override = await this.requireComexOverride(id, organizationId, tx);
      const before = override.toSnapshot();
      override.reject(
        {
          overrideId: id,
          rejectedById: actorId,
          reason: body.reason,
          expectedVersion: expectedOverrideVersion,
        },
        new Date(),
      );
      const after = override.toSnapshot();

      await this.overrides.saveWithVersion(override, before.version, tx);
      await this.auditOverride(
        tx,
        "comex.override.rejected",
        actorId,
        before,
        after,
        context.correlationId,
      );
      await this.outbox.enqueue(
        makeComexOverrideEvents(
          override.pullEvents(),
          after,
          organizationId,
          context.correlationId,
          after.version,
        ),
        { organizationId, correlationId: context.correlationId },
        tx,
      );
      await this.appendReceipt(
        context,
        after,
        OverrideCommandOutcomeType.SUCCESS,
        HTTP_OK,
        tx,
      );

      return { override: this.toDto(after) };
    });
  }

  async execute(
    id: string,
    dto: ExecuteComexOverrideRequestDto,
    user?: Actor,
    idempotencyKey?: string,
  ): Promise<OverrideRequestDto> {
    const actorId = this.requireActorId(user);
    const organizationId = resolveOrganizationId(user);
    const expectedOverrideVersion = this.requireVersion(
      dto.expectedOverrideVersion,
      "expectedOverrideVersion",
    );
    const expectedOrderVersion = this.requireVersion(
      dto.expectedOrderVersion,
      "expectedOrderVersion",
    );
    const context = this.idempotencyContext(
      OverrideCommandName.EXECUTE,
      organizationId,
      actorId,
      idempotencyKey,
      {
        template: "/comex/override-requests/:id/execute",
        params: { id },
      },
      {},
      { override: expectedOverrideVersion, order: expectedOrderVersion },
    );

    return this.runIdempotent(context, async (tx) => {
      const override = await this.requireComexOverride(id, organizationId, tx);
      const beforeOverride = override.toSnapshot();
      this.assertExpectedOverrideVersion(
        beforeOverride,
        expectedOverrideVersion,
      );

      if (beforeOverride.status === OverrideStatus.EXPIRED) {
        await this.appendReceipt(
          context,
          beforeOverride,
          OverrideCommandOutcomeType.ERROR,
          HTTP_CONFLICT,
          tx,
          "OVERRIDE_EXPIRED",
        );
        return this.expiredResult(beforeOverride, context.correlationId);
      }

      const now = new Date();
      if (override.refreshExpiry(now)) {
        const expired = override.toSnapshot();
        await this.overrides.saveWithVersion(
          override,
          beforeOverride.version,
          tx,
        );
        await this.auditOverride(
          tx,
          "comex.override.expired",
          actorId,
          beforeOverride,
          expired,
          context.correlationId,
        );
        await this.outbox.enqueue(
          makeComexOverrideEvents(
            override.pullEvents(),
            expired,
            organizationId,
            context.correlationId,
            expired.version,
          ),
          { organizationId, correlationId: context.correlationId },
          tx,
        );
        await this.appendReceipt(
          context,
          expired,
          OverrideCommandOutcomeType.ERROR,
          HTTP_CONFLICT,
          tx,
          "OVERRIDE_EXPIRED",
        );
        return this.expiredResult(expired, context.correlationId);
      }

      if (beforeOverride.status !== OverrideStatus.APPROVED) {
        throw new AppError(
          `Cannot execute override in status ${beforeOverride.status}`,
          "OVERRIDE_INVALID_STATE",
          HTTP_CONFLICT,
          context.correlationId,
        );
      }
      if (beforeOverride.requestedById === actorId) {
        throw new OverrideSoDError(
          "Executor must be different from requester (segregation of duties)",
          {
            overrideId: beforeOverride.id,
            requestedById: beforeOverride.requestedById,
            executedById: actorId,
          },
        );
      }

      const order = await this.orders.findById(
        beforeOverride.resourceId,
        organizationId,
        tx,
      );
      if (!order) {
        throw new NotFoundException(
          `Order not found: ${beforeOverride.resourceId}`,
        );
      }
      const beforeOrder = order.snapshot();
      const expectedPersistedOrderVersion = order.version;

      override.markExecuted(
        {
          overrideId: id,
          executedById: actorId,
          expectedVersion: expectedOverrideVersion,
        },
        now,
      );
      order.readyToShipWithOverride(expectedOrderVersion, beforeOverride.id);

      const afterOverride = override.toSnapshot();
      const afterOrder = order.snapshot();
      await this.orders.save(order, expectedPersistedOrderVersion, tx);
      await this.overrides.saveWithVersion(
        override,
        beforeOverride.version,
        tx,
      );
      await tx.internationalOrderStateTransition.create({
        data: {
          organizationId,
          orderId: beforeOverride.resourceId,
          fromStatus: beforeOrder.status,
          toStatus: afterOrder.status,
          actorUserId: actorId,
          reason: beforeOverride.reason,
          evidenceUrl: beforeOverride.evidenceUrl,
          overrideRequestId: beforeOverride.id,
          correlationId: context.correlationId,
          idempotencyKey: null,
          requestHash: context.requestHash,
        },
      });
      await this.auditOverride(
        tx,
        "comex.override.executed",
        actorId,
        beforeOverride,
        afterOverride,
        context.correlationId,
      );
      await tx.auditLog.create({
        data: {
          userId: actorId,
          action: "comex.order.ready-to-ship",
          entityType: "international_order",
          entityId: beforeOverride.resourceId,
          before: beforeOrder as object,
          after: afterOrder as object,
          metadata: { overrideRequestId: beforeOverride.id },
          correlationId: context.correlationId,
        },
      });

      const overrideEvents = makeComexOverrideEvents(
        override.pullEvents(),
        afterOverride,
        organizationId,
        context.correlationId,
        afterOrder.version,
        {
          fromStatus: beforeOrder.status,
          toStatus: afterOrder.status,
          expectedOrderVersion,
        },
      );
      const events = [...overrideEvents, ...order.pullEvents()];
      const uniqueEvents = [
        ...new Map(events.map((event) => [event.eventId, event])).values(),
      ];
      await this.outbox.enqueue(
        uniqueEvents,
        { organizationId, correlationId: context.correlationId },
        tx,
      );
      await this.appendReceipt(
        context,
        afterOverride,
        OverrideCommandOutcomeType.SUCCESS,
        HTTP_OK,
        tx,
        undefined,
        { orderId: afterOrder.id, orderVersion: afterOrder.version },
      );

      return { override: this.toDto(afterOverride) };
    });
  }

  async findAll(user?: Actor): Promise<OverrideRequestDto[]> {
    this.requireActorId(user);
    const organizationId = resolveOrganizationId(user);
    const result = await this.overrides.findAll(
      {
        organizationId,
        action: OverrideAction.READY_TO_SHIP_PARTIAL,
        resourceType: OverrideResourceType.INTERNATIONAL_ORDER,
      },
      1,
      100,
    );
    return result.data.map((override) => this.toDto(override.toSnapshot()));
  }

  private async runIdempotent(
    context: IdempotencyContext,
    operation: (
      tx: Prisma.TransactionClient,
    ) => Promise<OverrideCommandResult>,
  ): Promise<OverrideRequestDto> {
    try {
      const result = await prisma.$transaction(async (tx) => {
        const receipt = await this.receipts.find(
          {
            organizationId: context.organizationId,
            commandName: context.commandName,
            keyHash: context.keyHash,
          },
          tx,
        );
        if (receipt) {
          return this.replay(receipt, context, tx);
        }
        return operation(tx);
      });
      return this.unwrap(result);
    } catch (error) {
      if (this.isDuplicateReceiptConflict(error)) {
        const receipt = await this.receipts.find({
          organizationId: context.organizationId,
          commandName: context.commandName,
          keyHash: context.keyHash,
        });
        if (receipt) {
          return this.unwrap(await this.replay(receipt, context));
        }
      }
      this.rethrow(error);
    }
  }

  private async replay(
    receipt: OverrideCommandReceipt,
    context: IdempotencyContext,
    tx?: unknown,
  ): Promise<OverrideCommandResult> {
    if (!isOverrideCommandReplay(receipt, context.requestHash)) {
      throw new AppError(
        "Idempotency-Key was already used for a different command payload",
        "IDEMPOTENCY_KEY_REUSED",
        HTTP_CONFLICT,
        context.correlationId,
      );
    }

    const override = await this.overrides.findByIdForOrganization(
      receipt.overrideRequestId,
      context.organizationId,
      tx,
    );
    if (!override) {
      throw new NotFoundException(
        `Override ${receipt.overrideRequestId} not found for replay`,
      );
    }
    const snapshot = override.toSnapshot();
    const result: OverrideCommandResult = {
      override: this.toDto(snapshot),
    };
    if (receipt.outcomeType === OverrideCommandOutcomeType.ERROR) {
      result.error = new AppError(
        receipt.errorCode === "OVERRIDE_EXPIRED"
          ? "Override has expired"
          : "Override command failed",
        receipt.errorCode ?? "OVERRIDE_COMMAND_FAILED",
        receipt.httpStatus,
        context.correlationId,
      );
    }
    return result;
  }

  private unwrap(result: OverrideCommandResult): OverrideRequestDto {
    if (result.error) throw result.error;
    return result.override;
  }

  private async requireComexOverride(
    id: string,
    organizationId: string,
    tx: unknown,
  ): Promise<OverrideRequest> {
    const override = await this.overrides.findByIdForOrganization(
      id,
      organizationId,
      tx,
    );
    if (
      !override ||
      override.resourceType !== OverrideResourceType.INTERNATIONAL_ORDER ||
      override.action !== OverrideAction.READY_TO_SHIP_PARTIAL
    ) {
      throw new NotFoundException(`Override ${id} not found`);
    }
    return override;
  }

  private async auditOverride(
    tx: Prisma.TransactionClient,
    action: string,
    actorId: string,
    before: OverrideRequestSnapshot | null,
    after: OverrideRequestSnapshot,
    correlationId: string,
  ): Promise<void> {
    await tx.auditLog.create({
      data: {
        userId: actorId,
        action,
        entityType: "override_request",
        entityId: after.id,
        before: before ? (before as object) : undefined,
        after: after as object,
        correlationId,
      },
    });
  }

  private async appendReceipt(
    context: IdempotencyContext,
    snapshot: OverrideRequestSnapshot,
    outcomeType: OverrideCommandOutcomeType,
    httpStatus: number,
    tx: unknown,
    errorCode?: string,
    result?: Readonly<Record<string, unknown>>,
  ): Promise<void> {
    await this.receipts.append(
      {
        id: randomUUID(),
        organizationId: context.organizationId,
        overrideRequestId: snapshot.id,
        commandName: context.commandName,
        keyHash: context.keyHash,
        requestHash: context.requestHash,
        actorId: context.actorId,
        correlationId: context.correlationId,
        outcomeType,
        resultStatus: snapshot.status as OverrideStatus,
        resultVersion: snapshot.version,
        httpStatus,
        errorCode,
        result,
        recordedAt: new Date().toISOString(),
      },
      tx,
    );
  }

  private expiredResult(
    snapshot: OverrideRequestSnapshot,
    correlationId: string,
  ): OverrideCommandResult {
    return {
      override: this.toDto(snapshot),
      error: new AppError(
        "Override has expired",
        "OVERRIDE_EXPIRED",
        HTTP_CONFLICT,
        correlationId,
      ),
    };
  }

  private idempotencyContext(
    commandName: OverrideCommandName,
    organizationId: string,
    actorId: string,
    idempotencyKey: string | undefined,
    path: Readonly<Record<string, unknown>>,
    body: Readonly<Record<string, unknown>>,
    versions: Readonly<Record<string, number | null>>,
  ): IdempotencyContext {
    const normalizedKey = idempotencyKey?.trim();
    if (!normalizedKey) {
      throw new ValidationError("Idempotency-Key header is required", {
        idempotencyKey: ["required"],
      });
    }
    return {
      organizationId,
      actorId,
      commandName,
      keyHash: stableHash(normalizedKey),
      requestHash: stableHash({
        command: commandName,
        organizationId,
        actorId,
        path,
        body,
        versions,
      }),
      correlationId: getCorrelationId() ?? "unknown",
    };
  }

  private requireActorId(user?: Actor): string {
    const actorId = user?.id?.trim();
    if (!actorId) {
      throw new AuthError("Authenticated actor is required");
    }
    return actorId;
  }

  private requireVersion(value: number, field: string): number {
    if (!Number.isInteger(value) || value < 0) {
      throw new ValidationError(`${field} must be a non-negative integer`, {
        [field]: ["non_negative_integer_required"],
      });
    }
    return value;
  }

  private assertExpectedOverrideVersion(
    snapshot: OverrideRequestSnapshot,
    expectedVersion: number,
  ): void {
    if (snapshot.version !== expectedVersion) {
      throw new OverrideConcurrencyError(
        `Version mismatch: expected ${expectedVersion}, current ${snapshot.version}`,
        {
          overrideId: snapshot.id,
          expectedVersion,
          currentVersion: snapshot.version,
        },
      );
    }
  }

  private isDuplicateReceiptConflict(error: unknown): boolean {
    return (
      error instanceof ConflictError &&
      error.entityType === "OverrideCommandReceipt"
    );
  }

  private toDto(snapshot: OverrideRequestSnapshot): OverrideRequestDto {
    return snapshot as OverrideRequestDto;
  }

  private rethrow(error: unknown): never {
    if (error instanceof NotFoundException || error instanceof AppError) {
      throw error;
    }
    if (error instanceof DomainError) {
      if (error.code === "OVERRIDE_SOD_VIOLATION") {
        throw new AppError(error.message, error.code, 403);
      }
      if (
        error.code === "VERSION_CONFLICT" ||
        error.code === "OVERRIDE_INVALID_STATE" ||
        error.code === "OVERRIDE_EXPIRED" ||
        error.code === "INVALID_STATE"
      ) {
        throw new AppError(error.message, error.code, HTTP_CONFLICT);
      }
      if (error.code === "VALIDATION_ERROR") {
        throw new ValidationError(error.message, { domain: [error.code] });
      }
      throw new AppError(error.message, error.code, 400);
    }
    throw error;
  }
}
