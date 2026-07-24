import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { AppError, AuthError } from "@sunset/contracts";
import {
  OverrideAction,
  OverrideCommandName,
  type OverrideCommandReceipt,
  OverrideRequest,
  OverrideRequestContext,
  OverrideResourceType,
} from "@sunset/domain";
import { ComexOverrideService } from "../comex-override.service";
import {
  COMEX_S03_TEST_IDS,
  COMEX_S03_TEST_ORG,
} from "./comex-s03-regression.fixture";

const db = vi.hoisted(() => {
  const tx = {
    auditLog: { create: vi.fn() },
    internationalOrderStateTransition: { create: vi.fn() },
  };
  return {
    tx,
    transaction: vi.fn(
      async (fn: (client: typeof tx) => Promise<unknown>) => fn(tx),
    ),
  };
});

vi.mock("@sunset/db", () => ({
  prisma: { $transaction: db.transaction },
}));

vi.mock("@sunset/observability", () => ({
  getCorrelationId: () => "corr-comex-s03-test",
}));

const APPROVER = "00000000-0000-7000-8000-000000000603";
const REQUEST_KEY = "idem-comex-override-request-001";
const EXECUTE_KEY = "idem-comex-override-execute-001";

function approvedOverride(approvedAt = new Date("2026-01-15T12:01:00.000Z")) {
  const override = OverrideRequest.requestForContext(
    {
      id: COMEX_S03_TEST_IDS.override,
      organizationId: COMEX_S03_TEST_ORG,
      action: OverrideAction.READY_TO_SHIP_PARTIAL,
      resourceType: OverrideResourceType.INTERNATIONAL_ORDER,
      resourceId: COMEX_S03_TEST_IDS.order,
      reason: "Synthetic operational exception for regression testing",
      requestedById: COMEX_S03_TEST_IDS.requester,
    },
    OverrideRequestContext.COMEX,
  );
  override.pullEvents();
  override.approve(
    {
      overrideId: COMEX_S03_TEST_IDS.override,
      approvedById: APPROVER,
      expectedVersion: 0,
    },
    approvedAt,
  );
  override.pullEvents();
  return override;
}

function executableOrder() {
  let status = "IN_PRODUCTION";
  let version = 11;
  const readyToShipWithOverride = vi.fn(
    (expectedVersion: number, _overrideRequestId: string) => {
      if (expectedVersion !== version) throw new Error("unexpected order version");
      status = "READY_TO_SHIP";
      version += 1;
    },
  );
  const snapshot = vi.fn(() => ({
    id: COMEX_S03_TEST_IDS.order,
    organizationId: COMEX_S03_TEST_ORG,
    status,
    version,
  }));
  const pullEvents = vi.fn(() => [
    {
      eventId: "00000000-0000-7000-8000-000000000701",
      eventType: "international-order.ready-to-ship.v1",
      eventVersion: 1 as const,
      orderId: COMEX_S03_TEST_IDS.order,
      aggregateVersion: version,
      timestamp: "2026-01-15T12:02:00.000Z",
    },
  ]);
  return {
    get version() {
      return version;
    },
    readyToShipWithOverride,
    snapshot,
    pullEvents,
  };
}

