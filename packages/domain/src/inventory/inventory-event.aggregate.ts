import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import { InventoryEventStatus } from "./inventory-event.enums";
import type {
  RecordInventoryEventCommand,
  MarkInventoryEventReadyCommand,
  MarkInventoryEventPublishedCommand,
  MarkInventoryEventConsumedCommand,
  MarkInventoryEventFailedCommand,
  RequestInventoryEventReplayCommand,
  MoveInventoryEventToDeadLetterCommand,
  CancelInventoryEventCommand,
} from "./inventory-event.commands";
import {
  type InventoryEventDomainEvent,
  inventoryEventRecordedEvent,
  inventoryEventStatusChangedEvent,
} from "./inventory-event.events";
import { DomainError } from "../common/errors/domain-error";

export class InventoryEventStateError extends DomainError {
  constructor(message: string) {
    super(message, "INVENTORY_EVENT_INVALID_STATE");
  }
}

export interface InventoryEventSnapshot {
  id: string;
  organizationId: string;
  eventType: string;
  eventVersion: number;
  aggregateType: string;
  aggregateId: string;
  producer: string;
  payload: Record<string, unknown>;
  status: string;
  correlationId: string;
  idempotencyKey: string | null;
  occurredAt: string;
  availableAt: string | null;
  publishedAt: string | null;
  consumedAt: string | null;
  failedAt: string | null;
  retryCount: number;
  lastErrorCode: string | null;
  lastErrorMessage: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export class InventoryEventOutbox {
  private _events: InventoryEventDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly organizationId: string,
    readonly eventType: string,
    readonly eventVersion: number,
    readonly aggregateType: string,
    readonly aggregateId: string,
    readonly producer: string,
    readonly payload: Record<string, unknown>,
    private _status: InventoryEventStatus,
    readonly correlationId: string,
    readonly idempotencyKey: string | null,
    readonly occurredAt: Date,
    private _availableAt: Date | null,
    private _publishedAt: Date | null,
    private _consumedAt: Date | null,
    private _failedAt: Date | null,
    private _retryCount: number,
    private _lastErrorCode: string | null,
    private _lastErrorMessage: string | null,
    private _version: number,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get status(): InventoryEventStatus { return this._status; }
  get version(): number { return this._version; }
  get retryCount(): number { return this._retryCount; }

  pullEvents(): InventoryEventDomainEvent[] {
    const e = [...this._events];
    this._events = [];
    return e;
  }

  private touch(): void {
    this._version += 1;
    this._updatedAt = new Date();
  }

  static record(cmd: RecordInventoryEventCommand): InventoryEventOutbox {
    const id = generateEntityId();
    const now = new Date();
    const agg = new InventoryEventOutbox(
      id,
      cmd.organizationId,
      cmd.eventType,
      cmd.eventVersion,
      cmd.aggregateType,
      cmd.aggregateId,
      cmd.producer,
      cmd.payload,
      InventoryEventStatus.PENDING,
      cmd.correlationId,
      cmd.idempotencyKey ?? null,
      now,
      null, null, null, null,
      0, null, null,
      1, now, now,
    );
    agg._events.push(inventoryEventRecordedEvent(id, { eventType: cmd.eventType, aggregateId: cmd.aggregateId }));
    return agg;
  }

  markReady(cmd: MarkInventoryEventReadyCommand): void {
    if (this._status !== InventoryEventStatus.PENDING && this._status !== InventoryEventStatus.REPLAY_REQUESTED) {
      throw new InventoryEventStateError(`Cannot mark ready from status ${this._status}`);
    }
    this._status = InventoryEventStatus.READY;
    this._availableAt = new Date();
    this.touch();
    this._events.push(inventoryEventStatusChangedEvent(this.id, this._status, { actorId: cmd.actorId }));
  }

  markPublished(cmd: MarkInventoryEventPublishedCommand): void {
    if (this._status !== InventoryEventStatus.READY) {
      throw new InventoryEventStateError(`Cannot mark published from status ${this._status}`);
    }
    this._status = InventoryEventStatus.PUBLISHED;
    this._publishedAt = new Date();
    this.touch();
    this._events.push(inventoryEventStatusChangedEvent(this.id, this._status, { actorId: cmd.actorId }));
  }

  markConsumed(cmd: MarkInventoryEventConsumedCommand): void {
    if (this._status !== InventoryEventStatus.PUBLISHED) {
      throw new InventoryEventStateError(`Cannot mark consumed from status ${this._status}`);
    }
    this._status = InventoryEventStatus.CONSUMED;
    this._consumedAt = new Date();
    this.touch();
    this._events.push(inventoryEventStatusChangedEvent(this.id, this._status, { actorId: cmd.actorId }));
  }

  markFailed(cmd: MarkInventoryEventFailedCommand): void {
    this._status = InventoryEventStatus.FAILED;
    this._failedAt = new Date();
    this._lastErrorCode = cmd.errorCode;
    this._lastErrorMessage = cmd.errorMessage;
    this.touch();
    this._events.push(inventoryEventStatusChangedEvent(this.id, this._status, { actorId: cmd.actorId, errorCode: cmd.errorCode }));
  }

  requestReplay(cmd: RequestInventoryEventReplayCommand): void {
    if (this._status !== InventoryEventStatus.FAILED && this._status !== InventoryEventStatus.DEAD_LETTER && this._status !== InventoryEventStatus.CONSUMED) {
      throw new InventoryEventStateError(`Cannot request replay from status ${this._status}`);
    }
    this._status = InventoryEventStatus.REPLAY_REQUESTED;
    this._retryCount += 1;
    this.touch();
    this._events.push(inventoryEventStatusChangedEvent(this.id, this._status, { actorId: cmd.actorId, reason: cmd.reason }));
  }

  moveToDeadLetter(cmd: MoveInventoryEventToDeadLetterCommand): void {
    if (this._status !== InventoryEventStatus.FAILED) {
      throw new InventoryEventStateError(`Cannot move to dead letter from status ${this._status}`);
    }
    this._status = InventoryEventStatus.DEAD_LETTER;
    this.touch();
    this._events.push(inventoryEventStatusChangedEvent(this.id, this._status, { actorId: cmd.actorId, reason: cmd.reason }));
  }

  cancel(cmd: CancelInventoryEventCommand): void {
    if (this._status === InventoryEventStatus.CONSUMED || this._status === InventoryEventStatus.PUBLISHED) {
      throw new InventoryEventStateError(`Cannot cancel from status ${this._status}`);
    }
    this._status = InventoryEventStatus.CANCELLED;
    this.touch();
    this._events.push(inventoryEventStatusChangedEvent(this.id, this._status, { actorId: cmd.actorId, reason: cmd.reason }));
  }

  toSnapshot(): InventoryEventSnapshot {
    return {
      id: this.id,
      organizationId: this.organizationId,
      eventType: this.eventType,
      eventVersion: this.eventVersion,
      aggregateType: this.aggregateType,
      aggregateId: this.aggregateId,
      producer: this.producer,
      payload: this.payload,
      status: this._status,
      correlationId: this.correlationId,
      idempotencyKey: this.idempotencyKey,
      occurredAt: this.occurredAt.toISOString(),
      availableAt: this._availableAt?.toISOString() ?? null,
      publishedAt: this._publishedAt?.toISOString() ?? null,
      consumedAt: this._consumedAt?.toISOString() ?? null,
      failedAt: this._failedAt?.toISOString() ?? null,
      retryCount: this._retryCount,
      lastErrorCode: this._lastErrorCode,
      lastErrorMessage: this._lastErrorMessage,
      version: this._version,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(snapshot: InventoryEventSnapshot): InventoryEventOutbox {
    return new InventoryEventOutbox(
      createEntityId(snapshot.id),
      snapshot.organizationId,
      snapshot.eventType,
      snapshot.eventVersion,
      snapshot.aggregateType,
      snapshot.aggregateId,
      snapshot.producer,
      snapshot.payload,
      snapshot.status as InventoryEventStatus,
      snapshot.correlationId,
      snapshot.idempotencyKey,
      new Date(snapshot.occurredAt),
      snapshot.availableAt ? new Date(snapshot.availableAt) : null,
      snapshot.publishedAt ? new Date(snapshot.publishedAt) : null,
      snapshot.consumedAt ? new Date(snapshot.consumedAt) : null,
      snapshot.failedAt ? new Date(snapshot.failedAt) : null,
      snapshot.retryCount,
      snapshot.lastErrorCode,
      snapshot.lastErrorMessage,
      snapshot.version,
      new Date(snapshot.createdAt),
      new Date(snapshot.updatedAt),
    );
  }
}
