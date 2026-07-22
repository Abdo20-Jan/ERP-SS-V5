import {
  InventoryTaskConcurrencyError,
  InventoryTaskStateError,
  InventoryTaskValidationError,
} from "../common/errors";
import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import type {
  AssignInventoryTaskCommand,
  BlockInventoryTaskCommand,
  CancelInventoryTaskCommand,
  CompleteInventoryTaskCommand,
  CreateInventoryTaskCommand,
  EscalateInventoryTaskCommand,
  StartInventoryTaskCommand,
  UnblockInventoryTaskCommand,
  WaitDependencyInventoryTaskCommand,
} from "./inventory-task.commands";
import {
  type InventoryTaskDomainEvent,
  inventoryTaskAssignedEvent,
  inventoryTaskBlockedEvent,
  inventoryTaskCancelledEvent,
  inventoryTaskCompletedEvent,
  inventoryTaskCreatedEvent,
  inventoryTaskEscalatedEvent,
  inventoryTaskStartedEvent,
  inventoryTaskUnblockedEvent,
  inventoryTaskWaitingDependencyEvent,
} from "./inventory-task.events";
import {
  INVENTORY_TASK_TERMINAL_STATUSES,
  InventoryTaskPriority,
  InventoryTaskSourceType,
  InventoryTaskStatus,
} from "./inventory-task.enums";
import {
  optionalDescription,
  optionalReason,
  parseOptionalDueAt,
  validateDependencyType,
  validateOptionalSlaMinutes,
  validateOptionalUuid,
  validateReason,
  validateSourcePair,
  validateTaskPriority,
  validateTaskSourceType,
  validateTaskTitle,
  validateTaskType,
  validateUnblockTarget,
} from "./inventory-task.validator";

export interface InventoryTaskSnapshot {
  id: string;
  organizationId: string;
  type: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  ownerUserId: string | null;
  ownerRole: string | null;
  dueAt: string | null;
  slaMinutes: number | null;
  sourceType: string;
  sourceId: string | null;
  warehouseId: string | null;
  locationId: string | null;
  blockedReason: string | null;
  dependencyType: string | null;
  dependencyId: string | null;
  completedAt: string | null;
  cancelledAt: string | null;
  cancelReason: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
}

const TRANSITIONS: Record<InventoryTaskStatus, ReadonlySet<InventoryTaskStatus>> = {
  [InventoryTaskStatus.OPEN]: new Set([
    InventoryTaskStatus.IN_PROGRESS,
    InventoryTaskStatus.BLOCKED,
    InventoryTaskStatus.WAITING_DEPENDENCY,
    InventoryTaskStatus.ESCALATED,
    InventoryTaskStatus.CANCELLED,
    InventoryTaskStatus.DONE,
  ]),
  [InventoryTaskStatus.IN_PROGRESS]: new Set([
    InventoryTaskStatus.BLOCKED,
    InventoryTaskStatus.WAITING_DEPENDENCY,
    InventoryTaskStatus.ESCALATED,
    InventoryTaskStatus.DONE,
    InventoryTaskStatus.CANCELLED,
  ]),
  [InventoryTaskStatus.BLOCKED]: new Set([
    InventoryTaskStatus.IN_PROGRESS,
    InventoryTaskStatus.OPEN,
    InventoryTaskStatus.CANCELLED,
  ]),
  [InventoryTaskStatus.WAITING_DEPENDENCY]: new Set([
    InventoryTaskStatus.IN_PROGRESS,
    InventoryTaskStatus.OPEN,
    InventoryTaskStatus.CANCELLED,
  ]),
  [InventoryTaskStatus.ESCALATED]: new Set([
    InventoryTaskStatus.IN_PROGRESS,
    InventoryTaskStatus.DONE,
    InventoryTaskStatus.CANCELLED,
  ]),
  [InventoryTaskStatus.DONE]: new Set(),
  [InventoryTaskStatus.CANCELLED]: new Set(),
};

const ASSIGNABLE = new Set<InventoryTaskStatus>([
  InventoryTaskStatus.OPEN,
  InventoryTaskStatus.IN_PROGRESS,
  InventoryTaskStatus.BLOCKED,
  InventoryTaskStatus.ESCALATED,
  InventoryTaskStatus.WAITING_DEPENDENCY,
]);

