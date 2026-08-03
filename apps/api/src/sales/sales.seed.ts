import { SalesInvoiceStatus } from "@sunset/domain";

export interface SalesInvoiceDto {
  id: string;
  number: string;
  customerName: string;
  channel: string;
  currency: string;
  totalAmount: string;
  status: SalesInvoiceStatus;
  dueDate: string;
  releaseGate: string;
  nextAction: string;
  owner: string;
}

export const SALES_INVOICES_SEED: SalesInvoiceDto[] = [
  {
    id: "01930000-0004-7000-8000-000000000001",
    number: "FAC-2026-4401",
    customerName: "Distribuidora Norte SA",
    channel: "B2B",
    currency: "ARS",
    totalAmount: "2450000.00",
    status: SalesInvoiceStatus.AWAITING_PAYMENT,
    dueDate: "2026-08-02",
    releaseGate: "BLOQUEADO_PAGAMENTO",
    nextAction: "Confirmar crédito bancário",
    owner: "Vendas Interior",
  },
  {
    id: "01930000-0004-7000-8000-000000000002",
    number: "FAC-2026-4402",
    customerName: "Flota Sur SRL",
    channel: "B2B",
    currency: "USD",
    totalAmount: "8900.00",
    status: SalesInvoiceStatus.AUTHORIZED,
    dueDate: "2026-08-15",
    releaseGate: "AGUARDANDO_VENCIMENTO",
    nextAction: "Emitir cobrança",
    owner: "Vendas CABA",
  },
  {
    id: "01930000-0004-7000-8000-000000000003",
    number: "FAC-2026-4388",
    customerName: "Mercado Rueda",
    channel: "MARKETPLACE",
    currency: "ARS",
    totalAmount: "318000.00",
    status: SalesInvoiceStatus.PAID,
    dueDate: "2026-07-28",
    releaseGate: "PRONTO_PARA_LIBERAR",
    nextAction: "Liberar mercadoria",
    owner: "E-commerce",
  },
  {
    id: "01930000-0004-7000-8000-000000000004",
    number: "FAC-2026-4370",
    customerName: "Taller Centro",
    channel: "B2C",
    currency: "ARS",
    totalAmount: "96500.00",
    status: SalesInvoiceStatus.PENDING_AUTHORIZATION,
    dueDate: "2026-08-10",
    releaseGate: "BLOQUEADO_FISCAL",
    nextAction: "Aguardar autorização SI Factura",
    owner: "Balcão",
  },
  {
    id: "01930000-0004-7000-8000-000000000005",
    number: "FAC-2026-4301",
    customerName: "Transportes Andes",
    channel: "B2B",
    currency: "ARS",
    totalAmount: "1520000.00",
    status: SalesInvoiceStatus.RELEASED,
    dueDate: "2026-07-15",
    releaseGate: "LIBERADO",
    nextAction: "—",
    owner: "Vendas Interior",
  },
];
