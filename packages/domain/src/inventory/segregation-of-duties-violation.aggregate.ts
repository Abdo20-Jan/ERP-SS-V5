import {
  SoDConcurrencyError,
  SoDStateError,
  SoDValidationError,
} from "../common/errors";
import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import type { EvaluateSoDCommand, ResolveSoDViolationCommand } from "./segregation-of-duties.commands";
import {
  type SoDDomainEvent,
  soDViolationDetectedEvent,
  soDViolationResolvedEvent,
} from "./segregation-of-duties.events";
import { SoDEvaluationResult, SoDViolationStatus } from "./segregation-of-duties.enums";
import { validateActorId, validateResourceId, validateSoDReason } from "./segregation-of-duties.validator";
import type { SoDRuleSnapshot } from "./segregation-of-duties-rule.aggregate";

export interface SoDViolationSnapshot {
  id: string;
  organizationId: string;
  ruleId: string;
  ruleCode: string;
  actorUserId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  result: string;
  status: string;
  resolution: string | null;
  resolvedByUserId: string | null;
  resolvedAt: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export class SoDViolation {
  private _events: SoDDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly organizationId: string,
    readonly ruleId: string,
    readonly ruleCode: string,
    readonly actorUserId: string,
    readonly action: string,
    readonly resourceType: string,
    readonly resourceId: string,
    private _result: SoDEvaluationResult,
    private _status: SoDViolationStatus,
    private _resolution: string | null,
    private _resolvedByUserId: string | null,
    private _resolvedAt: Date | null,
    private _version: number,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get result(): SoDEvaluationResult { return this._result; }
  get status(): SoDViolationStatus { return this._status; }
  get resolution(): string | null { return this._resolution; }
  get resolvedByUserId(): string | null { return this._resolvedByUserId; }
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

  static detect(
    cmd: EvaluateSoDCommand,
    rule: SoDRuleSnapshot,
    result: SoDEvaluationResult,
  ): SoDViolation {
    if (result === SoDEvaluationResult.ALLOWED) {
      throw new SoDValidationError("Cannot create violation for ALLOWED evaluation result");
    }
    const actorUserId = validateActorId(cmd.actorUserId, "actorUserId");
    const resourceId = validateResourceId(cmd.resourceId);
    const organizationId = (cmd.organizationId ?? "org_001").trim() || "org_001";
    const id = generateEntityId();
    const now = new Date();
    const agg = new SoDViolation(
      id,
      organizationId,
      rule.id,
      rule.code,
      actorUserId,
      cmd.action,
      cmd.resourceType,
      resourceId,
      result,
      SoDViolationStatus.OPEN,
      null,
      null,
      null,
      0,
      now,
      now,
    );
    agg._events.push(
      soDViolationDetectedEvent(id, {
        ruleId: rule.id,
        ruleCode: rule.code,
        actorUserId,
        action: cmd.action,
        resourceType: cmd.resourceType,
        resourceId,
        result,
      }),
    );
    return agg;
  }

  resolve(cmd: ResolveSoDViolationCommand): void {
    if (this._status !== SoDViolationStatus.OPEN) {
      throw new SoDStateError(`Cannot resolve SoD violation in status ${this._status}`, {
        violationId: this.id,
        status: this._status,
      });
    }
    const resolvedByUserId = validateActorId(cmd.resolvedByUserId, "resolvedByUserId");
    const resolution = validateSoDReason(cmd.resolution, "resolution");
    this._resolvedByUserId = resolvedByUserId;
    this._resolution = resolution;
    this._resolvedAt = new Date();
    this._status = SoDViolationStatus.RESOLVED;
    this.touch();
    this._events.push(
      soDViolationResolvedEvent(this.id, { resolvedByUserId, resolution }),
    );
  }

  toSnapshot(): SoDViolationSnapshot {
    return {
      id: this.id,
      organizationId: this.organizationId,
      ruleId: this.ruleId,
      ruleCode: this.ruleCode,
      actorUserId: this.actorUserId,
      action: this.action,
      resourceType: this.resourceType,
      resourceId: this.resourceId,
      result: this._result,
      status: this._status,
      resolution: this._resolution,
      resolvedByUserId: this._resolvedByUserId,
      resolvedAt: this._resolvedAt?.toISOString() ?? null,
      version: this._version,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(snapshot: SoDViolationSnapshot): SoDViolation {
    return new SoDViolation(
      createEntityId(snapshot.id),
      snapshot.organizationId,
      snapshot.ruleId,
      snapshot.ruleCode,
      snapshot.actorUserId,
      snapshot.action,
      snapshot.resourceType,
      snapshot.resourceId,
      snapshot.result as SoDEvaluationResult,
      snapshot.status as SoDViolationStatus,
      snapshot.resolution,
      snapshot.resolvedByUserId,
      snapshot.resolvedAt ? new Date(snapshot.resolvedAt) : null,
      snapshot.version,
      new Date(snapshot.createdAt),
      new Date(snapshot.updatedAt),
    );
  }
}
