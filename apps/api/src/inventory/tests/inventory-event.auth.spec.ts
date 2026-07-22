import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { InventoryEventController } from "../inventory-event.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  { method: "list", permission: "inventory:event:read", label: "GET /inventory/events" },
  { method: "summary", permission: "inventory:event:read", label: "GET /inventory/events/summary" },
  { method: "getById", permission: "inventory:event:read", label: "GET /inventory/events/:id" },
  { method: "getPayload", permission: "inventory:event:payload:read", label: "GET /inventory/events/:id/payload" },
  { method: "requestReplay", permission: "inventory:event:replay", label: "POST /inventory/events/:id/replay" },
  { method: "moveToDeadLetter", permission: "inventory:event:dead-letter", label: "POST /inventory/events/:id/dead-letter" },
  { method: "cancel", permission: "inventory:event:cancel", label: "POST /inventory/events/:id/cancel" },
];

describe("InventoryEventController authorization (PR-INVENTORY-01-S08)", () => {
  it("class guards + matrix for all endpoints", () => {
    assertControllerAuthCoverage(InventoryEventController, ENDPOINTS);
  });

  for (const ep of ENDPOINTS) {
    it(`${ep.label}: metadata permission ${ep.permission}`, () => {
      assertControllerAuthCoverage(InventoryEventController, [ep]);
    });
  }
});
