import { describe, expect, it } from "vitest";
import { POSTING_EVENT_TYPES } from "@sunset/contracts";
describe("PostingProposal contracts", () => {
  it("exports event types", () => {
    expect(POSTING_EVENT_TYPES.CREATED).toBe("inventory.posting.created");
    expect(POSTING_EVENT_TYPES.VALIDATED).toBe("inventory.posting.validated");
  });
});
