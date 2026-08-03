import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { ComexController } from "../comex.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  {
    method: "list",
    permission: "comex:read",
    label: "GET /comex/orders",
  },
];

describe("ComexController authorization", () => {
  for (const ep of ENDPOINTS) {
    it(`${ep.label}: 401/403/allow + guards`, () => {
      assertControllerAuthCoverage(ComexController, [ep]);
    });
  }
});
