import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { InternationalOrderController } from "../international-order.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  { method: "create", permission: "comex:order:create", label: "POST /comex/international-orders" },
  { method: "findAll", permission: "comex:order:read", label: "GET /comex/international-orders" },
  { method: "findById", permission: "comex:order:read", label: "GET /comex/international-orders/:id" },
  { method: "update", permission: "comex:order:update", label: "PATCH /comex/international-orders/:id" },
  { method: "addLine", permission: "comex:order:update", label: "POST /comex/international-orders/:id/lines" },
  { method: "updateLine", permission: "comex:order:update", label: "PATCH /comex/international-orders/:id/lines/:lineNumber" },
  { method: "cancelLine", permission: "comex:order:update", label: "POST /comex/international-orders/:id/lines/:lineNumber/cancel" },
  { method: "submit", permission: "comex:order:submit", label: "POST /comex/international-orders/:id/submit" },
  { method: "approve", permission: "comex:order:approve", label: "POST /comex/international-orders/:id/approve" },
  { method: "reject", permission: "comex:order:approve", label: "POST /comex/international-orders/:id/reject" },
  { method: "send", permission: "comex:order:send", label: "POST /comex/international-orders/:id/send" },
  { method: "startProduction", permission: "comex:order:production:update", label: "POST /comex/international-orders/:id/start-production" },
  { method: "productionProgress", permission: "comex:order:production:update", label: "POST /comex/international-orders/:id/production-progress" },
  { method: "readyToShip", permission: "comex:order:production:update", label: "POST /comex/international-orders/:id/ready-to-ship" },
  { method: "suspend", permission: "comex:order:update", label: "POST /comex/international-orders/:id/suspend" },
  { method: "resume", permission: "comex:order:update", label: "POST /comex/international-orders/:id/resume" },
  { method: "cancel", permission: "comex:order:cancel", label: "POST /comex/international-orders/:id/cancel" },
];

describe("InternationalOrderController authorization (PR-COMEX-01-S01/S02)", () => {
  it("class guards + 401/403/allow matrix for all endpoints", () => {
    assertControllerAuthCoverage(InternationalOrderController, ENDPOINTS);
  });

  for (const ep of ENDPOINTS) {
    it(`${ep.label}: metadata permission ${ep.permission}`, () => {
      assertControllerAuthCoverage(InternationalOrderController, [ep]);
    });
  }
});
