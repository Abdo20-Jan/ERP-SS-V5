import { ConflictError } from "@sunset/contracts";
import type {
  OverrideCommandName,
  OverrideCommandOutcomeType,
  OverrideCommandReceipt,
  OverrideCommandReceiptLookup,
  OverrideCommandReceiptRepository,
  OverrideCommandReceiptResult,
  OverrideCommandReceiptTransaction,
  OverrideStatus,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

type DbClient = PrismaClient | Prisma.TransactionClient;

type ReceiptRow = {
  id: string;
  organizationId: string;
  overrideRequestId: string;
  commandName: string;
  keyHash: string;
  requestHash: string;
  actorId: string;
  correlationId: string;
  outcomeType: string;
  resultStatus: string;
  resultVersion: number;
  httpStatus: number;
  errorCode: string | null;
  result: Prisma.JsonValue | null;
  recordedAt: Date;
};

type ReceiptDelegate = {
  findFirst(args: unknown): Promise<ReceiptRow | null>;
  create(args: unknown): Promise<ReceiptRow>;
};

function delegate(db: DbClient): ReceiptDelegate {
  const receiptDelegate = (db as unknown as Record<string, unknown>)[
    "overrideCommandReceipt"
  ] as ReceiptDelegate | undefined;

  if (!receiptDelegate) {
    throw new Error(
      "PrismaOverrideCommandReceiptRepository: overrideCommandReceipt delegate missing — run prisma generate",
    );
  }

  return receiptDelegate;
}

function client(
  tx: OverrideCommandReceiptTransaction | undefined,
  fallback: DbClient,
): DbClient {
  return (tx as DbClient | undefined) ?? fallback;
}

function toDomain(row: ReceiptRow): OverrideCommandReceipt {
  return {
    id: row.id,
    organizationId: row.organizationId,
    overrideRequestId: row.overrideRequestId,
    commandName: row.commandName as OverrideCommandName,
    keyHash: row.keyHash,
    requestHash: row.requestHash,
    actorId: row.actorId,
    correlationId: row.correlationId,
    outcomeType: row.outcomeType as OverrideCommandOutcomeType,
    resultStatus: row.resultStatus as OverrideStatus,
    resultVersion: row.resultVersion,
    httpStatus: row.httpStatus,
    errorCode: row.errorCode ?? undefined,
    result:
      row.result === null
        ? undefined
        : (row.result as OverrideCommandReceiptResult),
    recordedAt: row.recordedAt.toISOString(),
  };
}

export class PrismaOverrideCommandReceiptRepository
  implements OverrideCommandReceiptRepository
{
  constructor(private readonly db: DbClient = defaultPrisma) {}

  async find(
    lookup: OverrideCommandReceiptLookup,
    tx?: OverrideCommandReceiptTransaction,
  ): Promise<OverrideCommandReceipt | null> {
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
    receipt: OverrideCommandReceipt,
    tx?: OverrideCommandReceiptTransaction,
  ): Promise<void> {
    try {
      await delegate(client(tx, this.db)).create({
        data: {
          id: receipt.id,
          organizationId: receipt.organizationId,
          overrideRequestId: receipt.overrideRequestId,
          commandName: receipt.commandName,
          keyHash: receipt.keyHash,
          requestHash: receipt.requestHash,
          actorId: receipt.actorId,
          correlationId: receipt.correlationId,
          outcomeType: receipt.outcomeType,
          resultStatus: receipt.resultStatus,
          resultVersion: receipt.resultVersion,
          httpStatus: receipt.httpStatus,
          errorCode: receipt.errorCode ?? null,
          result:
            receipt.result === undefined
              ? Prisma.DbNull
              : (receipt.result as Prisma.InputJsonValue),
          recordedAt: new Date(receipt.recordedAt),
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        throw new ConflictError(
          "Override command receipt already exists for this organization, command, and key hash",
          "OverrideCommandReceipt",
        );
      }
      throw error;
    }
  }
}
