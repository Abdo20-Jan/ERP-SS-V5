import { describe, expect, it } from "vitest";
import {
  InternationalOrder,
  OrderValidationError,
  InvalidOrderStateError,
  OrderConcurrencyError,
  OperationType,
  OrderStatus,
} from "../../src";

const baseCmd = () => ({
  organizationId: "org_001",
  code: "PI-000001",
  operationType: OperationType.IMPORTACAO_DEFINITIVA,
  supplierPartyId: "11111111-1111-1111-1111-111111111111",
  createdBy: "user-creator",
});

const fullCmd = () => ({
  ...baseCmd(),
  incoterm: "FOB",
  paymentTerms: "30 dias",
  originCountry: "CN",
  currencyCode: "USD",
  expectedReadyDate: "2026-09-01",
  responsibleUserId: "user-resp",
});

function makeOrder() {
  return InternationalOrder.create(baseCmd());
}

function makeFullOrder() {
  const o = InternationalOrder.create(fullCmd());
  o.addLine({ productId: "p1", sku: "SKU-001", quantity: "100", unitPrice: "12.5", expectedVersion: 0 });
  return o;
}

describe("InternationalOrder aggregate", () => {
  it("creates order in DRAFT with created event and version 0", () => {
    const o = makeOrder();
    expect(o.status).toBe(OrderStatus.DRAFT);
    expect(o.version).toBe(0);
    expect(o.code).toBe("PI-000001");
    expect(o.pullEvents().map((e) => e.eventType)).toContain("international-order.created.v1");
  });

  it("rejects invalid operation_type", () => {
    expect(() =>
      InternationalOrder.create({ ...baseCmd(), operationType: "INVALID" }),
    ).toThrow(OrderValidationError);
  });

  it("addLine computes line total with decimal precision (no float)", () => {
    const o = makeOrder();
    o.addLine({ productId: "p1", sku: "SKU-001", quantity: "100.5", unitPrice: "12.5555", expectedVersion: 0 });
    const line = o.lines[0];
    expect(line.lineTotalOriginal.toString()).toBe("1261.83");
    expect(o.snapshot().subtotalOriginal).toBe("1261.83");
  });

  it("rejects binary number quantity inputs", () => {
    const o = makeOrder();
    expect(() =>
      o.addLine({ productId: "p1", sku: "SKU-001", quantity: 10 as never, unitPrice: "5", expectedVersion: 0 }),
    ).toThrow(OrderValidationError);
  });

  it("submit blocks when approval-required fields are missing (P0-START-45)", () => {
    const o = makeOrder();
    o.addLine({ productId: "p1", sku: "SKU-001", quantity: "10", unitPrice: "5", expectedVersion: 0 });
    expect(() => o.submit(1)).toThrow(OrderValidationError);
  });

  it("submit blocks when there are no active lines", () => {
    const o = InternationalOrder.create(fullCmd());
    expect(() => o.submit(0)).toThrow(OrderValidationError);
  });

  it("full flow: draft -> pending -> approved -> sent -> proforma -> production -> ready", () => {
    const o = makeFullOrder();
    o.submit(1);
    expect(o.status).toBe(OrderStatus.PENDING_APPROVAL);
    o.approve("user-approver", 2);
    expect(o.status).toBe(OrderStatus.APPROVED);
    o.send(3);
    expect(o.status).toBe(OrderStatus.ORDER_SENT);
    o.confirmProforma(4);
    expect(o.status).toBe(OrderStatus.PROFORMA_CONFIRMED);
    o.startProduction(5);
    expect(o.status).toBe(OrderStatus.IN_PRODUCTION);
    o.productionProgress({ lines: [{ lineNumber: 1, quantityProduced: "100" }], expectedVersion: 6 });
    o.readyToShip(7);
    expect(o.status).toBe(OrderStatus.READY_TO_SHIP);
  });

  it("approve enforces SoD: creator cannot approve own order", () => {
    const o = makeFullOrder();
    o.submit(1);
    expect(() => o.approve("user-creator", 2)).toThrow(OrderValidationError);
  });

  it("reject returns to DRAFT", () => {
    const o = makeFullOrder();
    o.submit(1);
    o.reject("Falta preço", 2);
    expect(o.status).toBe(OrderStatus.DRAFT);
  });

  it("production cannot exceed confirmed balance", () => {
    const o = makeFullOrder();
    o.submit(1); o.approve("user-approver", 2); o.send(3); o.confirmProforma(4); o.startProduction(5);
    expect(() =>
      o.productionProgress({ lines: [{ lineNumber: 1, quantityProduced: "101" }], expectedVersion: 6 }),
    ).toThrow(OrderValidationError);
  });

  it("readyToShip blocks when production incomplete", () => {
    const o = makeFullOrder();
    o.submit(1); o.approve("user-approver", 2); o.send(3); o.confirmProforma(4); o.startProduction(5);
    o.productionProgress({ lines: [{ lineNumber: 1, quantityProduced: "50" }], expectedVersion: 6 });
    expect(() => o.readyToShip(7)).toThrow(OrderValidationError);
  });

  it("readyToShipWithOverride allows partial production", () => {
    const o = makeFullOrder();
    o.submit(1); o.approve("user-approver", 2); o.send(3); o.confirmProforma(4); o.startProduction(5);
    o.productionProgress({ lines: [{ lineNumber: 1, quantityProduced: "50" }], expectedVersion: 6 });
    o.readyToShipWithOverride(7, "ovr-1");
    expect(o.status).toBe(OrderStatus.READY_TO_SHIP);
  });

  it("invalid transition throws InvalidOrderStateError", () => {
    const o = makeOrder();
    expect(() => o.approve("someone", 0)).toThrow(InvalidOrderStateError);
  });

  it("version mismatch throws OrderConcurrencyError", () => {
    const o = makeFullOrder();
    expect(() => o.submit(99)).toThrow(OrderConcurrencyError);
  });

  it("suspend and resume returns to previous status", () => {
    const o = makeFullOrder();
    o.submit(1); o.approve("user-approver", 2); o.send(3);
    o.suspend("Aguardando docs", 4, "user-ops");
    expect(o.status).toBe(OrderStatus.SUSPENDED);
    o.resume(5);
    expect(o.status).toBe(OrderStatus.ORDER_SENT);
  });

  it("cancel is terminal and cancels open balances", () => {
    const o = makeFullOrder();
    o.cancel("Fornecedor cancelou", 1, "user-ops");
    expect(o.status).toBe(OrderStatus.CANCELLED);
    expect(o.lines[0].quantityCancelled.toString()).toBe("100");
    expect(() => o.submit(2)).toThrow(InvalidOrderStateError);
  });

  it("snapshot/rehydrate round-trip preserves state", () => {
    const o = makeFullOrder();
    o.submit(1); o.approve("user-approver", 2);
    const r = InternationalOrder.rehydrate(o.snapshot());
    expect(r.status).toBe(o.status);
    expect(r.version).toBe(o.version);
    expect(r.lines[0].lineTotalOriginal.toString()).toBe("1250");
  });
});
