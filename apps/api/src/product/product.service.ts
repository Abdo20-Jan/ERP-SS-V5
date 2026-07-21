import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import {
  AppError,
  type CreateProductCategoryDto,
  type CreateProductDto,
  type ProductCategoryDto,
  type ProductDto,
  type ProductListDto,
  type UpdateProductDto,
  ValidationError,
} from "@sunset/contracts";
import {
  Category,
  DomainError,
  PRODUCT_REPOSITORY,
  Product,
  type ProductRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

@Injectable()
export class ProductService {
  private readonly logger = createLogger({ name: "api.product" });

  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository,
  ) {}

  async create(dto: CreateProductDto, userId?: string): Promise<ProductDto> {
    try {
      const product = Product.create({
        sku: dto.sku,
        name: dto.name,
        brand: dto.brand,
        productType: dto.productType,
        description: dto.description,
        categoryId: dto.categoryId,
        ncm: {
          code: dto.ncm.code,
          description: dto.ncm.description,
          source: (dto.ncm.source as "MANUAL" | "SUGGESTED" | "IMPORTED") ?? "MANUAL",
          confidence: dto.ncm.confidence,
        },
        unitOfMeasure: dto.unitOfMeasure,
        originCountry: dto.originCountry,
        tireSpecs: dto.tireSpecs,
        weight: dto.weight,
        weightNet: dto.weightNet,
        weightGross: dto.weightGross,
        packagingLength: dto.packagingLength,
        packagingWidth: dto.packagingWidth,
        packagingHeight: dto.packagingHeight,
        certifications: dto.certifications,
      });
      await this.productRepository.save(product);
      const snap = product.toSnapshot();
      product.pullEvents();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "product.create",
          entityType: "product",
          entityId: product.id,
          after: snap as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      this.logger.info(
        {
          action: "PRODUCT_CREATED",
          sku: product.sku,
          brand: product.brand,
          productType: product.productType,
        },
        "Product created",
      );
      return snap as ProductDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async findAll(query: {
    page?: number;
    limit?: number;
    brand?: string;
    type?: string;
    categoryId?: string;
    search?: string;
    isActive?: boolean | string;
  }): Promise<ProductListDto> {
    const page = Number(query.page ?? 1);
    const limit = Number(query.limit ?? 20);
    let isActive: boolean | undefined;
    if (query.isActive === true || query.isActive === "true") isActive = true;
    if (query.isActive === false || query.isActive === "false") isActive = false;
    const result = await this.productRepository.findAll({
      page,
      limit,
      brand: query.brand,
      type: query.type,
      categoryId: query.categoryId,
      search: query.search,
      isActive,
    });
    return {
      data: result.data.map((p) => p.toSnapshot() as ProductDto),
      total: result.total,
      page,
      limit,
    };
  }

  async findById(id: string): Promise<ProductDto> {
    const product = await this.productRepository.findById(id);
    if (!product) throw new NotFoundException(`Product not found: ${id}`);
    return product.toSnapshot() as ProductDto;
  }

  async update(
    id: string,
    dto: UpdateProductDto,
    userId?: string,
  ): Promise<ProductDto> {
    try {
      const product = await this.productRepository.findById(id);
      if (!product) throw new NotFoundException(`Product not found: ${id}`);
      const before = product.toSnapshot();
      product.update({
        ...dto,
        ncm: dto.ncm
          ? {
              code: dto.ncm.code,
              description: dto.ncm.description,
              source: (dto.ncm.source as "MANUAL") ?? "MANUAL",
            }
          : undefined,
      });
      await this.productRepository.save(product);
      const after = product.toSnapshot();
      product.pullEvents();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "product.update",
          entityType: "product",
          entityId: id,
          before: before as object,
          after: after as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      return after as ProductDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async activate(id: string, userId?: string): Promise<ProductDto> {
    try {
      const product = await this.productRepository.findById(id);
      if (!product) throw new NotFoundException(`Product not found: ${id}`);
      const before = product.toSnapshot();
      product.activate();
      await this.productRepository.save(product);
      const after = product.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "product.activate",
          entityType: "product",
          entityId: id,
          before: before as object,
          after: after as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      return after as ProductDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async deactivate(
    id: string,
    reason: string,
    userId?: string,
  ): Promise<ProductDto> {
    try {
      const product = await this.productRepository.findById(id);
      if (!product) throw new NotFoundException(`Product not found: ${id}`);
      const before = product.toSnapshot();
      product.deactivate(reason);
      await this.productRepository.save(product);
      const after = product.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "product.deactivate",
          entityType: "product",
          entityId: id,
          before: before as object,
          after: after as object,
          metadata: { reason },
          correlationId: getCorrelationId() ?? null,
        },
      });
      this.logger.info(
        { action: "PRODUCT_DEACTIVATED", productId: id, reason },
        "Product deactivated",
      );
      return after as ProductDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async createCategory(
    dto: CreateProductCategoryDto,
    userId?: string,
  ): Promise<ProductCategoryDto> {
    try {
      let parentLevel: number | null = null;
      let parentPath: string | null = null;
      if (dto.parentId) {
        const parent = await this.productRepository.findCategoryById(
          dto.parentId,
        );
        if (!parent) {
          throw new NotFoundException(`Parent category not found: ${dto.parentId}`);
        }
        parentLevel = parent.level;
        parentPath = parent.path;
      }
      const category = Category.create({
        code: dto.code,
        name: dto.name,
        parentId: dto.parentId,
        parentLevel,
        parentPath,
      });
      await this.productRepository.saveCategory(category);
      const snap = category.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "product_category.create",
          entityType: "product_category",
          entityId: category.id,
          after: snap as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      return snap as ProductCategoryDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async findAllCategories(): Promise<ProductCategoryDto[]> {
    const cats = await this.productRepository.findAllCategories();
    return cats.map((c) => c.toSnapshot() as ProductCategoryDto);
  }

  async findCategoryById(id: string): Promise<ProductCategoryDto> {
    const cat = await this.productRepository.findCategoryById(id);
    if (!cat) throw new NotFoundException(`Category not found: ${id}`);
    return cat.toSnapshot() as ProductCategoryDto;
  }

  private rethrow(err: unknown): never {
    if (err instanceof NotFoundException || err instanceof AppError) throw err;
    if (err instanceof DomainError) {
      if (err.code === "INVALID_NCM") {
        throw new AppError(err.message, "INVALID_NCM", 400);
      }
      if (err.code === "VALIDATION_ERROR" || err.code === "PRODUCT_INACTIVE") {
        throw new ValidationError(err.message, { domain: [err.code] });
      }
      throw new AppError(err.message, err.code, 400);
    }
    throw err;
  }
}
