export interface FileStorageSaveInput {
  buffer: Buffer;
  fileName: string;
  mimeType: string;
  organizationId: string;
  warehouseId?: string | null;
  locationId?: string | null;
  documentType: string;
  sha256Hash: string;
}

export interface FileStorageSaveResult {
  storagePath: string;
  sha256Hash: string;
  byteLength: number;
}

export interface FileStoragePort {
  save(input: FileStorageSaveInput): Promise<FileStorageSaveResult>;
  /** Returns absolute/local path or signed URL for download */
  getDownloadUrl(
    storagePath: string,
    expiresInSeconds?: number,
  ): Promise<{ url: string; expiresAt: string }>;
  read(storagePath: string): Promise<Buffer>;
}

export const FILE_STORAGE_PORT = Symbol("FileStoragePort");
