import type { CertificationProps } from "./certification.vo";
import type { NcmCodeProps } from "./ncm.vo";
import type { ProductType } from "./product-type.enum";
import type { TireSpecsProps } from "./tire-specs.vo";

export interface CreateProductCommand {
  id?: string;
  organizationId?: string;
  sku: string;
  name: string;
  brand: string;
  productType: ProductType | string;
  description?: string | null;
  categoryId?: string | null;
  ncm: NcmCodeProps;
  unitOfMeasure: string;
  originCountry?: string;
  tireSpecs?: TireSpecsProps | null;
  weight?: number | null;
  weightNet?: number | null;
  weightGross?: number | null;
  packagingLength?: number | null;
  packagingWidth?: number | null;
  packagingHeight?: number | null;
  certifications?: CertificationProps[];
}

export interface UpdateProductCommand {
  name?: string;
  brand?: string;
  description?: string | null;
  categoryId?: string | null;
  ncm?: NcmCodeProps;
  unitOfMeasure?: string;
  originCountry?: string;
  tireSpecs?: TireSpecsProps | null;
  weight?: number | null;
  weightNet?: number | null;
  weightGross?: number | null;
  packagingLength?: number | null;
  packagingWidth?: number | null;
  packagingHeight?: number | null;
  certifications?: CertificationProps[];
}

export interface CreateCategoryCommand {
  id?: string;
  code: string;
  name: string;
  parentId?: string | null;
  parentLevel?: number | null;
  parentPath?: string | null;
}

export interface UpdateCategoryCommand {
  name?: string;
  isActive?: boolean;
}
