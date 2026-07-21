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

// Currency & Exchange Rate (MS-01-SS5)
export interface CreateCurrencyDto {
  code: string;
  name: string;
  symbol: string;
  decimalPlaces?: number;
  isFunctional?: boolean;
  isPresentation?: boolean;
}

export interface CurrencyDto {
  id: string;
  code: string;
  name: string;
  symbol: string;
  decimalPlaces: number;
  isFunctional: boolean;
  isPresentation: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SetExchangeRateDto {
  fromCurrency?: string;
  toCurrency: string;
  rate: number | string;
  validFrom: string;
  validUntil?: string;
  source: string;
  sourceReference?: string;
}

export interface ExchangeRateDto {
  id: string;
  fromCurrency: string;
  toCurrency: string;
  rate: string;
  validFrom: string;
  validUntil?: string | null;
  source: string;
  sourceReference?: string | null;
  createdAt: string;
}
