import { ConflictError } from "@sunset/contracts";
import {
  Party,
  type PartyListParams,
  type PartyListResult,
  type PartyRepository,
  type PartySnapshot,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

type PartyWithRelations = Prisma.PartyGetPayload<{
  include: {
    documents: true;
    addresses: true;
    contacts: true;
    fiscal: true;
  };
}>;

const includeAll = {
  documents: true,
  addresses: true,
  contacts: true,
  fiscal: true,
} as const;

export class PrismaPartyRepository implements PartyRepository {
  constructor(private readonly db: PrismaClient = defaultPrisma) {}

  async save(party: Party): Promise<void> {
    const snap = party.toSnapshot();
    try {
      await this.db.$transaction(async (tx) => {
        const existing = await tx.party.findUnique({ where: { id: snap.id } });
        if (!existing) {
          await tx.party.create({
            data: {
              id: snap.id,
              organizationId: snap.organizationId,
              partyType: snap.partyType,
              legalName: snap.legalName,
              tradeName: snap.tradeName,
              roles: snap.roles,
              isActive: snap.isActive,
              createdAt: new Date(snap.createdAt),
              updatedAt: new Date(snap.updatedAt),
              documents: {
                create: snap.documents.map((d) => ({
                  type: d.type,
                  value: d.value,
                  isPrimary: d.isPrimary,
                  validatedAt: d.validatedAt ? new Date(d.validatedAt) : null,
                })),
              },
              addresses: {
                create: snap.addresses.map((a) => ({
                  type: String(a.type),
                  street: String(a.street),
                  streetNumber: String(a.streetNumber),
                  complement: (a.complement as string | null) ?? null,
                  neighborhood: (a.neighborhood as string | null) ?? null,
                  city: String(a.city),
                  province: String(a.province),
                  country: String(a.country ?? "AR"),
                  postalCode: String(a.postalCode),
                  isPrimary: Boolean(a.isPrimary),
                })),
              },
              contacts: {
                create: snap.contacts.map((c) => ({
                  name: String(c.name),
                  position: (c.position as string | null) ?? null,
                  email: String(c.email),
                  phone: (c.phone as string | null) ?? null,
                  isPrimary: Boolean(c.isPrimary),
                })),
              },
              fiscal: {
                create: {
                  ivaCondition: String(snap.fiscalClassification.ivaCondition),
                  iibbCondition:
                    (snap.fiscalClassification.iibbCondition as string | null) ??
                    null,
                  iibbNumber:
                    (snap.fiscalClassification.iibbNumber as string | null) ??
                    null,
                  iibbProvince:
                    (snap.fiscalClassification.iibbProvince as string | null) ??
                    null,
                  startOfActivities: snap.fiscalClassification.startOfActivities
                    ? new Date(
                        String(snap.fiscalClassification.startOfActivities),
                      )
                    : null,
                },
              },
            },
          });
          return;
        }

        await tx.partyDocument.deleteMany({ where: { partyId: snap.id } });
        await tx.partyAddress.deleteMany({ where: { partyId: snap.id } });
        await tx.partyContact.deleteMany({ where: { partyId: snap.id } });
        await tx.fiscalClassification.deleteMany({
          where: { partyId: snap.id },
        });

        await tx.party.update({
          where: { id: snap.id },
          data: {
            partyType: snap.partyType,
            legalName: snap.legalName,
            tradeName: snap.tradeName,
            roles: snap.roles,
            isActive: snap.isActive,
            updatedAt: new Date(snap.updatedAt),
            documents: {
              create: snap.documents.map((d) => ({
                type: d.type,
                value: d.value,
                isPrimary: d.isPrimary,
                validatedAt: d.validatedAt ? new Date(d.validatedAt) : null,
              })),
            },
            addresses: {
              create: snap.addresses.map((a) => ({
                type: String(a.type),
                street: String(a.street),
                streetNumber: String(a.streetNumber),
                complement: (a.complement as string | null) ?? null,
                neighborhood: (a.neighborhood as string | null) ?? null,
                city: String(a.city),
                province: String(a.province),
                country: String(a.country ?? "AR"),
                postalCode: String(a.postalCode),
                isPrimary: Boolean(a.isPrimary),
              })),
            },
            contacts: {
              create: snap.contacts.map((c) => ({
                name: String(c.name),
                position: (c.position as string | null) ?? null,
                email: String(c.email),
                phone: (c.phone as string | null) ?? null,
                isPrimary: Boolean(c.isPrimary),
              })),
            },
            fiscal: {
              create: {
                ivaCondition: String(snap.fiscalClassification.ivaCondition),
                iibbCondition:
                  (snap.fiscalClassification.iibbCondition as string | null) ??
                  null,
                iibbNumber:
                  (snap.fiscalClassification.iibbNumber as string | null) ??
                  null,
                iibbProvince:
                  (snap.fiscalClassification.iibbProvince as string | null) ??
                  null,
                startOfActivities: snap.fiscalClassification.startOfActivities
                  ? new Date(
                      String(snap.fiscalClassification.startOfActivities),
                    )
                  : null,
              },
            },
          },
        });
      });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        throw new ConflictError(
          "Document already registered for another party",
          "PartyDocument",
        );
      }
      throw err;
    }
  }

  async findById(id: string): Promise<Party | null> {
    const row = await this.db.party.findUnique({
      where: { id },
      include: includeAll,
    });
    return row ? this.toDomain(row) : null;
  }

  async findByDocument(type: string, value: string): Promise<Party | null> {
    const normalized = Party.normalizeDocumentValue(type, value);
    const doc = await this.db.partyDocument.findUnique({
      where: { type_value: { type, value: normalized } },
      include: { party: { include: includeAll } },
    });
    if (!doc?.party) return null;
    return this.toDomain(doc.party);
  }

  async findAll(params: PartyListParams): Promise<PartyListResult> {
    const page = Math.max(1, params.page || 1);
    const limit = Math.min(100, Math.max(1, params.limit || 20));
    const where: Prisma.PartyWhereInput = {};
    if (params.organizationId) {
      where.organizationId = params.organizationId;
    }
    if (params.type) {
      where.partyType = params.type;
    }
    if (params.isActive !== undefined) {
      where.isActive = params.isActive;
    }
    if (params.document) {
      const digits = params.document.replace(/\D/g, "");
      where.documents = {
        some: {
          OR: [
            { value: { contains: params.document, mode: "insensitive" } },
            ...(digits ? [{ value: { contains: digits } }] : []),
          ],
        },
      };
    }

    const [total, rows] = await Promise.all([
      this.db.party.count({ where }),
      this.db.party.findMany({
        where,
        include: includeAll,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    return {
      data: rows.map((r) => this.toDomain(r)),
      total,
    };
  }

  private toDomain(row: PartyWithRelations): Party {
    if (!row.fiscal) {
      throw new Error(`Party ${row.id} missing fiscal classification`);
    }
    const snapshot: PartySnapshot = {
      id: row.id,
      organizationId: row.organizationId,
      partyType: row.partyType,
      legalName: row.legalName,
      tradeName: row.tradeName,
      documents: row.documents.map((d) => ({
        type: d.type,
        value: d.value,
        isPrimary: d.isPrimary,
        validatedAt: d.validatedAt ? d.validatedAt.toISOString() : null,
      })),
      addresses: row.addresses.map((a) => ({
        type: a.type,
        street: a.street,
        streetNumber: a.streetNumber,
        complement: a.complement,
        neighborhood: a.neighborhood,
        city: a.city,
        province: a.province,
        country: a.country,
        postalCode: a.postalCode,
        isPrimary: a.isPrimary,
      })),
      contacts: row.contacts.map((c) => ({
        name: c.name,
        position: c.position,
        email: c.email,
        phone: c.phone,
        isPrimary: c.isPrimary,
      })),
      fiscalClassification: {
        ivaCondition: row.fiscal.ivaCondition,
        iibbCondition: row.fiscal.iibbCondition,
        iibbNumber: row.fiscal.iibbNumber,
        iibbProvince: row.fiscal.iibbProvince,
        startOfActivities: row.fiscal.startOfActivities
          ? row.fiscal.startOfActivities.toISOString().slice(0, 10)
          : null,
      },
      roles: row.roles,
      isActive: row.isActive,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
    return Party.rehydrate(snapshot);
  }
}
