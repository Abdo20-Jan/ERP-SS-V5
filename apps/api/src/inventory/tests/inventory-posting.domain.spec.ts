import { describe, expect, it } from "vitest";
import { InventoryPostingProposal, PostingProposalStatus } from "@sunset/domain";
describe("PostingProposal Domain", () => {
  it("creates draft", () => {
    const p = InventoryPostingProposal.create({ sourceType: "MANUAL", sourceId: "s1", postingDate: new Date(), description: "test", correlationId: "c1", lines: [{ accountCode: "1.01.05", debit: "100.00", credit: "0" }, { accountCode: "6.01.01", debit: "0", credit: "100.00" }] });
    expect(p.status).toBe(PostingProposalStatus.DRAFT);
    expect(p.version).toBe(1);
  });
  it("validates balanced proposal", () => {
    const p = InventoryPostingProposal.create({ sourceType: "MANUAL", sourceId: "s1", postingDate: new Date(), description: "test", correlationId: "c1", lines: [{ accountCode: "1.01.05", debit: "100.00", credit: "0" }, { accountCode: "6.01.01", debit: "0", credit: "100.00" }] });
    p.validate({ proposalId: p.id, actorId: "u1", expectedVersion: 1 });
    expect(p.status).toBe(PostingProposalStatus.VALIDATED);
  });
  it("rejects unbalanced proposal", () => {
    const p = InventoryPostingProposal.create({ sourceType: "MANUAL", sourceId: "s1", postingDate: new Date(), description: "test", correlationId: "c1", lines: [{ accountCode: "1.01.05", debit: "100.00", credit: "0" }, { accountCode: "6.01.01", debit: "0", credit: "99.99" }] });
    expect(() => p.validate({ proposalId: p.id, actorId: "u1", expectedVersion: 1 })).toThrow("Unbalanced");
  });
  it("reverse creates mirrored proposal", () => {
    const p = InventoryPostingProposal.create({ sourceType: "MANUAL", sourceId: "s1", postingDate: new Date(), description: "test", correlationId: "c1", lines: [{ accountCode: "1.01.05", debit: "100.00", credit: "0" }, { accountCode: "6.01.01", debit: "0", credit: "100.00" }] });
    p.validate({ proposalId: p.id, actorId: "u1", expectedVersion: 1 });
    const rev = p.reverse({ proposalId: p.id, actorId: "u1", reversalDate: new Date(), reason: "test", reversalCorrelationId: "c2" });
    expect(p.status).toBe(PostingProposalStatus.REVERSED);
    expect(rev.status).toBe(PostingProposalStatus.VALIDATED);
  });
  it("version conflict blocks validate", () => {
    const p = InventoryPostingProposal.create({ sourceType: "MANUAL", sourceId: "s1", postingDate: new Date(), description: "test", correlationId: "c1", lines: [{ accountCode: "1.01.05", debit: "100.00", credit: "0" }, { accountCode: "6.01.01", debit: "0", credit: "100.00" }] });
    expect(() => p.validate({ proposalId: p.id, actorId: "u1", expectedVersion: 2 })).toThrow("Version conflict");
  });
});
