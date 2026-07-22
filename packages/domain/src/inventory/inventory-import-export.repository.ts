import type { InventoryImportJob, ImportJobSnapshot } from "./inventory-import-job.aggregate"; import type { InventoryExportJob, ExportJobSnapshot } from "./inventory-export-job.aggregate";
export interface ImportJobListFilters { organizationId?: string; kind?: string; status?: string; requestedByUserId?: string }
export interface ExportJobListFilters { organizationId?: string; kind?: string; status?: string; requestedByUserId?: string }
export interface ImportJobListResult { data: InventoryImportJob[]; total: number }
export interface ExportJobListResult { data: InventoryExportJob[]; total: number }
export type ImportExportDbClient = unknown;
export interface InventoryImportExportRepository {
  saveImportJob(job: InventoryImportJob, db?: ImportExportDbClient): Promise<void>;
  findImportJobById(id: string): Promise<InventoryImportJob | null>;
  findImportJobByIdempotencyKey(key: string): Promise<ImportJobSnapshot | null>;
  listImportJobs(filters?: ImportJobListFilters, page?: number, limit?: number): Promise<ImportJobListResult>;
  saveImportErrors(jobId: string, errors: { rowNumber: number; field?: string; code: string; message: string; severity?: string }[], db?: ImportExportDbClient): Promise<void>;
  getImportErrors(jobId: string): Promise<ImportJobSnapshot["errors"]>;
  saveExportJob(job: InventoryExportJob, db?: ImportExportDbClient): Promise<void>;
  findExportJobById(id: string): Promise<InventoryExportJob | null>;
  listExportJobs(filters?: ExportJobListFilters, page?: number, limit?: number): Promise<ExportJobListResult>;
}
export const IMPORT_EXPORT_REPOSITORY = Symbol("ImportExportRepository");
