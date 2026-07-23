export interface CreateInternationalOrderDto {
  operationType: string;
  supplierPartyId: string;
  exporterPartyId?: string;
  manufacturerPartyId?: string;
  incoterm?: string;
  paymentTerms?: string;
  originCountry?: string;
  currencyCode?: string;
  expectedReadyDate?: string;
  responsibleUserId?: string;
  idempotencyKey?: string;
}

export interface UpdateInternationalOrderDto {
  incoterm?: string;
  paymentTerms?: string;
  originCountry?: string;
  currencyCode?: string;
  expectedReadyDate?: string;
  responsibleUserId?: string;
  supplierPartyId?: string;
  exporterPartyId?: string | null;
  manufacturerPartyId?: string | null;
  expectedVersion: number;
}

export interface AddOrderLineDto {
  productId: string;
  sku: string;
  description?: string;
  quantity: string;
  unitPrice: string;
  expectedVersion: number;
}

export interface UpdateOrderLineDto {
  quantity?: string;
  unitPrice?: string;
  expectedVersion: number;
  expectedLineVersion: number;
}

export interface ProductionProgressDto {
  lines: { lineNumber: number; quantityProduced: string }[];
  expectedVersion: number;
}

export interface TransitionDto {
  reason?: string;
  expectedVersion: number;
  idempotencyKey?: string;
}

export interface OrderLineDto {
  id: string;
  lineNumber: number;
  productId: string;
  skuSnapshot: string;
  descriptionSnapshot: string | null;
  quantityOrdered: string;
  quantityConfirmed: string;
  quantityProduced: string;
  quantityCancelled: string;
  unitPrice: string;
  lineTotalOriginal: string;
  version: number;
}

export interface InternationalOrderDto {
  id: string;
  organizationId: string;
  code: string;
  operationType: string;
  status: string;
  previousStatus: string | null;
  supplierPartyId: string;
  exporterPartyId: string | null;
  manufacturerPartyId: string | null;
  incoterm: string | null;
  paymentTerms: string | null;
  originCountry: string | null;
  currencyCode: string | null;
  expectedReadyDate: string | null;
  responsibleUserId: string | null;
  subtotalOriginal: string | null;
  fxRate: string | null;
  fxRateDate: string | null;
  fxSource: string | null;
  subtotalFunctional: string | null;
  idempotencyKey: string | null;
  idempotencyPayloadHash: string | null;
  version: number;
  createdBy: string;
  cancelledAt: string | null;
  cancelledBy: string | null;
  cancelReason: string | null;
  suspendedAt: string | null;
  suspendedBy: string | null;
  suspendReason: string | null;
  resumedAt: string | null;
  lines: OrderLineDto[];
  createdAt: string;
  updatedAt: string;
}

export interface InternationalOrderListDto {
  data: InternationalOrderDto[];
  total: number;
  page: number;
  limit: number;
}

export interface RegisterProformaDto {
  proformaNumber: string;
  issueDate?: string;
  totalAmount?: string;
  currencyCode?: string;
  expectedOrderVersion: number;
}

export interface ConfirmProformaDto {
  expectedVersion: number;
  expectedOrderVersion: number;
  idempotencyKey?: string;
}

export interface ProformaVersionDto {
  id: string;
  orderId: string;
  organizationId: string;
  supplierPartyId: string;
  proformaNumber: string;
  versionNumber: number;
  issueDate: string | null;
  totalAmount: string | null;
  currencyCode: string | null;
  status: string;
  createdBy: string | null;
  confirmedBy: string | null;
  confirmedAt: string | null;
  correlationId: string | null;
  createdAt: string;
}

export interface OrderAlertDto {
  id: string;
  organizationId?: string;
  orderId: string;
  code: string;
  severity: string;
  message: string;
  status: string;
  acknowledgedBy: string | null;
  acknowledgedAt: string | null;
  resolvedBy: string | null;
  resolvedAt: string | null;
  resolutionReason: string | null;
  createdAt: string;
}

export interface CreateOrderAlertDto {
  code: string;
  severity: "INFO" | "WARN" | "HIGH";
  message: string;
}
