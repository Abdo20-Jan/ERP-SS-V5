import { describe, expect, it } from "vitest";
import {
  Party,
  PartyInactiveError,
  PartyType,
  PartyValidationError,
} from "../../src";

const baseCmd = () => ({
  partyType: PartyType.LEGAL_PERSON,
  legalName: "Sunset Tires S.A.S.",
  tradeName: "Sunset",
  documents: [
    { type: "CUIT", value: "20123456786", isPrimary: true },
    { type: "DNI", value: "30111222" },
  ],
  addresses: [
    {
      type: "HEADQUARTERS",
      street: "Av. Libertador",
      streetNumber: "100",
      city: "CABA",
      province: "CABA",
      postalCode: "1001",
      isPrimary: true,
    },
  ],
  contacts: [{ name: "Admin", email: "admin@sunset.local", isPrimary: true }],
  fiscalClassification: { ivaCondition: "RI" },
  roles: ["CLIENT", "SUPPLIER"],
});

describe("Party aggregate", () => {
  it("creates party with valid data and PartyCreated event", () => {
    const party = Party.create(baseCmd());
    expect(party.legalName).toBe("Sunset Tires S.A.S.");
    expect(party.isActive).toBe(true);
    const events = party.pullEvents();
    expect(events.map((e) => e.type)).toContain("PartyCreated");
  });

  it("rejects party without primary address", () => {
    const cmd = baseCmd();
    cmd.addresses = [
      {
        type: "BILLING",
        street: "X",
        streetNumber: "1",
        city: "CABA",
        province: "CABA",
        postalCode: "1",
        isPrimary: false,
      },
    ];
    expect(() => Party.create(cmd)).toThrow(PartyValidationError);
  });

  it("rejects party without documents", () => {
    const cmd = baseCmd();
    cmd.documents = [];
    expect(() => Party.create(cmd)).toThrow(PartyValidationError);
  });

  it("activates inactive party", () => {
    const party = Party.create(baseCmd());
    party.pullEvents();
    party.deactivate("test");
    party.pullEvents();
    party.activate();
    expect(party.isActive).toBe(true);
    expect(party.pullEvents().map((e) => e.type)).toContain("PartyActivated");
  });

  it("deactivates active party", () => {
    const party = Party.create(baseCmd());
    party.pullEvents();
    party.deactivate("closed");
    expect(party.isActive).toBe(false);
    expect(party.pullEvents().map((e) => e.type)).toContain("PartyDeactivated");
  });

  it("allows CUIT + DNI documents", () => {
    const party = Party.create(baseCmd());
    expect(party.documents).toHaveLength(2);
  });

  it("blocks update when inactive", () => {
    const party = Party.create(baseCmd());
    party.deactivate("x");
    expect(() => party.update({ legalName: "Other" })).toThrow(
      PartyInactiveError,
    );
  });
});
