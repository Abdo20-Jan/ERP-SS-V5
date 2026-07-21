export interface CreateDocumentDto {
  type: string;
  value: string;
  isPrimary?: boolean;
}

export interface CreateAddressDto {
  type: string;
  street: string;
  streetNumber: string;
  complement?: string;
  neighborhood?: string;
  city: string;
  province: string;
  country?: string;
  postalCode: string;
  isPrimary?: boolean;
}

export interface CreateContactDto {
  name: string;
  position?: string;
  email: string;
  phone?: string;
  isPrimary?: boolean;
}

export interface CreateFiscalClassificationDto {
  ivaCondition: string;
  iibbCondition?: string;
  iibbNumber?: string;
  iibbProvince?: string;
  startOfActivities?: string;
}

export interface CreatePartyDto {
  partyType: "LEGAL_PERSON" | "NATURAL_PERSON" | string;
  legalName: string;
  tradeName?: string;
  documents: CreateDocumentDto[];
  addresses: CreateAddressDto[];
  contacts: CreateContactDto[];
  fiscalClassification: CreateFiscalClassificationDto;
  roles: string[];
}

export interface UpdatePartyDto {
  legalName?: string;
  tradeName?: string | null;
  documents?: CreateDocumentDto[];
  addresses?: CreateAddressDto[];
  contacts?: CreateContactDto[];
  fiscalClassification?: CreateFiscalClassificationDto;
  roles?: string[];
}

export interface DeactivatePartyDto {
  reason: string;
}

export interface PartyDto {
  id: string;
  organizationId: string;
  partyType: string;
  legalName: string;
  tradeName?: string | null;
  documents: unknown[];
  addresses: unknown[];
  contacts: unknown[];
  fiscalClassification: unknown;
  roles: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PartyListDto {
  data: PartyDto[];
  total: number;
  page: number;
  limit: number;
}
