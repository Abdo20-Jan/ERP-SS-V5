import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { ChartOfAccountsController } from "../chart-of-accounts.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  {
    method: "getActiveCoa",
    permission: "accounting:read",
    label: "GET /chart-of-accounts",
  },
  {
    method: "getCoaById",
    permission: "accounting:read",
    label: "GET /chart-of-accounts/:id",
  },
  {
    method: "createCoa",
    permission: "accounting:write",
    label: "POST /chart-of-accounts",
  },
  {
    method: "getAccounts",
    permission: "accounting:read",
    label: "GET /chart-of-accounts/:coaId/accounts",
  },
  {
    method: "createAccount",
    permission: "accounting:write",
    label: "POST /chart-of-accounts/:coaId/accounts",
  },
  {
    method: "getAccount",
    permission: "accounting:read",
    label: "GET /accounts/:id",
  },
  {
    method: "updateAccount",
    permission: "accounting:write",
    label: "PATCH /accounts/:id",
  },
  {
    method: "deleteAccount",
    permission: "accounting:write",
    label: "DELETE /accounts/:id",
  },
  {
    method: "deactivate",
    permission: "accounting:write",
    label: "POST /accounts/:id/deactivate",
  },
  {
    method: "activate",
    permission: "accounting:write",
    label: "POST /accounts/:id/activate",
  },
];

describe("ChartOfAccountsController authorization (MS-01-SS9)", () => {
  for (const ep of ENDPOINTS) {
    it(`${ep.label}: 401/403/allow + guards`, () => {
      assertControllerAuthCoverage(ChartOfAccountsController, [ep]);
    });
  }
});
