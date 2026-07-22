import { describe, expect, it } from "vitest";
import {
  DimensionType,
  isValidDimensionType,
  KNOWN_DIMENSION_TYPES,
} from "../../src";

describe("DimensionType", () => {
  it("COST_CENTER", () => {
    expect(DimensionType.COST_CENTER).toBe("COST_CENTER");
  });
  it("PROJECT", () => {
    expect(DimensionType.PROJECT).toBe("PROJECT");
  });
  it("REGION", () => {
    expect(DimensionType.REGION).toBe("REGION");
  });
  it("CHANNEL", () => {
    expect(DimensionType.CHANNEL).toBe("CHANNEL");
  });
  it("CATEGORY", () => {
    expect(DimensionType.CATEGORY).toBe("CATEGORY");
  });
  it("isValidDimensionType rejects INVALID", () => {
    expect(isValidDimensionType("INVALID")).toBe(false);
    expect(KNOWN_DIMENSION_TYPES).toHaveLength(9);
  });
});
