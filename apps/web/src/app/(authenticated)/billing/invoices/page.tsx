"use client";

import { ErpListPage } from "../../../../components/erp-list-page";
import {
  formatDate,
  formatMoney,
  billingApi,
  type InvoiceDto,
} from "../../../../lib/api/modules";

const STATUS_OPTIONS = [
  { value: "DRAFT", label: "Rascunho" },
  { value: "ISSUED", label: "Emitida" },
  { value: "CANCELLED", label: "Cancelada" },
];

export default function InvoicesPage() {
  return (
    <ErpListPage<InvoiceDto>
      title="Faturas"
      subtitle="Faturamento · emissão e cobrança"
      breadcrumbs={["Comercial", "Faturamento", "Faturas"]}
      permissionDeniedMessage="Sem permissão billing:read."
      searchPlaceholder="Número da fatura"
      statusOptions={STATUS_OPTIONS}
      testId="invoices-list"
      loadData={async ({ page, search, status }) => {
        const res = await billingApi.listInvoices({ page, limit: 20, search, status });
        return { data: res.data, total: res.total };
      }}
      keyExtractor={(r) => r.id}
      columns={[
        { id: "number", header: "Número", accessor: (r) => <span className="font-mono text-accent-600">{r.number}</span> },
        { id: "issue", header: "Emissão", accessor: (r) => formatDate(r.issueDate) },
        { id: "due", header: "Vencimento", accessor: (r) => formatDate(r.dueDate) },
        { id: "status", header: "Status", accessor: (r) => r.status },
        {
          id: "total",
          header: "Total",
          accessor: (r) => formatMoney(r.total, r.currencyCode),
          align: "right",
        },
        { id: "payment", header: "Pagamento", accessor: (r) => r.paymentStatus },
      ]}
    />
  );
}
