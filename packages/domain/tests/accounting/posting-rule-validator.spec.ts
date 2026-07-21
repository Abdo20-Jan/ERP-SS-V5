import { describe, expect, it } from "vitest";
import {
  collectAccountCodes,
  InvalidSequenceError,
  MissingDebitCreditError,
  PostingRuleLine,
  validatePostingRuleLines,
} from "../../src";

describe("posting-rule.validator", () => {
  it("collects account codes", () => {
    const lines = [
      PostingRuleLine.create({
        sequence: 1,
        debitAccountCode: "1",
        creditAccountCode: "4",
      }),
      PostingRuleLine.create({
        sequence: 2,
        debitAccountCode: "5",
        creditAccountCode: "2",
      }),
    ];
    const codes = collectAccountCodes(lines);
    expect(codes.sort()).toEqual(["1", "2", "4", "5"]);
  });

  it("rejects duplicate sequences", () => {
    const lines = [
      PostingRuleLine.create({
        sequence: 1,
        debitAccountCode: "1",
        creditAccountCode: "4",
      }),
      PostingRuleLine.create({
        sequence: 1,
        debitAccountCode: "5",
        creditAccountCode: "2",
      }),
    ];
    expect(() => validatePostingRuleLines(lines)).toThrow(InvalidSequenceError);
  });

  it("rejects missing debit or credit across lines", () => {
    const lines = [
      PostingRuleLine.create({
        sequence: 1,
        debitAccountCode: "1",
        creditAccountCode: "",
      }),
    ];
    expect(() => validatePostingRuleLines(lines)).toThrow(
      MissingDebitCreditError,
    );
  });
});
