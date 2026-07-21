import type { AddressProps } from "./address.vo";
import type { ContactProps } from "./contact.vo";
import type { DocumentProps } from "./document.vo";
import type { FiscalClassificationProps } from "./fiscal-classification.vo";
import type { PartyRole } from "./party-role.enum";
import type { PartyType } from "./party-type.enum";

export interface CreatePartyCommand {
  id?: string;
  organizationId?: string;
  partyType: PartyType | string;
  legalName: string;
  tradeName?: string | null;
  documents: DocumentProps[];
  addresses: AddressProps[];
  contacts: ContactProps[];
  fiscalClassification: FiscalClassificationProps;
  roles: Array<PartyRole | string>;
}

export interface UpdatePartyCommand {
  legalName?: string;
  tradeName?: string | null;
  documents?: DocumentProps[];
  addresses?: AddressProps[];
  contacts?: ContactProps[];
  fiscalClassification?: FiscalClassificationProps;
  roles?: Array<PartyRole | string>;
}

export interface ActivatePartyCommand {
  partyId: string;
}

export interface DeactivatePartyCommand {
  partyId: string;
  reason: string;
}
