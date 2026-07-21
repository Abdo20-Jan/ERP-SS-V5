import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { Party, PartyType } from "@sunset/domain";
import { PrismaClient } from "@prisma/client";
import { PrismaPartyRepository } from "../src/repositories/party.repository.prisma";

const DATABASE_URL = process.env.DATABASE_URL;
const describeDb = DATABASE_URL ? describe : describe.skip;

function validCuitFromBase(base10: string): string {
  const digits = base10.replace(/\D/g, "").padStart(10, "0").slice(-10);
  const multipliers = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < 10; i++) sum += Number(digits[i]) * (multipliers[i] as number);
  const mod = sum % 11;
  let check = 11 - mod;
  if (check === 11) check = 0;
  if (check === 10) check = 9;
  return `${digits}${check}`;
}

function uniqueBase(): string {
  // 20 + 8 random digits
  const n = Math.floor(Math.random() * 1e8)
    .toString()
    .padStart(8, "0");
  return `20${n}`;
}

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

  function buildParty() {
    const cuit = validCuitFromBase(uniqueBase());
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
  });

  it("finds by document", async () => {
    const party = buildParty();
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
  });
});

describe("PrismaPartyRepository (unit placeholder)", () => {
  it("exports repository class", () => {
    expect(PrismaPartyRepository).toBeDefined();
  });
});
