import type { WorkflowTone } from "@sunset/ui";

export function statusTone(status: string): WorkflowTone {
  const s = status.toUpperCase();
  if (
    [
      "ACTIVE",
      "MATCHED",
      "PAID",
      "RELEASED",
      "CLOSED",
      "WON",
      "CONVERTED",
      "SETTLED",
      "AUTHORIZED",
      "PROVISIONADO",
    ].includes(s)
  ) {
    return "success";
  }
  if (
    [
      "ERROR",
      "EXCEPTION",
      "OVERDUE",
      "CANCELLED",
      "LOST",
      "TERMINATED",
      "DISPUTED",
      "BLOQUEADO_FISCAL",
      "BLOQUEADO_PAGAMENTO",
    ].includes(s)
  ) {
    return "danger";
  }
  if (
    [
      "DEGRADED",
      "SUGGESTED",
      "PENDING_APPROVAL",
      "PENDING_AUTHORIZATION",
      "AWAITING_PAYMENT",
      "PARTIALLY_PAID",
      "PARTIALLY_SETTLED",
      "ONBOARDING",
      "LEAVE",
      "UNMATCHED",
      "CONTINGENCY",
      "PENDENTE",
      "SUSPENSO",
    ].includes(s)
  ) {
    return "warning";
  }
  if (
    [
      "IN_PRODUCTION",
      "SHIPPED",
      "IN_CUSTOMS",
      "ASSIGNED",
      "NEGOTIATION",
      "PROPOSAL",
      "QUALIFIED",
    ].includes(s)
  ) {
    return "info";
  }
  if (["DISABLED", "DRAFT", "IGNORED"].includes(s)) {
    return "neutral";
  }
  return "accent";
}
