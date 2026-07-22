import {
  SoDConcurrencyError,
  SoDStateError,
  SoDValidationError,
} from "../common/errors";
import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import type {
  CreateSoDRuleCommand,
  DeactivateSoDRuleCommand,
  UpdateSoDRuleCommand,
} from "./segregation-of-duties.commands";
import {
  type SoDDomainEvent,
  soDRuleCreatedEvent,
  soDRuleDeactivatedEvent,
  soDRuleUpdatedEvent,
} from "./segregation-of-duties.events";
import { SoDSeverity } from "./segregation-of-duties.enums";
import {
  optionalString,
  validateSoDAction,
  validateSoDCode,
  validateSoDName,
  validateSoDResourceType,
  validateSoDSeverity,
} from "./segregation-of-duties.validator";

export type SoDRuleStatus = "ACTIVE" | "INACTIVE";

export interface SoDRuleSnapshot {
  id: string;
  organizationId: string;
  code: string;
  name: string;
  description: string | null;
  scope: string | null;
  action: string;
  resourceType: string;
  incompatibleAction: string | null;
  incompatibleRole: string | null;
  incompatiblePermission: string | null;
  requiresIndependentApproval: boolean;
  severity: string;
  status: string;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export class SoDRule {
  private _events: SoDDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly organizationId: string,
    private _code: string,
    private _name: string,
    private _description: string | null,
    private _scope: string | null,
    private _action: string,
    private _resourceType: string,
    private _incompatibleAction: string | null,
    private _incompatibleRole: string | null,
    private _incompatiblePermission: string | null,
    private _requiresIndependentApproval: boolean,
    private _severity: SoDSeverity,
    private _status: SoDRuleStatus,
    private _version: number,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get code(): string { return this._code; }
  get name(): string { return this._name; }
  get description(): string | null { return this._description; }
  get scope(): string | null { return this._scope; }
  get action(): string { return this._action; }
  get resourceType(): string { return this._resourceType; }
  get incompatibleAction(): string | null { return this._incompatibleAction; }
  get incompatibleRole(): string | null { return this._incompatibleRole; }
  get incompatiblePermission(): string | null { return this._incompatiblePermission; }
  get requiresIndependentApproval(): boolean { return this._requiresIndependentApproval; }
  get severity(): SoDSeverity { return this._severity; }
  get status(): SoDRuleStatus { return this._status; }
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

  private assertExpectedVersion(expected?: number): void {
    if (expected !== undefined && expected !== this._version) {
      throw new SoDConcurrencyError(
        `Version mismatch: expected ${expected}, current ${this._version}`,
        { ruleId: this.id, expectedVersion: expected, currentVersion: this._version },
      );
    }
  }

  static create(cmd: CreateSoDRuleCommand): SoDRule {
    const code = validateSoDCode(cmd.code);
    const name = validateSoDName(cmd.name);
    const action = validateSoDAction(cmd.action);
    const resourceType = validateSoDResourceType(cmd.resourceType);
    const severity = validateSoDSeverity(cmd.severity as string) as SoDSeverity;
    const description = optionalString(cmd.description);
    const scope = optionalString(cmd.scope);
    const incompatibleAction = optionalString(cmd.incompatibleAction);
    const incompatibleRole = optionalString(cmd.incompatibleRole);
    const incompatiblePermission = optionalString(cmd.incompatiblePermission);
    if (!incompatibleAction && !incompatibleRole && !incompatiblePermission) {
      throw new SoDValidationError(
        "At least one of incompatibleAction, incompatibleRole or incompatiblePermission is required",
      );
    }
    const requiresIndependentApproval = cmd.requiresIndependentApproval ?? false;
    const organizationId = (cmd.organizationId ?? "org_001").trim() || "org_001";
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const now = new Date();
    const agg = new SoDRule(
      id,
      organizationId,
      code,
      name,
      description,
      scope,
      action,
      resourceType,
      incompatibleAction,
      incompatibleRole,
      incompatiblePermission,
      requiresIndependentApproval,
      severity,
      "ACTIVE",
      0,
      now,
      now,
    );
    agg._events.push(
      soDRuleCreatedEvent(id, {
        code,
        name,
        action,
        resourceType,
        severity,
        requiresIndependentApproval,
      }),
    );
    return agg;
  }

  update(cmd: UpdateSoDRuleCommand): void {
    this.assertExpectedVersion(cmd.expectedVersion);
    if (this._status !== "ACTIVE") {
      throw new SoDStateError(`Cannot update SoD rule in status ${this._status}`, {
        ruleId: this.id,
        status: this._status,
      });
    }
    const changes: Record<string, unknown> = {};
    if (cmd.name !== undefined) {
      this._name = cmd.name ? validateSoDName(cmd.name) : this._name;
      changes.name = this._name;
    }
    if (cmd.description !== undefined) {
      this._description = optionalString(cmd.description);
      changes.description = this._description;
    }
    if (cmd.scope !== undefined) {
      this._scope = optionalString(cmd.scope);
      changes.scope = this._scope;
    }
    if (cmd.action !== undefined && cmd.action !== null) {
      this._action = validateSoDAction(cmd.action);
      changes.action = this._action;
    }
    if (cmd.resourceType !== undefined && cmd.resourceType !== null) {
      this._resourceType = validateSoDResourceType(cmd.resourceType);
      changes.resourceType = this._resourceType;
    }
    if (cmd.incompatibleAction !== undefined) {
      this._incompatibleAction = optionalString(cmd.incompatibleAction);
      changes.incompatibleAction = this._incompatibleAction;
    }
    if (cmd.incompatibleRole !== undefined) {
      this._incompatibleRole = optionalString(cmd.incompatibleRole);
      changes.incompatibleRole = this._incompatibleRole;
    }
    if (cmd.incompatiblePermission !== undefined) {
      this._incompatiblePermission = optionalString(cmd.incompatiblePermission);
      changes.incompatiblePermission = this._incompatiblePermission;
    }
    if (cmd.requiresIndependentApproval !== undefined && cmd.requiresIndependentApproval !== null) {
      this._requiresIndependentApproval = cmd.requiresIndependentApproval;
      changes.requiresIndependentApproval = this._requiresIndependentApproval;
    }
    if (cmd.severity !== undefined && cmd.severity !== null) {
      this._severity = validateSoDSeverity(cmd.severity as string) as SoDSeverity;
      changes.severity = this._severity;
    }
    if (!this._incompatibleAction && !this._incompatibleRole && !this._incompatiblePermission) {
      throw new SoDValidationError(
        "At least one of incompatibleAction, incompatibleRole or incompatiblePermission is required",
      );
    }
    this.touch();
    this._events.push(soDRuleUpdatedEvent(this.id, changes));
  }

  deactivate(cmd: DeactivateSoDRuleCommand): void {
    this.assertExpectedVersion(cmd.expectedVersion);
    if (this._status !== "ACTIVE") {
      throw new SoDStateError(`Cannot deactivate SoD rule in status ${this._status}`, {
        ruleId: this.id,
        status: this._status,
      });
    }
    this._status = "INACTIVE";
    this.touch();
    this._events.push(soDRuleDeactivatedEvent(this.id, { previousStatus: "ACTIVE" }));
  }

  toSnapshot(): SoDRuleSnapshot {
    return {
      id: this.id,
      organizationId: this.organizationId,
      code: this._code,
      name: this._name,
      description: this._description,
      scope: this._scope,
      action: this._action,
      resourceType: this._resourceType,
      incompatibleAction: this._incompatibleAction,
      incompatibleRole: this._incompatibleRole,
      incompatiblePermission: this._incompatiblePermission,
      requiresIndependentApproval: this._requiresIndependentApproval,
      severity: this._severity,
      status: this._status,
      version: this._version,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(snapshot: SoDRuleSnapshot): SoDRule {
    return new SoDRule(
      createEntityId(snapshot.id),
      snapshot.organizationId,
      snapshot.code,
      snapshot.name,
      snapshot.description,
      snapshot.scope,
      snapshot.action,
      snapshot.resourceType,
      snapshot.incompatibleAction,
      snapshot.incompatibleRole,
      snapshot.incompatiblePermission,
      snapshot.requiresIndependentApproval,
      snapshot.severity as SoDSeverity,
      snapshot.status as SoDRuleStatus,
      snapshot.version,
      new Date(snapshot.createdAt),
      new Date(snapshot.updatedAt),
    );
  }
}
