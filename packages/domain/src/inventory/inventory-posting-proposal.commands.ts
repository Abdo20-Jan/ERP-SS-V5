export interface CreatePostingProposalCommand {
  id?: string;
  organizationId?: string;
  sourceType: string;
  sourceId: string;
  postingDate: string | Date;
  description: string;
  correlationId: string;
  idempotencyKey?: string | null;
  lines: CreatePostingLineCommand[];
  amountOriginal?: string | null;
  currencyOriginal?: string | null;
  fxRate?: string | null;
}

export interface CreatePostingLineCommand {
  accountCode: string;
  debit: string;
  credit: string;
  memo?: string | null;
  dimensionRefs?: string[];
}

export interface ValidatePostingProposalCommand {
  proposalId: string;
  actorId: string;
  expectedVersion: number;
}

export interface ReversePostingProposalCommand {
  proposalId: string;
  actorId: string;
  reversalDate: string | Date;
  reason: string;
  reversalCorrelationId: string;
}

export interface CancelPostingProposalCommand {
  proposalId: string;
  actorId: string;
  reason: string;
  expectedVersion: number;
}
