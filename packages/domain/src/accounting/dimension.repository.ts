import type { AccountDimensionRestriction } from "./dimension-restriction.vo";
import type { AccountingDimension } from "./dimension.entity";

export interface DimensionRepository {
  save(dimension: AccountingDimension): Promise<void>;
  findById(id: string): Promise<AccountingDimension | null>;
  findByTypeAndCode(
    type: string,
    code: string,
  ): Promise<AccountingDimension | null>;
  findByType(type: string): Promise<AccountingDimension[]>;
  findChildren(parentId: string): Promise<AccountingDimension[]>;
  findAll(params?: {
    type?: string;
    isActive?: boolean;
  }): Promise<AccountingDimension[]>;

  setRestriction(
    accountId: string,
    dimensionId: string,
    restriction: string,
  ): Promise<AccountDimensionRestriction>;
  getRestrictionsByAccount(
    accountId: string,
  ): Promise<AccountDimensionRestriction[]>;
  getRestrictionsByDimension(
    dimensionId: string,
  ): Promise<AccountDimensionRestriction[]>;
  removeRestriction(accountId: string, dimensionId: string): Promise<void>;

  /** Placeholder until SS7 journal exists — always 0 for now. */
  countJournalLines(dimensionId: string): Promise<number>;
}

export const DIMENSION_REPOSITORY = Symbol("DimensionRepository");
