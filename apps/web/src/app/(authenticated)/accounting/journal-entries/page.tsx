"use client";

import { ErpListPage } from "../../../../components/erp-list-page";
import {
  accountingApi,
  formatDate,
  formatMoney,
  type JournalEntryDto,
} from "../../../../lib/api/modules";

const STATUS_OPTIONS = [
  { value: "DRAFT", label: "Rascunho" },
  { value: "POSTED", label: "Postado" },
  { value: "REVERSED", label: "Estornado" },
];

export default function JournalEntriesPage() {
  return (
    <ErpListPage<JournalEntryDto>
      title="Lançamentos Contábeis"
      subtitle="Contabilidade · razão e partidas dobradas"
      breadcrumbs={["Finanças", "Contabilidade", "Lançamentos"]}
      permissionDeniedMessage="Sem permissão accounting:read."
      statusOptions={STATUS_OPTIONS}
      testId="journal-entries-list"
      loadData={async ({ page, status }) => {
        const res = await accountingApi.listJournalEntries({ page, limit: 20, status });
        return { data: res.data ?? [], total: res.total ?? res.data?.length ?? 0 };
      }}
      keyExtractor={(r) => r.id}
      columns={[
        { id: "number", header: "Nº", accessor: (r) => <span className="font-mono">{r.entryNumber}</span> },
        { id: "date", header: "Data", accessor: (r) => formatDate(r.entryDate) },
        { id: "desc", header: "Descrição", accessor: (r) => r.description ?? "—" },
        { id: "status", header: "Status", accessor: (r) => r.status },
        {
          id: "debit",
          header: "Débito",
          accessor: (r) => formatMoney(r.totalDebit),
          align: "right",
        },
        {
          id: "credit",
          header: "Crédito",
          accessor: (r) => formatMoney(r.totalCredit),
          align: "right",
        },
      ]}
    />
  );
}
