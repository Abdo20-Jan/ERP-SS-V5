import { describe, expect, it } from "vitest";
import {
  InvalidJournalStateError,
  InvalidLineError,
  JournalEntry,
  JournalEntryStatus,
  ReversalRequiresReasonError,
  UnbalancedEntryError,
} from "../../src";

const J = "01900000-0000-7000-8000-0000000000j1";
const A1 = "01900000-0000-7000-8000-0000000000a1";
const A2 = "01900000-0000-7000-8000-0000000000a2";
const U = "01900000-0000-7000-8000-0000000000u1";

function balancedDraft(corr = "corr-1") {
  return JournalEntry.createDraft({
    journalId: J,
    entryDate: "2026-07-21",
    description: "Teste",
    correlationId: corr,
    createdById: U,
    lines: [
      { accountId: A1, debitAmount: "100.00" },
      { accountId: A2, creditAmount: "100.00" },
    ],
  });
}

describe("JournalEntry", () => {
  it("createDraft balanced → DRAFT", () => {
    const e = balancedDraft();
    expect(e.status).toBe(JournalEntryStatus.DRAFT);
    expect(e.pullEvents().map((x) => x.type)).toContain("JournalEntryCreated");
  });

  it("createDraft without lines fails", () => {
    expect(() =>
      JournalEntry.createDraft({
        journalId: J,
        entryDate: "2026-07-21",
        description: "X",
        correlationId: "c",
        createdById: U,
        lines: [],
      }),
    ).toThrow(InvalidLineError);
  });

  it("post balanced → POSTED", () => {
    const e = balancedDraft("c-post");
    e.post({ postedById: U, entryNumber: "01-000001" });
    expect(e.status).toBe(JournalEntryStatus.POSTED);
    expect(e.entryNumber).toBe("01-000001");
  });

  it("post unbalanced → UnbalancedEntryError", () => {
    const e = JournalEntry.createDraft({
      journalId: J,
      entryDate: "2026-07-21",
      description: "Bad",
      correlationId: "c-unbal",
      createdById: U,
      lines: [
        { accountId: A1, debitAmount: "100" },
        { accountId: A2, creditAmount: "90" },
      ],
    });
    expect(() => e.post({ postedById: U, entryNumber: "01-000002" })).toThrow(
      UnbalancedEntryError,
    );
  });

  it("post already posted → InvalidState", () => {
    const e = balancedDraft("c-twice");
    e.post({ postedById: U, entryNumber: "01-000003" });
    expect(() => e.post({ postedById: U, entryNumber: "01-000004" })).toThrow(
      InvalidJournalStateError,
    );
  });

  it("reverse POSTED with reason → REVERSED + reversal POSTED", () => {
    const e = balancedDraft("c-rev");
    e.post({ postedById: U, entryNumber: "01-000005" });
    const { original, reversal } = e.reverse({
      reason: "Erro de lançamento",
      reversedById: U,
      reversalDate: "2026-07-22",
      reversalCorrelationId: "c-rev-out",
      reversalEntryNumber: "01-000006",
    });
    expect(original.status).toBe(JournalEntryStatus.REVERSED);
    expect(reversal.status).toBe(JournalEntryStatus.POSTED);
    expect(reversal.reversedFromId).toBe(original.id);
    expect(reversal.totalDebit.equals(original.totalDebit)).toBe(true);
  });

  it("reverse DRAFT → InvalidState", () => {
    const e = balancedDraft("c-draft-rev");
    expect(() =>
      e.reverse({
        reason: "x",
        reversedById: U,
        reversalDate: "2026-07-22",
        reversalCorrelationId: "c2",
        reversalEntryNumber: "01-000007",
      }),
    ).toThrow(InvalidJournalStateError);
  });

  it("reverse REVERSED → InvalidState", () => {
    const e = balancedDraft("c-term");
    e.post({ postedById: U, entryNumber: "01-000008" });
    e.reverse({
      reason: "once",
      reversedById: U,
      reversalDate: "2026-07-22",
      reversalCorrelationId: "c-term-r",
      reversalEntryNumber: "01-000009",
    });
    expect(() =>
      e.reverse({
        reason: "twice",
        reversedById: U,
        reversalDate: "2026-07-23",
        reversalCorrelationId: "c-term-r2",
        reversalEntryNumber: "01-000010",
      }),
    ).toThrow(InvalidJournalStateError);
  });

  it("reverse without reason → ReversalRequiresReasonError", () => {
    const e = balancedDraft("c-noreason");
    e.post({ postedById: U, entryNumber: "01-000011" });
    expect(() =>
      e.reverse({
        reason: "  ",
        reversedById: U,
        reversalDate: "2026-07-22",
        reversalCorrelationId: "c-nr",
        reversalEntryNumber: "01-000012",
      }),
    ).toThrow(ReversalRequiresReasonError);
  });

  it("preserves correlationId", () => {
    const e = balancedDraft("my-corr-id");
    expect(e.correlationId).toBe("my-corr-id");
  });
});
