import type { InventoryPostingProposal, PostingProposalSnapshot } from "./inventory-posting-proposal.aggregate";

export interface PostingProposalListFilters {
  organizationId?: string;
  sourceType?: string;
  sourceId?: string;
  status?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface PostingProposalListResult {
  data: InventoryPostingProposal[];
  total: number;
}

export type PostingProposalDbClient = unknown;

export interface PostingProposalRepository {
  save(proposal: InventoryPostingProposal, db?: PostingProposalDbClient): Promise<void>;
  findById(id: string): Promise<InventoryPostingProposal | null>;
  findByIdempotencyKey(key: string): Promise<PostingProposalSnapshot | null>;
  findAll(filters?: PostingProposalListFilters, page?: number, limit?: number): Promise<PostingProposalListResult>;
}

export const POSTING_PROPOSAL_REPOSITORY = Symbol("PostingProposalRepository");
