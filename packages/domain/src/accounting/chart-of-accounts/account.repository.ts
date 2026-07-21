import type { Account } from "./account.aggregate";
import type { ChartOfAccounts } from "./coa.aggregate";

export interface AccountRepository {
  saveCoa(coa: ChartOfAccounts): Promise<void>;
  findCoaById(id: string): Promise<ChartOfAccounts | null>;
  findActiveCoa(): Promise<ChartOfAccounts | null>;
  save(account: Account): Promise<void>;
  findById(id: string): Promise<Account | null>;
  findByCode(coaId: string, code: string): Promise<Account | null>;
  findChildren(parentId: string): Promise<Account[]>;
  findTree(coaId: string): Promise<Account[]>;
  findActiveAccounts(coaId: string): Promise<Account[]>;
  delete(id: string): Promise<void>;
  countChildren(accountId: string): Promise<number>;
  /** Placeholder until SS7 journal exists — always 0 for now. */
  countJournalLines(accountId: string): Promise<number>;
}

export const ACCOUNT_REPOSITORY = Symbol("AccountRepository");
