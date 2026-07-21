export enum JournalType {
  GENERAL = "GENERAL",
  SALES = "SALES",
  PURCHASES = "PURCHASES",
  CASH = "CASH",
  CLOSING = "CLOSING",
  ADJUSTMENT = "ADJUSTMENT",
}

export const KNOWN_JOURNAL_TYPES = Object.values(JournalType);

export function isJournalType(value: string): value is JournalType {
  return KNOWN_JOURNAL_TYPES.includes(value as JournalType);
}
