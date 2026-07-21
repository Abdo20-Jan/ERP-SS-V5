import { describe, expect, it } from "vitest";
import {
  AccountNature,
  AccountType,
  expectedNature,
  TYPE_NATURE_MAP,
} from "../../src";

describe("AccountType x Nature map", () => {
  it("ASSET → DEBITOR", () => {
    expect(expectedNature(AccountType.ASSET)).toBe(AccountNature.DEBITOR);
  });
  it("LIABILITY → CREDITOR", () => {
    expect(expectedNature(AccountType.LIABILITY)).toBe(AccountNature.CREDITOR);
  });
  it("EQUITY → CREDITOR", () => {
    expect(expectedNature(AccountType.EQUITY)).toBe(AccountNature.CREDITOR);
  });
  it("REVENUE → CREDITOR", () => {
    expect(expectedNature(AccountType.REVENUE)).toBe(AccountNature.CREDITOR);
  });
  it("EXPENSE → DEBITOR", () => {
    expect(expectedNature(AccountType.EXPENSE)).toBe(AccountNature.DEBITOR);
  });
  it("CONTROL → DEBITOR", () => {
    expect(expectedNature(AccountType.CONTROL)).toBe(AccountNature.DEBITOR);
  });
  it("map has 6 entries", () => {
    expect(Object.keys(TYPE_NATURE_MAP)).toHaveLength(6);
  });
});
