export enum DimensionType {
  COST_CENTER = "COST_CENTER",
  PROJECT = "PROJECT",
  REGION = "REGION",
  CHANNEL = "CHANNEL",
  CATEGORY = "CATEGORY",
}

export const KNOWN_DIMENSION_TYPES = Object.values(DimensionType);

export function isValidDimensionType(value: string): value is DimensionType {
  return KNOWN_DIMENSION_TYPES.includes(value as DimensionType);
}
