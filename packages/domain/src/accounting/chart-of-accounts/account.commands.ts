import type { AccountNature } from "./account-nature.enum";
import type { AccountType } from "./account-type.enum";

export interface CreateChartOfAccountsCommand {
  id?: string;
  name: string;
  description?: string | null;
  validFrom?: Date | string;
  validUntil?: Date | string | null;
}

export interface CreateAccountCommand {
  id?: string;
  coaId: string;
  code: string;
  name: string;
  type: AccountType | string;
  nature: AccountNature | string;
  parentId?: string | null;
  parentCode?: string | null;
  parentLevel?: number | null;
  isSystem?: boolean;
  allowManualPosting?: boolean;
  description?: string | null;
}

export interface UpdateAccountCommand {
  name?: string;
  description?: string | null;
  allowManualPosting?: boolean;
}

export interface DeactivateAccountCommand {
  accountId: string;
}
