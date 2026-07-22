import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { OverrideController } from "../override.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  { method: "request", permission: "inventory:override:request", label: "POST /inventory/overrides" },
  { method: "list", permission: "inventory:override:view", label: "GET /inventory/overrides" },
  { method: "history", permission: "inventory:override:view", label: "GET /inventory/overrides/history" },
  { method: "getById", permission: "inventory:override:view", label: "GET /inventory/overrides/:id" },
  { method: "approve", permission: "inventory:override:approve", label: "POST /inventory/overrides/:id/approve" },
  { method: "reject", permission: "inventory:override:approve", label: "POST /inventory/overrides/:id/reject" },
  { method: "cancel", permission: "inventory:override:request", label: "POST /inventory/overrides/:id/cancel" },
  { method: "execute", permission: "inventory:override:execute", label: "POST /inventory/overrides/:id/execute" },
];

describe("OverrideController authorization (PR-INVENTORY-01-S03)", () => {
  it("class guards + matrix for all endpoints", () => {
    assertControllerAuthCoverage(OverrideController, ENDPOINTS);
  });

  for (const ep of ENDPOINTS) {
    it(`${ep.label}: metadata permission ${ep.permission}`, () => {
      assertControllerAuthCoverage(OverrideController, [ep]);
    });
  }
});
