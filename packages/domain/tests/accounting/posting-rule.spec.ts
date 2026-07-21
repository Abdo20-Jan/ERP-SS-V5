import { describe, expect, it } from "vitest";
import {
  AccountingValidationError,
  InvalidDateRangeError,
  MissingDebitCreditError,
  PostingRule,
} from "../../src";

const baseLine = {
  sequence: 1,
  debitAccountCode: "1",
  creditAccountCode: "4",
};

describe("PostingRule", () => {
  it("creates rule with debit+credit line", () => {
    const r = PostingRule.create({
      name: "Manual",
      eventType: "MANUAL",
      originModule: "ACCOUNTING",
      lines: [baseLine],
    });
    expect(r.isActive).toBe(true);
    expect(r.lines).toHaveLength(1);
    expect(r.pullEvents().map((e) => e.type)).toContain("PostingRuleCreated");
  });

  it("rejects empty lines", () => {
    expect(() =>
      PostingRule.create({
        name: "X",
        eventType: "MANUAL",
        originModule: "ACCOUNTING",
        lines: [],
      }),
    ).toThrow(MissingDebitCreditError);
  });

  it("rejects line with only debit code missing credit across rule", () => {
    expect(() =>
      PostingRule.create({
        name: "X",
        eventType: "MANUAL",
        originModule: "ACCOUNTING",
        lines: [
          { sequence: 1, debitAccountCode: "1", creditAccountCode: "" },
        ],
      }),
    ).toThrow(MissingDebitCreditError);
  });

  it("rejects validFrom >= validUntil", () => {
    expect(() =>
      PostingRule.create({
        name: "X",
        eventType: "MANUAL",
        originModule: "ACCOUNTING",
        validFrom: "2026-07-21T00:00:00.000Z",
        validUntil: "2026-07-20T00:00:00.000Z",
        lines: [baseLine],
      }),
    ).toThrow(InvalidDateRangeError);
  });

  it("rejects empty name", () => {
    expect(() =>
      PostingRule.create({
        name: "  ",
        eventType: "MANUAL",
        originModule: "ACCOUNTING",
        lines: [baseLine],
      }),
    ).toThrow(AccountingValidationError);
  });

  it("rejects empty eventType", () => {
    expect(() =>
      PostingRule.create({
        name: "X",
        eventType: "",
        originModule: "ACCOUNTING",
        lines: [baseLine],
      }),
    ).toThrow(AccountingValidationError);
  });

  it("rejects empty originModule", () => {
    expect(() =>
      PostingRule.create({
        name: "X",
        eventType: "MANUAL",
        originModule: "",
        lines: [baseLine],
      }),
    ).toThrow(AccountingValidationError);
  });

  it("accepts placeholders on lines", () => {
    const r = PostingRule.create({
      name: "Venta",
      eventType: "VENTA",
      originModule: "SALES",
      lines: [
        {
          ...baseLine,
          placeholders: [
            {
              placeholder: "cuenta_ventas",
              providedBy: "SALES",
              valueType: "account_code",
            },
          ],
        },
      ],
    });
    expect(r.lines[0].placeholders[0].providedBy).toBe("SALES");
  });

  it("deactivate / activate", () => {
    const r = PostingRule.create({
      name: "X",
      eventType: "MANUAL",
      originModule: "ACCOUNTING",
      lines: [baseLine],
    });
    r.deactivate();
    expect(r.isActive).toBe(false);
    r.activate();
    expect(r.isActive).toBe(true);
  });
});
