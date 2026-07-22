import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import { ImportJobStatus, ImportKind } from "./inventory-import-export.enums";
import { validateKind } from "./inventory-import-export.validator";
import type { CreateImportJobCommand, ValidateImportJobCommand, ApplyImportJobCommand, CancelImportJobCommand } from "./inventory-import-export.commands";
import { type ImportExportDomainEvent, importJobCreatedEvent, importJobValidatedEvent, importJobAppliedEvent, importJobCancelledEvent } from "./inventory-import-export.events";

export interface ImportJobErrorSnapshot { rowNumber: number; field: string | null; code: string; message: string; severity: string }
export interface ImportJobSnapshot {
  id: string; organizationId: string; kind: string; status: string; fileName: string; fileMimeType: string;
  fileSize: number; fileHash: string; fileStorageKey: string | null; totalRows: number; validRows: number;
  invalidRows: number; appliedRows: number; requestedByUserId: string; confirmedByUserId: string | null;
  startedAt: string | null; validatedAt: string | null; appliedAt: string | null; failedAt: string | null;
  cancelledAt: string | null; correlationId: string; idempotencyKey: string | null; errors: ImportJobErrorSnapshot[];
  version: number; createdAt: string; updatedAt: string;
}

export class InventoryImportJob {
  private _events: ImportExportDomainEvent[] = [];
  private _totalRows: number;
  private constructor(
    readonly id: EntityId, readonly organizationId: string, readonly kind: ImportKind,
    private _status: ImportJobStatus, readonly fileName: string, readonly fileMimeType: string,
    readonly fileSize: number, readonly fileHash: string, readonly fileStorageKey: string | null,
    totalRows: number, private _validRows: number, private _invalidRows: number,
    private _appliedRows: number, readonly requestedByUserId: string, private _confirmedByUserId: string | null,
    private _startedAt: Date | null, private _validatedAt: Date | null, private _appliedAt: Date | null,
    private _failedAt: Date | null, private _cancelledAt: Date | null, readonly correlationId: string,
    readonly idempotencyKey: string | null, private _errors: ImportJobErrorSnapshot[],
    private _version: number, readonly createdAt: Date, private _updatedAt: Date,
  ) { this._totalRows = totalRows; }
  get status(): ImportJobStatus { return this._status }
  get version(): number { return this._version }
  get errors(): ImportJobErrorSnapshot[] { return this._errors }
  get totalRows(): number { return this._totalRows }
  get validRows(): number { return this._validRows }
  get invalidRows(): number { return this._invalidRows }
  get appliedRows(): number { return this._appliedRows }
  get confirmedByUserId(): string | null { return this._confirmedByUserId }

  pullEvents(): ImportExportDomainEvent[] { const e = [...this._events]; this._events = []; return e }

  static create(cmd: CreateImportJobCommand): InventoryImportJob {
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const kind = validateKind(cmd.kind, Object.values(ImportKind)) as ImportKind;
    const now = new Date();
    const job = new InventoryImportJob(id, cmd.organizationId || "org_001", kind, ImportJobStatus.PENDING,
      cmd.fileName, cmd.fileMimeType, cmd.fileSize, cmd.fileHash, null, 0, 0, 0, 0, cmd.requestedByUserId,
      null, null, null, null, null, null, cmd.correlationId, cmd.idempotencyKey || null,
      [], 1, now, now);
    job._events.push(importJobCreatedEvent(id, { kind, fileName: cmd.fileName }));
    return job;
  }

  validate(cmd: ValidateImportJobCommand, totalRows: number, errors: ImportJobErrorSnapshot[]): void {
    if (this._status !== ImportJobStatus.PENDING && this._status !== ImportJobStatus.VALIDATING)
      throw new Error(`Cannot validate job in status ${this._status}`);
    if (cmd.expectedVersion !== this._version) throw new Error(`Version conflict`);
    this._status = ImportJobStatus.VALIDATED;
    this._totalRows = totalRows;
    this._validRows = totalRows - errors.length;
    this._invalidRows = errors.length;
    this._errors = errors;
    this._validatedAt = new Date();
    this._version++; this._updatedAt = new Date();
    this._events.push(importJobValidatedEvent(this.id, { validRows: this._validRows, invalidRows: this._invalidRows }));
  }

  markReadyToApply(cmd: { jobId: string; actorId: string; expectedVersion: number }): void {
    if (this._status !== ImportJobStatus.VALIDATED) throw new Error(`Cannot mark ready`);
    if (cmd.expectedVersion !== this._version) throw new Error("Version conflict");
    this._status = ImportJobStatus.READY_TO_APPLY;
    this._confirmedByUserId = cmd.actorId;
    this._version++; this._updatedAt = new Date();
  }

  apply(cmd: ApplyImportJobCommand): void {
    if (this._status !== ImportJobStatus.READY_TO_APPLY) throw new Error(`Cannot apply`);
    if (cmd.expectedVersion !== this._version) throw new Error("Version conflict");
    this._status = ImportJobStatus.APPLIED;
    this._appliedRows = this._validRows;
    this._appliedAt = new Date();
    this._version++; this._updatedAt = new Date();
    this._events.push(importJobAppliedEvent(this.id, { appliedRows: this._appliedRows }));
  }

  cancel(cmd: CancelImportJobCommand): void {
    if (this._status === ImportJobStatus.APPLIED) throw new Error("Cannot cancel applied job");
    if (cmd.expectedVersion !== this._version) throw new Error("Version conflict");
    this._status = ImportJobStatus.CANCELLED;
    this._cancelledAt = new Date();
    this._version++; this._updatedAt = new Date();
    this._events.push(importJobCancelledEvent(this.id, { reason: cmd.reason }));
  }

  toSnapshot(): ImportJobSnapshot { return {
    id: this.id, organizationId: this.organizationId, kind: this.kind, status: this._status,
    fileName: this.fileName, fileMimeType: this.fileMimeType, fileSize: this.fileSize, fileHash: this.fileHash,
    fileStorageKey: this.fileStorageKey, totalRows: this._totalRows, validRows: this._validRows,
    invalidRows: this._invalidRows, appliedRows: this._appliedRows, requestedByUserId: this.requestedByUserId,
    confirmedByUserId: this._confirmedByUserId, startedAt: this._startedAt?.toISOString() ?? null,
    validatedAt: this._validatedAt?.toISOString() ?? null, appliedAt: this._appliedAt?.toISOString() ?? null,
    failedAt: this._failedAt?.toISOString() ?? null, cancelledAt: this._cancelledAt?.toISOString() ?? null,
    correlationId: this.correlationId, idempotencyKey: this.idempotencyKey,
    errors: this._errors, version: this._version, createdAt: this.createdAt.toISOString(), updatedAt: this._updatedAt.toISOString(),
  }}

  static rehydrate(s: ImportJobSnapshot): InventoryImportJob {
    return new InventoryImportJob(createEntityId(s.id), s.organizationId, s.kind as ImportKind, s.status as ImportJobStatus,
      s.fileName, s.fileMimeType, s.fileSize, s.fileHash, s.fileStorageKey, s.totalRows, s.validRows, s.invalidRows,
      s.appliedRows, s.requestedByUserId, s.confirmedByUserId, s.startedAt ? new Date(s.startedAt) : null,
      s.validatedAt ? new Date(s.validatedAt) : null, s.appliedAt ? new Date(s.appliedAt) : null,
      s.failedAt ? new Date(s.failedAt) : null, s.cancelledAt ? new Date(s.cancelledAt) : null,
      s.correlationId, s.idempotencyKey, s.errors, s.version, new Date(s.createdAt), new Date(s.updatedAt));
  }
}
