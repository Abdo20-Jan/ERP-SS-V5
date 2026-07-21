export enum JournalEntryStatus {
  DRAFT = "DRAFT",
  POSTED = "POSTED",
  REVERSED = "REVERSED",
}

export function isJournalEntryStatus(value: string): value is JournalEntryStatus {
  return Object.values(JournalEntryStatus).includes(value as JournalEntryStatus);
}
