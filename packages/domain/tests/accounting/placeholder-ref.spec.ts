import { describe, expect, it } from "vitest";
import { InvalidPlaceholderError, PlaceholderRef } from "../../src";

describe("PlaceholderRef", () => {
  it("creates valid ref", () => {
    const p = PlaceholderRef.create("inv_acc", "COMEX", "account_code");
    expect(p.placeholder).toBe("inv_acc");
    expect(p.providedBy).toBe("COMEX");
    expect(p.valueType).toBe("account_code");
  });

  it("rejects empty placeholder", () => {
    expect(() => PlaceholderRef.create("", "COMEX", "account_code")).toThrow(
      InvalidPlaceholderError,
    );
  });

  it("rejects empty providedBy", () => {
    expect(() => PlaceholderRef.create("x", "", "account_code")).toThrow(
      InvalidPlaceholderError,
    );
  });

  it("rejects invalid valueType", () => {
    expect(() => PlaceholderRef.create("x", "SALES", "money")).toThrow(
      InvalidPlaceholderError,
    );
  });

  it("accepts account_id", () => {
    expect(
      PlaceholderRef.create("a", "SALES", "account_id").valueType,
    ).toBe("account_id");
  });

  it("accepts party_id", () => {
    expect(PlaceholderRef.create("p", "SALES", "party_id").valueType).toBe(
      "party_id",
    );
  });
});
