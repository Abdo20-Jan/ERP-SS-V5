import { describe, expect, it } from "vitest";
import { InvalidNcmError, NcmCode } from "../../src";

describe("NcmCode", () => {
  it("accepts 4011.10.00", () => {
    const n = new NcmCode({ code: "4011.10.00", description: "Pneus novos" });
    expect(n.code).toBe("4011.10.00");
  });

  it("rejects without dots", () => {
    expect(
      () => new NcmCode({ code: "40111000", description: "x" }),
    ).toThrow(InvalidNcmError);
  });

  it("rejects incomplete code", () => {
    expect(
      () => new NcmCode({ code: "4011.10.0", description: "x" }),
    ).toThrow(InvalidNcmError);
  });

  it("rejects empty code", () => {
    expect(() => new NcmCode({ code: "", description: "x" })).toThrow(
      InvalidNcmError,
    );
  });

  it("defaults source MANUAL without confidence", () => {
    const n = new NcmCode({ code: "4011.10.00", description: "Pneus" });
    expect(n.source).toBe("MANUAL");
    expect(n.confidence).toBeUndefined();
  });
});
