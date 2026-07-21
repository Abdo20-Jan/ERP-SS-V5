import { ConflictError } from "@sunset/contracts";
import {
  Category,
  type CategorySnapshot,
  Product,
  type ProductListParams,
  type ProductListResult,
  type ProductRepository,
  type ProductSnapshot,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

type ProductRow = Prisma.ProductGetPayload<{
  include: { tireSpecs: true; certifications: true };
}>;

const productInclude = {
  tireSpecs: true,
  certifications: true,
} as const;

function dec(v: Prisma.Decimal | number | null | undefined): number | null {
  if (v == null) return null;
  return typeof v === "number" ? v : Number(v.toString());
}

export class PrismaProductRepository implements ProductRepository {
  constructor(private readonly db: PrismaClient = defaultPrisma) {}

  async save(product: Product): Promise<void> {
    const s = product.toSnapshot();
    try {
      await this.db.$transaction(async (tx) => {
        const existing = await tx.product.findUnique({ where: { id: s.id } });
        const base = {
          organizationId: s.organizationId,
          sku: s.sku,
          name: s.name,
          brand: s.brand,
          productType: s.productType,
          description: s.description,
          categoryId: s.categoryId,
          ncmCode: s.ncm.code,
          ncmDescription: s.ncm.description,
          ncmSource: s.ncm.source,
          unitOfMeasure: s.unitOfMeasure,
          weight: s.weight,
          weightNet: s.weightNet,
          weightGross: s.weightGross,
          packagingLength: s.packagingLength,
          packagingWidth: s.packagingWidth,
          packagingHeight: s.packagingHeight,
          originCountry: s.originCountry,
          isActive: s.isActive,
          updatedAt: new Date(s.updatedAt),
        };

        if (!existing) {
          await tx.product.create({
            data: {
              id: s.id,
              ...base,
              createdAt: new Date(s.createdAt),
              ...(s.tireSpecs
                ? {
                    tireSpecs: {
                      create: {
                        width: Number(s.tireSpecs.width),
                        profile: Number(s.tireSpecs.profile),
                        rimDiameter: Number(s.tireSpecs.rimDiameter),
                        measure: String(s.tireSpecs.measure),
                        loadIndex: (s.tireSpecs.loadIndex as number | null) ?? null,
                        speedIndex:
                          (s.tireSpecs.speedIndex as string | null) ?? null,
                        tireType: (s.tireSpecs.tireType as string | null) ?? null,
                        season: (s.tireSpecs.season as string | null) ?? null,
                        dot: (s.tireSpecs.dot as string | null) ?? null,
                      },
                    },
                  }
                : {}),
              certifications: {
                create: s.certifications.map((c) => ({
                  certificateNumber: String(c.certificateNumber),
                  type: String(c.type),
                  issuingBody: String(c.issuingBody),
                  issueDate: new Date(String(c.issueDate)),
                  expiryDate: new Date(String(c.expiryDate)),
                })),
              },
            },
          });
          return;
        }

        await tx.tireSpecification.deleteMany({ where: { productId: s.id } });
        await tx.productCertification.deleteMany({
          where: { productId: s.id },
        });
        await tx.product.update({
          where: { id: s.id },
          data: {
            ...base,
            ...(s.tireSpecs
              ? {
                  tireSpecs: {
                    create: {
                      width: Number(s.tireSpecs.width),
                      profile: Number(s.tireSpecs.profile),
                      rimDiameter: Number(s.tireSpecs.rimDiameter),
                      measure: String(s.tireSpecs.measure),
                      loadIndex:
                        (s.tireSpecs.loadIndex as number | null) ?? null,
                      speedIndex:
                        (s.tireSpecs.speedIndex as string | null) ?? null,
                      tireType:
                        (s.tireSpecs.tireType as string | null) ?? null,
                      season: (s.tireSpecs.season as string | null) ?? null,
                      dot: (s.tireSpecs.dot as string | null) ?? null,
                    },
                  },
                }
              : {}),
            certifications: {
              create: s.certifications.map((c) => ({
                certificateNumber: String(c.certificateNumber),
                type: String(c.type),
                issuingBody: String(c.issuingBody),
                issueDate: new Date(String(c.issueDate)),
                expiryDate: new Date(String(c.expiryDate)),
              })),
            },
          },
        });
      });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        throw new ConflictError("SKU already exists", "Product");
      }
      throw err;
    }
  }

  async findById(id: string): Promise<Product | null> {
    const row = await this.db.product.findUnique({
      where: { id },
      include: productInclude,
    });
    return row ? this.toProduct(row) : null;
  }

  async findBySku(sku: string): Promise<Product | null> {
    const row = await this.db.product.findUnique({
      where: { sku: sku.toUpperCase() },
      include: productInclude,
    });
    return row ? this.toProduct(row) : null;
  }

  async findAll(params: ProductListParams): Promise<ProductListResult> {
    const page = Math.max(1, params.page || 1);
    const limit = Math.min(100, Math.max(1, params.limit || 20));
    const where: Prisma.ProductWhereInput = {};
    if (params.organizationId) where.organizationId = params.organizationId;
    if (params.brand) where.brand = { contains: params.brand, mode: "insensitive" };
    if (params.type) where.productType = params.type;
    if (params.categoryId) where.categoryId = params.categoryId;
    if (params.isActive !== undefined) where.isActive = params.isActive;
    if (params.search) {
      where.OR = [
        { name: { contains: params.search, mode: "insensitive" } },
        { sku: { contains: params.search, mode: "insensitive" } },
      ];
    }
    const [total, rows] = await Promise.all([
      this.db.product.count({ where }),
      this.db.product.findMany({
        where,
        include: productInclude,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);
    return { data: rows.map((r) => this.toProduct(r)), total };
  }

  async saveCategory(category: Category): Promise<void> {
    const s = category.toSnapshot();
    try {
      await this.db.productCategory.upsert({
        where: { id: s.id },
        create: {
          id: s.id,
          code: s.code,
          name: s.name,
          parentId: s.parentId,
          level: s.level,
          path: s.path,
          isActive: s.isActive,
          createdAt: new Date(s.createdAt),
        },
        update: {
          name: s.name,
          isActive: s.isActive,
        },
      });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        throw new ConflictError("Category code already exists", "ProductCategory");
      }
      throw err;
    }
  }

  async findCategoryById(id: string): Promise<Category | null> {
    const row = await this.db.productCategory.findUnique({ where: { id } });
    return row ? this.toCategory(row) : null;
  }

  async findCategoryByCode(code: string): Promise<Category | null> {
    const row = await this.db.productCategory.findUnique({ where: { code } });
    return row ? this.toCategory(row) : null;
  }

  async findAllCategories(): Promise<Category[]> {
    const rows = await this.db.productCategory.findMany({
      orderBy: [{ path: "asc" }],
    });
    return rows.map((r) => this.toCategory(r));
  }

  private toProduct(row: ProductRow): Product {
    const snap: ProductSnapshot = {
      id: row.id,
      organizationId: row.organizationId,
      sku: row.sku,
      name: row.name,
      brand: row.brand,
      productType: row.productType,
      description: row.description,
      categoryId: row.categoryId,
      ncm: {
        code: row.ncmCode,
        description: row.ncmDescription ?? "",
        source: row.ncmSource as "MANUAL" | "SUGGESTED" | "IMPORTED",
      },
      unitOfMeasure: row.unitOfMeasure,
      originCountry: row.originCountry,
      tireSpecs: row.tireSpecs
        ? {
            width: row.tireSpecs.width,
            profile: row.tireSpecs.profile,
            rimDiameter: dec(row.tireSpecs.rimDiameter) ?? 0,
            measure: row.tireSpecs.measure,
            loadIndex: row.tireSpecs.loadIndex,
            speedIndex: row.tireSpecs.speedIndex,
            tireType: row.tireSpecs.tireType,
            season: row.tireSpecs.season,
            dot: row.tireSpecs.dot,
          }
        : null,
      weight: dec(row.weight),
      weightNet: dec(row.weightNet),
      weightGross: dec(row.weightGross),
      packagingLength: dec(row.packagingLength),
      packagingWidth: dec(row.packagingWidth),
      packagingHeight: dec(row.packagingHeight),
      certifications: row.certifications.map((c) => ({
        certificateNumber: c.certificateNumber,
        type: c.type,
        issuingBody: c.issuingBody,
        issueDate: c.issueDate.toISOString().slice(0, 10),
        expiryDate: c.expiryDate.toISOString().slice(0, 10),
      })),
      isActive: row.isActive,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
    return Product.rehydrate(snap);
  }

  private toCategory(row: {
    id: string;
    code: string;
    name: string;
    parentId: string | null;
    level: number;
    path: string;
    isActive: boolean;
    createdAt: Date;
  }): Category {
    const snap: CategorySnapshot = {
      id: row.id,
      code: row.code,
      name: row.name,
      parentId: row.parentId,
      level: row.level,
      path: row.path,
      isActive: row.isActive,
      createdAt: row.createdAt.toISOString(),
    };
    return Category.rehydrate(snap);
  }
}
