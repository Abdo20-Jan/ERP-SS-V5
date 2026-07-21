import { describe, expect, it } from "vitest";
import { Category, generateEntityId, ProductValidationError } from "../../src";

describe("Category", () => {
  it("creates level 1 category", () => {
    const c = Category.create({ code: "01", name: "Pneus" });
    expect(c.level).toBe(1);
    expect(c.path).toBe("01");
  });

  it("creates subcategory with hierarchical code path", () => {
    const parentId = generateEntityId();
    const c = Category.create({
      code: "01.01",
      name: "PCR",
      parentId,
      parentLevel: 1,
      parentPath: "01",
    });
    expect(c.level).toBe(2);
    expect(c.path).toBe("01.01");
  });

  it("creates without parent as level 1", () => {
    const c = Category.create({ code: "02", name: "Servicos" });
    expect(c.level).toBe(1);
  });

  it("requires parentLevel/path when parentId set", () => {
    expect(() =>
      Category.create({
        code: "x",
        name: "y",
        parentId: generateEntityId(),
      }),
    ).toThrow(ProductValidationError);
  });
});
