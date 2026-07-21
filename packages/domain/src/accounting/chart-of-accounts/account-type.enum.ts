export enum AccountType {
  ASSET = "ASSET",
  LIABILITY = "LIABILITY",
  EQUITY = "EQUITY",
  REVENUE = "REVENUE",
  EXPENSE = "EXPENSE",
  CONTROL = "CONTROL",
}

export function isAccountType(value: string): value is AccountType {
  return Object.values(AccountType).includes(value as AccountType);
}
