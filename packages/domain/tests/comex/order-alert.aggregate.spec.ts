import { describe, expect, it } from "vitest";
import {
  AlertSeverity,
  AlertStatus,
  OrderAlert,
  type OrderAlertSnapshot,
  OrderConcurrencyError,
} from "../../src";

function createAlert() {
  return OrderAlert.create({
    organizationId: "org_001",
    orderId: "order-001",
    code: "DOC_DIVERGENCE",
    severity: AlertSeverity.WARN,
    message: "Document divergence",
  });
}

function legacySnapshot(
  overrides: Partial<OrderAlertSnapshot> = {},
): OrderAlertSnapshot {
  return {
    id: "00000000-0000-7000-8000-000000000801",
    orderId: "order-001",
    code: "LEGACY",
    severity: AlertSeverity.INFO,
    message: "Legacy alert",
    status: AlertStatus.OPEN,
    acknowledgedBy: null,
    acknowledgedAt: null,
    resolvedBy: null,
    resolvedAt: null,
    resolutionReason: null,
    createdAt: "2026-07-23T12:00:00.000Z",
    ...overrides,
  };
}

describe("OrderAlert CAS", () => {
  it("creates in OPEN with organization and CAS version zero", () => {
    const alert = createAlert();

    expect(alert.status).toBe(AlertStatus.OPEN);
    expect(alert.organizationId).toBe("org_001");
    expect(alert.version).toBe(0);
    expect(alert.snapshot()).toMatchObject({
      organizationId: "org_001",
      version: 0,
    });
  });

  it("keeps legacy create and mutation calls compatible", () => {
    const alert = OrderAlert.create({
      orderId: "order-legacy",
      code: "LEGACY",
      severity: AlertSeverity.WARN,
      message: "Legacy call",
    });

    expect(alert.organizationId).toBe("org_001");
    expect(alert.ack("actor-legacy")).toBe(true);
    expect(alert.version).toBe(1);
  });

  it("increments once on acknowledge and not on a no-op", () => {
    const alert = createAlert();

    expect(alert.ack("actor-001", 0)).toBe(true);
    expect(alert.status).toBe(AlertStatus.ACKNOWLEDGED);
    expect(alert.version).toBe(1);
    const acknowledgedAt = alert.snapshot().acknowledgedAt;

    expect(alert.ack("actor-002", 1)).toBe(false);
    expect(alert.version).toBe(1);
    expect(alert.snapshot().acknowledgedAt).toBe(acknowledgedAt);
  });

  it("checks a stale acknowledge version before its no-op", () => {
    const alert = createAlert();
    alert.ack("actor-001", 0);

    expect(() => alert.ack("actor-002", 0)).toThrow(OrderConcurrencyError);
    expect(alert.version).toBe(1);
    expect(alert.snapshot().acknowledgedBy).toBe("actor-001");
  });

  it("increments once on resolve and not on a no-op", () => {
    const alert = createAlert();

    expect(alert.resolve("actor-001", "fixed", 0)).toBe(true);
    expect(alert.status).toBe(AlertStatus.RESOLVED);
    expect(alert.version).toBe(1);
    const resolvedAt = alert.snapshot().resolvedAt;

    expect(alert.resolve("actor-002", "replacement", 1)).toBe(false);
    expect(alert.version).toBe(1);
    expect(alert.snapshot()).toMatchObject({
      resolvedBy: "actor-001",
      resolutionReason: "fixed",
      resolvedAt,
    });
  });

  it("checks a stale resolve version before its no-op", () => {
    const alert = createAlert();
    alert.resolve("actor-001", "fixed", 0);

    expect(() => alert.resolve("actor-002", "replacement", 0)).toThrow(
      OrderConcurrencyError,
    );
    expect(alert.version).toBe(1);
    expect(alert.snapshot().resolvedBy).toBe("actor-001");
  });

  it("rehydrates legacy snapshots without organization/version as org_001/v0", () => {
    const alert = OrderAlert.rehydrate(legacySnapshot());

    expect(alert.organizationId).toBe("org_001");
    expect(alert.version).toBe(0);
    expect(alert.snapshot()).toMatchObject({
      organizationId: "org_001",
      version: 0,
    });
  });

  it("preserves organization and version in a snapshot round trip", () => {
    const original = createAlert();
    original.ack("actor-001", 0);

    const restored = OrderAlert.rehydrate(original.snapshot());

    expect(restored.organizationId).toBe(original.organizationId);
    expect(restored.version).toBe(original.version);
    expect(restored.snapshot()).toEqual(original.snapshot());
  });
});
