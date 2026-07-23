import { NotFoundException } from "@nestjs/common";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ConflictError, ValidationError } from "@sunset/contracts";
import { InternationalOrder, OperationType, OrderStatus } from "@sunset/domain";
import { InternationalOrderService } from "../international-order.service";
import { stableHash } from "../comex-hash.util";

vi.mock("@sunset/db", () => ({
  prisma: {
    $transaction: vi.fn(async (fn: (tx: unknown) => Promise<unknown>) => {
      const tx = {
        auditLog: { create: vi.fn().mockResolvedValue({}) },
        internationalOrderStateTransition: { create: vi.fn().mockResolvedValue({}) },
      };
      return fn(tx);
    }),
  },
}));

vi.mock("@sunset/observability", () => ({
  createLogger: () => ({ info: vi.fn(), error: vi.fn(), warn: vi.fn() }),
  getCorrelationId: () => "corr-test",
}));

const baseDto = () => ({
  operationType: "IMPORTACAO_DEFINITIVA",
  supplierPartyId: "11111111-1111-1111-1111-111111111111",
});

function makeOrder(createdBy = "user-creator") {
  const o = InternationalOrder.create({
    organizationId: "org_001",
    code: "PI-000001",
    operationType: OperationType.IMPORTACAO_DEFINITIVA,
    supplierPartyId: "11111111-1111-1111-1111-111111111111",
    incoterm: "FOB",
    paymentTerms: "30d",
    originCountry: "CN",
    currencyCode: "USD",
    expectedReadyDate: "2026-09-01",
    responsibleUserId: "user-resp",
    createdBy,
    idempotencyKey: "key-1",
    idempotencyPayloadHash: stableHash({
      operationType: "IMPORTACAO_DEFINITIVA",
      supplierPartyId: "11111111-1111-1111-1111-111111111111",
      exporterPartyId: null,
      manufacturerPartyId: null,
      incoterm: null,
      paymentTerms: null,
      originCountry: null,
      currencyCode: null,
      expectedReadyDate: null,
      responsibleUserId: null,
    }),
  });
  o.addLine({ productId: "p1", sku: "SKU-1", quantity: "10", unitPrice: "5", expectedVersion: 0 });
  return o;
}

describe("InternationalOrderService", () => {
  let service: InternationalOrderService;
  let repo: any;
  let outbox: any;

  beforeEach(() => {
    repo = {
      save: vi.fn().mockResolvedValue(undefined),
      findById: vi.fn(),
      findByIdempotencyKey: vi.fn(),
      findAll: vi.fn().mockResolvedValue({ data: [], total: 0 }),
      nextCode: vi.fn().mockResolvedValue("PI-000001"),
      findTransitionReplay: vi.fn().mockResolvedValue(null),
    };
    outbox = { enqueue: vi.fn().mockResolvedValue(undefined) };
    service = new InternationalOrderService(repo, outbox);
  });

  it("create persists order with human code and outbox", async () => {
    repo.findByIdempotencyKey.mockResolvedValue(null);
    const r = await service.create(baseDto(), { id: "user-creator" });
    expect(r.status).toBe(OrderStatus.DRAFT);
    expect(r.code).toBe("PI-000001");
    expect(repo.save).toHaveBeenCalled();
    expect(outbox.enqueue).toHaveBeenCalled();
  });

  it("create with repeated idempotencyKey returns existing order without saving", async () => {
    const existing = makeOrder();
    repo.findByIdempotencyKey.mockResolvedValue(existing);
    const r = await service.create({ ...baseDto(), idempotencyKey: "key-1" }, { id: "user-creator" });
    expect(r.id).toBe(existing.snapshot().id);
    expect(repo.save).not.toHaveBeenCalled();
  });

  it("submit on order missing fields maps to ValidationError", async () => {
    const o = InternationalOrder.create({
      organizationId: "org_001",
      code: "PI-000002",
      operationType: OperationType.IMPORTACAO_DEFINITIVA,
      supplierPartyId: "11111111-1111-1111-1111-111111111111",
      createdBy: "user-creator",
    });
    o.addLine({ productId: "p1", sku: "SKU-1", quantity: "10", unitPrice: "5", expectedVersion: 0 });
    repo.findById.mockResolvedValue(o);
    await expect(service.submit(String(o.id), { expectedVersion: 1 }, { id: "u" })).rejects.toThrow(ValidationError);
  });

  it("approve by creator throws (SoD enforced)", async () => {
    const o = makeOrder("user-creator");
    o.submit(1);
    repo.findById.mockResolvedValue(o);
    await expect(service.approve(String(o.id), { expectedVersion: 2 }, { id: "user-creator" })).rejects.toThrow(ConflictError);
  });

  it("approve by different user succeeds and saves transition", async () => {
    const o = makeOrder("user-creator");
    o.submit(1);
    repo.findById.mockResolvedValue(o);
    const r = await service.approve(String(o.id), { expectedVersion: 2 }, { id: "user-approver" });
    expect(r.status).toBe(OrderStatus.APPROVED);
    expect(repo.save).toHaveBeenCalled();
    expect(outbox.enqueue).toHaveBeenCalled();
  });

  it("findById throws NotFoundException when order does not exist", async () => {
    repo.findById.mockResolvedValue(null);
    await expect(service.findById("missing", { id: "u" })).rejects.toThrow(NotFoundException);
  });

  it("findAll returns paginated list", async () => {
    repo.findAll.mockResolvedValue({ data: [makeOrder()], total: 1 });
    const r = await service.findAll({ page: 1, limit: 20 }, { id: "u" });
    expect(r.total).toBe(1);
    expect(r.data).toHaveLength(1);
  });

  it("cancel order saves CANCELLED status", async () => {
    const o = makeOrder();
    repo.findById.mockResolvedValue(o);
    const r = await service.cancel(String(o.id), { reason: "x", expectedVersion: 1 }, { id: "u" });
    expect(r.status).toBe(OrderStatus.CANCELLED);
  });
});
