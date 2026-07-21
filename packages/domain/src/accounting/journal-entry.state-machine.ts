import { InvalidJournalStateError } from "../common/errors";
import { JournalEntryStatus } from "./journal-entry-status.enum";

const ALLOWED: Record<JournalEntryStatus, JournalEntryStatus[]> = {
  [JournalEntryStatus.DRAFT]: [JournalEntryStatus.POSTED],
  [JournalEntryStatus.POSTED]: [JournalEntryStatus.REVERSED],
  [JournalEntryStatus.REVERSED]: [],
};

export function assertTransition(
  from: JournalEntryStatus,
  to: JournalEntryStatus,
): void {
  const allowed = ALLOWED[from] ?? [];
  if (!allowed.includes(to)) {
    throw new InvalidJournalStateError(
      `Invalid journal entry transition: ${from} → ${to}`,
      { from, to },
    );
  }
}

export function canTransition(
  from: JournalEntryStatus,
  to: JournalEntryStatus,
): boolean {
  return (ALLOWED[from] ?? []).includes(to);
}
