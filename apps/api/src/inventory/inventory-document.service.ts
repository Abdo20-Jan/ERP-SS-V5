import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import {
  AppError,
  type InventoryDocumentDto,
  type InventoryDocumentListDto,
  type UploadInventoryDocumentDto,
  ValidationError,
} from "@sunset/contracts";
import {
  DomainError,
  FILE_STORAGE_PORT,
  type FileStoragePort,
  INVENTORY_DOCUMENT_REPOSITORY,
  InventoryDocument,
  type InventoryDocumentRepository,
  sha256OfBuffer,
  verifySignedPath,
  WAREHOUSE_LOCATION_REPOSITORY,
  WAREHOUSE_REPOSITORY,
  type WarehouseLocationRepository,
  type WarehouseRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

@Injectable()
export class InventoryDocumentService {
  private readonly logger = createLogger({ name: "api.inventory.document" });

  constructor(
    @Inject(INVENTORY_DOCUMENT_REPOSITORY)
    private readonly documentRepository: InventoryDocumentRepository,
    @Inject(FILE_STORAGE_PORT)
    private readonly storage: FileStoragePort,
    @Inject(WAREHOUSE_REPOSITORY)
    private readonly warehouseRepository: WarehouseRepository,
    @Inject(WAREHOUSE_LOCATION_REPOSITORY)
    private readonly locationRepository: WarehouseLocationRepository,
  ) {}

  async upload(dto: UploadInventoryDocumentDto, userId: string): Promise<InventoryDocumentDto> {
    try {
      if (!dto.fileBase64?.trim()) {
        throw new ValidationError("fileBase64 is required", { fileBase64: ["required"] });
      }
      const buffer = Buffer.from(dto.fileBase64, "base64");
      if (!buffer.length) {
        throw new ValidationError("fileBase64 is empty or invalid", { fileBase64: ["invalid"] });
      }
      const hash = sha256OfBuffer(buffer);
      const warehouseId = dto.warehouseId ?? null;
      const locationId = dto.locationId ?? null;
      await this.assertOwners(warehouseId, locationId);

      const existing = await this.documentRepository.findByHashAndOwner(
        hash,
        dto.documentType,
        warehouseId,
        locationId,
      );
      if (existing) {
        const snap = existing.toSnapshot();
        const dl = await this.storage.getDownloadUrl(existing.storagePath);
        return {
          ...snap,
          downloadUrl: dl.url,
          downloadUrlExpiresAt: dl.expiresAt,
          idempotent: true,
        } as InventoryDocumentDto;
      }

      const latest = await this.documentRepository.findLatestVersion(
        dto.documentType,
        warehouseId,
        locationId,
      );
      const nextVersion = latest ? latest.version + 1 : 1;
      const previousVersionId = latest?.id ?? null;

      const saved = await this.storage.save({
        buffer,
        fileName: dto.fileName,
        mimeType: dto.mimeType,
        organizationId: dto.organizationId ?? "org_001",
        warehouseId,
        locationId,
        documentType: dto.documentType,
        sha256Hash: hash,
      });

      const doc = InventoryDocument.upload({
        organizationId: dto.organizationId,
        warehouseId,
        locationId,
        documentType: dto.documentType,
        fileName: dto.fileName,
        fileSize: buffer.byteLength,
        mimeType: dto.mimeType,
        sha256Hash: saved.sha256Hash,
        storagePath: saved.storagePath,
        classification: dto.classification,
        retentionDays: dto.retentionDays,
        description: dto.description,
        tags: dto.tags,
        uploadedById: userId,
        version: nextVersion,
        previousVersionId,
      });

      const snap = doc.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.documentRepository.save(doc, tx);
        await tx.auditLog.create({
          data: {
            userId,
            action: "inventory.document.uploaded",
            entityType: "inventory_document",
            entityId: doc.id,
            after: snap as object,
            metadata: { version: nextVersion, sha256Hash: hash },
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      doc.pullEvents();
      this.logger.info(
        { action: "DOCUMENT_UPLOADED", documentId: doc.id, version: nextVersion },
        "Inventory document uploaded",
      );
      const dl = await this.storage.getDownloadUrl(doc.storagePath);
      return {
        ...snap,
        downloadUrl: dl.url,
        downloadUrlExpiresAt: dl.expiresAt,
        idempotent: false,
      } as InventoryDocumentDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async list(query: {
    warehouseId?: string;
    locationId?: string;
    documentType?: string;
    isArchived?: boolean;
    page?: number;
    limit?: number;
  }): Promise<InventoryDocumentListDto> {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const result = await this.documentRepository.findAll(
      {
        warehouseId: query.warehouseId,
        locationId: query.locationId,
        documentType: query.documentType,
        isArchived: query.isArchived,
      },
      page,
      limit,
    );
    return {
      data: result.data.map((d) => d.toSnapshot() as InventoryDocumentDto),
      total: result.total,
      page,
      limit,
    };
  }

  async getById(id: string): Promise<InventoryDocumentDto> {
    const doc = await this.requireDoc(id);
    const snap = doc.toSnapshot();
    const dl = await this.storage.getDownloadUrl(doc.storagePath);
    return {
      ...snap,
      downloadUrl: dl.url,
      downloadUrlExpiresAt: dl.expiresAt,
    } as InventoryDocumentDto;
  }

  async versions(id: string): Promise<InventoryDocumentDto[]> {
    const doc = await this.requireDoc(id);
    const list = await this.documentRepository.findVersions(
      doc.documentType,
      doc.warehouseId,
      doc.locationId,
    );
    return list.map((d) => d.toSnapshot() as InventoryDocumentDto);
  }

  async archive(id: string, userId: string): Promise<InventoryDocumentDto> {
    try {
      const doc = await this.requireDoc(id);
      const before = doc.toSnapshot();
      doc.archive({ documentId: id, archivedById: userId });
      const after = doc.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.documentRepository.save(doc, tx);
        await tx.auditLog.create({
          data: {
            userId,
            action: "inventory.document.archived",
            entityType: "inventory_document",
            entityId: doc.id,
            before: before as object,
            after: after as object,
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      doc.pullEvents();
      return after as InventoryDocumentDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async restore(id: string, userId: string): Promise<InventoryDocumentDto> {
    try {
      const doc = await this.requireDoc(id);
      const before = doc.toSnapshot();
      doc.restore({ documentId: id, restoredById: userId });
      const after = doc.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.documentRepository.save(doc, tx);
        await tx.auditLog.create({
          data: {
            userId,
            action: "inventory.document.restored",
            entityType: "inventory_document",
            entityId: doc.id,
            before: before as object,
            after: after as object,
            correlationId: getCorrelationId() ?? null,
          },
        });
      });
      doc.pullEvents();
      return after as InventoryDocumentDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async readSignedFile(path: string, exp: number, sig: string): Promise<{ buffer: Buffer; fileName: string }> {
    if (!verifySignedPath(path, exp, sig)) {
      throw new AppError("Download link expired or invalid", "DOWNLOAD_LINK_INVALID", 403);
    }
    const buffer = await this.storage.read(path);
    const fileName = path.split("/").pop() ?? "file";
    return { buffer, fileName };
  }

  private async assertOwners(
    warehouseId: string | null,
    locationId: string | null,
  ): Promise<void> {
    if (warehouseId) {
      const w = await this.warehouseRepository.findById(warehouseId);
      if (!w) throw new NotFoundException(`Warehouse not found: ${warehouseId}`);
      if (!w.isActive) {
        throw new ValidationError("Warehouse is inactive", { warehouseId: ["inactive"] });
      }
    }
    if (locationId) {
      const l = await this.locationRepository.findById(locationId);
      if (!l) throw new NotFoundException(`Location not found: ${locationId}`);
      if (!l.isActive) {
        throw new ValidationError("Location is inactive", { locationId: ["inactive"] });
      }
    }
  }

  private async requireDoc(id: string): Promise<InventoryDocument> {
    const doc = await this.documentRepository.findById(id);
    if (!doc) throw new NotFoundException(`Document not found: ${id}`);
    return doc;
  }

  private rethrow(err: unknown): never {
    if (err instanceof NotFoundException || err instanceof AppError) throw err;
    if (err instanceof DomainError) {
      if (err.code === "FILE_TOO_LARGE" || err.code === "MIME_NOT_ALLOWED") {
        throw new AppError(err.message, err.code, 422);
      }
      if (err.code === "VALIDATION_ERROR") {
        throw new ValidationError(err.message, { domain: [err.code] });
      }
      throw new AppError(err.message, err.code, 400);
    }
    throw err;
  }
}
