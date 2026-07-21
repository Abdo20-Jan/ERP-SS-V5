import type { Party } from "./party.aggregate";

export interface PartyListParams {
  page: number;
  limit: number;
  type?: string;
  document?: string;
  isActive?: boolean;
  organizationId?: string;
}

export interface PartyListResult {
  data: Party[];
  total: number;
}

export interface PartyRepository {
  save(party: Party): Promise<void>;
  findById(id: string): Promise<Party | null>;
  findByDocument(type: string, value: string): Promise<Party | null>;
  findAll(params: PartyListParams): Promise<PartyListResult>;
}

export const PARTY_REPOSITORY = Symbol("PartyRepository");
