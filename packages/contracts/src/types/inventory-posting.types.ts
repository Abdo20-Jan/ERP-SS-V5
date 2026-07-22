export interface PostingLineDto {
  accountCode: string;
  debit: string;
  credit: string;
  memo: string | null;
  dimensionRefs: string[];
}

export interface PostingProposalDto {
  id: string;
  organizationId: string;
  sourceType: string;
  sourceId: string;
  status: string;
  postingDate: string;
  description: string;
  correlationId: string;
  idempotencyKey: string | null;
  currencyOriginal: string | null;
  amountOriginal: string | null;
  fxRate: string | null;
  amountFunctional: string;
  lines: PostingLineDto[];
  reversalOfId: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface PostingProposalListDto {
  data: PostingProposalDto[];
  total: number;
  page: number;
  limit: number;
}

export interface CreatePostingProposalDto {
  sourceType: string;
  sourceId: string;
  postingDate: string;
  description: string;
  correlationId?: string;
  idempotencyKey?: string;
  lines: { accountCode: string; debit: string; credit: string; memo?: string; dimensionRefs?: string[] }[];
  amountOriginal?: string;
  currencyOriginal?: string;
  fxRate?: string;
}

export interface ValidatePostingProposalDto {
  expectedVersion: number;
}

export interface ReversePostingProposalDto {
  reversalDate: string;
  reason: string;
  reversalCorrelationId?: string;
}

export interface CancelPostingProposalDto {
  reason: string;
  expectedVersion: number;
}
