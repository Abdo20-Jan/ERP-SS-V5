import { apiRequest, type ApiError } from "../api";

export type { ApiError };

export interface PageResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface ComexOrderDto {
  id: string;
  code: string;
  supplierName: string;
  incoterm: string;
  currency: string;
  totalAmount: string;
  status: string;
  eta: string | null;
  nextAction: string;
  owner: string;
  updatedAt: string;
}

export interface BankAccountDto {
  id: string;
  code: string;
  bankName: string;
  country: string;
  currency: string;
  status: string;
  bookBalance: string;
  bankBalance: string;
  availableBalance: string;
  lastStatementAt: string | null;
}

export interface ReconciliationLineDto {
  id: string;
  accountCode: string;
  statementDate: string;
  description: string;
  reference: string;
  amount: string;
  currency: string;
  matchStatus: string;
  suggestedDocument: string | null;
  nextAction: string;
}

export interface ObligationDto {
  id: string;
  documentNumber: string;
  counterparty: string;
  side: "PAYABLE" | "RECEIVABLE";
  currency: string;
  originalAmount: string;
  openAmount: string;
  dueDate: string;
  status: string;
  sourceModule: string;
  nextAction: string;
}

export interface SalesInvoiceDto {
  id: string;
  number: string;
  customerName: string;
  channel: string;
  currency: string;
  totalAmount: string;
  status: string;
  dueDate: string;
  releaseGate: string;
  nextAction: string;
  owner: string;
}

export interface LeadDto {
  id: string;
  name: string;
  company: string;
  channel: string;
  region: string;
  status: string;
  owner: string;
  slaFirstContactHours: number;
  nextAction: string;
}

export interface OpportunityDto {
  id: string;
  title: string;
  accountName: string;
  stage: string;
  currency: string;
  amount: string;
  probability: number;
  expectedCloseDate: string;
  owner: string;
  nextAction: string;
}

export interface EmployeeDto {
  id: string;
  employeeCode: string;
  fullName: string;
  department: string;
  jobTitle: string;
  status: string;
  accessProvisioning: string;
  manager: string;
  nextAction: string;
}

export interface ConnectorDto {
  id: string;
  code: string;
  name: string;
  category: string;
  status: string;
  lastSuccessAt: string | null;
  lastErrorAt: string | null;
  pendingJobs: number;
  nextAction: string;
}

export interface ChartOfAccountsDto {
  id: string;
  name?: string;
  code?: string;
  accounts?: Array<{
    id: string;
    code: string;
    name: string;
    type?: string;
    isActive?: boolean;
    children?: unknown[];
  }>;
  [key: string]: unknown;
}

function qs(params: Record<string, string | number | undefined>): string {
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== "") sp.set(k, String(v));
  }
  const s = sp.toString();
  return s ? `?${s}` : "";
}

export const modulesApi = {
  comexOrders: (p: { search?: string; status?: string } = {}) =>
    apiRequest<PageResult<ComexOrderDto>>(
      `/v1/comex/orders${qs({ limit: 100, ...p })}`,
    ),
  bankAccounts: (p: { search?: string } = {}) =>
    apiRequest<PageResult<BankAccountDto>>(
      `/v1/treasury/bank-accounts${qs({ limit: 100, ...p })}`,
    ),
  reconciliationLines: (p: { search?: string; matchStatus?: string } = {}) =>
    apiRequest<PageResult<ReconciliationLineDto>>(
      `/v1/treasury/reconciliation-lines${qs({ limit: 100, ...p })}`,
    ),
  payables: (p: { search?: string; status?: string } = {}) =>
    apiRequest<PageResult<ObligationDto>>(
      `/v1/finance/payables${qs({ limit: 100, ...p })}`,
    ),
  receivables: (p: { search?: string; status?: string } = {}) =>
    apiRequest<PageResult<ObligationDto>>(
      `/v1/finance/receivables${qs({ limit: 100, ...p })}`,
    ),
  salesInvoices: (p: { search?: string; status?: string } = {}) =>
    apiRequest<PageResult<SalesInvoiceDto>>(
      `/v1/sales/invoices${qs({ limit: 100, ...p })}`,
    ),
  leads: (p: { search?: string; status?: string } = {}) =>
    apiRequest<PageResult<LeadDto>>(`/v1/crm/leads${qs({ limit: 100, ...p })}`),
  opportunities: (p: { search?: string; stage?: string } = {}) =>
    apiRequest<PageResult<OpportunityDto>>(
      `/v1/crm/opportunities${qs({ limit: 100, ...p })}`,
    ),
  employees: (p: { search?: string; status?: string } = {}) =>
    apiRequest<PageResult<EmployeeDto>>(
      `/v1/hr/employees${qs({ limit: 100, ...p })}`,
    ),
  connectors: (p: { search?: string; status?: string } = {}) =>
    apiRequest<PageResult<ConnectorDto>>(
      `/v1/integrations/connectors${qs({ limit: 100, ...p })}`,
    ),
  activeCoa: () => apiRequest<ChartOfAccountsDto>("/v1/chart-of-accounts"),
};
