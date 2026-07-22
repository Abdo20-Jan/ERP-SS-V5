import { describe, expect, it } from "vitest";
import {
  Warehouse,
  WarehouseConcurrencyError,
  WarehouseInactiveError,
  WarehouseType,
  WarehouseValidationError,
} from "../../src";

const baseCmd = () => ({
  code: "tp_nac",
  name: "Depósito TP Nacional",
  type: WarehouseType.TERCEIRIZADO,
  address: {
    street: "Ruta 9",
    number: "100",
    city: "Buenos Aires",
    province: "BA",
    country: "AR",
    postalCode: "1000",
  },
  zones: ["Z01"],
  capacity: 1000,
  capacityUnit: "m2",
});

describe("Warehouse aggregate", () => {
  it("creates warehouse with event and version 0", () => {
    const w = Warehouse.create(baseCmd());
    expect(w.code).toBe("TP_NAC");
    expect(w.isActive).toBe(true);
    expect(w.version).toBe(0);
    expect(w.pullEvents().map((e) => e.type)).toContain("WarehouseCreated");
  });

  it("rejects invalid type", () => {
    expect(() =>
      Warehouse.create({ ...baseCmd(), type: "INVALID" }),
    ).toThrow(WarehouseValidationError);
  });

  it("rejects empty code", () => {
    expect(() => Warehouse.create({ ...baseCmd(), code: "  " })).toThrow(
      WarehouseValidationError,
    );
  });

  it("rejects empty name", () => {
    expect(() => Warehouse.create({ ...baseCmd(), name: "" })).toThrow(
      WarehouseValidationError,
    );
  });

  it("rejects negative capacity", () => {
    expect(() => Warehouse.create({ ...baseCmd(), capacity: -1 })).toThrow(
      WarehouseValidationError,
    );
  });

  it("update increments version and emits event", () => {
    const w = Warehouse.create(baseCmd());
    w.pullEvents();
    w.update({ name: "Novo Nome" });
    expect(w.version).toBe(1);
    expect(w.name).toBe("Novo Nome");
    expect(w.pullEvents().map((e) => e.type)).toContain("WarehouseUpdated");
  });

  it("blocks update when inactive", () => {
    const w = Warehouse.create(baseCmd());
    w.deactivate("closed");
    expect(() => w.update({ name: "X" })).toThrow(WarehouseInactiveError);
  });

  it("deactivate requires reason", () => {
    const w = Warehouse.create(baseCmd());
    expect(() => w.deactivate("")).toThrow(WarehouseValidationError);
  });

  it("activate reactivates inactive warehouse", () => {
    const w = Warehouse.create(baseCmd());
    w.pullEvents();
    w.deactivate("temp");
    w.pullEvents();
    w.activate();
    expect(w.isActive).toBe(true);
    expect(w.pullEvents().map((e) => e.type)).toContain("WarehouseActivated");
  });

  it("toSnapshot/rehydrate round-trip", () => {
    const w = Warehouse.create(baseCmd());
    const snap = w.toSnapshot();
    const restored = Warehouse.rehydrate(snap);
    expect(restored.toSnapshot()).toEqual(snap);
  });

  it("expectedVersion mismatch throws concurrency error", () => {
    const w = Warehouse.create(baseCmd());
    expect(() => w.update({ name: "X", expectedVersion: 99 })).toThrow(
      WarehouseConcurrencyError,
    );
  });
});
