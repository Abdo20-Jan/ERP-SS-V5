"use client";

import { ErpListPage } from "../../../../components/erp-list-page";
import {
  formatDate,
  formatMoney,
  treasuryApi,
  type ReconciliationDto,
} from "../../../../lib/api/modules";

const STATUS_OPTIONS = [
  { value: "IN_PROGRESS", label: "Em andamento" },
  { value: "COMPLETED", label: "Concluída" },
  { value: "CANCELLED", label: "Cancelada" },
];

export default function ReconciliationsPage() {
  return (
    <ErpListPage<ReconciliationDto>
      title="Conciliação Bancária"
      subtitle="Tesouraria · matching extrato x razão"
      breadcrumbs={["Finanças", "Tesouraria", "Conciliação"]}
      permissionDeniedMessage="Sem permissão treasury:reconciliation:read."
      statusOptions={STATUS_OPTIONS}
      testId="reconciliations-list"
      loadData={async ({ page, status }) => {
        const res = await treasuryApi.listReconciliations({ page, limit: 20, status });
        return { data: res.data, total: res.total };
      }}
      keyExtractor={(r) => r.id}
      columns={[
        {
          id: "account",
          header: "Conta",
          accessor: (r) => r.bankAccount?.code ?? r.bankAccountId.slice(0, 8),
        },
        {
          id: "period",
          header: "Período",
          accessor: (r) => `${formatDate(r.periodStart)} – ${formatDate(r.periodEnd)}`,
        },
        { id: "status", header: "Status", accessor: (r) => r.status },
        {
          id: "statement",
          header: "Saldo Extrato",
          accessor: (r) => formatMoney(r.statementBalance),
          align: "right",
        },
        {
          id: "ledger",
          header: "Saldo Razão",
          accessor: (r) => formatMoney(r.ledgerBalance),
          align: "right",
        },
        {
          id: "diff",
          header: "Diferença",
          accessor: (r) => (
            <span className={Number(r.difference) !== 0 ? "text-error-600 font-medium" : ""}>
              {formatMoney(r.difference)}
            </span>
          ),
          align: "right",
        },
      ]}
    />
  );
}
