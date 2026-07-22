import {
  OverrideConcurrencyError,
  OverrideExpiredError,
  OverrideSoDError,
  OverrideStateError,
  OverrideValidationError,
} from "../common/errors";
import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import type {
  ApproveOverrideCommand,
  CancelOverrideCommand,
  ExecuteOverrideCommand,
  RejectOverrideCommand,
  RequestOverrideCommand,
} from "./override-request.commands";
import {
  type OverrideDomainEvent,
  overrideApprovedEvent,
  overrideCancelledEvent,
  overrideExecutedEvent,
  overrideExpiredEvent,
  overrideRejectedEvent,
  overrideRequestedEvent,
} from "./override-request.events";
import {
  OverrideAction,
  OverrideResourceType,
  OverrideStatus,
  OVERRIDE_TTL_HOURS,
} from "./override-request.enums";
import {
  optionalEvidenceUrl,
  validateActionResourcePair,
  validateActorId,
  validateOverrideAction,
  validateOverrideReason,
  validateOverrideResourceType,
  validateResourceId,
} from "./override-request.validator";

export interface OverrideRequestSnapshot {
  id: string;
  organizationId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  reason: string;
  evidenceUrl: string | null;
  requestedById: string;
  requestedAt: string;
  approvedById: string | null;
  approvedAt: string | null;
  rejectedById: string | null;
  rejectedAt: string | null;
  rejectionReason: string | null;
  cancelledById: string | null;
  cancelledAt: string | null;
  status: string;
  executedById: string | null;
  executedAt: string | null;
  expiresAt: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export class OverrideRequest {
  private _events: OverrideDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly organizationId: string,
    private _action: OverrideAction,
    private _resourceType: OverrideResourceType,
    private _resourceId: string,
    private _reason: string,
    private _evidenceUrl: string | null,
    private _requestedById: string,
    private _requestedAt: Date,
    private _approvedById: string | null,
    private _approvedAt: Date | null,
    private _rejectedById: string | null,
    private _rejectedAt: Date | null,
    private _rejectionReason: string | null,
    private _cancelledById: string | null,
    private _cancelledAt: Date | null,
    private _status: OverrideStatus,
    private _executedById: string | null,
    private _executedAt: Date | null,
    private _expiresAt: Date | null,
    private _version: number,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get action(): OverrideAction {
    return this._action;
  }
  get resourceType(): OverrideResourceType {
    return this._resourceType;
  }
  get resourceId(): string {
    return this._resourceId;
  }
  get reason(): string {
    return this._reason;
  }
  get evidenceUrl(): string | null {
    return this._evidenceUrl;
  }
  get requestedById(): string {
    return this._requestedById;
  }
  get status(): OverrideStatus {
    return this._status;
  }
  get version(): number {
    return this._version;
  }
  get expiresAt(): Date | null {
    return this._expiresAt;
  }
  get approvedById(): string | null {
    return this._approvedById;
  }
  get executedById(): string | null {
    return this._executedById;
  }

  pullEvents(): OverrideDomainEvent[] {
    const e = [...this._events];
    this._events = [];
    return e;
  }

  private touch(): void {
    this._version += 1;
    this._updatedAt = new Date();
  }

  private assertExpectedVersion(expected?: number): void {
    if (expected !== undefined && expected !== this._version) {
      throw new OverrideConcurrencyError(
        `Version mismatch: expected ${expected}, current ${this._version}`,
        {
          overrideId: this.id,
          expectedVersion: expected,
          currentVersion: this._version,
        },
      );
    }
  }

  /** Lazy expire: PENDING never auto-expires; APPROVED expires after TTL. */
  refreshExpiry(now: Date = new Date()): boolean {
    if (
      this._status === OverrideStatus.APPROVED &&
      this._expiresAt &&
      now.getTime() > this._expiresAt.getTime()
    ) {
      this._status = OverrideStatus.EXPIRED;
      this.touch();
      this._events.push(
        overrideExpiredEvent(this.id, { previousStatus: "APPROVED" }),
      );
      return true;
    }
    return false;
  }

  static request(cmd: RequestOverrideCommand): OverrideRequest {
    const action = validateOverrideAction(String(cmd.action));
    const resourceType = validateOverrideResourceType(String(cmd.resourceType));
    validateActionResourcePair(action, resourceType);
    const resourceId = validateResourceId(cmd.resourceId);
    const reason = validateOverrideReason(cmd.reason);
    const requestedById = validateActorId(cmd.requestedById, "requestedById");
    const evidenceUrl = optionalEvidenceUrl(cmd.evidenceUrl);
    const organizationId = (cmd.organizationId ?? "org_001").trim() || "org_001";
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const now = new Date();
    const agg = new OverrideRequest(
      id,
      organizationId,
      action,
      resourceType,
      resourceId,
      reason,
      evidenceUrl,
      requestedById,
      now,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      OverrideStatus.PENDING,
      null,
      null,
      null,
      0,
      now,
      now,
    );
    agg._events.push(
      overrideRequestedEvent(id, {
        action,
        resourceType,
        resourceId,
        requestedById,
      }),
    );
    return agg;
  }

  approve(cmd: ApproveOverrideCommand, now: Date = new Date()): void {
    this.refreshExpiry(now);
    this.assertExpectedVersion(cmd.expectedVersion);
    if (this._status !== OverrideStatus.PENDING) {
      throw new OverrideStateError(
        `Cannot approve override in status ${this._status}`,
        { overrideId: this.id, status: this._status },
      );
    }
    const approvedById = validateActorId(cmd.approvedById, "approvedById");
    if (approvedById === this._requestedById) {
      throw new OverrideSoDError(
        "Approver must be different from requester (segregation of duties)",
        {
          overrideId: this.id,
          requestedById: this._requestedById,
          approvedById,
        },
      );
    }
    this._approvedById = approvedById;
    this._approvedAt = now;
    this._status = OverrideStatus.APPROVED;
    this._expiresAt = new Date(
      now.getTime() + OVERRIDE_TTL_HOURS * 60 * 60 * 1000,
    );
    this.touch();
    this._events.push(
      overrideApprovedEvent(this.id, {
        approvedById,
        expiresAt: this._expiresAt.toISOString(),
      }),
    );
  }

  reject(cmd: RejectOverrideCommand, now: Date = new Date()): void {
    this.refreshExpiry(now);
    this.assertExpectedVersion(cmd.expectedVersion);
    if (this._status !== OverrideStatus.PENDING) {
      throw new OverrideStateError(
        `Cannot reject override in status ${this._status}`,
        { overrideId: this.id, status: this._status },
      );
    }
    const rejectedById = validateActorId(cmd.rejectedById, "rejectedById");
    const rejectionReason = validateOverrideReason(cmd.reason);
    this._rejectedById = rejectedById;
    this._rejectedAt = now;
    this._rejectionReason = rejectionReason;
    this._status = OverrideStatus.REJECTED;
    this.touch();
    this._events.push(
      overrideRejectedEvent(this.id, { rejectedById, rejectionReason }),
    );
  }

  cancel(cmd: CancelOverrideCommand, now: Date = new Date()): void {
    this.refreshExpiry(now);
    this.assertExpectedVersion(cmd.expectedVersion);
    if (this._status !== OverrideStatus.PENDING) {
      throw new OverrideStateError(
        `Cannot cancel override in status ${this._status}`,
        { overrideId: this.id, status: this._status },
      );
    }
    const cancelledById = validateActorId(cmd.cancelledById, "cancelledById");
    if (cancelledById !== this._requestedById) {
      throw new OverrideValidationError(
        "Only the requester can cancel a pending override",
        {
          overrideId: this.id,
          requestedById: this._requestedById,
          cancelledById,
        },
      );
    }
    this._cancelledById = cancelledById;
    this._cancelledAt = now;
    this._status = OverrideStatus.CANCELLED;
    this.touch();
    this._events.push(overrideCancelledEvent(this.id, { cancelledById }));
  }

  /**
   * Marks EXECUTED. Caller must perform the business action in the same TX
   * after this returns (or before persist).
   */
  markExecuted(cmd: ExecuteOverrideCommand, now: Date = new Date()): void {
    this.refreshExpiry(now);
    this.assertExpectedVersion(cmd.expectedVersion);
    if (this._status === OverrideStatus.EXPIRED) {
      throw new OverrideExpiredError("Override has expired", {
        overrideId: this.id,
        expiresAt: this._expiresAt?.toISOString() ?? null,
      });
    }
    if (this._status === OverrideStatus.EXECUTED) {
      return; // idempotent
    }
    if (this._status !== OverrideStatus.APPROVED) {
      throw new OverrideStateError(
        `Cannot execute override in status ${this._status}`,
        { overrideId: this.id, status: this._status },
      );
    }
    if (
      this._expiresAt &&
      now.getTime() > this._expiresAt.getTime()
    ) {
      this._status = OverrideStatus.EXPIRED;
      this.touch();
      this._events.push(overrideExpiredEvent(this.id));
      throw new OverrideExpiredError("Override has expired", {
        overrideId: this.id,
        expiresAt: this._expiresAt.toISOString(),
      });
    }
    const executedById = validateActorId(cmd.executedById, "executedById");
    this._executedById = executedById;
    this._executedAt = now;
    this._status = OverrideStatus.EXECUTED;
    this.touch();
    this._events.push(
      overrideExecutedEvent(this.id, {
        executedById,
        action: this._action,
        resourceType: this._resourceType,
        resourceId: this._resourceId,
      }),
    );
  }

  toSnapshot(): OverrideRequestSnapshot {
    return {
      id: this.id,
      organizationId: this.organizationId,
      action: this._action,
      resourceType: this._resourceType,
      resourceId: this._resourceId,
      reason: this._reason,
      evidenceUrl: this._evidenceUrl,
      requestedById: this._requestedById,
      requestedAt: this._requestedAt.toISOString(),
      approvedById: this._approvedById,
      approvedAt: this._approvedAt?.toISOString() ?? null,
      rejectedById: this._rejectedById,
      rejectedAt: this._rejectedAt?.toISOString() ?? null,
      rejectionReason: this._rejectionReason,
      cancelledById: this._cancelledById,
      cancelledAt: this._cancelledAt?.toISOString() ?? null,
      status: this._status,
      executedById: this._executedById,
      executedAt: this._executedAt?.toISOString() ?? null,
      expiresAt: this._expiresAt?.toISOString() ?? null,
      version: this._version,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(snapshot: OverrideRequestSnapshot): OverrideRequest {
    return new OverrideRequest(
      createEntityId(snapshot.id),
      snapshot.organizationId,
      snapshot.action as OverrideAction,
      snapshot.resourceType as OverrideResourceType,
      snapshot.resourceId,
      snapshot.reason,
      snapshot.evidenceUrl,
      snapshot.requestedById,
      new Date(snapshot.requestedAt),
      snapshot.approvedById,
      snapshot.approvedAt ? new Date(snapshot.approvedAt) : null,
      snapshot.rejectedById,
      snapshot.rejectedAt ? new Date(snapshot.rejectedAt) : null,
      snapshot.rejectionReason,
      snapshot.cancelledById,
      snapshot.cancelledAt ? new Date(snapshot.cancelledAt) : null,
      snapshot.status as OverrideStatus,
      snapshot.executedById,
      snapshot.executedAt ? new Date(snapshot.executedAt) : null,
      snapshot.expiresAt ? new Date(snapshot.expiresAt) : null,
      snapshot.version,
      new Date(snapshot.createdAt),
      new Date(snapshot.updatedAt),
    );
  }
}
