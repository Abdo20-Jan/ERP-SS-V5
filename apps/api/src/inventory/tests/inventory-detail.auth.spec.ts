import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { InventoryDetailController } from "../inventory-detail.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  {
    method: "getWarehouseDetail",
    permission: "inventory:read",
    label: "GET /inventory/warehouses/:id/detail",
  },
  {
    method: "getLocationDetail",
    permission: "inventory:read",
    label: "GET /inventory/warehouses/:warehouseId/locations/:locationId/detail",
  },
  {
    method: "validateWarehouse",
    permission: "inventory:write",
    label: "POST /inventory/warehouses/validate",
  },
  {
    method: "validateLocation",
    permission: "inventory:write",
    label: "POST /inventory/locations/validate",
  },
];

describe("InventoryDetailController authorization (PR-INVENTORY-01-S05)", () => {
  it("class guards + 401/403/allow matrix for all endpoints", () => {
    assertControllerAuthCoverage(InventoryDetailController, ENDPOINTS);
  });

  for (const ep of ENDPOINTS) {
    it(`${ep.label}: metadata permission ${ep.permission}`, () => {
      assertControllerAuthCoverage(InventoryDetailController, [ep]);
    });
  }
});
