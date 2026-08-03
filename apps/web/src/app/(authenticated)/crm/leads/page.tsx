"use client";

import { ErpListPage } from "../../../../components/erp-list-page";
import {
  crmApi,
  formatMoney,
  type CrmLeadDto,
} from "../../../../lib/api/modules";

const STATUS_OPTIONS = [
  { value: "NEW", label: "Novo" },
  { value: "QUALIFIED", label: "Qualificado" },
  { value: "DISQUALIFIED", label: "Desqualificado" },
  { value: "CONVERTED", label: "Convertido" },
];

export default function CrmLeadsPage() {
  return (
    <ErpListPage<CrmLeadDto>
      title="Leads"
      subtitle="CRM · prospecção e qualificação"
      breadcrumbs={["Comercial", "CRM", "Leads"]}
      permissionDeniedMessage="Sem permissão crm:read."
      searchPlaceholder="Empresa ou contato"
      statusOptions={STATUS_OPTIONS}
      testId="crm-leads-list"
      loadData={async ({ page, search, status }) => {
        const res = await crmApi.listLeads({ page, limit: 20, search, status });
        return { data: res.data, total: res.total };
      }}
      keyExtractor={(r) => r.id}
      columns={[
        { id: "company", header: "Empresa", accessor: (r) => r.companyName },
        { id: "contact", header: "Contato", accessor: (r) => r.contactName ?? "—" },
        { id: "source", header: "Origem", accessor: (r) => r.source },
        { id: "status", header: "Status", accessor: (r) => r.status },
        { id: "score", header: "Score", accessor: (r) => r.score, align: "center" },
        {
          id: "value",
          header: "Valor Esperado",
          accessor: (r) =>
            r.expectedValue ? formatMoney(r.expectedValue, r.currencyCode ?? "BRL") : "—",
          align: "right",
        },
      ]}
    />
  );
}
