import type {
  OrderAlertSnapshot,
  ProformaVersionSnapshot,
} from "@sunset/domain";

export const COMEX_S03_TEST_IDS = {
  order: "00000000-0000-7000-8000-000000000101",
  otherOrder: "00000000-0000-7000-8000-000000000102",
  alert: "00000000-0000-7000-8000-000000000201",
  override: "00000000-0000-7000-8000-000000000301",
  secondOverride: "00000000-0000-7000-8000-000000000302",
  proforma: "00000000-0000-7000-8000-000000000401",
  supplier: "00000000-0000-7000-8000-000000000501",
  requester: "00000000-0000-7000-8000-000000000601",
  executor: "00000000-0000-7000-8000-000000000602",
} as const;

export const COMEX_S03_TEST_ORG = "org_001";
export const COMEX_S03_FIXED_TIME = "2026-01-15T12:00:00.000Z";

const fixedDate = () => new Date(COMEX_S03_FIXED_TIME);

export function makeOverrideRow(overrides: Record<string, unknown> = {}) {
  return {
    id: COMEX_S03_TEST_IDS.override,
    organizationId: COMEX_S03_TEST_ORG,
    action: "ready_to_ship_partial",
    resourceType: "international_order",
    resourceId: COMEX_S03_TEST_IDS.order,
    reason: "Synthetic operational exception for regression testing",
    evidenceUrl: null,
    requestedById: COMEX_S03_TEST_IDS.requester,
    requestedAt: fixedDate(),
    approvedById: null,
    approvedAt: null,
    rejectedById: null,
    rejectedAt: null,
    rejectionReason: null,
    cancelledById: null,
    cancelledAt: null,
    status: "PENDING",
    executedById: null,
    executedAt: null,
    expiresAt: null,
    version: 0,
    idempotencyKey: null,
    requestHash: null,
    createdAt: fixedDate(),
    updatedAt: fixedDate(),
    ...overrides,
  };
}

export function makeAlertSnapshot(
  overrides: Partial<OrderAlertSnapshot> = {},
): OrderAlertSnapshot {
  return {
    id: COMEX_S03_TEST_IDS.alert,
    orderId: COMEX_S03_TEST_IDS.order,
    code: "DOC_DIVERGENCE",
    severity: "WARN",
    message: "Synthetic document divergence",
    status: "OPEN",
    acknowledgedBy: null,
    acknowledgedAt: null,
    resolvedBy: null,
    resolvedAt: null,
    resolutionReason: null,
    createdAt: COMEX_S03_FIXED_TIME,
    ...overrides,
  };
}

export function makeProformaSnapshot(
  overrides: Partial<ProformaVersionSnapshot> = {},
): ProformaVersionSnapshot {
  return {
    id: COMEX_S03_TEST_IDS.proforma,
    orderId: COMEX_S03_TEST_IDS.order,
    organizationId: COMEX_S03_TEST_ORG,
    supplierPartyId: COMEX_S03_TEST_IDS.supplier,
    proformaNumber: "PI-TEST-001",
    versionNumber: 1,
    issueDate: "2026-01-15",
    totalAmount: "1250.00",
    currencyCode: "USD",
    status: "REGISTERED",
    createdBy: COMEX_S03_TEST_IDS.requester,
    confirmedBy: null,
    confirmedAt: null,
    correlationId: "corr-comex-s03-test",
    createdAt: COMEX_S03_FIXED_TIME,
    ...overrides,
  };
}
