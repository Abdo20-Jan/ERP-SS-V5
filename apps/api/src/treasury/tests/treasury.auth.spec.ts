import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { TreasuryController } from "../treasury.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  {
    method: "listAccounts",
    permission: "treasury:read",
    label: "GET /treasury/bank-accounts",
  },
  {
    method: "listReconciliation",
    permission: "treasury:read",
    label: "GET /treasury/reconciliation-lines",
  },
];

describe("TreasuryController authorization", () => {
  for (const ep of ENDPOINTS) {
    it(`${ep.label}: 401/403/allow + guards`, () => {
      assertControllerAuthCoverage(TreasuryController, [ep]);
    });
  }
});
