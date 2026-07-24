import { ConflictError } from "@sunset/contracts";
import {
  OverrideCommandName,
  type OverrideCommandReceipt,
  OverrideCommandOutcomeType,
  OverrideStatus,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { describe, expect, it, vi } from "vitest";
import { PrismaOverrideCommandReceiptRepository } from "../src/repositories/override-command-receipt.repository.prisma";

const KEY_HASH = "a".repeat(64);
const REQUEST_HASH = "b".repeat(64);

const RECEIPT: OverrideCommandReceipt = {
  id: "11111111-1111-7111-8111-111111111111",
  organizationId: "org_test",
  overrideRequestId: "22222222-2222-7222-8222-222222222222",
  commandName: OverrideCommandName.EXECUTE,
  keyHash: KEY_HASH,
  requestHash: REQUEST_HASH,
  actorId: "33333333-3333-7333-8333-333333333333",
  correlationId: "corr-test-receipt",
  outcomeType: OverrideCommandOutcomeType.SUCCESS,
  resultStatus: OverrideStatus.EXECUTED,
  resultVersion: 2,
  httpStatus: 200,
  result: { replay: true },
  recordedAt: "2026-07-23T12:00:00.000Z",
};

function database(delegate: Record<string, unknown>): PrismaClient {
  return { overrideCommandReceipt: delegate } as unknown as PrismaClient;
}

describe("PrismaOverrideCommandReceiptRepository", () => {
  it("finds a receipt by the tenant-scoped command identity and maps replay fields", async () => {
    const findFirst = vi.fn().mockResolvedValue({
      ...RECEIPT,
      errorCode: null,
      result: { replay: true },
      recordedAt: new Date(RECEIPT.recordedAt),
    });
    const repository = new PrismaOverrideCommandReceiptRepository(
      database({ findFirst, create: vi.fn() }),
    );

    const found = await repository.find({
      organizationId: RECEIPT.organizationId,
      commandName: RECEIPT.commandName,
      keyHash: RECEIPT.keyHash,
    });

    expect(findFirst).toHaveBeenCalledWith({
      where: {
        organizationId: RECEIPT.organizationId,
        commandName: RECEIPT.commandName,
        keyHash: RECEIPT.keyHash,
      },
    });
    expect(found).toEqual(RECEIPT);
  });

  it("appends through the supplied opaque transaction and writes SQL NULL for absent metadata", async () => {
    const create = vi.fn().mockResolvedValue({});
    const transaction = database({ findFirst: vi.fn(), create });
    const repository = new PrismaOverrideCommandReceiptRepository(
      database({ findFirst: vi.fn(), create: vi.fn() }),
    );
    const receiptWithoutMetadata: OverrideCommandReceipt = {
      ...RECEIPT,
      result: undefined,
    };

    await repository.append(receiptWithoutMetadata, transaction);

    expect(create).toHaveBeenCalledTimes(1);
    expect(create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        id: RECEIPT.id,
        organizationId: RECEIPT.organizationId,
        keyHash: KEY_HASH,
        requestHash: REQUEST_HASH,
        result: Prisma.DbNull,
        recordedAt: new Date(RECEIPT.recordedAt),
      }),
    });
  });

  it("maps Prisma unique conflicts to a stable receipt ConflictError", async () => {
    const uniqueViolation = new Prisma.PrismaClientKnownRequestError(
      "Unique constraint failed",
      {
        code: "P2002",
        clientVersion: "6.2.1",
        meta: { target: "ocrr_org_command_key_uq" },
      },
    );
    const repository = new PrismaOverrideCommandReceiptRepository(
      database({
        findFirst: vi.fn(),
        create: vi.fn().mockRejectedValue(uniqueViolation),
      }),
    );

    const failure = repository.append(RECEIPT);

    await expect(failure).rejects.toBeInstanceOf(ConflictError);
    await expect(failure).rejects.toMatchObject({
      code: "CONFLICT",
      entityType: "OverrideCommandReceipt",
    });
  });

  it("exposes only append and find mutation semantics", () => {
    const methods = Object.getOwnPropertyNames(
      PrismaOverrideCommandReceiptRepository.prototype,
    );

    expect(methods).toEqual(expect.arrayContaining(["constructor", "find", "append"]));
    expect(methods).not.toEqual(
      expect.arrayContaining(["save", "update", "delete", "upsert"]),
    );
  });
});
