export const OperationType = {
  IMPORTACAO_DEFINITIVA: "IMPORTACAO_DEFINITIVA",
  TRANSITO_ADUANEIRO: "TRANSITO_ADUANEIRO",
  ZONA_PRIMARIA: "ZONA_PRIMARIA",
  ZONA_FRANCA: "ZONA_FRANCA",
} as const;
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

export const OrderStatus = {
  DRAFT: "DRAFT",
  PENDING_APPROVAL: "PENDING_APPROVAL",
  APPROVED: "APPROVED",
  ORDER_SENT: "ORDER_SENT",
  PROFORMA_CONFIRMED: "PROFORMA_CONFIRMED",
  IN_PRODUCTION: "IN_PRODUCTION",
  READY_TO_SHIP: "READY_TO_SHIP",
  SUSPENDED: "SUSPENDED",
  CANCELLED: "CANCELLED",
} as const;
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

export const ALL_STATUSES = Object.values(OrderStatus);
export const ACTIVE_STATUSES: OrderStatus[] = [
  OrderStatus.DRAFT, OrderStatus.PENDING_APPROVAL, OrderStatus.APPROVED,
  OrderStatus.ORDER_SENT, OrderStatus.PROFORMA_CONFIRMED,
  OrderStatus.IN_PRODUCTION, OrderStatus.READY_TO_SHIP,
];

export const ProformaStatus = {
  REGISTERED: "REGISTERED",
  CONFIRMED: "CONFIRMED",
  SUPERSEDED: "SUPERSEDED",
} as const;
export type ProformaStatus = (typeof ProformaStatus)[keyof typeof ProformaStatus];

export const AlertSeverity = { INFO: "INFO", WARN: "WARN", HIGH: "HIGH" } as const;
export type AlertSeverity = (typeof AlertSeverity)[keyof typeof AlertSeverity];

export const AlertStatus = { OPEN: "OPEN", ACKNOWLEDGED: "ACKNOWLEDGED", RESOLVED: "RESOLVED" } as const;
export type AlertStatus = (typeof AlertStatus)[keyof typeof AlertStatus];

export function isValidOperationType(v: string): v is OperationType {
  return Object.values(OperationType).includes(v as OperationType);
}
