export enum AccountNature {
  DEBITOR = "DEBITOR",
  CREDITOR = "CREDITOR",
}

export function isAccountNature(value: string): value is AccountNature {
  return Object.values(AccountNature).includes(value as AccountNature);
}
