import type { CreateLineItemInput } from "./line-item.vo";

export interface CreateJournalCommand {
  id?: string;
  code: string;
  name: string;
  type: string;
}

export interface CreateJournalEntryCommand {
  id?: string;
  journalId: string;
  entryDate: Date | string;
  description: string;
  correlationId: string;
  createdById: string;
  lines: CreateLineItemInput[];
  originModule?: string | null;
  originEntityType?: string | null;
  originEntityId?: string | null;
  organizationId?: string;
}

export interface PostJournalEntryCommand {
  postedById: string;
  entryNumber: string;
}

export interface ReverseJournalEntryCommand {
  reason: string;
  reversedById: string;
  reversalDate: Date | string;
  reversalCorrelationId: string;
  reversalEntryNumber: string;
}
