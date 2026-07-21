import { DocumentType } from "./document-type.enum";
import type { Address } from "./address.vo";
import type { Contact } from "./contact.vo";
import type { Document } from "./document.vo";
import { PartyValidationError } from "../common/errors";

export function validatePartyInvariants(input: {
  legalName: string;
  documents: Document[];
  addresses: Address[];
  contacts: Contact[];
}): void {
  if (!input.legalName?.trim()) {
    throw new PartyValidationError("legalName is required");
  }
  if (input.documents.length === 0) {
    throw new PartyValidationError("At least one document is required");
  }
  const hasPrimaryDoc = input.documents.some((d) => d.isPrimary);
  const hasTaxId = input.documents.some(
    (d) => d.type === DocumentType.CUIT || d.type === DocumentType.CUIL,
  );
  if (!hasPrimaryDoc) {
    throw new PartyValidationError("At least one primary document is required");
  }
  if (!hasTaxId) {
    throw new PartyValidationError(
      "At least one CUIT or CUIL document is required",
    );
  }
  if (input.addresses.length === 0) {
    throw new PartyValidationError("At least one address is required");
  }
  if (!input.addresses.some((a) => a.isPrimary)) {
    throw new PartyValidationError("At least one primary address is required");
  }
  // contacts optional but if present emails already validated in VO
  void input.contacts;
}
