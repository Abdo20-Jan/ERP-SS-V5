import { describe, expect, it } from "vitest";
import {
  AccountDimensionRestriction,
  InvalidRestrictionError,
} from "../../src";

describe("AccountDimensionRestriction", () => {
  const accountId = "01900000-0000-7000-8000-000000000001";
  const dimensionId = "01900000-0000-7000-8000-000000000002";

  it("creates REQUIRED", () => {
    const r = AccountDimensionRestriction.create(
      accountId,
      dimensionId,
      "REQUIRED",
    );
    expect(r.restriction).toBe("REQUIRED");
  });

  it("rejects INVALID", () => {
    expect(() =>
      AccountDimensionRestriction.create(accountId, dimensionId, "INVALID"),
    ).toThrow(InvalidRestrictionError);
  });

  it("creates PROHIBITED", () => {
    const r = AccountDimensionRestriction.create(
      accountId,
      dimensionId,
      "PROHIBITED",
    );
    expect(r.restriction).toBe("PROHIBITED");
  });

  it("creates OPTIONAL", () => {
    const r = AccountDimensionRestriction.create(
      accountId,
      dimensionId,
      "OPTIONAL",
    );
    expect(r.toSnapshot().restriction).toBe("OPTIONAL");
  });
});
