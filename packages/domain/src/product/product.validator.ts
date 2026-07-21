import { ProductValidationError } from "../common/errors";
import { ProductType } from "./product-type.enum";
import type { TireSpecifications } from "./tire-specs.vo";

export function validateProductInvariants(input: {
  sku: string;
  name: string;
  brand: string;
  productType: ProductType;
  unitOfMeasure: string;
  tireSpecs: TireSpecifications | null;
  weight: number | null;
  weightNet: number | null;
  weightGross: number | null;
}): void {
  if (!input.sku?.trim()) {
    throw new ProductValidationError("SKU is required");
  }
  if (!input.name?.trim()) {
    throw new ProductValidationError("Product name is required");
  }
  if (!input.brand?.trim()) {
    throw new ProductValidationError("Brand is required");
  }
  if (!input.unitOfMeasure?.trim()) {
    throw new ProductValidationError("unitOfMeasure is required");
  }
  if (input.productType === ProductType.TIRE && !input.tireSpecs) {
    throw new ProductValidationError("Tire products require tireSpecs");
  }
  for (const [label, v] of [
    ["weight", input.weight],
    ["weightNet", input.weightNet],
    ["weightGross", input.weightGross],
  ] as const) {
    if (v != null && !(v > 0)) {
      throw new ProductValidationError(`${label} must be positive when present`);
    }
  }
}
