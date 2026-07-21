import { describe, expect, it } from "vitest";
import {
  InvalidAccountCodeError,
  InvalidHierarchyError,
  validateHierarchy,
} from "../../src";

describe("account hierarchy validator", () => {
  it("accepts child code with parent prefix", () => {
    expect(() =>
      validateHierarchy({
        level: 2,
        parentId: "p",
        isSystem: false,
        code: "1.01",
        parentCode: "1",
        parentLevel: 1,
      }),
    ).not.toThrow();
  });

  it("rejects code without parent prefix", () => {
    expect(() =>
      validateHierarchy({
        level: 2,
        parentId: "p",
        isSystem: false,
        code: "2.01",
        parentCode: "1",
        parentLevel: 1,
      }),
    ).toThrow(InvalidAccountCodeError);
  });

  it("accepts level = parent.level + 1", () => {
    expect(() =>
      validateHierarchy({
        level: 3,
        parentId: "p",
        isSystem: false,
        code: "1.01.01",
        parentCode: "1.01",
        parentLevel: 2,
      }),
    ).not.toThrow();
  });

  it("rejects wrong level", () => {
    expect(() =>
      validateHierarchy({
        level: 5,
        parentId: "p",
        isSystem: false,
        code: "1.01",
        parentCode: "1",
        parentLevel: 1,
      }),
    ).toThrow(InvalidHierarchyError);
  });
});
