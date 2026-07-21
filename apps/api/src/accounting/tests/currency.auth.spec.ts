import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { CurrencyController } from "../currency.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  {
    method: "getCurrentRate",
    permission: "accounting:read",
    label: "GET /exchange-rates/current",
  },
  {
    method: "findAll",
    permission: "accounting:read",
    label: "GET /currencies",
  },
  {
    method: "findById",
    permission: "accounting:read",
    label: "GET /currencies/:id",
  },
  {
    method: "create",
    permission: "accounting:write",
    label: "POST /currencies",
  },
  {
    method: "getRates",
    permission: "accounting:read",
    label: "GET /currencies/:id/rates",
  },
  {
    method: "setRate",
    permission: "accounting:write",
    label: "POST /currencies/:id/rates",
  },
];

describe("CurrencyController authorization (MS-01-SS9)", () => {
  for (const ep of ENDPOINTS) {
    it(`${ep.label}: 401/403/allow + guards`, () => {
      assertControllerAuthCoverage(CurrencyController, [ep]);
    });
  }
});
