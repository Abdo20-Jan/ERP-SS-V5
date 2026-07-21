export interface CreateTireSpecsDto {
  width: number;
  profile: number;
  rimDiameter: number;
  loadIndex?: number;
  speedIndex?: string;
  tireType?: string;
  season?: string;
  dot?: string;
}

export interface CreateCertificationDto {
  certificateNumber: string;
  type: string;
  issuingBody: string;
  issueDate: string;
  expiryDate: string;
}

export interface CreateProductDto {
  sku: string;
  name: string;
  brand: string;
  productType: "TIRE" | "SERVICE" | "PART" | "OTHER" | "SUPPLIES" | string;
  description?: string;
  categoryId?: string;
  ncm: { code: string; description: string; source?: string; confidence?: number };
  unitOfMeasure: string;
  originCountry?: string;
  tireSpecs?: CreateTireSpecsDto;
  weight?: number;
  weightNet?: number;
  weightGross?: number;
  packagingLength?: number;
  packagingWidth?: number;
  packagingHeight?: number;
  certifications?: CreateCertificationDto[];
}

export interface UpdateProductDto {
  name?: string;
  brand?: string;
  description?: string | null;
  categoryId?: string | null;
  ncm?: { code: string; description: string; source?: string };
  unitOfMeasure?: string;
  originCountry?: string;
  tireSpecs?: CreateTireSpecsDto | null;
  weight?: number | null;
  weightNet?: number | null;
  weightGross?: number | null;
  packagingLength?: number | null;
  packagingWidth?: number | null;
  packagingHeight?: number | null;
  certifications?: CreateCertificationDto[];
}

export interface ProductDto {
  id: string;
  organizationId: string;
  sku: string;
  name: string;
  brand: string;
  productType: string;
  description?: string | null;
  categoryId?: string | null;
  ncm: { code: string; description: string; source: string; confidence?: number };
  unitOfMeasure: string;
  originCountry: string;
  tireSpecs?: unknown;
  weight?: number | null;
  certifications?: unknown[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductListDto {
  data: ProductDto[];
  total: number;
  page: number;
  limit: number;
}

export interface CreateProductCategoryDto {
  code: string;
  name: string;
  parentId?: string;
}

export interface ProductCategoryDto {
  id: string;
  code: string;
  name: string;
  parentId?: string | null;
  level: number;
  path: string;
  isActive: boolean;
  createdAt: string;
}

export interface DeactivateProductDto {
  reason: string;
}
