import { describe, expect, it } from "vitest";
import {
  assertTransition,
  canTransition,
  InvalidJournalStateError,
  JournalEntryStatus,
} from "../../src";

describe("JournalEntry state machine", () => {
  it("DRAFT → POSTED OK", () => {
    expect(
      canTransition(JournalEntryStatus.DRAFT, JournalEntryStatus.POSTED),
    ).toBe(true);
    expect(() =>
      assertTransition(JournalEntryStatus.DRAFT, JournalEntryStatus.POSTED),
    ).not.toThrow();
  });

  it("POSTED → REVERSED OK", () => {
    expect(
      canTransition(JournalEntryStatus.POSTED, JournalEntryStatus.REVERSED),
    ).toBe(true);
  });

  it("DRAFT → REVERSED blocked", () => {
    expect(
      canTransition(JournalEntryStatus.DRAFT, JournalEntryStatus.REVERSED),
    ).toBe(false);
    expect(() =>
      assertTransition(JournalEntryStatus.DRAFT, JournalEntryStatus.REVERSED),
    ).toThrow(InvalidJournalStateError);
  });

  it("POSTED → POSTED blocked", () => {
    expect(() =>
      assertTransition(JournalEntryStatus.POSTED, JournalEntryStatus.POSTED),
    ).toThrow(InvalidJournalStateError);
  });

  it("REVERSED → POSTED blocked", () => {
    expect(() =>
      assertTransition(JournalEntryStatus.REVERSED, JournalEntryStatus.POSTED),
    ).toThrow(InvalidJournalStateError);
  });

  it("REVERSED → REVERSED blocked", () => {
    expect(() =>
      assertTransition(
        JournalEntryStatus.REVERSED,
        JournalEntryStatus.REVERSED,
      ),
    ).toThrow(InvalidJournalStateError);
  });
});
