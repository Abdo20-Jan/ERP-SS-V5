import { describe, expect, it } from "vitest";
import {
  Money,
  Decimal,
  createCurrencyCode,
  CurrencyMismatchError,
} from "../../src";

const ARS = createCurrencyCode("ARS");
const USD = createCurrencyCode("USD");

describe("Money", () => {
  it("creates Money(100, ARS) with amount and currency", () => {
    const m = new Money(100, ARS);
    expect(m.amount.equals(100)).toBe(true);
    expect(m.currency).toBe("ARS");
  });

  it("adds 50 + 30 = 80 ARS", () => {
    const result = new Money(50, ARS).add(new Money(30, ARS));
    expect(result.amount.equals(80)).toBe(true);
    expect(result.currency).toBe("ARS");
  });

  it("throws CurrencyMismatchError when adding ARS + USD", () => {
    expect(() => new Money(100, ARS).add(new Money(50, USD))).toThrow(
      CurrencyMismatchError,
    );
  });

  it("subtracts 30 from 50 = 20 ARS", () => {
    const result = new Money(50, ARS).subtract(new Money(30, ARS));
    expect(result.amount.equals(20)).toBe(true);
  });

  it("allows negative result when subtracting 100 from 50", () => {
    const result = new Money(50, ARS).subtract(new Money(100, ARS));
    expect(result.amount.equals(-50)).toBe(true);
    expect(result.isNegative()).toBe(true);
  });

  it("multiplies 100 × 3 = 300 ARS", () => {
    const result = new Money(100, ARS).multiply(3);
    expect(result.amount.equals(300)).toBe(true);
  });

  it("multiplies 100 × 1.5 = 150 ARS", () => {
    const result = new Money(100, ARS).multiply(1.5);
    expect(result.amount.equals(150)).toBe(true);
  });

  it("divides 100 ÷ 3 = 33.33 ARS with ROUND_HALF_UP", () => {
    const result = new Money(100, ARS).divide(3);
    expect(result.amount.equals(new Decimal("33.33"))).toBe(true);
    expect(result.toJSON().amount).toBe("33.33");
  });

  it("equals compares amount and currency", () => {
    expect(new Money(100, ARS).equals(new Money(100, ARS))).toBe(true);
    expect(new Money(100, ARS).equals(new Money(50, ARS))).toBe(false);
    expect(new Money(100, ARS).equals(new Money(100, USD))).toBe(false);
  });

  it("isZero detects zero amounts", () => {
    expect(new Money(0, ARS).isZero()).toBe(true);
    expect(new Money(100, ARS).isZero()).toBe(false);
  });

  it("toJSON returns fixed amount and currency", () => {
    expect(new Money(100, ARS).toJSON()).toEqual({
      amount: "100.00",
      currency: "ARS",
    });
  });

  it("convertTo applies FX rate: 100 USD × 350 = 35000 ARS", () => {
    const result = new Money(100, USD).convertTo(ARS, 350);
    expect(result.currency).toBe("ARS");
    expect(result.amount.equals(35000)).toBe(true);
    expect(result.toString()).toBe("35000.00 ARS");
  });
});
