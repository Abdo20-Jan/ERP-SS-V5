import { NotFoundException } from "@nestjs/common";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { AppError } from "@sunset/contracts";
import { Product, ProductType } from "@sunset/domain";
import { ProductService } from "../product.service";

vi.mock("@sunset/db", () => ({
  prisma: { auditLog: { create: vi.fn().mockResolvedValue({}) } },
}));
vi.mock("@sunset/observability", () => ({
  createLogger: () => ({ info: vi.fn(), error: vi.fn() }),
  getCorrelationId: () => "corr",
}));

const dto = {
  sku: "PNE-001",
  name: "Pneu",
  brand: "Michelin",
  productType: "TIRE",
  ncm: { code: "4011.10.00", description: "Pneus" },
  unitOfMeasure: "UN",
  tireSpecs: { width: 205, profile: 55, rimDiameter: 16 },
};

describe("ProductService", () => {
  let service: ProductService;
  let repo: Record<string, ReturnType<typeof vi.fn>>;

  beforeEach(() => {
    repo = {
      save: vi.fn().mockResolvedValue(undefined),
      findById: vi.fn(),
      findBySku: vi.fn(),
      findAll: vi.fn(),
      saveCategory: vi.fn(),
      findCategoryById: vi.fn(),
      findCategoryByCode: vi.fn(),
      findAllCategories: vi.fn().mockResolvedValue([]),
    };
    service = new ProductService(repo as never);
  });

  it("creates product", async () => {
    const result = await service.create(dto as never);
    expect(result.sku).toBe("PNE-001");
    expect(repo.save).toHaveBeenCalled();
  });

  it("maps invalid NCM", async () => {
    await expect(
      service.create({
        ...dto,
        ncm: { code: "bad", description: "x" },
      } as never),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("findById not found", async () => {
    repo.findById.mockResolvedValue(null);
    await expect(service.findById("x")).rejects.toBeInstanceOf(NotFoundException);
  });

  it("deactivate", async () => {
    const p = Product.create({ ...dto, productType: ProductType.TIRE } as never);
    repo.findById.mockResolvedValue(p);
    const r = await service.deactivate(p.id, "EOL");
    expect(r.isActive).toBe(false);
  });
});
