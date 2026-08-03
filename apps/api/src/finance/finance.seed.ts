import { ObligationStatus } from "@sunset/domain";

export interface ObligationDto {
  id: string;
  documentNumber: string;
  counterparty: string;
  side: "PAYABLE" | "RECEIVABLE";
  currency: string;
  originalAmount: string;
  openAmount: string;
  dueDate: string;
  status: ObligationStatus;
  sourceModule: string;
  nextAction: string;
}

export const OBLIGATIONS_SEED: ObligationDto[] = [
  {
    id: "01930000-0003-7000-8000-000000000001",
    documentNumber: "AP-2026-0881",
    counterparty: "Despachante Río",
    side: "PAYABLE",
    currency: "ARS",
    originalAmount: "1850000.00",
    openAmount: "1850000.00",
    dueDate: "2026-08-08",
    status: ObligationStatus.OPEN,
    sourceModule: "PURCHASING",
    nextAction: "Incluir em proposta de pagamento",
  },
  {
    id: "01930000-0003-7000-8000-000000000002",
    documentNumber: "AP-2026-0799",
    counterparty: "Qingdao Tire Export Co.",
    side: "PAYABLE",
    currency: "USD",
    originalAmount: "52000.00",
    openAmount: "12000.00",
    dueDate: "2026-08-04",
    status: ObligationStatus.PARTIALLY_SETTLED,
    sourceModule: "COMEX",
    nextAction: "Programar saldo remanescente",
  },
  {
    id: "01930000-0003-7000-8000-000000000003",
    documentNumber: "AR-2026-1204",
    counterparty: "Distribuidora Norte SA",
    side: "RECEIVABLE",
    currency: "ARS",
    originalAmount: "2450000.00",
    openAmount: "2450000.00",
    dueDate: "2026-08-02",
    status: ObligationStatus.OVERDUE,
    sourceModule: "SALES",
    nextAction: "Cobrar e conciliar crédito bancário",
  },
  {
    id: "01930000-0003-7000-8000-000000000004",
    documentNumber: "AR-2026-1188",
    counterparty: "Flota Sur SRL",
    side: "RECEIVABLE",
    currency: "USD",
    originalAmount: "8900.00",
    openAmount: "8900.00",
    dueDate: "2026-08-15",
    status: ObligationStatus.OPEN,
    sourceModule: "SALES",
    nextAction: "Aguardar vencimento",
  },
  {
    id: "01930000-0003-7000-8000-000000000005",
    documentNumber: "AP-2026-0701",
    counterparty: "Seguros Patagonia",
    side: "PAYABLE",
    currency: "ARS",
    originalAmount: "420000.00",
    openAmount: "420000.00",
    dueDate: "2026-07-30",
    status: ObligationStatus.DISPUTED,
    sourceModule: "PURCHASING",
    nextAction: "Resolver disputa de cobertura",
  },
];
