/**
 * API clients for business modules
 */

import { apiRequest, type ApiError } from "../api";

export type { ApiError };

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface ListParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
}

function qs(params: ListParams): string {
  const q = new URLSearchParams();
  if (params.page) q.set("page", String(params.page));
  if (params.limit) q.set("limit", String(params.limit));
  if (params.search) q.set("search", params.search);
  if (params.status) q.set("status", params.status);
  const s = q.toString();
  return s ? `?${s}` : "";
}

// Treasury
export interface BankAccountDto {
  id: string;
  code: string;
  name: string;
  bankName: string;
  accountNumber: string;
  currencyCode: string;
  currentBalance: string;
  isActive: boolean;
}

export interface ReconciliationDto {
  id: string;
  bankAccountId: string;
  periodStart: string;
  periodEnd: string;
  status: string;
  statementBalance: string;
  ledgerBalance: string;
  difference: string;
  bankAccount?: { code: string; name: string };
}

export const treasuryApi = {
  listBankAccounts: (params: ListParams = {}) =>
    apiRequest<PaginatedResponse<BankAccountDto>>(
      `/v1/treasury/bank-accounts${qs(params)}`,
    ),
  listReconciliations: (params: ListParams = {}) =>
    apiRequest<PaginatedResponse<ReconciliationDto>>(
      `/v1/treasury/reconciliations${qs(params)}`,
    ),
};

// COMEX
export interface ComexShipmentDto {
  id: string;
  reference: string;
  incoterm: string;
  status: string;
  originCountry: string;
  destinationCountry: string;
  totalFobValue: string;
  currencyCode: string;
  estimatedArrival: string | null;
  _count?: { documents: number };
}

export const comexApi = {
  listShipments: (params: ListParams = {}) =>
    apiRequest<PaginatedResponse<ComexShipmentDto>>(
      `/v1/comex/shipments${qs(params)}`,
    ),
};

// CRM
export interface CrmLeadDto {
  id: string;
  companyName: string;
  contactName: string | null;
  source: string;
  status: string;
  score: number;
  expectedValue: string | null;
  currencyCode: string | null;
}

export interface CrmOpportunityDto {
  id: string;
  title: string;
  stage: string;
  probability: number;
  amount: string;
  currencyCode: string;
  expectedCloseDate: string | null;
  status: string;
}

export const crmApi = {
  listLeads: (params: ListParams = {}) =>
    apiRequest<PaginatedResponse<CrmLeadDto>>(`/v1/crm/leads${qs(params)}`),
  listOpportunities: (params: ListParams = {}) =>
    apiRequest<PaginatedResponse<CrmOpportunityDto>>(
      `/v1/crm/opportunities${qs(params)}`,
    ),
};

// HR
export interface HrEmployeeDto {
  id: string;
  employeeCode: string;
  fullName: string;
  email: string | null;
  status: string;
  hireDate: string;
  department?: { code: string; name: string } | null;
  position?: { title: string } | null;
}

export const hrApi = {
  listEmployees: (params: ListParams = {}) =>
    apiRequest<PaginatedResponse<HrEmployeeDto>>(
      `/v1/hr/employees${qs(params)}`,
    ),
};

// Billing
export interface InvoiceDto {
  id: string;
  number: string;
  partyId: string;
  status: string;
  issueDate: string;
  dueDate: string;
  currencyCode: string;
  subtotal: string;
  taxTotal: string;
  total: string;
  paymentStatus: string;
}

export const billingApi = {
  listInvoices: (params: ListParams = {}) =>
    apiRequest<PaginatedResponse<InvoiceDto>>(
      `/v1/billing/invoices${qs(params)}`,
    ),
};

// Integrations
export interface IntegrationConnectorDto {
  id: string;
  code: string;
  name: string;
  connectorType: string;
  status: string;
  lastSyncAt: string | null;
  lastError: string | null;
}

export const integrationsApi = {
  listConnectors: (params: ListParams = {}) =>
    apiRequest<PaginatedResponse<IntegrationConnectorDto>>(
      `/v1/integrations/connectors${qs(params)}`,
    ),
};

// Accounting
export interface JournalEntryDto {
  id: string;
  entryNumber: string;
  status: string;
  entryDate: string;
  description: string | null;
  totalDebit: string;
  totalCredit: string;
}

export const accountingApi = {
  listJournalEntries: (params: ListParams & { startDate?: string; endDate?: string } = {}) => {
    const q = new URLSearchParams();
    if (params.page) q.set("page", String(params.page));
    if (params.limit) q.set("limit", String(params.limit));
    if (params.status) q.set("status", params.status);
    const s = q.toString();
    return apiRequest<{ data: JournalEntryDto[]; total: number }>(
      `/v1/ledger/journal-entries${s ? `?${s}` : ""}`,
    );
  },
};

export function formatMoney(value: string | number, currency = "BRL"): string {
  const num = typeof value === "string" ? Number(value) : value;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  }).format(num);
}

export function formatDate(iso: string | null): string {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString("pt-BR");
  } catch {
    return iso;
  }
}