export class InventoryTask {
  private _events: InventoryTaskDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly organizationId: string,
    private _type: string,
    private _title: string,
    private _description: string | null,
    private _status: InventoryTaskStatus,
    private _priority: InventoryTaskPriority,
    private _ownerUserId: string | null,
    private _ownerRole: string | null,
    private _dueAt: Date | null,
    private _slaMinutes: number | null,
    private _sourceType: InventoryTaskSourceType,
    private _sourceId: string | null,
    private _warehouseId: string | null,
    private _locationId: string | null,
    private _blockedReason: string | null,
    private _dependencyType: string | null,
    private _dependencyId: string | null,
    private _completedAt: Date | null,
    private _cancelledAt: Date | null,
    private _cancelReason: string | null,
    private _version: number,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get type(): string {
    return this._type;
  }
  get title(): string {
    return this._title;
  }
  get description(): string | null {
    return this._description;
  }
  get status(): InventoryTaskStatus {
    return this._status;
  }
  get priority(): InventoryTaskPriority {
    return this._priority;
  }
  get ownerUserId(): string | null {
    return this._ownerUserId;
  }
  get ownerRole(): string | null {
    return this._ownerRole;
  }
  get dueAt(): Date | null {
    return this._dueAt;
  }
  get slaMinutes(): number | null {
    return this._slaMinutes;
  }
  get sourceType(): InventoryTaskSourceType {
    return this._sourceType;
  }
  get sourceId(): string | null {
    return this._sourceId;
  }
  get warehouseId(): string | null {
    return this._warehouseId;
  }
  get locationId(): string | null {
    return this._locationId;
  }
  get blockedReason(): string | null {
    return this._blockedReason;
  }
  get dependencyType(): string | null {
    return this._dependencyType;
  }
  get dependencyId(): string | null {
    return this._dependencyId;
  }
  get completedAt(): Date | null {
    return this._completedAt;
  }
  get cancelledAt(): Date | null {
    return this._cancelledAt;
  }
  get cancelReason(): string | null {
    return this._cancelReason;
  }
  get version(): number {
    return this._version;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }

  pullEvents(): InventoryTaskDomainEvent[] {
    const e = [...this._events];
    this._events = [];
    return e;
  }

  isOverdue(now: Date = new Date()): boolean {
    if (INVENTORY_TASK_TERMINAL_STATUSES.has(this._status)) return false;
    if (!this._dueAt) return false;
    return this._dueAt.getTime() < now.getTime();
  }

  private touch(now: Date): void {
    this._version += 1;
    this._updatedAt = now;
  }

  private assertExpectedVersion(expected?: number): void {
    if (expected !== undefined && expected !== this._version) {
      throw new InventoryTaskConcurrencyError(
        `Version mismatch: expected ${expected}, current ${this._version}`,
        {
          taskId: this.id,
          expectedVersion: expected,
          currentVersion: this._version,
        },
      );
    }
  }

  private assertTransition(to: InventoryTaskStatus): void {
    const allowed = TRANSITIONS[this._status];
    if (!allowed.has(to)) {
      throw new InventoryTaskStateError(
        `Cannot transition inventory task from ${this._status} to ${to}`,
        { taskId: this.id, from: this._status, to },
      );
    }
  }

  static create(cmd: CreateInventoryTaskCommand, now: Date = new Date()): InventoryTask {
    const type = validateTaskType(cmd.type);
    const title = validateTaskTitle(cmd.title);
    const description = optionalDescription(cmd.description);
    const priority = validateTaskPriority(cmd.priority as string | undefined);
    const sourceType = validateTaskSourceType(String(cmd.sourceType));
    const sourceId = validateOptionalUuid(cmd.sourceId, "sourceId");
    validateSourcePair(sourceType, sourceId);
    const warehouseId = validateOptionalUuid(cmd.warehouseId, "warehouseId");
    const locationId = validateOptionalUuid(cmd.locationId, "locationId");
    const ownerUserId = validateOptionalUuid(cmd.ownerUserId, "ownerUserId");
    const ownerRole =
      cmd.ownerRole == null || cmd.ownerRole.trim() === ""
        ? null
        : cmd.ownerRole.trim();
    const dueAt = parseOptionalDueAt(cmd.dueAt ?? null);
    const slaMinutes = validateOptionalSlaMinutes(cmd.slaMinutes);
    const organizationId = (cmd.organizationId ?? "org_001").trim() || "org_001";
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();

    const agg = new InventoryTask(
      id,
      organizationId,
      type,
      title,
      description,
      InventoryTaskStatus.OPEN,
      priority,
      ownerUserId,
      ownerRole,
      dueAt,
      slaMinutes,
      sourceType,
      sourceId,
      warehouseId,
      locationId,
      null,
      null,
      null,
      null,
      null,
      null,
      1,
      now,
      now,
    );
    agg._events.push(
      inventoryTaskCreatedEvent(
        id,
        {
          type,
          title,
          priority,
          sourceType,
          sourceId,
          ownerUserId,
          createdById: cmd.createdById ?? null,
        },
        now,
      ),
    );
    return agg;
  }

