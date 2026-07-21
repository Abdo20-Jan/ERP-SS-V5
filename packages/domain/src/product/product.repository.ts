import type { Category } from "./category.aggregate";
import type { Product } from "./product.aggregate";

export interface ProductListParams {
  page: number;
  limit: number;
  brand?: string;
  type?: string;
  categoryId?: string;
  isActive?: boolean;
  search?: string;
  organizationId?: string;
}

export interface ProductListResult {
  data: Product[];
  total: number;
}

export interface ProductRepository {
  save(product: Product): Promise<void>;
  findById(id: string): Promise<Product | null>;
  findBySku(sku: string): Promise<Product | null>;
  findAll(params: ProductListParams): Promise<ProductListResult>;
  saveCategory(category: Category): Promise<void>;
  findCategoryById(id: string): Promise<Category | null>;
  findCategoryByCode(code: string): Promise<Category | null>;
  findAllCategories(): Promise<Category[]>;
}

export const PRODUCT_REPOSITORY = Symbol("ProductRepository");
