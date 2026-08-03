import {
  BankAccountStatus,
  ReconciliationMatchStatus,
} from "@sunset/domain";

export interface BankAccountDto {
  id: string;
  code: string;
  bankName: string;
  country: string;
  currency: string;
  status: BankAccountStatus;
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
  matchStatus: ReconciliationMatchStatus;
  suggestedDocument: string | null;
  nextAction: string;
}

export const BANK_ACCOUNTS_SEED: BankAccountDto[] = [
  {
    id: "01930000-0002-7000-8000-000000000001",
    code: "AR-GALICIA-ARS",
    bankName: "Banco Galicia",
    country: "AR",
    currency: "ARS",
    status: BankAccountStatus.ACTIVE,
    bookBalance: "125430000.55",
    bankBalance: "124980000.00",
    availableBalance: "118500000.00",
    lastStatementAt: "2026-08-02T23:00:00.000Z",
  },
  {
    id: "01930000-0002-7000-8000-000000000002",
    code: "AR-GALICIA-USD",
    bankName: "Banco Galicia",
    country: "AR",
    currency: "USD",
    status: BankAccountStatus.ACTIVE,
    bookBalance: "84220.10",
    bankBalance: "84100.00",
    availableBalance: "79000.00",
    lastStatementAt: "2026-08-02T23:00:00.000Z",
  },
  {
    id: "01930000-0002-7000-8000-000000000003",
    code: "US-BOA-USD",
    bankName: "Bank of America",
    country: "US",
    currency: "USD",
    status: BankAccountStatus.ACTIVE,
    bookBalance: "215400.00",
    bankBalance: "215400.00",
    availableBalance: "200000.00",
    lastStatementAt: "2026-08-01T23:00:00.000Z",
  },
];

export const RECONCILIATION_LINES_SEED: ReconciliationLineDto[] = [
  {
    id: "01930000-0002-7000-8000-000000000101",
    accountCode: "AR-GALICIA-ARS",
    statementDate: "2026-08-02",
    description: "TRANSF RECIBIDA CLIENTE NORTE",
    reference: "TRX-88421",
    amount: "2450000.00",
    currency: "ARS",
    matchStatus: ReconciliationMatchStatus.SUGGESTED,
    suggestedDocument: "REC-2026-0441",
    nextAction: "Revisar sugestão de matching",
  },
  {
    id: "01930000-0002-7000-8000-000000000102",
    accountCode: "AR-GALICIA-ARS",
    statementDate: "2026-08-02",
    description: "DEBITO TARIFA MANTENIMIENTO",
    reference: "FEE-08",
    amount: "-18500.00",
    currency: "ARS",
    matchStatus: ReconciliationMatchStatus.UNMATCHED,
    suggestedDocument: null,
    nextAction: "Classificar tarifa bancária",
  },
  {
    id: "01930000-0002-7000-8000-000000000103",
    accountCode: "AR-GALICIA-USD",
    statementDate: "2026-08-01",
    description: "SWIFT OUT QINGDAO",
    reference: "SW-99102",
    amount: "-52000.00",
    currency: "USD",
    matchStatus: ReconciliationMatchStatus.MATCHED,
    suggestedDocument: "PAY-COMEX-019",
    nextAction: "—",
  },
  {
    id: "01930000-0002-7000-8000-000000000104",
    accountCode: "US-BOA-USD",
    statementDate: "2026-08-01",
    description: "INCOMING WIRE UNKNOWN",
    reference: "WIR-4410",
    amount: "12500.00",
    currency: "USD",
    matchStatus: ReconciliationMatchStatus.EXCEPTION,
    suggestedDocument: null,
    nextAction: "Identificar contraparte",
  },
];
