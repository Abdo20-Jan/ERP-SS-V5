import {
  SoDApprovalNotAllowedError,
  SoDStateError,
  SoDValidationError,
} from "../common/errors";
import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import type {
  ApproveSoDExceptionCommand,
  RejectSoDExceptionCommand,
  RequestSoDExceptionCommand,
  RevokeSoDExceptionCommand,
} from "./segregation-of-duties.commands";
import {
  type SoDDomainEvent,
  soDExceptionApprovedEvent,
  soDExceptionExpiredEvent,
  soDExceptionRejectedEvent,
  soDExceptionRequestedEvent,
  soDExceptionRevokedEvent,
} from "./segregation-of-duties.events";
import { SoDExceptionStatus } from "./segregation-of-duties.enums";
import { validateActorId, validateSoDReason } from "./segregation-of-duties.validator";

export interface SoDExceptionSnapshot {
  id: string;
  organizationId: string;
  violationId: string;
  requestedByUserId: string;
  reason: string;
  expiresAt: string | null;
  status: string;
  approvedByUserId: string | null;
  approvedReason: string | null;
  approvedAt: string | null;
  rejectedByUserId: string | null;
  rejectedReason: string | null;
  rejectedAt: string | null;
  revokedByUserId: string | null;
  revokedReason: string | null;
  revokedAt: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export class SoDException {
  private _events: SoDDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly organizationId: string,
    readonly violationId: string,
    readonly requestedByUserId: string,
    readonly reason: string,
    readonly expiresAt: Date | null,
    private _status: SoDExceptionStatus,
    private _approvedByUserId: string | null,
    private _approvedReason: string | null,
    private _approvedAt: Date | null,
    private _rejectedByUserId: string | null,
    private _rejectedReason: string | null,
    private _rejectedAt: Date | null,
    private _revokedByUserId: string | null,
    private _revokedReason: string | null,
    private _revokedAt: Date | null,
    private _version: number,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get status(): SoDExceptionStatus { return this._status; }
  get version(): number { return this._version; }

  pullEvents(): SoDDomainEvent[] {
    const e = [...this._events];
    this._events = [];
    return e;
  }

  private touch(): void {
    this._version += 1;
    this._updatedAt = new Date();
  }

  static request(cmd: RequestSoDExceptionCommand, organizationId: string): SoDException {
    const requestedByUserId = validateActorId(cmd.requestedByUserId, "requestedByUserId");
    const reason = validateSoDReason(cmd.reason, "reason");
    const id = generateEntityId();
    const now = new Date();
    const expiresAt = cmd.expiresAt ? new Date(cmd.expiresAt) : null;
    
    const agg = new SoDException(
      id,
      organizationId,
      cmd.violationId,
      requestedByUserId,
      reason,
      expiresAt,
      SoDExceptionStatus.PENDING,
      null, null, null,
      null, null, null,
      null, null, null,
      0, now, now,
    );
    
    agg._events.push(
      soDExceptionRequestedEvent(id, {
        violationId: cmd.violationId,
        requestedByUserId,
        reason,
        expiresAt: expiresAt?.toISOString() ?? null,
      }),
    );
    return agg;
  }

  approve(cmd: ApproveSoDExceptionCommand): void {
    if (this._status !== SoDExceptionStatus.PENDING) {
      throw new SoDStateError(`Cannot approve exception in status ${this._status}`);
    }
    const approvedByUserId = validateActorId(cmd.approvedByUserId, "approvedByUserId");
    if (approvedByUserId === this.requestedByUserId) {
      throw new SoDApprovalNotAllowedError("Requester cannot approve their own exception");
    }
    const reason = validateSoDReason(cmd.reason, "reason");
    
    this._status = SoDExceptionStatus.APPROVED;
    this._approvedByUserId = approvedByUserId;
    this._approvedReason = reason;
    this._approvedAt = new Date();
    this.touch();
    
    this._events.push(
      soDExceptionApprovedEvent(this.id, { approvedByUserId, reason }),
    );
  }

  reject(cmd: RejectSoDExceptionCommand): void {
    if (this._status !== SoDExceptionStatus.PENDING) {
      throw new SoDStateError(`Cannot reject exception in status ${this._status}`);
    }
    const rejectedByUserId = validateActorId(cmd.rejectedByUserId, "rejectedByUserId");
    if (rejectedByUserId === this.requestedByUserId) {
      throw new SoDApprovalNotAllowedError("Requester cannot reject their own exception");
    }
    const reason = validateSoDReason(cmd.reason, "reason");
    
    this._status = SoDExceptionStatus.REJECTED;
    this._rejectedByUserId = rejectedByUserId;
    this._rejectedReason = reason;
    this._rejectedAt = new Date();
    this.touch();
    
    this._events.push(
      soDExceptionRejectedEvent(this.id, { rejectedByUserId, reason }),
    );
  }

  revoke(cmd: RevokeSoDExceptionCommand): void {
    if (this._status !== SoDExceptionStatus.APPROVED) {
      throw new SoDStateError(`Cannot revoke exception in status ${this._status}`);
    }
    const revokedByUserId = validateActorId(cmd.revokedByUserId, "revokedByUserId");
    const reason = validateSoDReason(cmd.reason, "reason");
    
    this._status = SoDExceptionStatus.REVOKED;
    this._revokedByUserId = revokedByUserId;
    this._revokedReason = reason;
    this._revokedAt = new Date();
    this.touch();
    
    this._events.push(
      soDExceptionRevokedEvent(this.id, { revokedByUserId, reason }),
    );
  }

  expire(now: Date = new Date()): void {
    if (this._status !== SoDExceptionStatus.APPROVED) return;
    if (!this.expiresAt || this.expiresAt.getTime() > now.getTime()) return;
    
    this._status = SoDExceptionStatus.EXPIRED;
    this.touch();
    this._events.push(soDExceptionExpiredEvent(this.id));
  }

  toSnapshot(): SoDExceptionSnapshot {
    return {
      id: this.id,
      organizationId: this.organizationId,
      violationId: this.violationId,
      requestedByUserId: this.requestedByUserId,
      reason: this.reason,
      expiresAt: this.expiresAt?.toISOString() ?? null,
      status: this._status,
      approvedByUserId: this._approvedByUserId,
      approvedReason: this._approvedReason,
      approvedAt: this._approvedAt?.toISOString() ?? null,
      rejectedByUserId: this._rejectedByUserId,
      rejectedReason: this._rejectedReason,
      rejectedAt: this._rejectedAt?.toISOString() ?? null,
      revokedByUserId: this._revokedByUserId,
      revokedReason: this._revokedReason,
      revokedAt: this._revokedAt?.toISOString() ?? null,
      version: this._version,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(snapshot: SoDExceptionSnapshot): SoDException {
    return new SoDException(
      createEntityId(snapshot.id),
      snapshot.organizationId,
      snapshot.violationId,
      snapshot.requestedByUserId,
      snapshot.reason,
      snapshot.expiresAt ? new Date(snapshot.expiresAt) : null,
      snapshot.status as SoDExceptionStatus,
      snapshot.approvedByUserId,
      snapshot.approvedReason,
      snapshot.approvedAt ? new Date(snapshot.approvedAt) : null,
      snapshot.rejectedByUserId,
      snapshot.rejectedReason,
      snapshot.rejectedAt ? new Date(snapshot.rejectedAt) : null,
      snapshot.revokedByUserId,
      snapshot.revokedReason,
      snapshot.revokedAt ? new Date(snapshot.revokedAt) : null,
      snapshot.version,
      new Date(snapshot.createdAt),
      new Date(snapshot.updatedAt),
    );
  }
}