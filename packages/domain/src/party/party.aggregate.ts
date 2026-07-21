import {
  PartyInactiveError,
  PartyValidationError,
} from "../common/errors";
import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import { Address } from "./address.vo";
import { Contact } from "./contact.vo";
import { Document, normalizeTaxId } from "./document.vo";
import { FiscalClassification } from "./fiscal-classification.vo";
import type { CreatePartyCommand, UpdatePartyCommand } from "./party.commands";
import {
  type PartyDomainEvent,
  partyActivatedEvent,
  partyCreatedEvent,
  partyDeactivatedEvent,
  partyUpdatedEvent,
} from "./party.events";
import { isPartyRole, type PartyRole } from "./party-role.enum";
import { isPartyType, type PartyType } from "./party-type.enum";
import { validatePartyInvariants } from "./party.validator";

export interface PartySnapshot {
  id: string;
  organizationId: string;
  partyType: string;
  legalName: string;
  tradeName: string | null;
  documents: ReturnType<Document["toJSON"]>[];
  addresses: ReturnType<Address["toJSON"]>[];
  contacts: ReturnType<Contact["toJSON"]>[];
  fiscalClassification: ReturnType<FiscalClassification["toJSON"]>;
  roles: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export class Party {
  private _events: PartyDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly organizationId: string,
    private _partyType: PartyType,
    private _legalName: string,
    private _tradeName: string | null,
    private _documents: Document[],
    private _addresses: Address[],
    private _contacts: Contact[],
    private _fiscal: FiscalClassification,
    private _roles: PartyRole[],
    private _isActive: boolean,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get partyType(): PartyType {
    return this._partyType;
  }
  get legalName(): string {
    return this._legalName;
  }
  get tradeName(): string | null {
    return this._tradeName;
  }
  get documents(): readonly Document[] {
    return this._documents;
  }
  get addresses(): readonly Address[] {
    return this._addresses;
  }
  get contacts(): readonly Contact[] {
    return this._contacts;
  }
  get fiscalClassification(): FiscalClassification {
    return this._fiscal;
  }
  get roles(): readonly PartyRole[] {
    return this._roles;
  }
  get isActive(): boolean {
    return this._isActive;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }

  pullEvents(): PartyDomainEvent[] {
    const events = [...this._events];
    this._events = [];
    return events;
  }

  static create(cmd: CreatePartyCommand): Party {
    if (!isPartyType(String(cmd.partyType))) {
      throw new PartyValidationError(`Invalid partyType: ${cmd.partyType}`);
    }
    const documents = (cmd.documents ?? []).map((d) => new Document(d));
    const addresses = (cmd.addresses ?? []).map((a) => new Address(a));
    const contacts = (cmd.contacts ?? []).map((c) => new Contact(c));
    const fiscal = new FiscalClassification(cmd.fiscalClassification);
    const roles = Party.parseRoles(cmd.roles ?? []);

    validatePartyInvariants({
      legalName: cmd.legalName,
      documents,
      addresses,
      contacts,
    });

    const now = new Date();
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const party = new Party(
      id,
      cmd.organizationId?.trim() || "org_001",
      cmd.partyType as PartyType,
      cmd.legalName.trim(),
      cmd.tradeName?.trim() || null,
      documents,
      addresses,
      contacts,
      fiscal,
      roles,
      true,
      now,
      now,
    );
    party._events.push(
      partyCreatedEvent(party.id, { legalName: party.legalName }),
    );
    return party;
  }

  update(cmd: UpdatePartyCommand): void {
    if (!this._isActive) {
      throw new PartyInactiveError(
        "Inactive party cannot be updated (reactivate first)",
        { partyId: this.id },
      );
    }

    if (cmd.legalName !== undefined) {
      if (!cmd.legalName.trim()) {
        throw new PartyValidationError("legalName is required");
      }
      this._legalName = cmd.legalName.trim();
    }
    if (cmd.tradeName !== undefined) {
      this._tradeName = cmd.tradeName?.trim() || null;
    }
    if (cmd.documents) {
      this._documents = cmd.documents.map((d) => new Document(d));
    }
    if (cmd.addresses) {
      this._addresses = cmd.addresses.map((a) => new Address(a));
    }
    if (cmd.contacts) {
      this._contacts = cmd.contacts.map((c) => new Contact(c));
    }
    if (cmd.fiscalClassification) {
      this._fiscal = new FiscalClassification(cmd.fiscalClassification);
    }
    if (cmd.roles) {
      this._roles = Party.parseRoles(cmd.roles);
    }

    validatePartyInvariants({
      legalName: this._legalName,
      documents: this._documents,
      addresses: this._addresses,
      contacts: this._contacts,
    });

    this._updatedAt = new Date();
    this._events.push(partyUpdatedEvent(this.id));
  }

  activate(): void {
    if (this._isActive) {
      return;
    }
    this._isActive = true;
    this._updatedAt = new Date();
    this._events.push(partyActivatedEvent(this.id));
  }

  deactivate(reason: string): void {
    if (!reason?.trim()) {
      throw new PartyValidationError("Deactivation reason is required");
    }
    if (!this._isActive) {
      return;
    }
    this._isActive = false;
    this._updatedAt = new Date();
    this._events.push(partyDeactivatedEvent(this.id, reason.trim()));
  }

  toSnapshot(): PartySnapshot {
    return {
      id: this.id,
      organizationId: this.organizationId,
      partyType: this._partyType,
      legalName: this._legalName,
      tradeName: this._tradeName,
      documents: this._documents.map((d) => d.toJSON()),
      addresses: this._addresses.map((a) => a.toJSON()),
      contacts: this._contacts.map((c) => c.toJSON()),
      fiscalClassification: this._fiscal.toJSON(),
      roles: [...this._roles],
      isActive: this._isActive,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(snapshot: PartySnapshot): Party {
    const documents = snapshot.documents.map(
      (d) =>
        new Document({
          type: d.type,
          value: d.value,
          isPrimary: d.isPrimary,
          validatedAt: d.validatedAt ? new Date(d.validatedAt) : null,
        }),
    );
    const addresses = snapshot.addresses.map(
      (a) =>
        new Address({
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
        }),
    );
    const contacts = snapshot.contacts.map(
      (c) =>
        new Contact({
          name: String(c.name),
          position: (c.position as string | null) ?? null,
          email: String(c.email),
          phone: (c.phone as string | null) ?? null,
          isPrimary: Boolean(c.isPrimary),
        }),
    );
    const fiscal = new FiscalClassification({
      ivaCondition: String(snapshot.fiscalClassification.ivaCondition),
      iibbCondition:
        (snapshot.fiscalClassification.iibbCondition as string | null) ?? null,
      iibbNumber:
        (snapshot.fiscalClassification.iibbNumber as string | null) ?? null,
      iibbProvince:
        (snapshot.fiscalClassification.iibbProvince as string | null) ?? null,
      startOfActivities:
        (snapshot.fiscalClassification.startOfActivities as string | null) ??
        null,
    });

    return new Party(
      createEntityId(snapshot.id),
      snapshot.organizationId,
      snapshot.partyType as PartyType,
      snapshot.legalName,
      snapshot.tradeName,
      documents,
      addresses,
      contacts,
      fiscal,
      Party.parseRoles(snapshot.roles),
      snapshot.isActive,
      new Date(snapshot.createdAt),
      new Date(snapshot.updatedAt),
    );
  }

  /** Find primary tax id for uniqueness checks. */
  primaryTaxDocument(): Document | undefined {
    return (
      this._documents.find(
        (d) => d.isPrimary && (d.type === "CUIT" || d.type === "CUIL"),
      ) ??
      this._documents.find((d) => d.type === "CUIT" || d.type === "CUIL")
    );
  }

  static normalizeDocumentValue(type: string, value: string): string {
    if (type === "CUIT" || type === "CUIL") {
      return normalizeTaxId(value);
    }
    return value.trim();
  }

  private static parseRoles(roles: string[]): PartyRole[] {
    const out: PartyRole[] = [];
    for (const r of roles) {
      const up = String(r).trim().toUpperCase();
      if (!isPartyRole(up)) {
        throw new PartyValidationError(`Invalid party role: ${r}`);
      }
      if (!out.includes(up)) {
        out.push(up);
      }
    }
    return out;
  }
}
