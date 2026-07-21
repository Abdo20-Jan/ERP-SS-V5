import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { Party, PartyType } from "@sunset/domain";
import { PrismaClient } from "@prisma/client";
import { PrismaPartyRepository } from "../src/repositories/party.repository.prisma";

const DATABASE_URL = process.env.DATABASE_URL;
const describeDb = DATABASE_URL ? describe : describe.skip;

const VALID_CUIT = "20123456786";

describeDb("PrismaPartyRepository (integration)", () => {
  let prisma: PrismaClient;
  let repo: PrismaPartyRepository;

  beforeAll(async () => {
    prisma = new PrismaClient();
    repo = new PrismaPartyRepository(prisma);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  function buildParty(cuit = VALID_CUIT) {
    return Party.create({
      partyType: PartyType.LEGAL_PERSON,
      legalName: `Party ${cuit}`,
      documents: [{ type: "CUIT", value: cuit, isPrimary: true }],
      addresses: [
        {
          type: "LEGAL",
          street: "Calle",
          streetNumber: "1",
          city: "CABA",
          province: "CABA",
          postalCode: "1000",
          isPrimary: true,
        },
      ],
      contacts: [{ name: "A", email: `a${cuit}@test.local` }],
      fiscalClassification: { ivaCondition: "RI" },
      roles: ["CLIENT"],
    });
  }

  it("saves and reloads party with relations", async () => {
    const party = buildParty();
    await repo.save(party);
    const loaded = await repo.findById(party.id);
    expect(loaded).not.toBeNull();
    expect(loaded?.legalName).toBe(party.legalName);
    expect(loaded?.documents).toHaveLength(1);
    expect(loaded?.addresses).toHaveLength(1);
    expect(loaded?.fiscalClassification.ivaCondition).toBe("RI");
  });

  it("finds by document", async () => {
    const party = buildParty("30712345671");
    // ensure valid cuit - compute if needed; use known valid
    // 30-71234567-8 check: skip if invalid - use generate
    await repo.save(party);
    const found = await repo.findByDocument("CUIT", party.documents[0]!.value);
    expect(found?.id).toBe(party.id);
  });

  it("returns null for missing id", async () => {
    const found = await repo.findById("00000000-0000-7000-8000-000000000099");
    expect(found).toBeNull();
  });

  it("lists with pagination", async () => {
    const result = await repo.findAll({ page: 1, limit: 5 });
    expect(result.total).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(result.data)).toBe(true);
  });
});

describe("PrismaPartyRepository (unit placeholder)", () => {
  it("exports repository class", () => {
    expect(PrismaPartyRepository).toBeDefined();
  });
});
