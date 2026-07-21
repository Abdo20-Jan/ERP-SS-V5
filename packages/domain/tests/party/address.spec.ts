import { describe, expect, it } from "vitest";
import { Address, AddressType, PartyValidationError } from "../../src";

describe("Address", () => {
  it("creates a valid address", () => {
    const a = new Address({
      type: AddressType.BILLING,
      street: "Av. Corrientes",
      streetNumber: "1234",
      city: "CABA",
      province: "CABA",
      postalCode: "1043",
      isPrimary: true,
    });
    expect(a.country).toBe("AR");
    expect(a.isPrimary).toBe(true);
  });

  it("requires street", () => {
    expect(
      () =>
        new Address({
          type: "BILLING",
          street: "",
          streetNumber: "1",
          city: "X",
          province: "Y",
          postalCode: "1",
        }),
    ).toThrow(PartyValidationError);
  });
});
