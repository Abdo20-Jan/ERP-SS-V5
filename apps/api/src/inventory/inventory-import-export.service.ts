import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { AppError, type ImportJobDto, type ImportJobListDto, type ExportJobDto, type ExportJobListDto } from "@sunset/contracts";
import { DomainError, InventoryImportJob, InventoryExportJob, ImportJobStatus, ExportJobStatus, IMPORT_EXPORT_REPOSITORY, type InventoryImportExportRepository, parseCSV, sanitizeCSVCell } from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";
import type { CreateImportDto, CreateExportDto } from "./dto/inventory-import-export.dto";

@Injectable()
export class InventoryImportExportService {
  private readonly log = createLogger({ name: "api.inventory.import-export" });
  constructor(@Inject(IMPORT_EXPORT_REPOSITORY) private readonly repo: InventoryImportExportRepository) {}

  async createImport(dto: CreateImportDto, userId: string): Promise<ImportJobDto> {
    try {
      if (dto.idempotencyKey) { const ex = await this.repo.findImportJobByIdempotencyKey(dto.idempotencyKey); if (ex) return ex as ImportJobDto; }
      const job = InventoryImportJob.create({ kind: dto.kind, fileName: dto.fileName, fileMimeType: dto.fileMimeType, fileSize: dto.fileSize, fileHash: dto.fileHash, idempotencyKey: dto.idempotencyKey, correlationId: dto.correlationId || getCorrelationId() || "unknown", requestedByUserId: userId });
      const snap = job.toSnapshot();
      await prisma.$transaction(async (tx) => { await this.repo.saveImportJob(job, tx); await tx.auditLog.create({ data: { userId, action: "inventory.import.created", entityType: "inventory_import_job", entityId: job.id, after: snap as object, correlationId: getCorrelationId() || null } }); });
      job.pullEvents(); return snap as ImportJobDto;
    } catch (err) { this.rethrow(err); }
  }

  async listImports(query: any): Promise<ImportJobListDto> {
    const p = query.page ?? 1; const l = query.limit ?? 20;
    const r = await this.repo.listImportJobs({ organizationId: query.organizationId, kind: query.kind, status: query.status, requestedByUserId: query.requestedByUserId }, p, l);
    return { data: r.data.map(j => j.toSnapshot() as ImportJobDto), total: r.total, page: p, limit: l };
  }

  async getImport(id: string): Promise<ImportJobDto> { const j = await this.requireImport(id); return j.toSnapshot() as ImportJobDto; }

  async importErrors(id: string) { const j = await this.requireImport(id); return j.errors; }

  async applyImport(id: string, userId: string, expectedVersion: number): Promise<ImportJobDto> {
    try {
      const j = await this.requireImport(id);
      const before = j.toSnapshot();
      j.markReadyToApply({ jobId: id, actorId: userId, expectedVersion });
      j.apply({ jobId: id, actorId: userId, expectedVersion: expectedVersion + 1 });
      const after = j.toSnapshot();
      await prisma.$transaction(async (tx) => { await this.repo.saveImportJob(j, tx); await tx.auditLog.create({ data: { userId, action: "inventory.import.applied", entityType: "inventory_import_job", entityId: id, before: before as object, after: after as object, correlationId: getCorrelationId() || null } }); });
      j.pullEvents(); return after as ImportJobDto;
    } catch (err) { this.rethrow(err); }
  }

  async cancelImport(id: string, userId: string, expectedVersion: number, reason: string): Promise<ImportJobDto> {
    try {
      const j = await this.requireImport(id); const before = j.toSnapshot();
      j.cancel({ jobId: id, actorId: userId, reason, expectedVersion }); const after = j.toSnapshot();
      await prisma.$transaction(async (tx) => { await this.repo.saveImportJob(j, tx); await tx.auditLog.create({ data: { userId, action: "inventory.import.cancelled", entityType: "inventory_import_job", entityId: id, before: before as object, after: after as object, correlationId: getCorrelationId() || null } }); });
      j.pullEvents(); return after as ImportJobDto;
    } catch (err) { this.rethrow(err); }
  }

  async createExport(dto: CreateExportDto, userId: string): Promise<ExportJobDto> {
    try {
      const job = InventoryExportJob.create({ kind: dto.kind, format: dto.format, filters: dto.filters, correlationId: dto.correlationId || getCorrelationId() || "unknown", requestedByUserId: userId });
      const snap = job.toSnapshot();
      await prisma.$transaction(async (tx) => { await this.repo.saveExportJob(job, tx); await tx.auditLog.create({ data: { userId, action: "inventory.export.created", entityType: "inventory_export_job", entityId: job.id, after: snap as object, correlationId: getCorrelationId() || null } }); });
      job.pullEvents(); return snap as ExportJobDto;
    } catch (err) { this.rethrow(err); }
  }

  async listExports(query: any): Promise<ExportJobListDto> {
    const p = query.page ?? 1; const l = query.limit ?? 20;
    const r = await this.repo.listExportJobs({ organizationId: query.organizationId, kind: query.kind, status: query.status, requestedByUserId: query.requestedByUserId }, p, l);
    return { data: r.data.map(j => j.toSnapshot() as ExportJobDto), total: r.total, page: p, limit: l };
  }

  async getExport(id: string): Promise<ExportJobDto> { const j = await this.requireExport(id); return j.toSnapshot() as ExportJobDto; }

  async cancelExport(id: string, userId: string, expectedVersion: number, reason: string): Promise<ExportJobDto> {
    try {
      const j = await this.requireExport(id); const before = j.toSnapshot();
      j.cancel({ jobId: id, actorId: userId, reason, expectedVersion }); const after = j.toSnapshot();
      await prisma.$transaction(async (tx) => { await this.repo.saveExportJob(j, tx); await tx.auditLog.create({ data: { userId, action: "inventory.export.cancelled", entityType: "inventory_export_job", entityId: id, before: before as object, after: after as object, correlationId: getCorrelationId() || null } }); });
      j.pullEvents(); return after as ExportJobDto;
    } catch (err) { this.rethrow(err); }
  }

  private async requireImport(id: string): Promise<InventoryImportJob> { const j = await this.repo.findImportJobById(id); if (!j) throw new NotFoundException(`Import job not found: ${id}`); return j; }
  private async requireExport(id: string): Promise<InventoryExportJob> { const j = await this.repo.findExportJobById(id); if (!j) throw new NotFoundException(`Export job not found: ${id}`); return j; }
  private rethrow(err: unknown): never { if (err instanceof NotFoundException || err instanceof AppError) throw err; if (err instanceof DomainError) throw new AppError(err.message, err.code, 400); throw err; }
}
