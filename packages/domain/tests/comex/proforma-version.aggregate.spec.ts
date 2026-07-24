import { describe, expect, it } from "vitest";
import {
  OrderConcurrencyError,
  ProformaStatus,
  ProformaVersion,
  type ProformaVersionSnapshot,
} from "../../src";

function createProforma() {
  return ProformaVersion.create({
    orderId: "order-001",
    organizationId: "org_001",
    supplierPartyId: "supplier-001",
    proformaNumber: "PI-001",
    versionNumber: 7,
    issueDate: "2026-07-23",
    totalAmount: "1250.00",
    currencyCode: "USD",
    createdBy: "actor-001",
    correlationId: "corr-001",
  });
}

function legacySnapshot(
  overrides: Partial<ProformaVersionSnapshot> = {},
): ProformaVersionSnapshot {
  return {
    id: "00000000-0000-7000-8000-000000000901",
    orderId: "order-001",
    organizationId: "org_001",
    supplierPartyId: "supplier-001",
    proformaNumber: "PI-LEGACY",
    versionNumber: 4,
    issueDate: null,
    totalAmount: null,
    currencyCode: "USD",
    status: ProformaStatus.REGISTERED,
    createdBy: null,
    confirmedBy: null,
    confirmedAt: null,
    correlationId: null,
    createdAt: "2026-07-23T12:00:00.000Z",
    ...overrides,
  };
}

describe("ProformaVersion CAS", () => {
  it("creates with CAS version zero independently of document versionNumber", () => {
    const proforma = createProforma();

    expect(proforma.status).toBe(ProformaStatus.REGISTERED);
    expect(proforma.version).toBe(0);
    expect(proforma.versionNumber).toBe(7);
    expect(proforma.snapshot()).toMatchObject({ version: 0, versionNumber: 7 });
  });

  it("increments once on confirm and not on a no-op", () => {
    const proforma = createProforma();

    expect(proforma.confirm("actor-002", 0)).toBe(true);
    expect(proforma.status).toBe(ProformaStatus.CONFIRMED);
    expect(proforma.version).toBe(1);
    expect(proforma.versionNumber).toBe(7);
    const confirmedAt = proforma.snapshot().confirmedAt;

    expect(proforma.confirm("actor-003", 1)).toBe(false);
    expect(proforma.version).toBe(1);
    expect(proforma.snapshot()).toMatchObject({
      confirmedBy: "actor-002",
      confirmedAt,
    });
  });

  it("checks a stale confirm version before its no-op", () => {
    const proforma = createProforma();
    proforma.confirm("actor-002", 0);

    expect(() => proforma.confirm("actor-003", 0)).toThrow(
      OrderConcurrencyError,
    );
    expect(proforma.version).toBe(1);
    expect(proforma.snapshot().confirmedBy).toBe("actor-002");
  });

  it("increments once on supersede and not on a no-op", () => {
    const proforma = createProforma();

    expect(proforma.supersede(0)).toBe(true);
    expect(proforma.status).toBe(ProformaStatus.SUPERSEDED);
    expect(proforma.version).toBe(1);
    expect(proforma.versionNumber).toBe(7);

    expect(proforma.supersede(1)).toBe(false);
    expect(proforma.version).toBe(1);
  });

  it("checks a stale supersede version before its no-op", () => {
    const proforma = createProforma();
    proforma.supersede(0);

    expect(() => proforma.supersede(0)).toThrow(OrderConcurrencyError);
    expect(proforma.version).toBe(1);
  });

  it("keeps legacy mutation calls compatible", () => {
    const confirmable = createProforma();
    const supersedable = createProforma();

    expect(confirmable.confirm("actor-legacy")).toBe(true);
    expect(supersedable.supersede()).toBe(true);
    expect(confirmable.version).toBe(1);
    expect(supersedable.version).toBe(1);
  });

  it("rehydrates a legacy snapshot without CAS version as zero", () => {
    const proforma = ProformaVersion.rehydrate(legacySnapshot());

    expect(proforma.version).toBe(0);
    expect(proforma.versionNumber).toBe(4);
    expect(proforma.snapshot()).toMatchObject({ version: 0, versionNumber: 4 });
  });

  it("preserves CAS and document versions in a snapshot round trip", () => {
    const original = createProforma();
    original.confirm("actor-002", 0);

    const restored = ProformaVersion.rehydrate(original.snapshot());

    expect(restored.version).toBe(1);
    expect(restored.versionNumber).toBe(7);
    expect(restored.snapshot()).toEqual(original.snapshot());
  });
});
