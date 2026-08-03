import { InternationalOrderStatus } from "@sunset/domain";

export interface ComexOrderDto {
  id: string;
  code: string;
  supplierName: string;
  incoterm: string;
  currency: string;
  totalAmount: string;
  status: InternationalOrderStatus;
  eta: string | null;
  nextAction: string;
  owner: string;
  updatedAt: string;
}

export const COMEX_ORDERS_SEED: ComexOrderDto[] = [
  {
    id: "01930000-0001-7000-8000-000000000001",
    code: "PO-INT-2026-001",
    supplierName: "Qingdao Tire Export Co.",
    incoterm: "FOB",
    currency: "USD",
    totalAmount: "185000.00",
    status: InternationalOrderStatus.IN_PRODUCTION,
    eta: "2026-09-12",
    nextAction: "Confirmar packing list parcial",
    owner: "Ana COMEX",
    updatedAt: "2026-08-01T14:22:00.000Z",
  },
  {
    id: "01930000-0001-7000-8000-000000000002",
    code: "PO-INT-2026-002",
    supplierName: "Shanghai Rubber Trading",
    incoterm: "CIF",
    currency: "USD",
    totalAmount: "92000.50",
    status: InternationalOrderStatus.SHIPPED,
    eta: "2026-08-18",
    nextAction: "Acompanhar BL house",
    owner: "Ana COMEX",
    updatedAt: "2026-08-02T09:10:00.000Z",
  },
  {
    id: "01930000-0001-7000-8000-000000000003",
    code: "PO-INT-2026-003",
    supplierName: "Ningbo Mobility Parts",
    incoterm: "FOB",
    currency: "USD",
    totalAmount: "41200.00",
    status: InternationalOrderStatus.IN_CUSTOMS,
    eta: "2026-08-05",
    nextAction: "Responder exigência aduaneira",
    owner: "Carlos Despacho",
    updatedAt: "2026-08-03T11:05:00.000Z",
  },
  {
    id: "01930000-0001-7000-8000-000000000004",
    code: "PO-INT-2026-004",
    supplierName: "Guangzhou Fleet Supply",
    incoterm: "EXW",
    currency: "USD",
    totalAmount: "15800.00",
    status: InternationalOrderStatus.PENDING_APPROVAL,
    eta: null,
    nextAction: "Aprovar pedido internacional",
    owner: "Gestor COMEX",
    updatedAt: "2026-08-03T08:40:00.000Z",
  },
  {
    id: "01930000-0001-7000-8000-000000000005",
    code: "PO-INT-2025-118",
    supplierName: "Qingdao Tire Export Co.",
    incoterm: "CIF",
    currency: "USD",
    totalAmount: "210400.00",
    status: InternationalOrderStatus.RECEIVED,
    eta: "2026-07-20",
    nextAction: "Checklist de fechamento",
    owner: "Ana COMEX",
    updatedAt: "2026-07-28T16:00:00.000Z",
  },
];
