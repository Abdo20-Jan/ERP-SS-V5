export interface CreateImportJobCommand { id?: string; organizationId?: string; kind: string; fileName: string; fileMimeType: string; fileSize: number; fileHash: string; idempotencyKey?: string; correlationId: string; requestedByUserId: string }
export interface ValidateImportJobCommand { jobId: string; actorId: string; expectedVersion: number }
export interface ApplyImportJobCommand { jobId: string; actorId: string; expectedVersion: number }
export interface CancelImportJobCommand { jobId: string; actorId: string; reason: string; expectedVersion: number }
export interface CreateExportJobCommand { id?: string; organizationId?: string; kind: string; format: string; filters?: Record<string,unknown>; correlationId: string; requestedByUserId: string }
export interface CancelExportJobCommand { jobId: string; actorId: string; reason: string; expectedVersion: number }
