import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { PostingRuleController } from "../posting-rule.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  {
    method: "create",
    permission: "accounting:write",
    label: "POST /posting-rules",
  },
  {
    method: "findAll",
    permission: "accounting:read",
    label: "GET /posting-rules",
  },
  {
    method: "findById",
    permission: "accounting:read",
    label: "GET /posting-rules/:id",
  },
  {
    method: "update",
    permission: "accounting:write",
    label: "PATCH /posting-rules/:id",
  },
  {
    method: "deactivate",
    permission: "accounting:write",
    label: "POST /posting-rules/:id/deactivate",
  },
  {
    method: "activate",
    permission: "accounting:write",
    label: "POST /posting-rules/:id/activate",
  },
];

describe("PostingRuleController authorization (MS-01-SS9)", () => {
  for (const ep of ENDPOINTS) {
    it(`${ep.label}: 401/403/allow + guards`, () => {
      assertControllerAuthCoverage(PostingRuleController, [ep]);
    });
  }
});
