import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { LocationController } from "../location.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  {
    method: "configureLevels",
    permission: "inventory:write",
    label: "PUT /inventory/warehouses/:wid/locations/config",
  },
  {
    method: "getConfig",
    permission: "inventory:read",
    label: "GET /inventory/warehouses/:wid/locations/config",
  },
  {
    method: "create",
    permission: "inventory:write",
    label: "POST /inventory/warehouses/:wid/locations",
  },
  {
    method: "findAll",
    permission: "inventory:read",
    label: "GET /inventory/warehouses/:wid/locations",
  },
  {
    method: "findById",
    permission: "inventory:read",
    label: "GET /inventory/warehouses/:wid/locations/:id",
  },
  {
    method: "update",
    permission: "inventory:write",
    label: "PATCH /inventory/warehouses/:wid/locations/:id",
  },
  {
    method: "activate",
    permission: "inventory:write",
    label: "POST /inventory/warehouses/:wid/locations/:id/activate",
  },
  {
    method: "deactivate",
    permission: "inventory:write",
    label: "POST /inventory/warehouses/:wid/locations/:id/deactivate",
  },
  {
    method: "getPath",
    permission: "inventory:read",
    label: "GET /inventory/locations/:id/path",
  },
];

describe("LocationController authorization (PR-INVENTORY-01-S02)", () => {
  it("class guards + 401/403/allow matrix for all endpoints", () => {
    assertControllerAuthCoverage(LocationController, ENDPOINTS);
  });

  for (const ep of ENDPOINTS) {
    it(`${ep.label}: metadata permission ${ep.permission}`, () => {
      assertControllerAuthCoverage(LocationController, [ep]);
    });
  }
});