  assign(cmd: AssignInventoryTaskCommand, now: Date = new Date()): void {
    this.assertExpectedVersion(cmd.expectedVersion);
    if (!ASSIGNABLE.has(this._status)) {
      throw new InventoryTaskStateError(
        `Cannot assign inventory task in status ${this._status}`,
        { taskId: this.id, status: this._status },
      );
    }
    const ownerUserId = validateOptionalUuid(cmd.ownerUserId, "ownerUserId");
    const ownerRole =
      cmd.ownerRole == null || String(cmd.ownerRole).trim() === ""
        ? null
        : String(cmd.ownerRole).trim();
    if (!ownerUserId && !ownerRole) {
      throw new InventoryTaskValidationError(
        "assign requires ownerUserId or ownerRole",
      );
    }
    this._ownerUserId = ownerUserId;
    if (ownerRole !== null) this._ownerRole = ownerRole;
    this.touch(now);
    this._events.push(
      inventoryTaskAssignedEvent(
        this.id,
        {
          ownerUserId: this._ownerUserId,
          ownerRole: this._ownerRole,
          actorId: cmd.actorId,
        },
        now,
      ),
    );
  }

  start(cmd: StartInventoryTaskCommand, now: Date = new Date()): void {
    this.assertExpectedVersion(cmd.expectedVersion);
    this.assertTransition(InventoryTaskStatus.IN_PROGRESS);
    this._status = InventoryTaskStatus.IN_PROGRESS;
    this._blockedReason = null;
    this.touch(now);
    this._events.push(
      inventoryTaskStartedEvent(this.id, { actorId: cmd.actorId }, now),
    );
  }

  block(cmd: BlockInventoryTaskCommand, now: Date = new Date()): void {
    this.assertExpectedVersion(cmd.expectedVersion);
    this.assertTransition(InventoryTaskStatus.BLOCKED);
    const reason = validateReason(cmd.reason, "blockedReason");
    this._status = InventoryTaskStatus.BLOCKED;
    this._blockedReason = reason;
    this.touch(now);
    this._events.push(
      inventoryTaskBlockedEvent(
        this.id,
        { reason, actorId: cmd.actorId },
        now,
      ),
    );
  }

  unblock(cmd: UnblockInventoryTaskCommand, now: Date = new Date()): void {
    this.assertExpectedVersion(cmd.expectedVersion);
    if (this._status !== InventoryTaskStatus.BLOCKED) {
      throw new InventoryTaskStateError(
        `Cannot unblock inventory task in status ${this._status}`,
        { taskId: this.id, status: this._status },
      );
    }
    const target = validateUnblockTarget(cmd.targetStatus as string | undefined);
    this.assertTransition(target);
    this._status = target;
    this._blockedReason = null;
    this.touch(now);
    this._events.push(
      inventoryTaskUnblockedEvent(
        this.id,
        { targetStatus: target, actorId: cmd.actorId },
        now,
      ),
    );
  }

  waitForDependency(
    cmd: WaitDependencyInventoryTaskCommand,
    now: Date = new Date(),
  ): void {
    this.assertExpectedVersion(cmd.expectedVersion);
    this.assertTransition(InventoryTaskStatus.WAITING_DEPENDENCY);
    const dependencyType = validateDependencyType(cmd.dependencyType);
    const dependencyId = validateOptionalUuid(cmd.dependencyId, "dependencyId");
    this._status = InventoryTaskStatus.WAITING_DEPENDENCY;
    this._dependencyType = dependencyType;
    this._dependencyId = dependencyId;
    this.touch(now);
    this._events.push(
      inventoryTaskWaitingDependencyEvent(
        this.id,
        { dependencyType, dependencyId, actorId: cmd.actorId },
        now,
      ),
    );
  }

