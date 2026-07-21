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

// Dimensions (MS-01-SS6)
export interface CreateDimensionDto {
  type: string;
  code: string;
  name: string;
  description?: string;
  parentId?: string;
}

export interface UpdateDimensionDto {
  name?: string;
  description?: string | null;
}

export interface DimensionDto {
  id: string;
  type: string;
  code: string;
  name: string;
  description?: string | null;
  parentId?: string | null;
  isActive: boolean;
  children?: DimensionDto[];
  createdAt: string;
  updatedAt: string;
}

export interface SetDimensionRestrictionDto {
  dimensionId: string;
  restriction: "REQUIRED" | "PROHIBITED" | "OPTIONAL" | string;
}

export interface DimensionRestrictionDto {
  accountId: string;
  dimensionId: string;
  restriction: string;
  dimension?: DimensionDto;
}

// Ledger (MS-01-SS7) — amounts as decimal strings (never binary float)
export interface CreateLineItemDto {
  accountId: string;
  debitAmount?: string | number;
  creditAmount?: string | number;
  originCurrency?: string;
  originAmount?: string | number;
  originExchangeRate?: string | number;
  costCenterId?: string;
  projectId?: string;
  partyId?: string;
  productId?: string;
  description?: string;
  reference?: string;
}

export interface CreateJournalEntryDto {
  journalId: string;
  entryDate: string;
  description: string;
  lines: CreateLineItemDto[];
  correlationId?: string;
  originModule?: string;
  originEntityType?: string;
  originEntityId?: string;
}

export interface LineItemDto {
  id: string;
  accountId: string;
  accountCode?: string;
  accountName?: string;
  debitAmount: string;
  creditAmount: string;
  originCurrency?: string | null;
  originAmount?: string | null;
  originExchangeRate?: string | null;
  costCenterId?: string | null;
  projectId?: string | null;
  partyId?: string | null;
  productId?: string | null;
  description?: string | null;
  reference?: string | null;
}

export interface JournalEntryDto {
  id: string;
  entryNumber: string;
  journalId: string;
  entryDate: string;
  description: string;
  status: "DRAFT" | "POSTED" | "REVERSED" | string;
  totalDebit: string;
  totalCredit: string;
  lines: LineItemDto[];
  correlationId: string;
  originModule?: string | null;
  originEntityType?: string | null;
  originEntityId?: string | null;
  reversedFromId?: string | null;
  reversalReason?: string | null;
  createdAt: string;
  postedAt?: string | null;
  reversedAt?: string | null;
}

export interface PostJournalEntryDto {
  correlationId?: string;
}

export interface ReverseJournalEntryDto {
  reason: string;
  reversalDate: string;
  correlationId?: string;
}

export interface CreateJournalDto {
  code: string;
  name: string;
  type: string;
}

export interface JournalDto {
  id: string;
  code: string;
  name: string;
  type: string;
  isActive: boolean;
  nextSequence: number;
  createdAt?: string;
}

export interface PaginatedJournalEntriesDto {
  data: JournalEntryDto[];
  total: number;
  page: number;
  limit: number;
}
