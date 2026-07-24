import { NotFoundException } from "@nestjs/common";
import { OrderAlert } from "@sunset/domain";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { OrderAlertService } from "../order-alert.service";
import {
  COMEX_S03_FIXED_TIME,
  COMEX_S03_TEST_IDS,
  COMEX_S03_TEST_ORG,
  makeAlertSnapshot,
} from "./comex-s03-regression.fixture";

const db = vi.hoisted(() => {
  const tx = { auditLog: { create: vi.fn() } };
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

type AcknowledgeWithParent = (
  orderId: string,
  alertId: string,
  actor: { id: string; organizationId: string },
) => Promise<unknown>;

describe("OrderAlertService P1 regressions", () => {
  let repo: Record<string, ReturnType<typeof vi.fn>>;
  let orders: Record<string, ReturnType<typeof vi.fn>>;
  let outbox: { enqueue: ReturnType<typeof vi.fn> };
  let receipts: Record<string, ReturnType<typeof vi.fn>>;
  let service: OrderAlertService;
  let acknowledge: AcknowledgeWithParent;

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
    repo = {
      findById: vi.fn(),
      findByOrder: vi.fn(),
      saveWithVersion: vi.fn().mockResolvedValue(undefined),
      save: vi.fn().mockResolvedValue(undefined),
    };
    orders = { findById: vi.fn() };
    outbox = { enqueue: vi.fn().mockResolvedValue(undefined) };
    receipts = {
      find: vi.fn().mockResolvedValue(null),
      append: vi.fn().mockResolvedValue(undefined),
    };
    service = new OrderAlertService(
      repo as never,
      orders as never,
      outbox as never,
      receipts as never,
    );
    acknowledge = service.acknowledge.bind(service) as unknown as AcknowledgeWithParent;
  });

  it("loads the alert through the same transaction used by save and side effects", async () => {
    repo.findById.mockResolvedValue(
      OrderAlert.rehydrate(makeAlertSnapshot()),
    );

    await acknowledge(
      COMEX_S03_TEST_IDS.order,
      COMEX_S03_TEST_IDS.alert,
      actor,
    );

    const lookup = repo.findById.mock.calls[0];
    expect(lookup?.at(-1)).toBe(db.tx);
  });

  it("treats an already acknowledged alert as replay without audit or outbox", async () => {
    repo.findById.mockResolvedValue(
      OrderAlert.rehydrate(
        makeAlertSnapshot({
          status: "ACKNOWLEDGED",
          acknowledgedBy: COMEX_S03_TEST_IDS.executor,
          acknowledgedAt: COMEX_S03_FIXED_TIME,
        }),
      ),
    );

    await acknowledge(
      COMEX_S03_TEST_IDS.order,
      COMEX_S03_TEST_IDS.alert,
      actor,
    );

    expect(repo.saveWithVersion).not.toHaveBeenCalled();
    expect(db.tx.auditLog.create).not.toHaveBeenCalled();
    expect(outbox.enqueue).not.toHaveBeenCalled();
  });

  it("rejects a child alert that does not belong to the order in the route", async () => {
    repo.findById.mockResolvedValue(
      OrderAlert.rehydrate(
        makeAlertSnapshot({ orderId: COMEX_S03_TEST_IDS.otherOrder }),
      ),
    );

    await expect(
      acknowledge(
        COMEX_S03_TEST_IDS.order,
        COMEX_S03_TEST_IDS.alert,
        actor,
      ),
    ).rejects.toBeInstanceOf(NotFoundException);
    expect(repo.saveWithVersion).not.toHaveBeenCalled();
    expect(outbox.enqueue).not.toHaveBeenCalled();
  });
});