  /** Resume from WAITING_DEPENDENCY to OPEN or IN_PROGRESS. */
  resumeFromDependency(
    targetStatus: InventoryTaskStatus.OPEN | InventoryTaskStatus.IN_PROGRESS,
    actorId: string,
    expectedVersion?: number,
    now: Date = new Date(),
  ): void {
    this.assertExpectedVersion(expectedVersion);
    if (this._status !== InventoryTaskStatus.WAITING_DEPENDENCY) {
      throw new InventoryTaskStateError(
        `Cannot resume dependency wait in status ${this._status}`,
        { taskId: this.id, status: this._status },
      );
    }
    this.assertTransition(targetStatus);
    this._status = targetStatus;
    this.touch(now);
    this._events.push(
      inventoryTaskUnblockedEvent(
        this.id,
        {
          targetStatus,
          actorId,
          from: InventoryTaskStatus.WAITING_DEPENDENCY,
        },
        now,
      ),
    );
  }

  escalate(cmd: EscalateInventoryTaskCommand, now: Date = new Date()): void {
    this.assertExpectedVersion(cmd.expectedVersion);
    this.assertTransition(InventoryTaskStatus.ESCALATED);
    const reason = validateReason(cmd.reason, "escalateReason");
    const ownerUserId = validateOptionalUuid(cmd.ownerUserId, "ownerUserId");
    this._status = InventoryTaskStatus.ESCALATED;
    this._blockedReason = reason;
    if (ownerUserId) this._ownerUserId = ownerUserId;
    this.touch(now);
    this._events.push(
      inventoryTaskEscalatedEvent(
        this.id,
        { reason, ownerUserId: this._ownerUserId, actorId: cmd.actorId },
        now,
      ),
    );
  }

  complete(cmd: CompleteInventoryTaskCommand, now: Date = new Date()): void {
    this.assertExpectedVersion(cmd.expectedVersion);
    this.assertTransition(InventoryTaskStatus.DONE);
    this._status = InventoryTaskStatus.DONE;
    this._completedAt = now;
    this._blockedReason = null;
    this.touch(now);
    this._events.push(
      inventoryTaskCompletedEvent(this.id, { actorId: cmd.actorId }, now),
    );
  }

  cancel(cmd: CancelInventoryTaskCommand, now: Date = new Date()): void {
    this.assertExpectedVersion(cmd.expectedVersion);
    this.assertTransition(InventoryTaskStatus.CANCELLED);
    const cancelReason = optionalReason(cmd.reason);
    this._status = InventoryTaskStatus.CANCELLED;
    this._cancelledAt = now;
    this._cancelReason = cancelReason;
    this.touch(now);
    this._events.push(
      inventoryTaskCancelledEvent(
        this.id,
        { reason: cancelReason, actorId: cmd.actorId },
        now,
      ),
    );
  }

  toSnapshot(): InventoryTaskSnapshot {
    return {
      id: this.id,
      organizationId: this.organizationId,
      type: this._type,
      title: this._title,
      description: this._description,
      status: this._status,
      priority: this._priority,
      ownerUserId: this._ownerUserId,
      ownerRole: this._ownerRole,
      dueAt: this._dueAt?.toISOString() ?? null,
      slaMinutes: this._slaMinutes,
      sourceType: this._sourceType,
      sourceId: this._sourceId,
      warehouseId: this._warehouseId,
      locationId: this._locationId,
      blockedReason: this._blockedReason,
      dependencyType: this._dependencyType,
      dependencyId: this._dependencyId,
      completedAt: this._completedAt?.toISOString() ?? null,
      cancelledAt: this._cancelledAt?.toISOString() ?? null,
      cancelReason: this._cancelReason,
      version: this._version,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(snapshot: InventoryTaskSnapshot): InventoryTask {
    return new InventoryTask(
      createEntityId(snapshot.id),
      snapshot.organizationId,
      snapshot.type,
      snapshot.title,
      snapshot.description,
      snapshot.status as InventoryTaskStatus,
      snapshot.priority as InventoryTaskPriority,
      snapshot.ownerUserId,
      snapshot.ownerRole,
      snapshot.dueAt ? new Date(snapshot.dueAt) : null,
      snapshot.slaMinutes,
      snapshot.sourceType as InventoryTaskSourceType,
      snapshot.sourceId,
      snapshot.warehouseId,
      snapshot.locationId,
      snapshot.blockedReason,
      snapshot.dependencyType,
      snapshot.dependencyId,
      snapshot.completedAt ? new Date(snapshot.completedAt) : null,
      snapshot.cancelledAt ? new Date(snapshot.cancelledAt) : null,
      snapshot.cancelReason,
      snapshot.version,
      new Date(snapshot.createdAt),
      new Date(snapshot.updatedAt),
    );
  }
}
