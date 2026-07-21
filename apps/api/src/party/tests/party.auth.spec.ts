import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { PartyController } from "../party.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  { method: "create", permission: "party:write", label: "POST /parties" },
  { method: "findAll", permission: "party:read", label: "GET /parties" },
  { method: "findById", permission: "party:read", label: "GET /parties/:id" },
  { method: "update", permission: "party:write", label: "PATCH /parties/:id" },
  {
    method: "activate",
    permission: "party:write",
    label: "POST /parties/:id/activate",
  },
  {
    method: "deactivate",
    permission: "party:write",
    label: "POST /parties/:id/deactivate",
  },
];

describe("PartyController authorization (MS-01-SS9)", () => {
  it("class guards + 401/403/allow matrix for all endpoints", () => {
    assertControllerAuthCoverage(PartyController, ENDPOINTS);
  });

  for (const ep of ENDPOINTS) {
    it(`${ep.label}: metadata permission ${ep.permission}`, () => {
      assertControllerAuthCoverage(PartyController, [ep]);
    });
  }
});
