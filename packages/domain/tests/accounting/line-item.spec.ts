import { describe, expect, it } from "vitest";
import { InvalidLineError, LineItem } from "../../src";

const ACC = "01900000-0000-7000-8000-0000000000a1";

describe("LineItem", () => {
  it("creates debit line", () => {
    const l = LineItem.create({ accountId: ACC, debitAmount: "100.00" });
    expect(l.debitAmount.toFixed(2)).toBe("100.00");
    expect(l.creditAmount.isZero()).toBe(true);
  });

  it("creates credit line", () => {
    const l = LineItem.create({ accountId: ACC, creditAmount: 100 });
    expect(l.creditAmount.toFixed(2)).toBe("100.00");
    expect(l.debitAmount.isZero()).toBe(true);
  });

  it("rejects both debit and credit", () => {
    expect(() =>
      LineItem.create({
        accountId: ACC,
        debitAmount: 100,
        creditAmount: 100,
      }),
    ).toThrow(InvalidLineError);
  });

  it("rejects zero zero", () => {
    expect(() =>
      LineItem.create({ accountId: ACC, debitAmount: 0, creditAmount: 0 }),
    ).toThrow(InvalidLineError);
  });

  it("rejects negative debit", () => {
    expect(() =>
      LineItem.create({ accountId: ACC, debitAmount: -1 }),
    ).toThrow(InvalidLineError);
  });

  it("rejects originAmount without currency/rate", () => {
    expect(() =>
      LineItem.create({
        accountId: ACC,
        debitAmount: 100,
        originAmount: 10,
      }),
    ).toThrow(InvalidLineError);
  });

  it("reverse swaps debit and credit", () => {
    const l = LineItem.create({
      accountId: ACC,
      debitAmount: "50.00",
      description: "X",
    });
    const r = l.reverse();
    expect(r.debitAmount.isZero()).toBe(true);
    expect(r.creditAmount.toFixed(2)).toBe("50.00");
    expect(r.description).toContain("Estorno");
  });

  it("reverse preserves account and dual-currency", () => {
    const l = LineItem.create({
      accountId: ACC,
      creditAmount: "350.50",
      originCurrency: "USD",
      originAmount: "1",
      originExchangeRate: "350.50",
    });
    const r = l.reverse();
    expect(r.accountId).toBe(ACC);
    expect(r.originCurrency).toBe("USD");
    expect(r.originAmount?.toFixed(2)).toBe("1.00");
  });
});
