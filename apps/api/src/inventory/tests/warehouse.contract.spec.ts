import { describe, expect, it } from "vitest";
import type {
  CreateWarehouseDto,
  DeactivateWarehouseDto,
  UpdateWarehouseDto,
  WarehouseDto,
  WarehouseListDto,
} from "@sunset/contracts";

describe("Warehouse contract shapes (PR-INVENTORY-01-S01)", () => {
  it("CreateWarehouseDto example is structurally valid", () => {
    const dto: CreateWarehouseDto = {
      code: "TP_NAC",
      name: "Depósito TP Nacional",
      type: "TERCEIRIZADO",
      address: {
        street: "Ruta 9",
        number: "1",
        city: "CABA",
        province: "CABA",
        country: "AR",
        postalCode: "1000",
      },
      zones: ["Z01"],
      capacity: 5000,
      capacityUnit: "m2",
    };
    expect(dto.code).toBeTruthy();
    expect(dto.type).toBe("TERCEIRIZADO");
  });

  it("UpdateWarehouseDto supports expectedVersion", () => {
    const dto: UpdateWarehouseDto = {
      name: "Updated",
      expectedVersion: 0,
    };
    expect(dto.expectedVersion).toBe(0);
  });

  it("DeactivateWarehouseDto requires reason", () => {
    const dto: DeactivateWarehouseDto = { reason: "closed" };
    expect(dto.reason.length).toBeGreaterThan(0);
  });

  it("WarehouseDto and list shape", () => {
    const item: WarehouseDto = {
      id: "01900000-0000-7000-8000-000000000001",
      organizationId: "org_001",
      code: "TP_NAC",
      name: "Depósito TP Nacional",
      type: "TERCEIRIZADO",
      addressStreet: null,
      addressNumber: null,
      addressCity: null,
      addressProvince: null,
      addressCountry: "AR",
      addressPostalCode: null,
      zones: [],
      capacity: null,
      capacityUnit: null,
      isActive: true,
      version: 0,
      createdAt: "2026-07-21T00:00:00.000Z",
      updatedAt: "2026-07-21T00:00:00.000Z",
    };
    const list: WarehouseListDto = {
      data: [item],
      total: 1,
      page: 1,
      limit: 20,
    };
    expect(list.data).toHaveLength(1);
    expect(list.total).toBe(1);
  });
});
