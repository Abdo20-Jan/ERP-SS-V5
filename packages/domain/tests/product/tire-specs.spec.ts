import { describe, expect, it } from "vitest";
import { ProductValidationError, TireSpecifications } from "../../src";

describe("TireSpecifications", () => {
  it("builds measure 205/55R16", () => {
    const t = new TireSpecifications({ width: 205, profile: 55, rimDiameter: 16 });
    expect(t.measure).toBe("205/55R16");
  });

  it("builds measure 315/80R22.5", () => {
    const t = new TireSpecifications({
      width: 315,
      profile: 80,
      rimDiameter: 22.5,
    });
    expect(t.measure).toBe("315/80R22.5");
  });

  it("builds fullMeasure with load and speed", () => {
    const t = new TireSpecifications({
      width: 205,
      profile: 55,
      rimDiameter: 16,
      loadIndex: 91,
      speedIndex: "V",
    });
    expect(t.fullMeasure).toBe("205/55R16 91V");
  });

  it("accepts DOT with 14 chars", () => {
    const t = new TireSpecifications({
      width: 205,
      profile: 55,
      rimDiameter: 16,
      dot: "DOTA1B2C3D4E5",
    });
    expect(t.dot).toBe("DOTA1B2C3D4E5");
  });

  it("rejects short DOT", () => {
    expect(
      () =>
        new TireSpecifications({
          width: 205,
          profile: 55,
          rimDiameter: 16,
          dot: "SHORT",
        }),
    ).toThrow(ProductValidationError);
  });
});
