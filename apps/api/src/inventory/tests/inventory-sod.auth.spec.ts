import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { InventorySoDController } from "../inventory-sod.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  { method: "createRule", permission: "inventory:sod:write", label: "POST /inventory/sod/rules" },
  { method: "updateRule", permission: "inventory:sod:write", label: "POST /inventory/sod/rules/:id" },
  { method: "deactivateRule", permission: "inventory:sod:write", label: "POST /inventory/sod/rules/:id/deactivate" },
  { method: "listRules", permission: "inventory:sod:read", label: "GET /inventory/sod/rules" },
  { method: "evaluate", permission: "inventory:sod:read", label: "POST /inventory/sod/evaluate" },
  { method: "listViolations", permission: "inventory:sod:read", label: "GET /inventory/sod/violations" },
  { method: "resolveViolation", permission: "inventory:sod:write", label: "POST /inventory/sod/violations/:id/resolve" },
  { method: "requestException", permission: "inventory:sod:write", label: "POST /inventory/sod/violations/:id/exceptions" },
  { method: "listExceptions", permission: "inventory:sod:read", label: "GET /inventory/sod/exceptions" },
  { method: "approveException", permission: "inventory:sod:approve", label: "POST /inventory/sod/exceptions/:id/approve" },
  { method: "rejectException", permission: "inventory:sod:approve", label: "POST /inventory/sod/exceptions/:id/reject" },
  { method: "revokeException", permission: "inventory:sod:approve", label: "POST /inventory/sod/exceptions/:id/revoke" },
];

describe("InventorySoDController authorization (PR-INVENTORY-01-S07)", () => {
  it("class guards + matrix for all endpoints", () => {
    assertControllerAuthCoverage(InventorySoDController, ENDPOINTS);
  });

  for (const ep of ENDPOINTS) {
    it(`${ep.label}: metadata permission ${ep.permission}`, () => {
      assertControllerAuthCoverage(InventorySoDController, [ep]);
    });
  }
});
