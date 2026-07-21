import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { DimensionController } from "../dimension.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  {
    method: "create",
    permission: "accounting:write",
    label: "POST /dimensions",
  },
  {
    method: "findAll",
    permission: "accounting:read",
    label: "GET /dimensions",
  },
  {
    method: "findById",
    permission: "accounting:read",
    label: "GET /dimensions/:id",
  },
  {
    method: "update",
    permission: "accounting:write",
    label: "PATCH /dimensions/:id",
  },
  {
    method: "deactivate",
    permission: "accounting:write",
    label: "POST /dimensions/:id/deactivate",
  },
  {
    method: "activate",
    permission: "accounting:write",
    label: "POST /dimensions/:id/activate",
  },
  {
    method: "setRestriction",
    permission: "accounting:write",
    label: "POST /accounts/:accountId/restrictions",
  },
  {
    method: "getRestrictions",
    permission: "accounting:read",
    label: "GET /accounts/:accountId/restrictions",
  },
  {
    method: "removeRestriction",
    permission: "accounting:write",
    label: "DELETE /accounts/:accountId/restrictions/:dimId",
  },
];

describe("DimensionController authorization (MS-01-SS9)", () => {
  for (const ep of ENDPOINTS) {
    it(`${ep.label}: 401/403/allow + guards`, () => {
      assertControllerAuthCoverage(DimensionController, [ep]);
    });
  }
});
