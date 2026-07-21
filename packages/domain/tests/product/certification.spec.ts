import { describe, expect, it } from "vitest";
import { Certification, ProductValidationError } from "../../src";

describe("Certification", () => {
  it("creates valid certification", () => {
    const c = new Certification({
      certificateNumber: "LATU-1",
      type: "LATU",
      issuingBody: "LATU",
      issueDate: "2024-01-01",
      expiryDate: "2027-01-01",
    });
    expect(c.certificateNumber).toBe("LATU-1");
  });

  it("rejects expiry before issue", () => {
    expect(
      () =>
        new Certification({
          certificateNumber: "X",
          type: "T",
          issuingBody: "B",
          issueDate: "2025-01-01",
          expiryDate: "2024-01-01",
        }),
    ).toThrow(ProductValidationError);
  });
});
