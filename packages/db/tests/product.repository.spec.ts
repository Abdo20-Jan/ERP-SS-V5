import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { Category, Product, ProductType } from "@sunset/domain";
import { PrismaClient } from "@prisma/client";
import { PrismaProductRepository } from "../src/repositories/product.repository.prisma";

const DATABASE_URL = process.env.DATABASE_URL;
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("PrismaProductRepository (integration)", () => {
  let prisma: PrismaClient;
  let repo: PrismaProductRepository;

  beforeAll(async () => {
    prisma = new PrismaClient();
    repo = new PrismaProductRepository(prisma);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("saves product with tire specs and reloads", async () => {
    const sku = `SKU-${Date.now()}`;
    const product = Product.create({
      sku,
      name: "Pneu Test",
      brand: "Michelin",
      productType: ProductType.TIRE,
      ncm: { code: "4011.10.00", description: "Pneus" },
      unitOfMeasure: "UN",
      tireSpecs: { width: 205, profile: 55, rimDiameter: 16 },
      certifications: [
        {
          certificateNumber: "C1",
          type: "LATU",
          issuingBody: "LATU",
          issueDate: "2024-01-01",
          expiryDate: "2027-01-01",
        },
      ],
    });
    await repo.save(product);
    const loaded = await repo.findBySku(sku);
    expect(loaded?.name).toBe("Pneu Test");
    expect(loaded?.tireSpecs?.measure).toBe("205/55R16");
    expect(loaded?.certifications).toHaveLength(1);
  });

  it("returns null for missing id", async () => {
    const found = await repo.findById("00000000-0000-7000-8000-000000000099");
    expect(found).toBeNull();
  });

  it("lists with pagination", async () => {
    const result = await repo.findAll({ page: 1, limit: 5 });
    expect(result.total).toBeGreaterThanOrEqual(0);
  });

  it("saves category hierarchy", async () => {
    const code = `T${Date.now().toString().slice(-6)}`;
    const parent = Category.create({ code, name: "Temp" });
    await repo.saveCategory(parent);
    const child = Category.create({
      code: `${code}.01`,
      name: "Child",
      parentId: parent.id,
      parentLevel: parent.level,
      parentPath: parent.path,
    });
    await repo.saveCategory(child);
    const loaded = await repo.findCategoryByCode(`${code}.01`);
    expect(loaded?.level).toBe(2);
  });
});

describe("PrismaProductRepository export", () => {
  it("is defined", () => {
    expect(PrismaProductRepository).toBeDefined();
  });
});
