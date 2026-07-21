import { describe, expect, it } from "vitest";
import { Contact, PartyValidationError } from "../../src";

describe("Contact", () => {
  it("creates contact with valid email", () => {
    const c = new Contact({
      name: "Ana",
      email: "ana@example.com",
      isPrimary: true,
    });
    expect(c.email).toBe("ana@example.com");
  });

  it("rejects invalid email", () => {
    expect(
      () => new Contact({ name: "Ana", email: "not-an-email" }),
    ).toThrow(PartyValidationError);
  });
});
