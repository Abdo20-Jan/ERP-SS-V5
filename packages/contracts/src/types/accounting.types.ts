export interface CreateChartOfAccountsDto {
  name: string;
  description?: string;
  validFrom?: string;
  validUntil?: string;
}

export interface CreateAccountDto {
  code: string;
  name: string;
  type: "ASSET" | "LIABILITY" | "EQUITY" | "REVENUE" | "EXPENSE" | "CONTROL" | string;
  nature: "DEBITOR" | "CREDITOR" | string;
  parentId?: string;
  isSystem?: boolean;
  allowManualPosting?: boolean;
  description?: string;
}

export interface UpdateAccountDto {
  name?: string;
  description?: string | null;
  allowManualPosting?: boolean;
}

export interface AccountDto {
  id: string;
  coaId: string;
  code: string;
  name: string;
  type: string;
  nature: string;
  parentId?: string | null;
  level: number;
  isSystem: boolean;
  isActive: boolean;
  allowManualPosting: boolean;
  description?: string | null;
  children?: AccountDto[];
  createdAt: string;
  updatedAt: string;
}

export interface ChartOfAccountsDto {
  id: string;
  name: string;
  description?: string | null;
  version: number;
  validFrom: string;
  validUntil?: string | null;
  isActive: boolean;
  accounts?: AccountDto[];
  createdAt: string;
}
