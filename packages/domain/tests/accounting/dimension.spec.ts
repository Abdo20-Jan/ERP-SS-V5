import { describe, expect, it } from "vitest";
import {
  AccountingDimension,
  AccountingValidationError,
  DimensionType,
  InvalidDimensionHierarchyError,
  InvalidDimensionTypeError,
} from "../../src";

describe("AccountingDimension", () => {
  it("creates COST_CENTER", () => {
    const d = AccountingDimension.create({
      type: DimensionType.COST_CENTER,
      code: "CC-001",
      name: "Administrativo",
    });
    expect(d.code).toBe("CC-001");
    expect(d.type).toBe("COST_CENTER");
    expect(d.isActive).toBe(true);
    expect(d.pullEvents().map((e) => e.type)).toContain("DimensionCreated");
  });

  it("rejects invalid type", () => {
    expect(() =>
      AccountingDimension.create({
        type: "FUTURE_1",
        code: "X",
        name: "Y",
      }),
    ).toThrow(InvalidDimensionTypeError);
  });

  it("rejects empty code", () => {
    expect(() =>
      AccountingDimension.create({
        type: "PROJECT",
        code: "  ",
        name: "P",
      }),
    ).toThrow(AccountingValidationError);
  });

  it("rejects empty name", () => {
    expect(() =>
      AccountingDimension.create({
        type: "REGION",
        code: "R1",
        name: "",
      }),
    ).toThrow(AccountingValidationError);
  });

  it("createChild inherits type", () => {
    const parent = AccountingDimension.create({
      type: "CHANNEL",
      code: "CH-ROOT",
      name: "Root",
    });
    const child = parent.createChild("CH-WEB", "Web");
    expect(child.type).toBe(parent.type);
    expect(child.parentId).toBe(parent.id);
  });

  it("deactivate sets isActive false", () => {
    const d = AccountingDimension.create({
      type: "CATEGORY",
      code: "CAT-1",
      name: "Cat",
    });
    d.deactivate();
    expect(d.isActive).toBe(false);
  });

  it("activate sets isActive true", () => {
    const d = AccountingDimension.create({
      type: "CATEGORY",
      code: "CAT-2",
      name: "Cat2",
    });
    d.deactivate();
    d.activate();
    expect(d.isActive).toBe(true);
  });

  it("rejects parent of different type", () => {
    expect(() =>
      AccountingDimension.create({
        type: "COST_CENTER",
        code: "CC-X",
        name: "X",
        parentId: "01900000-0000-7000-8000-000000000099",
        parentType: "PROJECT",
        parentExists: true,
      }),
    ).toThrow(InvalidDimensionHierarchyError);
  });
});
