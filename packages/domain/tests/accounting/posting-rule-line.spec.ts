import { describe, expect, it } from "vitest";
import {
  AccountingValidationError,
  InvalidSequenceError,
  PostingRuleLine,
} from "../../src";

describe("PostingRuleLine", () => {
  it("creates line with debit and credit codes", () => {
    const l = PostingRuleLine.create({
      sequence: 1,
      debitAccountCode: "1",
      creditAccountCode: "4",
    });
    expect(l.sequence).toBe(1);
    expect(l.debitAccountCode).toBe("1");
  });

  it("rejects sequence 0", () => {
    expect(() =>
      PostingRuleLine.create({
        sequence: 0,
        debitAccountCode: "1",
        creditAccountCode: "4",
      }),
    ).toThrow(InvalidSequenceError);
  });

  it("rejects empty debit and credit", () => {
    expect(() =>
      PostingRuleLine.create({
        sequence: 1,
        debitAccountCode: "",
        creditAccountCode: "",
      }),
    ).toThrow(AccountingValidationError);
  });

  it("accepts placeholders", () => {
    const l = PostingRuleLine.create({
      sequence: 1,
      debitAccountCode: "1",
      creditAccountCode: "4",
      placeholders: [
        {
          placeholder: "cuenta_ventas",
          providedBy: "SALES",
          valueType: "account_code",
        },
      ],
    });
    expect(l.placeholders).toHaveLength(1);
  });

  it("accepts dimensionMapping", () => {
    const l = PostingRuleLine.create({
      sequence: 2,
      debitAccountCode: "5",
      creditAccountCode: "2",
      dimensionMapping: { costCenterFrom: "LITERAL", costCenterValue: "CC-1" },
    });
    expect(l.dimensionMapping?.costCenterValue).toBe("CC-1");
  });
});
