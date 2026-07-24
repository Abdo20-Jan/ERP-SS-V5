import { describe, expect, it } from "vitest";
import {
  ComexCommandName,
  type ComexCommandReceipt,
  type ComexCommandReceiptLookup,
  type ComexCommandReceiptRepository,
  type ComexCommandReceiptTransaction,
  isComexCommandReplay,
} from "../../src";

class InMemoryComexCommandReceiptRepository
  implements ComexCommandReceiptRepository
{
  private readonly receipts: ComexCommandReceipt[] = [];
  lastAppendTransaction: ComexCommandReceiptTransaction;
  lastFindTransaction: ComexCommandReceiptTransaction;

  async find(
    lookup: ComexCommandReceiptLookup,
    tx?: ComexCommandReceiptTransaction,
  ): Promise<ComexCommandReceipt | null> {
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
    receipt: ComexCommandReceipt,
    tx?: ComexCommandReceiptTransaction,
  ): Promise<void> {
    this.lastAppendTransaction = tx;
    const duplicate = this.receipts.some(
      (candidate) =>
        candidate.organizationId === receipt.organizationId &&
        candidate.commandName === receipt.commandName &&
        candidate.keyHash === receipt.keyHash,
    );
    if (duplicate) throw new Error("COMEX command receipt already exists");
    this.receipts.push(receipt);
  }
}

const ALERT_RECEIPT: ComexCommandReceipt = {
  id: "receipt-alert-001",
  organizationId: "org_001",
  orderId: "order-001",
  commandName: ComexCommandName.ALERT_ACKNOWLEDGE,
  keyHash: "key-hash-alert",
  requestHash: "request-hash-alert",
  actorId: "actor-001",
  correlationId: "corr-alert-001",
  alertId: "alert-001",
  recordedAt: "2026-07-23T12:00:00.000Z",
};

const PROFORMA_RECEIPT: ComexCommandReceipt = {
  id: "receipt-proforma-001",
  organizationId: "org_001",
  orderId: "order-001",
  commandName: ComexCommandName.PROFORMA_CONFIRM,
  keyHash: "key-hash-proforma",
  requestHash: "request-hash-proforma",
  actorId: "actor-002",
  correlationId: "corr-proforma-001",
  proformaVersionId: "proforma-001",
  recordedAt: "2026-07-23T12:01:00.000Z",
};

describe("ComexCommandReceiptRepository port", () => {
  it("uses the five approved stable command names", () => {
    expect(Object.values(ComexCommandName)).toEqual([
      "comex.alert.create.v1",
      "comex.alert.acknowledge.v1",
      "comex.alert.resolve.v1",
      "comex.proforma.register.v1",
      "comex.proforma.confirm.v1",
    ]);
  });

  it("models success-only receipts with an exclusive typed target", () => {
    expect(ALERT_RECEIPT).toMatchObject({
      commandName: "comex.alert.acknowledge.v1",
      alertId: "alert-001",
    });
    expect(ALERT_RECEIPT).not.toHaveProperty("proformaVersionId");
    expect(PROFORMA_RECEIPT).toMatchObject({
      commandName: "comex.proforma.confirm.v1",
      proformaVersionId: "proforma-001",
    });
    expect(PROFORMA_RECEIPT).not.toHaveProperty("alertId");

    for (const receipt of [ALERT_RECEIPT, PROFORMA_RECEIPT]) {
      expect(receipt).not.toHaveProperty("outcomeType");
      expect(receipt).not.toHaveProperty("errorCode");
      expect(receipt).not.toHaveProperty("result");
    }
  });

  it("finds by organization, command and key and compares requestHash", async () => {
    const repository = new InMemoryComexCommandReceiptRepository();
    const tx = { opaque: true };
    await repository.append(ALERT_RECEIPT, tx);

    const replay = await repository.find(
      {
        organizationId: ALERT_RECEIPT.organizationId,
        commandName: ALERT_RECEIPT.commandName,
        keyHash: ALERT_RECEIPT.keyHash,
      },
      tx,
    );

    expect(replay).toEqual(ALERT_RECEIPT);
    expect(repository.lastAppendTransaction).toBe(tx);
    expect(repository.lastFindTransaction).toBe(tx);
    expect(isComexCommandReplay(replay!, ALERT_RECEIPT.requestHash)).toBe(true);
    expect(isComexCommandReplay(replay!, "different-request-hash")).toBe(false);
  });

  it("keeps uniqueness scoped by organization, command and key", async () => {
    const repository = new InMemoryComexCommandReceiptRepository();
    await repository.append(ALERT_RECEIPT);

    await expect(repository.append(ALERT_RECEIPT)).rejects.toThrow(
      "COMEX command receipt already exists",
    );
    await expect(
      repository.find({
        organizationId: "org_002",
        commandName: ALERT_RECEIPT.commandName,
        keyHash: ALERT_RECEIPT.keyHash,
      }),
    ).resolves.toBeNull();
  });
});
