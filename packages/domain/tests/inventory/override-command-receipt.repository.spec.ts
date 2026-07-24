import { describe, expect, it } from "vitest";
import {
  isOverrideCommandReplay,
  OverrideCommandName,
  type OverrideCommandReceipt,
  type OverrideCommandReceiptLookup,
  type OverrideCommandReceiptRepository,
  type OverrideCommandReceiptTransaction,
  OverrideCommandOutcomeType,
  OverrideStatus,
} from "../../src";

class InMemoryOverrideCommandReceiptRepository
  implements OverrideCommandReceiptRepository
{
  private readonly receipts: OverrideCommandReceipt[] = [];
  lastAppendTransaction: OverrideCommandReceiptTransaction;
  lastFindTransaction: OverrideCommandReceiptTransaction;

  async find(
    lookup: OverrideCommandReceiptLookup,
    tx?: OverrideCommandReceiptTransaction,
  ): Promise<OverrideCommandReceipt | null> {
    this.lastFindTransaction = tx;
    return (
      this.receipts.find(
        (receipt) =>
          receipt.organizationId === lookup.organizationId &&
          receipt.commandName === lookup.commandName &&
          receipt.keyHash === lookup.keyHash,
      ) ?? null
    );
  }

  async append(
    receipt: OverrideCommandReceipt,
    tx?: OverrideCommandReceiptTransaction,
  ): Promise<void> {
    this.lastAppendTransaction = tx;
    const existing = await this.find({
      organizationId: receipt.organizationId,
      commandName: receipt.commandName,
      keyHash: receipt.keyHash,
    });
    if (existing) {
      throw new Error("override command receipt already exists");
    }
    this.receipts.push(receipt);
  }
}

const RECEIPT: OverrideCommandReceipt = {
  id: "receipt-001",
  organizationId: "org_001",
  overrideRequestId: "override-001",
  commandName: OverrideCommandName.EXECUTE,
  keyHash: "sha256:key",
  requestHash: "sha256:request",
  actorId: "22222222-2222-7222-8222-222222222222",
  correlationId: "corr-override-001",
  outcomeType: OverrideCommandOutcomeType.SUCCESS,
  resultStatus: OverrideStatus.EXECUTED,
  resultVersion: 2,
  httpStatus: 200,
  result: { source: "domain-test" },
  recordedAt: "2026-07-23T12:00:00.000Z",
};

describe("OverrideCommandReceiptRepository port", () => {
  it("uses the approved stable versioned command names", () => {
    expect(Object.values(OverrideCommandName)).toEqual([
      "override.request.v1",
      "override.approve.v1",
      "override.reject.v1",
      "override.cancel.v1",
      "override.execute.v1",
    ]);
    expect(OverrideCommandName.REQUEST).not.toBe("OverrideRequested");
    expect(OverrideCommandName.EXECUTE).not.toBe("OverrideExecuted");
  });

  it("provides canonical replay fields without requiring a loose result payload", () => {
    const failure: OverrideCommandReceipt = {
      ...RECEIPT,
      id: "receipt-002",
      outcomeType: OverrideCommandOutcomeType.ERROR,
      resultStatus: OverrideStatus.APPROVED,
      resultVersion: 1,
      httpStatus: 409,
      errorCode: "VERSION_CONFLICT",
      result: undefined,
    };

    expect(failure).toMatchObject({
      id: "receipt-002",
      overrideRequestId: "override-001",
      outcomeType: "ERROR",
      resultStatus: "APPROVED",
      resultVersion: 1,
      httpStatus: 409,
      errorCode: "VERSION_CONFLICT",
    });
    expect(failure.result).toBeUndefined();
  });

  it("supports semantic replay without exposing persistence types", async () => {
    const repository = new InMemoryOverrideCommandReceiptRepository();
    const tx = { opaque: true };

    await repository.append(RECEIPT, tx);
    const replay = await repository.find(
      {
        organizationId: RECEIPT.organizationId,
        commandName: RECEIPT.commandName,
        keyHash: RECEIPT.keyHash,
      },
      tx,
    );

    expect(replay).toEqual(RECEIPT);
    expect(repository.lastAppendTransaction).toBe(tx);
    expect(repository.lastFindTransaction).toBe(tx);
    expect(isOverrideCommandReplay(replay!, RECEIPT.requestHash)).toBe(true);
    expect(isOverrideCommandReplay(replay!, "sha256:different-request")).toBe(
      false,
    );
  });

  it("models receipts as append-only entries per organization/command/key", async () => {
    const repository = new InMemoryOverrideCommandReceiptRepository();
    await repository.append(RECEIPT);

    await expect(repository.append(RECEIPT)).rejects.toThrow(
      "override command receipt already exists",
    );
    await expect(
      repository.find({
        organizationId: "another-org",
        commandName: RECEIPT.commandName,
        keyHash: RECEIPT.keyHash,
      }),
    ).resolves.toBeNull();
  });
});
