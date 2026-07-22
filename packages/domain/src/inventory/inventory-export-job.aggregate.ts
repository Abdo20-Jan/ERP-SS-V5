import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import { ExportJobStatus, ExportKind } from "./inventory-import-export.enums";
import { validateKind } from "./inventory-import-export.validator";
import type { CreateExportJobCommand, CancelExportJobCommand } from "./inventory-import-export.commands";
import { type ImportExportDomainEvent, exportJobCreatedEvent, exportJobCompletedEvent, exportJobCancelledEvent } from "./inventory-import-export.events";

export interface ExportJobSnapshot {
  id: string; organizationId: string; kind: string; status: string; format: string;
  filters: Record<string,unknown> | null; fileName: string; fileHash: string | null; fileStorageKey: string | null;
  rowCount: number; requestedByUserId: string; completedAt: string | null; failedAt: string | null;
  cancelledAt: string | null; correlationId: string; version: number; createdAt: string; updatedAt: string;
}

export class InventoryExportJob {
  private _events: ImportExportDomainEvent[] = [];
  private constructor(
    readonly id: EntityId, readonly organizationId: string, readonly kind: ExportKind,
    private _status: ExportJobStatus, readonly format: string, readonly filters: Record<string,unknown> | null,
    private _fileName: string, private _fileHash: string | null, private _fileStorageKey: string | null,
    private _rowCount: number, readonly requestedByUserId: string, private _completedAt: Date | null,
    private _failedAt: Date | null, private _cancelledAt: Date | null, readonly correlationId: string,
    private _version: number, readonly createdAt: Date, private _updatedAt: Date,
  ) {}
  get status(): ExportJobStatus { return this._status }
  get version(): number { return this._version }
  get fileHash(): string | null { return this._fileHash }
  get fileStorageKey(): string | null { return this._fileStorageKey }
  get rowCount(): number { return this._rowCount }

  pullEvents(): ImportExportDomainEvent[] { const e = [...this._events]; this._events = []; return e }

  static create(cmd: CreateExportJobCommand): InventoryExportJob {
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const kind = validateKind(cmd.kind, Object.values(ExportKind)) as ExportKind;
    const now = new Date();
    const job = new InventoryExportJob(id, cmd.organizationId || "org_001", kind, ExportJobStatus.PENDING,
      cmd.format, cmd.filters || null, "", null, null, 0, cmd.requestedByUserId, null, null, null,
      cmd.correlationId, 1, now, now);
    job._events.push(exportJobCreatedEvent(id, { kind, format: cmd.format }));
    return job;
  }

  complete(rowCount: number, fileHash: string, fileStorageKey: string): void {
    if (this._status !== ExportJobStatus.PENDING && this._status !== ExportJobStatus.EXPORTING)
      throw new Error(`Cannot complete job in status ${this._status}`);
    this._status = ExportJobStatus.COMPLETED;
    this._rowCount = rowCount; this._fileHash = fileHash; this._fileStorageKey = fileStorageKey;
    this._completedAt = new Date(); this._version++; this._updatedAt = new Date();
    this._events.push(exportJobCompletedEvent(this.id, { rowCount, fileHash }));
  }

  cancel(cmd: CancelExportJobCommand): void {
    if (this._status === ExportJobStatus.COMPLETED) throw new Error("Cannot cancel completed job");
    if (cmd.expectedVersion !== this._version) throw new Error("Version conflict");
    this._status = ExportJobStatus.CANCELLED; this._cancelledAt = new Date(); this._version++; this._updatedAt = new Date();
    this._events.push(exportJobCancelledEvent(this.id, { reason: cmd.reason }));
  }

  toSnapshot(): ExportJobSnapshot { return {
    id: this.id, organizationId: this.organizationId, kind: this.kind, status: this._status, format: this.format,
    filters: this.filters, fileName: this._fileName, fileHash: this._fileHash, fileStorageKey: this._fileStorageKey,
    rowCount: this._rowCount, requestedByUserId: this.requestedByUserId,
    completedAt: this._completedAt?.toISOString() ?? null, failedAt: this._failedAt?.toISOString() ?? null,
    cancelledAt: this._cancelledAt?.toISOString() ?? null, correlationId: this.correlationId,
    version: this._version, createdAt: this.createdAt.toISOString(), updatedAt: this._updatedAt.toISOString(),
  }}

  static rehydrate(s: ExportJobSnapshot): InventoryExportJob {
    return new InventoryExportJob(createEntityId(s.id), s.organizationId, s.kind as ExportKind, s.status as ExportJobStatus,
      s.format, s.filters, s.fileName, s.fileHash, s.fileStorageKey, s.rowCount, s.requestedByUserId,
      s.completedAt ? new Date(s.completedAt) : null, s.failedAt ? new Date(s.failedAt) : null,
      s.cancelledAt ? new Date(s.cancelledAt) : null, s.correlationId, s.version,
      new Date(s.createdAt), new Date(s.updatedAt));
  }
}
