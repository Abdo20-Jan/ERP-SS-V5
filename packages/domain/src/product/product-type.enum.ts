export enum ProductType {
  TIRE = "TIRE",
  SERVICE = "SERVICE",
  PART = "PART",
  OTHER = "OTHER",
  SUPPLIES = "SUPPLIES",
}

export function isProductType(value: string): value is ProductType {
  return Object.values(ProductType).includes(value as ProductType);
}
