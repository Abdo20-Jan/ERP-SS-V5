import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import {
  createReadStream,
  createWriteStream,
  existsSync,
  mkdirSync,
  readFileSync,
} from "node:fs";
import { dirname, extname, join } from "node:path";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";
import {
  DOWNLOAD_URL_TTL_SECONDS,
} from "./inventory-document.enums";
import type {
  FileStoragePort,
  FileStorageSaveInput,
  FileStorageSaveResult,
} from "./file-storage.port";

function defaultRoot(): string {
  return (
    process.env.INVENTORY_DOCUMENT_STORAGE_ROOT ??
    join(process.cwd(), "data", "inventory", "documents")
  );
}

function signingSecret(): string {
  return (
    process.env.INVENTORY_DOCUMENT_SIGNING_SECRET ??
    "dev-inventory-document-signing-secret"
  );
}

export class LocalFileStorageAdapter implements FileStoragePort {
  constructor(private readonly rootDir: string = defaultRoot()) {}

  async save(input: FileStorageSaveInput): Promise<FileStorageSaveResult> {
    const hash =
      input.sha256Hash ||
      createHash("sha256").update(input.buffer).digest("hex");
    const ext = extname(input.fileName) || guessExt(input.mimeType);
    const owner = input.warehouseId || input.locationId || "unscoped";
    const rel = join(
      input.organizationId,
      "inventory",
      owner,
      input.documentType,
      `${hash}${ext}`,
    );
    const abs = join(this.rootDir, rel);
    mkdirSync(dirname(abs), { recursive: true });
    if (!existsSync(abs)) {
      await pipeline(Readable.from(input.buffer), createWriteStream(abs));
    }
    return {
      storagePath: rel.split(String.fromCharCode(92)).join("/"),
      sha256Hash: hash,
      byteLength: input.buffer.byteLength,
    };
  }

  async getDownloadUrl(
    storagePath: string,
    expiresInSeconds = DOWNLOAD_URL_TTL_SECONDS,
  ): Promise<{ url: string; expiresAt: string }> {
    const exp = Math.floor(Date.now() / 1000) + expiresInSeconds;
    const sig = signPath(storagePath, exp);
    const expiresAt = new Date(exp * 1000).toISOString();
    // Relative API path consumed by download endpoint
    const url = `/v1/inventory/documents/file?path=${encodeURIComponent(storagePath)}&exp=${exp}&sig=${sig}`;
    return { url, expiresAt };
  }

  async read(storagePath: string): Promise<Buffer> {
    const abs = join(this.rootDir, storagePath);
    if (!existsSync(abs)) {
      throw new Error(`File not found: ${storagePath}`);
    }
    return readFileSync(abs);
  }
}

export function signPath(storagePath: string, exp: number): string {
  return createHmac("sha256", signingSecret())
    .update(`${storagePath}:${exp}`)
    .digest("hex");
}

export function verifySignedPath(
  storagePath: string,
  exp: number,
  sig: string,
): boolean {
  if (!Number.isFinite(exp) || exp * 1000 < Date.now()) return false;
  const expected = signPath(storagePath, exp);
  try {
    const a = Buffer.from(expected, "hex");
    const b = Buffer.from(sig, "hex");
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function sha256OfBuffer(buf: Buffer): string {
  return createHash("sha256").update(buf).digest("hex");
}

function guessExt(mime: string): string {
  switch (mime) {
    case "application/pdf":
      return ".pdf";
    case "image/png":
      return ".png";
    case "image/jpeg":
    case "image/jpg":
      return ".jpg";
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return ".docx";
    default:
      return ".bin";
  }
}
