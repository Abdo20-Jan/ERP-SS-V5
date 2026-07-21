import { describe, expect, it } from "vitest";
import { Decimal, RoundingMode } from "../../src";

describe("Decimal", () => {
  it("creates from string, number, and Decimal", () => {
    expect(new Decimal("10.5").equals(10.5)).toBe(true);
    expect(new Decimal(10.5).equals("10.5")).toBe(true);
    expect(new Decimal(new Decimal(10.5)).equals(10.5)).toBe(true);
  });

  it("adds 0.1 + 0.2 = 0.3 without float error", () => {
    const result = new Decimal("0.1").add("0.2");
    expect(result.equals("0.3")).toBe(true);
    expect(result.toString()).toBe("0.3");
  });

  it("divides 1 ÷ 3 with repeating decimal", () => {
    const result = new Decimal(1).divide(3);
    expect(result.toString().startsWith("0.333333")).toBe(true);
  });

  it("rounds 1.555 to 1.56 with ROUND_HALF_UP at precision 2", () => {
    const result = new Decimal("1.555").round(2, RoundingMode.ROUND_HALF_UP);
    expect(result.equals("1.56")).toBe(true);
  });

  it("compares equals and greaterThan", () => {
    expect(new Decimal("1.0").equals(1)).toBe(true);
    expect(new Decimal(2).greaterThan(1)).toBe(true);
    expect(new Decimal(1).lessThan(2)).toBe(true);
  });

  it("detects positive and negative", () => {
    expect(new Decimal(1).isPositive()).toBe(true);
    expect(new Decimal(-1).isNegative()).toBe(true);
    expect(new Decimal(0).isZero()).toBe(true);
    expect(new Decimal(0).isPositive()).toBe(false);
  });

  it("toNumber converts string decimal", () => {
    expect(new Decimal("100.50").toNumber()).toBe(100.5);
  });

  it("toString strips unnecessary trailing zeros", () => {
    expect(new Decimal("100.50").toString()).toBe("100.5");
  });
});
