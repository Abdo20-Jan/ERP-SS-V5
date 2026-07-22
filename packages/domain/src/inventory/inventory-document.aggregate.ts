import { InventoryDocumentValidationError } from "../common/errors";
import {
  createEntityId,
  generateEntityId,
  type EntityId,
} from "../common/entity-id";
import type {
  ArchiveInventoryDocumentCommand,
  RestoreInventoryDocumentCommand,
  UploadInventoryDocumentCommand,
} from "./inventory-document.commands";
import {
  type InventoryDocumentDomainEvent,
  inventoryDocumentArchivedEvent,
  inventoryDocumentRestoredEvent,
  inventoryDocumentUploadedEvent,
} from "./inventory-document.events";
import type {
  InventoryDocumentClassification,
  InventoryDocumentType,
} from "./inventory-document.enums";
import {
  validateDocumentActorId,
  validateClassification,
  validateDocumentOwner,
  validateDocumentType,
  validateFileMeta,
  validateRetentionDays,
} from "./inventory-document.validator";

export interface InventoryDocumentSnapshot {
  id: string;
  organizationId: string;
  warehouseId: string | null;
  locationId: string | null;
  documentType: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  sha256Hash: string;
  storagePath: string;
  version: number;
  previousVersionId: string | null;
  classification: string | null;
  retentionDays: number | null;
  description: string | null;
  tags: string[];
  uploadedById: string;
  uploadedAt: string;
  isArchived: boolean;
  archivedAt: string | null;
  archivedById: string | null;
  createdAt: string;
  updatedAt: string;
}

export class InventoryDocument {
  private _events: InventoryDocumentDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly organizationId: string,
    private _warehouseId: string | null,
    private _locationId: string | null,
    private _documentType: InventoryDocumentType,
    private _fileName: string,
    private _fileSize: number,
    private _mimeType: string,
    private _sha256Hash: string,
    private _storagePath: string,
    private _version: number,
    private _previousVersionId: string | null,
    private _classification: InventoryDocumentClassification | null,
    private _retentionDays: number | null,
    private _description: string | null,
    private _tags: string[],
    private _uploadedById: string,
    private _uploadedAt: Date,
    private _isArchived: boolean,
    private _archivedAt: Date | null,
    private _archivedById: string | null,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get warehouseId(): string | null { return this._warehouseId; }
  get locationId(): string | null { return this._locationId; }
  get documentType(): InventoryDocumentType { return this._documentType; }
  get sha256Hash(): string { return this._sha256Hash; }
  get version(): number { return this._version; }
  get isArchived(): boolean { return this._isArchived; }
  get storagePath(): string { return this._storagePath; }
  get previousVersionId(): string | null { return this._previousVersionId; }

  pullEvents(): InventoryDocumentDomainEvent[] {
    const e = [...this._events];
    this._events = [];
    return e;
  }

  static upload(cmd: UploadInventoryDocumentCommand): InventoryDocument {
    const owner = validateDocumentOwner(cmd.warehouseId, cmd.locationId);
    const documentType = validateDocumentType(String(cmd.documentType));
    const file = validateFileMeta(
      cmd.fileName,
      cmd.fileSize,
      cmd.mimeType,
      cmd.sha256Hash,
    );
    const classification = validateClassification(cmd.classification);
    const retentionDays = validateRetentionDays(cmd.retentionDays);
    const uploadedById = validateDocumentActorId(cmd.uploadedById, "uploadedById");
    const storagePath = cmd.storagePath?.trim() ?? "";
    if (!storagePath) {
      throw new InventoryDocumentValidationError("storagePath is required");
    }
    const organizationId =
      (cmd.organizationId ?? "org_001").trim() || "org_001";
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const now = new Date();
    const version = cmd.version ?? 1;
    if (!Number.isInteger(version) || version < 1) {
      throw new InventoryDocumentValidationError("version must be >= 1");
    }
    const doc = new InventoryDocument(
      id,
      organizationId,
      owner.warehouseId,
      owner.locationId,
      documentType,
      file.fileName,
      cmd.fileSize,
      file.mimeType,
      file.sha256Hash,
      storagePath,
      version,
      cmd.previousVersionId ?? null,
      classification,
      retentionDays,
      cmd.description?.trim() || null,
      [...(cmd.tags ?? [])],
      uploadedById,
      now,
      false,
      null,
      null,
      now,
      now,
    );
    doc._events.push(
      inventoryDocumentUploadedEvent(id, {
        warehouseId: owner.warehouseId,
        locationId: owner.locationId,
        documentType,
        version,
        sha256Hash: file.sha256Hash,
        fileSize: cmd.fileSize,
        uploadedById,
      }),
    );
    return doc;
  }

  archive(cmd: ArchiveInventoryDocumentCommand): void {
    if (this._isArchived) return;
    const archivedById = validateDocumentActorId(cmd.archivedById, "archivedById");
    this._isArchived = true;
    this._archivedAt = new Date();
    this._archivedById = archivedById;
    this._updatedAt = new Date();
    this._events.push(
      inventoryDocumentArchivedEvent(this.id, { archivedById }),
    );
  }

  restore(cmd: RestoreInventoryDocumentCommand): void {
    if (!this._isArchived) return;
    const restoredById = validateDocumentActorId(cmd.restoredById, "restoredById");
    this._isArchived = false;
    this._archivedAt = null;
    this._archivedById = null;
    this._updatedAt = new Date();
    this._events.push(
      inventoryDocumentRestoredEvent(this.id, { restoredById }),
    );
  }

  toSnapshot(): InventoryDocumentSnapshot {
    return {
      id: this.id,
      organizationId: this.organizationId,
      warehouseId: this._warehouseId,
      locationId: this._locationId,
      documentType: this._documentType,
      fileName: this._fileName,
      fileSize: this._fileSize,
      mimeType: this._mimeType,
      sha256Hash: this._sha256Hash,
      storagePath: this._storagePath,
      version: this._version,
      previousVersionId: this._previousVersionId,
      classification: this._classification,
      retentionDays: this._retentionDays,
      description: this._description,
      tags: [...this._tags],
      uploadedById: this._uploadedById,
      uploadedAt: this._uploadedAt.toISOString(),
      isArchived: this._isArchived,
      archivedAt: this._archivedAt?.toISOString() ?? null,
      archivedById: this._archivedById,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(s: InventoryDocumentSnapshot): InventoryDocument {
    return new InventoryDocument(
      createEntityId(s.id),
      s.organizationId,
      s.warehouseId,
      s.locationId,
      s.documentType as InventoryDocumentType,
      s.fileName,
      s.fileSize,
      s.mimeType,
      s.sha256Hash,
      s.storagePath,
      s.version,
      s.previousVersionId,
      s.classification as InventoryDocumentClassification | null,
      s.retentionDays,
      s.description,
      [...s.tags],
      s.uploadedById,
      new Date(s.uploadedAt),
      s.isArchived,
      s.archivedAt ? new Date(s.archivedAt) : null,
      s.archivedById,
      new Date(s.createdAt),
      new Date(s.updatedAt),
    );
  }
}
