export enum PartyRole {
  CLIENT = "CLIENT",
  SUPPLIER = "SUPPLIER",
  PROVIDER = "PROVIDER",
  CARRIER = "CARRIER",
  BANK = "BANK",
  REPRESENTATIVE = "REPRESENTATIVE",
}

export function isPartyRole(value: string): value is PartyRole {
  return Object.values(PartyRole).includes(value as PartyRole);
}
