export interface CreateImportDto { kind: string; fileName: string; fileMimeType: string; fileSize: number; fileHash: string; idempotencyKey?: string; correlationId?: string }
export interface CreateExportDto { kind: string; format: string; filters?: Record<string,unknown>; correlationId?: string }
