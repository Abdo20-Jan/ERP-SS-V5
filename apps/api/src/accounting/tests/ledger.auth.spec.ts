import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { LedgerController } from "../ledger.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  {
    method: "getJournals",
    permission: "accounting:read",
    label: "GET /ledger/journals",
  },
  {
    method: "createJournal",
    permission: "accounting:write",
    label: "POST /ledger/journals",
  },
  {
    method: "createEntry",
    permission: "accounting:write",
    label: "POST /ledger/journal-entries",
  },
  {
    method: "getEntries",
    permission: "accounting:read",
    label: "GET /ledger/journal-entries",
  },
  {
    method: "getEntry",
    permission: "accounting:read",
    label: "GET /ledger/journal-entries/:id",
  },
  {
    method: "postEntry",
    permission: "accounting:write",
    label: "POST /ledger/journal-entries/:id/post",
  },
  {
    method: "reverseEntry",
    permission: "accounting:write",
    label: "POST /ledger/journal-entries/:id/reverse",
  },
];

describe("LedgerController authorization (MS-01-SS9)", () => {
  for (const ep of ENDPOINTS) {
    it(`${ep.label}: 401/403/allow + guards`, () => {
      assertControllerAuthCoverage(LedgerController, [ep]);
    });
  }
});
