import type { Journal } from "./journal.entity";
import type { JournalEntry } from "./journal-entry.aggregate";

export interface JournalEntryListParams {
  journalId?: string;
  status?: string;
  startDate?: Date;
  endDate?: Date;
  page?: number;
  limit?: number;
}

export interface JournalEntryListResult {
  data: JournalEntry[];
  total: number;
  page: number;
  limit: number;
}

export interface JournalEntryRepository {
  save(entry: JournalEntry): Promise<void>;
  saveMany(entries: JournalEntry[]): Promise<void>;
  findById(id: string): Promise<JournalEntry | null>;
  findByCorrelationId(correlationId: string): Promise<JournalEntry | null>;
  findAll(params: JournalEntryListParams): Promise<JournalEntryListResult>;

  saveJournal(journal: Journal): Promise<void>;
  findJournalById(id: string): Promise<Journal | null>;
  findJournalByCode(code: string): Promise<Journal | null>;
  findAllJournals(): Promise<Journal[]>;
  /** Atomically allocate next entry number for journal. */
  allocateEntryNumber(journalId: string): Promise<string>;
}

export const JOURNAL_ENTRY_REPOSITORY = Symbol("JournalEntryRepository");
