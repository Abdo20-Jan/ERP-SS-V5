import { ConflictError } from "@sunset/contracts";
import type {
  ComexCommandName,
  ComexCommandReceipt,
  ComexCommandReceiptLookup,
  ComexCommandReceiptRepository,
  ComexCommandReceiptTransaction,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

type DbClient = PrismaClient | Prisma.TransactionClient;

type ComexReceiptRow = {
  id: string;
  organizationId: string;
  orderId: string;
  commandName: string;
  keyHash: string;
  requestHash: string;
  actorId: string;
  correlationId: string;
  alertId: string | null;
  proformaVersionId: string | null;
  recordedAt: Date;
};

type ReceiptDelegate = {
  findFirst(args: unknown): Promise<ComexReceiptRow | null>;
  create(args: unknown): Promise<ComexReceiptRow>;
};

function delegate(db: DbClient): ReceiptDelegate {
  const receiptDelegate = (db as unknown as Record<string, unknown>)[
    "comexCommandReceipt"
  ] as ReceiptDelegate | undefined;

  if (!receiptDelegate) {
    throw new Error(
      "PrismaComexCommandReceiptRepository: comexCommandReceipt delegate missing — run prisma generate",
    );
  }

  return receiptDelegate;
}

function client(
  tx: ComexCommandReceiptTransaction | undefined,
  fallback: DbClient,
): DbClient {
  return (tx as DbClient | undefined) ?? fallback;
}

function toDomain(row: ComexReceiptRow): ComexCommandReceipt {
  const base = {
    id: row.id,
    organizationId: row.organizationId,
    orderId: row.orderId,
    keyHash: row.keyHash,
    requestHash: row.requestHash,
    actorId: row.actorId,
    correlationId: row.correlationId,
    recordedAt: row.recordedAt.toISOString(),
  };

  if (row.alertId !== null) {
    return {
      ...base,
      commandName: row.commandName as ComexCommandReceipt["commandName"],
      alertId: row.alertId,
    } as ComexCommandReceipt;
  }

  return {
    ...base,
    commandName: row.commandName as ComexCommandReceipt["commandName"],
    proformaVersionId: row.proformaVersionId!,
  } as ComexCommandReceipt;
}

export class PrismaComexCommandReceiptRepository
  implements ComexCommandReceiptRepository
{
  constructor(private readonly db: DbClient = defaultPrisma) {}

  async find(
    lookup: ComexCommandReceiptLookup,
    tx?: ComexCommandReceiptTransaction,
  ): Promise<ComexCommandReceipt | null> {
    const row = await delegate(client(tx, this.db)).findFirst({
      where: {
        organizationId: lookup.organizationId,
        commandName: lookup.commandName,
        keyHash: lookup.keyHash,
      },
    });

    return row ? toDomain(row) : null;
  }

  async append(
    receipt: ComexCommandReceipt,
    tx?: ComexCommandReceiptTransaction,
  ): Promise<void> {
    const data: Record<string, unknown> = {
      id: receipt.id,
      organizationId: receipt.organizationId,
      orderId: receipt.orderId,
      commandName: receipt.commandName,
      keyHash: receipt.keyHash,
      requestHash: receipt.requestHash,
      actorId: receipt.actorId,
      correlationId: receipt.correlationId,
      recordedAt: new Date(receipt.recordedAt),
    };

    if ("alertId" in receipt && receipt.alertId) {
      data.alertId = receipt.alertId;
      data.proformaVersionId = null;
    } else if ("proformaVersionId" in receipt && receipt.proformaVersionId) {
      data.alertId = null;
      data.proformaVersionId = receipt.proformaVersionId;
    }

    try {
      await delegate(client(tx, this.db)).create({ data });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        throw new ConflictError(
          "Comex command receipt already exists for this organization, command, and key hash",
          "ComexCommandReceipt",
        );
      }
      throw error;
    }
  }
}
