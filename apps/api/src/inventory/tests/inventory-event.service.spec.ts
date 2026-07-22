import { beforeEach, describe, expect, it, vi } from "vitest";
import { InventoryEventService } from "../inventory-event.service";
import { InventoryEventOutbox } from "@sunset/domain";

vi.mock("@sunset/db", () => ({
  prisma: {
    $transaction: vi.fn(async (fn: any) => fn({ auditLog: { create: vi.fn() } })),
    auditLog: { create: vi.fn() },
  },
}));

vi.mock("@sunset/observability", () => ({
  createLogger: () => ({ info: vi.fn(), error: vi.fn(), warn: vi.fn() }),
  getCorrelationId: () => "corr-test",
}));

describe("InventoryEventService", () => {
  let service: InventoryEventService;
  let repo: any;

  beforeEach(() => {
    repo = {
      save: vi.fn(), findById: vi.fn(), findAll: vi.fn().mockResolvedValue({ data: [], total: 0 }),
      summary: vi.fn().mockResolvedValue({}),
    };
    service = new InventoryEventService(repo);
  });

  it("lists events without payload", async () => {
    const evt = InventoryEventOutbox.record({
      organizationId: "org1", eventType: "test.event", eventVersion: 1,
      aggregateType: "test", aggregateId: "id1", producer: "test",
      payload: { secret: "data" }, correlationId: "corr1",
    });
    repo.findAll.mockResolvedValue({ data: [evt], total: 1 });
    const res = await service.list({});
    expect(res.data[0]).not.toHaveProperty("payload");
  });

  it("gets payload and audits", async () => {
    const evt = InventoryEventOutbox.record({
      organizationId: "org1", eventType: "test.event", eventVersion: 1,
      aggregateType: "test", aggregateId: "id1", producer: "test",
      payload: { secret: "data" }, correlationId: "corr1",
    });
    repo.findById.mockResolvedValue(evt);
    const res = await service.getPayload(evt.id, "u1");
    expect(res.payload).toEqual({ secret: "data" });
  });
});