describe("ComexOverrideService P1 regressions", () => {
  let storedOverrides: Map<string, OverrideRequest>;
  let storedReceipts: Map<string, OverrideCommandReceipt>;
  let overrides: Record<string, ReturnType<typeof vi.fn>>;
  let receipts: Record<string, ReturnType<typeof vi.fn>>;
  let orders: Record<string, ReturnType<typeof vi.fn>>;
  let outbox: { enqueue: ReturnType<typeof vi.fn> };
  let service: ComexOverrideService;

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-15T12:01:00.000Z"));
    vi.clearAllMocks();
    db.transaction.mockImplementation(
      async (fn: (client: typeof db.tx) => Promise<unknown>) => fn(db.tx),
    );
    db.tx.auditLog.create.mockResolvedValue({});
    db.tx.internationalOrderStateTransition.create.mockResolvedValue({});
    storedOverrides = new Map();
    storedReceipts = new Map();

    overrides = {
      save: vi.fn(async (override: OverrideRequest) => {
        storedOverrides.set(String(override.id), override);
      }),
      saveWithVersion: vi.fn(
        async (
          override: OverrideRequest,
          expectedPersistedVersion: number | null,
        ) => {
          const current = storedOverrides.get(String(override.id));
          if (
            expectedPersistedVersion !== null &&
            current &&
            current.toSnapshot().version !== override.toSnapshot().version
          ) {
            throw new Error("test repository received detached aggregate");
          }
          storedOverrides.set(String(override.id), override);
        },
      ),
      findById: vi.fn(async (id: string) => storedOverrides.get(id) ?? null),
      findByIdForOrganization: vi.fn(
        async (id: string, organizationId: string) => {
          const found = storedOverrides.get(id);
          return found?.organizationId === organizationId ? found : null;
        },
      ),
      findPending: vi.fn(async () => null),
      findAll: vi.fn(async () => ({
        data: [...storedOverrides.values()],
        total: storedOverrides.size,
      })),
    };

    receipts = {
      find: vi.fn(
        async (lookup: {
          organizationId: string;
          commandName: string;
          keyHash: string;
        }) =>
          storedReceipts.get(
            `${lookup.organizationId}|${lookup.commandName}|${lookup.keyHash}`,
          ) ?? null,
      ),
      append: vi.fn(async (receipt: OverrideCommandReceipt) => {
        storedReceipts.set(
          `${receipt.organizationId}|${receipt.commandName}|${receipt.keyHash}`,
          receipt,
        );
      }),
    };

    orders = {
      findById: vi.fn().mockResolvedValue({
        id: COMEX_S03_TEST_IDS.order,
        version: 11,
      }),
      save: vi.fn().mockResolvedValue(undefined),
    };
    outbox = { enqueue: vi.fn().mockResolvedValue(undefined) };
    service = new ComexOverrideService(
      orders as never,
      outbox as never,
      overrides as never,
      receipts as never,
    );
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("replays a repeated request without duplicating override, audit, outbox, or receipt", async () => {
    const command = {
      resourceId: COMEX_S03_TEST_IDS.order,
      action: OverrideAction.READY_TO_SHIP_PARTIAL,
      reason: "Synthetic operational exception for regression testing",
    };
    const actor = {
      id: COMEX_S03_TEST_IDS.requester,
      organizationId: "client-controlled-org-is-ignored",
    };

    const first = await service.request(command, actor, REQUEST_KEY);
    const replay = await service.request(command, actor, REQUEST_KEY);

    expect(replay.id).toBe(first.id);
    expect(first.organizationId).toBe(COMEX_S03_TEST_ORG);
    expect(overrides.saveWithVersion).toHaveBeenCalledTimes(1);
    expect(overrides.saveWithVersion).toHaveBeenCalledWith(
      expect.any(OverrideRequest),
      null,
      db.tx,
    );
    expect(db.tx.auditLog.create).toHaveBeenCalledTimes(1);
    expect(outbox.enqueue).toHaveBeenCalledTimes(1);
    expect(receipts.append).toHaveBeenCalledTimes(1);
    expect(JSON.stringify(receipts.append.mock.calls)).not.toContain(REQUEST_KEY);
    expect(JSON.stringify(db.tx.auditLog.create.mock.calls)).not.toContain(
      REQUEST_KEY,
    );
    expect(JSON.stringify(outbox.enqueue.mock.calls)).not.toContain(REQUEST_KEY);
  });

  it("rejects reuse of a receipt key with a different canonical request hash", async () => {
    const actor = { id: COMEX_S03_TEST_IDS.requester };
    const command = {
      resourceId: COMEX_S03_TEST_IDS.order,
      action: OverrideAction.READY_TO_SHIP_PARTIAL,
      reason: "Synthetic operational exception for regression testing",
    };
    await service.request(command, actor, REQUEST_KEY);

    const conflict = service.request(
      { ...command, reason: "A materially different operational exception" },
      actor,
      REQUEST_KEY,
    );

    await expect(conflict).rejects.toMatchObject({
      code: "IDEMPOTENCY_KEY_REUSED",
      statusCode: 409,
    });
    expect(overrides.saveWithVersion).toHaveBeenCalledTimes(1);
    expect(db.tx.auditLog.create).toHaveBeenCalledTimes(1);
    expect(outbox.enqueue).toHaveBeenCalledTimes(1);
    expect(receipts.append).toHaveBeenCalledTimes(1);
  });

  it("executes with CAS on override and order and replays without a second effect", async () => {
    const override = approvedOverride();
    storedOverrides.set(String(override.id), override);
    const order = executableOrder();
    orders.findById.mockResolvedValue(order);

    const command = {
      expectedOverrideVersion: 1,
      expectedOrderVersion: 11,
    };
    const actor = { id: COMEX_S03_TEST_IDS.executor };
    const first = await service.execute(
      COMEX_S03_TEST_IDS.override,
      command,
      actor,
      EXECUTE_KEY,
    );
    const replay = await service.execute(
      COMEX_S03_TEST_IDS.override,
      command,
      actor,
      EXECUTE_KEY,
    );

    expect(first.status).toBe("EXECUTED");
    expect(replay).toEqual(first);
    expect(order.readyToShipWithOverride).toHaveBeenCalledTimes(1);
    expect(orders.save).toHaveBeenCalledTimes(1);
    expect(orders.save).toHaveBeenCalledWith(order, 11, db.tx);
    expect(overrides.saveWithVersion).toHaveBeenCalledTimes(1);
    expect(overrides.saveWithVersion).toHaveBeenCalledWith(
      override,
      1,
      db.tx,
    );
    expect(db.tx.internationalOrderStateTransition.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        organizationId: COMEX_S03_TEST_ORG,
        orderId: COMEX_S03_TEST_IDS.order,
        fromStatus: "IN_PRODUCTION",
        toStatus: "READY_TO_SHIP",
        overrideRequestId: COMEX_S03_TEST_IDS.override,
        idempotencyKey: null,
        requestHash: expect.stringMatching(/^[a-f0-9]{64}$/),
      }),
    });
    expect(db.tx.auditLog.create).toHaveBeenCalledTimes(2);
    expect(outbox.enqueue).toHaveBeenCalledTimes(1);
    const published = outbox.enqueue.mock.calls[0]?.[0] as Array<{
      eventType: string;
    }>;
    expect(published.map((event) => event.eventType)).toEqual([
      "international-order.override-executed.v1",
      "international-order.ready-to-ship.v1",
    ]);
    expect(new Set(published.map((event) => event.eventType)).size).toBe(2);
    expect(receipts.append).toHaveBeenCalledTimes(1);
    expect(receipts.append.mock.calls[0]?.[0]).toMatchObject({
      commandName: OverrideCommandName.EXECUTE,
      resultStatus: "EXECUTED",
      resultVersion: 2,
      httpStatus: 200,
    });
    expect(JSON.stringify(receipts.append.mock.calls)).not.toContain(EXECUTE_KEY);
  });

  it("commits EXPIRED, audit, event, and error receipt before returning 409", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-16T12:01:01.000Z"));
    const override = approvedOverride(
      new Date("2026-01-15T12:00:00.000Z"),
    );
    storedOverrides.set(String(override.id), override);
    orders.findById.mockClear();

    const command = {
      expectedOverrideVersion: 1,
      expectedOrderVersion: 11,
    };
    const first = service.execute(
      COMEX_S03_TEST_IDS.override,
      command,
      { id: COMEX_S03_TEST_IDS.executor },
      EXECUTE_KEY,
    );

    await expect(first).rejects.toMatchObject({
      code: "OVERRIDE_EXPIRED",
      statusCode: 409,
    });
    expect(storedOverrides.get(COMEX_S03_TEST_IDS.override)?.status).toBe(
      "EXPIRED",
    );
    expect(overrides.saveWithVersion).toHaveBeenCalledWith(
      override,
      1,
      db.tx,
    );
    expect(orders.findById).not.toHaveBeenCalled();
    expect(orders.save).not.toHaveBeenCalled();
    expect(db.tx.auditLog.create).toHaveBeenCalledTimes(1);
    expect(outbox.enqueue).toHaveBeenCalledTimes(1);
    expect(receipts.append).toHaveBeenCalledTimes(1);
    expect(receipts.append.mock.calls[0]?.[0]).toMatchObject({
      outcomeType: "ERROR",
      resultStatus: "EXPIRED",
      resultVersion: 2,
      httpStatus: 409,
      errorCode: "OVERRIDE_EXPIRED",
    });

    const replay = service.execute(
      COMEX_S03_TEST_IDS.override,
      command,
      { id: COMEX_S03_TEST_IDS.executor },
      EXECUTE_KEY,
    );
    await expect(replay).rejects.toMatchObject({ code: "OVERRIDE_EXPIRED" });
    expect(overrides.saveWithVersion).toHaveBeenCalledTimes(1);
    expect(db.tx.auditLog.create).toHaveBeenCalledTimes(1);
    expect(outbox.enqueue).toHaveBeenCalledTimes(1);
    expect(receipts.append).toHaveBeenCalledTimes(1);
  });

  it("requires an authenticated actor, idempotency header, and explicit versions", async () => {
    await expect(
      service.request(
        {
          resourceId: COMEX_S03_TEST_IDS.order,
          action: OverrideAction.READY_TO_SHIP_PARTIAL,
          reason: "Synthetic operational exception for regression testing",
        },
        undefined,
        REQUEST_KEY,
      ),
    ).rejects.toBeInstanceOf(AuthError);

    await expect(
      service.request(
        {
          resourceId: COMEX_S03_TEST_IDS.order,
          action: OverrideAction.READY_TO_SHIP_PARTIAL,
          reason: "Synthetic operational exception for regression testing",
        },
        { id: COMEX_S03_TEST_IDS.requester },
        undefined,
      ),
    ).rejects.toMatchObject({ code: "VALIDATION_ERROR", statusCode: 400 });

    await expect(
      service.approve(
        COMEX_S03_TEST_IDS.override,
        { expectedOverrideVersion: Number.NaN },
        { id: APPROVER },
        "idem-approve",
      ),
    ).rejects.toBeInstanceOf(AppError);
    expect(db.transaction).not.toHaveBeenCalled();
  });

  it("loads override objects through the organization-scoped strict repository", async () => {
    const override = approvedOverride();
    storedOverrides.set(String(override.id), override);
    const order = executableOrder();
    orders.findById.mockResolvedValue(order);

    await expect(
      service.execute(
        COMEX_S03_TEST_IDS.override,
        { expectedOverrideVersion: 1, expectedOrderVersion: 11 },
        { id: COMEX_S03_TEST_IDS.executor },
        EXECUTE_KEY,
      ),
    ).resolves.toMatchObject({ status: "EXECUTED" });

    expect(overrides.findByIdForOrganization).toHaveBeenCalledWith(
      COMEX_S03_TEST_IDS.override,
      COMEX_S03_TEST_ORG,
      db.tx,
    );
  });
});
