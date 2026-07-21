import { describe, expect, it } from "vitest";
import {
  Product,
  ProductInactiveError,
  ProductType,
  ProductValidationError,
  InvalidNcmError,
} from "../../src";

const base = () => ({
  sku: "PNE-001",
  name: "Pneu 205/55R16",
  brand: "Michelin",
  productType: ProductType.TIRE,
  ncm: { code: "4011.10.00", description: "Pneus novos" },
  unitOfMeasure: "UN",
  originCountry: "BR",
  tireSpecs: { width: 205, profile: 55, rimDiameter: 16, loadIndex: 91, speedIndex: "V" },
});

describe("Product aggregate", () => {
  it("creates tire product with ProductCreated", () => {
    const p = Product.create(base());
    expect(p.sku).toBe("PNE-001");
    expect(p.tireSpecs?.measure).toBe("205/55R16");
    expect(p.pullEvents().map((e) => e.type)).toContain("ProductCreated");
  });

  it("creates service without tire specs", () => {
    const p = Product.create({
      sku: "SRV-001",
      name: "Montagem",
      brand: "Sunset",
      productType: ProductType.SERVICE,
      ncm: { code: "4011.10.00", description: "Servico" },
      unitOfMeasure: "UN",
    });
    expect(p.tireSpecs).toBeNull();
  });

  it("rejects invalid NCM", () => {
    expect(() =>
      Product.create({ ...base(), ncm: { code: "40111000", description: "x" } }),
    ).toThrow(InvalidNcmError);
  });

  it("rejects negative weight", () => {
    expect(() => Product.create({ ...base(), weight: -1 })).toThrow(
      ProductValidationError,
    );
  });

  it("activate/deactivate emit events", () => {
    const p = Product.create(base());
    p.pullEvents();
    p.deactivate("EOL");
    expect(p.isActive).toBe(false);
    expect(p.pullEvents().map((e) => e.type)).toContain("ProductDeactivated");
    p.activate();
    expect(p.isActive).toBe(true);
    expect(p.pullEvents().map((e) => e.type)).toContain("ProductActivated");
  });

  it("blocks update when inactive", () => {
    const p = Product.create(base());
    p.deactivate("x");
    expect(() => p.update({ name: "Other" })).toThrow(ProductInactiveError);
  });
});
