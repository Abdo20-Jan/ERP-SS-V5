import { ConflictError } from "@sunset/contracts";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ProformaService } from "../proforma.service";
import {
  COMEX_S03_TEST_IDS,
  COMEX_S03_TEST_ORG,
  makeProformaSnapshot,
} from "./comex-s03-regression.fixture";

const db = vi.hoisted(() => {
  const tx = {
    auditLog: { create: vi.fn() },
    internationalOrderStateTransition: { create: vi.fn() },
  };
  return {
    tx,
    transaction: vi.fn(async (fn: (client: typeof tx) => Promise<unknown>) =>
      fn(tx),
    ),
  };
});

vi.mock("@sunset/db", () => ({
  prisma: { $transaction: db.transaction },
}));

vi.mock("@sunset/observability", () => ({
  getCorrelationId: () => "corr-comex-s03-test",
}));

function makeOrder(version = 5) {
  return {
    version,
    supplierPartyId: COMEX_S03_TEST_IDS.supplier,
    currencyCode: "USD",
    confirmProforma: vi.fn(),
    pullEvents: vi.fn().mockReturnValue([]),
  };
}

function makeVersionedProforma(version = 3, status = "REGISTERED") {
  const snapshot = { ...makeProformaSnapshot({ status }), version };
  return {
    version,
    versionNumber: snapshot.versionNumber,
    id: snapshot.id,
    snapshot: () => ({ ...snapshot }),
    confirm: vi.fn((_actor: string, expectedVersion?: number) => {
      if (expectedVersion !== undefined && expectedVersion !== version) {
        throw new ConflictError("Proforma version conflict", "ProformaVersion");
      }
    }),
  };
}

describe("ProformaService P1 regressions", () => {
  let repo: Record<string, ReturnType<typeof vi.fn>>;
  let orders: Record<string, ReturnType<typeof vi.fn>>;
  let outbox: { enqueue: ReturnType<typeof vi.fn> };
  let receipts: Record<string, ReturnType<typeof vi.fn>>;
  let service: ProformaService;

  const actor = {
    id: COMEX_S03_TEST_IDS.executor,
    organizationId: COMEX_S03_TEST_ORG,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    db.transaction.mockImplementation(
      async (fn: (client: typeof db.tx) => Promise<unknown>) => fn(db.tx),
    );
    db.tx.auditLog.create.mockResolvedValue({});
    db.tx.internationalOrderStateTransition.create.mockResolvedValue({});
    repo = {
      findLatestByOrder: vi.fn(),
      findByOrgSupplierNumber: vi.fn(),
      findById: vi.fn(),
      saveWithVersion: vi.fn().mockResolvedValue(undefined),
      save: vi.fn().mockResolvedValue(undefined),
    };
    orders = {
      findById: vi.fn(),
      save: vi.fn().mockResolvedValue(undefined),
    };
    outbox = { enqueue: vi.fn().mockResolvedValue(undefined) };
    receipts = {
      find: vi.fn().mockResolvedValue(null),
      append: vi.fn().mockResolvedValue(undefined),
    };
    service = new ProformaService(repo as never, orders as never, outbox as never, receipts as never);
  });

  it("returns the original registration receipt on repeated idempotency key", async () => {
    const order = makeOrder(5);
    let latest: unknown = null;
    orders.findById.mockResolvedValue(order);
    repo.findLatestByOrder.mockImplementation(async () => latest);
    repo.saveWithVersion.mockImplementation(async (proforma: unknown) => {
      latest = proforma;
    });

    const command = {
      proformaNumber: "PI-TEST-001",
      issueDate: "2026-01-15",
      totalAmount: "1250.00",
      currencyCode: "USD",
      expectedOrderVersion: 5,
      idempotencyKey: "idem-comex-proforma-register-001",
    };

    const first = await service.register(COMEX_S03_TEST_IDS.order, command, actor);
    const replay = await service.register(COMEX_S03_TEST_IDS.order, command, actor);

    expect(replay.id).toBe(first.id);
    expect(replay.versionNumber).toBe(first.versionNumber);
    expect(repo.saveWithVersion).toHaveBeenCalledTimes(1);
    expect(db.tx.auditLog.create).toHaveBeenCalledTimes(1);
    expect(outbox.enqueue).toHaveBeenCalledTimes(1);
  });

  it("rejects confirm when expectedVersion does not match the proforma version", async () => {
    const order = makeOrder(5);
    const proforma = makeVersionedProforma(3);
    orders.findById.mockResolvedValue(order);
    repo.findLatestByOrder.mockResolvedValue(proforma);

    await expect(
      service.confirm(
        COMEX_S03_TEST_IDS.order,
        proforma.versionNumber,
        {
          expectedVersion: 2,
          expectedOrderVersion: 5,
          idempotencyKey: "idem-comex-proforma-confirm-version-001",
        },
        actor,
      ),
    ).rejects.toBeInstanceOf(ConflictError);
    expect(repo.saveWithVersion).not.toHaveBeenCalled();
    expect(orders.save).not.toHaveBeenCalled();
    expect(outbox.enqueue).not.toHaveBeenCalled();
  });

  it("returns a confirmation replay without duplicating timeline, audit, or outbox", async () => {
    const order = makeOrder(6);
    const confirmed = makeVersionedProforma(4, "CONFIRMED");
    orders.findById.mockResolvedValue(order);
    repo.findLatestByOrder.mockResolvedValue(confirmed);

    receipts.find.mockResolvedValue({
      id: "receipt-123",
      proformaVersionId: COMEX_S03_TEST_IDS.proforma,
      requestHash: "abc123",
    });

    const result = await service.confirm(
      COMEX_S03_TEST_IDS.order,
      confirmed.versionNumber,
      {
        expectedVersion: 4,
        expectedOrderVersion: 5,
        idempotencyKey: "idem-comex-proforma-confirm-replay-001",
      },
      actor,
    );

    expect(receipts.find).toHaveBeenCalled();
    expect(result.id).toBe(COMEX_S03_TEST_IDS.proforma);
    expect(repo.saveWithVersion).not.toHaveBeenCalled();
    expect(orders.save).not.toHaveBeenCalled();
    expect(db.tx.internationalOrderStateTransition.create).not.toHaveBeenCalled();
    expect(db.tx.auditLog.create).not.toHaveBeenCalled();
    expect(outbox.enqueue).not.toHaveBeenCalled();
  });
});
