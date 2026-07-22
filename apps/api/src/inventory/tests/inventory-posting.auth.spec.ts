import { describe, it } from "vitest";
import { assertControllerAuthCoverage, type EndpointAuthCase } from "../../auth/endpoint-auth.helpers";
import { InventoryPostingController } from "../inventory-posting.controller";
const ENDPOINTS: EndpointAuthCase[] = [
  { method: "create", permission: "inventory:posting:create", label: "POST /inventory/posting-proposals" },
  { method: "list", permission: "inventory:posting:read", label: "GET /inventory/posting-proposals" },
  { method: "getById", permission: "inventory:posting:read", label: "GET /inventory/posting-proposals/:id" },
  { method: "validate", permission: "inventory:posting:validate", label: "POST /inventory/posting-proposals/:id/validate" },
  { method: "reverse", permission: "inventory:posting:reverse", label: "POST /inventory/posting-proposals/:id/reverse" },
  { method: "cancel", permission: "inventory:posting:cancel", label: "POST /inventory/posting-proposals/:id/cancel" },
];
describe("InventoryPostingController auth", () => {
  it("all endpoints covered", () => { assertControllerAuthCoverage(InventoryPostingController, ENDPOINTS); });
  for (const ep of ENDPOINTS) { it(`${ep.label}: ${ep.permission}`, () => { assertControllerAuthCoverage(InventoryPostingController, [ep]); }); }
});
