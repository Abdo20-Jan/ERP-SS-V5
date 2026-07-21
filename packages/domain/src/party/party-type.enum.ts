export enum PartyType {
  LEGAL_PERSON = "LEGAL_PERSON",
  NATURAL_PERSON = "NATURAL_PERSON",
}

export function isPartyType(value: string): value is PartyType {
  return Object.values(PartyType).includes(value as PartyType);
}
