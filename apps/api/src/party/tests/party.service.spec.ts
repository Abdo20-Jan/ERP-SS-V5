import { NotFoundException } from "@nestjs/common";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { AppError, ValidationError } from "@sunset/contracts";
import { Party, PartyType } from "@sunset/domain";
import { PartyService } from "../party.service";

const VALID_CUIT = "20123456786";

vi.mock("@sunset/db", () => ({
  prisma: {
    auditLog: { create: vi.fn().mockResolvedValue({}) },
  },
}));

vi.mock("@sunset/observability", () => ({
  createLogger: () => ({ info: vi.fn(), error: vi.fn(), warn: vi.fn() }),
  getCorrelationId: () => "corr-test",
}));

function makeParty() {
  return Party.create({
    partyType: PartyType.LEGAL_PERSON,
    legalName: "Test SA",
    documents: [{ type: "CUIT", value: VALID_CUIT, isPrimary: true }],
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
    contacts: [{ name: "A", email: "a@b.com" }],
    fiscalClassification: { ivaCondition: "RI" },
    roles: ["CLIENT"],
  });
}

describe("PartyService", () => {
  let service: PartyService;
  let repo: {
    save: ReturnType<typeof vi.fn>;
    findById: ReturnType<typeof vi.fn>;
    findByDocument: ReturnType<typeof vi.fn>;
    findAll: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    repo = {
      save: vi.fn().mockResolvedValue(undefined),
      findById: vi.fn(),
      findByDocument: vi.fn(),
      findAll: vi.fn(),
    };
    service = new PartyService(repo as never);
  });

  it("create returns party dto", async () => {
    const result = await service.create({
      partyType: "LEGAL_PERSON",
      legalName: "Test SA",
      documents: [{ type: "CUIT", value: VALID_CUIT, isPrimary: true }],
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
      contacts: [{ name: "A", email: "a@b.com" }],
      fiscalClassification: { ivaCondition: "RI" },
      roles: ["CLIENT"],
    });
    expect(result.legalName).toBe("Test SA");
    expect(repo.save).toHaveBeenCalled();
  });

  it("create maps invalid CUIT to AppError INVALID_CUIT", async () => {
    await expect(
      service.create({
        partyType: "LEGAL_PERSON",
        legalName: "X",
        documents: [{ type: "CUIT", value: "20123456780", isPrimary: true }],
        addresses: [
          {
            type: "LEGAL",
            street: "C",
            streetNumber: "1",
            city: "C",
            province: "C",
            postalCode: "1",
            isPrimary: true,
          },
        ],
        contacts: [],
        fiscalClassification: { ivaCondition: "RI" },
        roles: [],
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("findById throws NotFound", async () => {
    repo.findById.mockResolvedValue(null);
    await expect(service.findById("missing")).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });

  it("deactivate sets inactive", async () => {
    const party = makeParty();
    repo.findById.mockResolvedValue(party);
    const result = await service.deactivate(party.id, "closed");
    expect(result.isActive).toBe(false);
  });

  it("activate sets active", async () => {
    const party = makeParty();
    party.deactivate("x");
    repo.findById.mockResolvedValue(party);
    const result = await service.activate(party.id);
    expect(result.isActive).toBe(true);
  });

  it("update maps inactive to ValidationError", async () => {
    const party = makeParty();
    party.deactivate("x");
    repo.findById.mockResolvedValue(party);
    await expect(
      service.update(party.id, { legalName: "Other" }),
    ).rejects.toBeInstanceOf(ValidationError);
  });
});
