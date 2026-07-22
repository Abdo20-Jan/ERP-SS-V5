import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { WarehouseController } from "../warehouse.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  {
    method: "create",
    permission: "inventory:write",
    label: "POST /inventory/warehouses",
  },
  {
    method: "findAll",
    permission: "inventory:read",
    label: "GET /inventory/warehouses",
  },
  {
    method: "findById",
    permission: "inventory:read",
    label: "GET /inventory/warehouses/:id",
  },
  {
    method: "update",
    permission: "inventory:write",
    label: "PATCH /inventory/warehouses/:id",
  },
  {
    method: "activate",
    permission: "inventory:write",
    label: "POST /inventory/warehouses/:id/activate",
  },
  {
    method: "deactivate",
    permission: "inventory:write",
    label: "POST /inventory/warehouses/:id/deactivate",
  },
];

describe("WarehouseController authorization (PR-INVENTORY-01-S01)", () => {
  it("class guards + 401/403/allow matrix for all endpoints", () => {
    assertControllerAuthCoverage(WarehouseController, ENDPOINTS);
  });

  for (const ep of ENDPOINTS) {
    it(`${ep.label}: metadata permission ${ep.permission}`, () => {
      assertControllerAuthCoverage(WarehouseController, [ep]);
    });
  }
});
