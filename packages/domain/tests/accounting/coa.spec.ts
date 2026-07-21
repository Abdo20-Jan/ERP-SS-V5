import { describe, expect, it } from "vitest";
import { AccountingValidationError, ChartOfAccounts } from "../../src";

describe("ChartOfAccounts", () => {
  it("creates COA version 1 active", () => {
    const c = ChartOfAccounts.create({ name: "Plano Sunset" });
    expect(c.version).toBe(1);
    expect(c.isActive).toBe(true);
    expect(c.pullEvents().map((e) => e.type)).toContain("ChartOfAccountsCreated");
  });

  it("rejects validUntil < validFrom", () => {
    expect(() =>
      ChartOfAccounts.create({
        name: "X",
        validFrom: "2026-06-01",
        validUntil: "2026-01-01",
      }),
    ).toThrow(AccountingValidationError);
  });

  it("rejects empty name", () => {
    expect(() => ChartOfAccounts.create({ name: "  " })).toThrow(
      AccountingValidationError,
    );
  });

  it("snapshot roundtrip", () => {
    const c = ChartOfAccounts.create({ name: "Plano" });
    const r = ChartOfAccounts.rehydrate(c.toSnapshot());
    expect(r.name).toBe("Plano");
    expect(r.id).toBe(c.id);
  });
});
