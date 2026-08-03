"use client";

import { ErpListPage } from "../../../../components/erp-list-page";
import {
  crmApi,
  formatDate,
  formatMoney,
  type CrmOpportunityDto,
} from "../../../../lib/api/modules";

const STATUS_OPTIONS = [
  { value: "OPEN", label: "Aberta" },
  { value: "WON", label: "Ganha" },
  { value: "LOST", label: "Perdida" },
];

export default function CrmOpportunitiesPage() {
  return (
    <ErpListPage<CrmOpportunityDto>
      title="Oportunidades"
      subtitle="CRM · pipeline comercial"
      breadcrumbs={["Comercial", "CRM", "Oportunidades"]}
      permissionDeniedMessage="Sem permissão crm:read."
      searchPlaceholder="Título da oportunidade"
      statusOptions={STATUS_OPTIONS}
      testId="crm-opportunities-list"
      loadData={async ({ page, search, status }) => {
        const res = await crmApi.listOpportunities({ page, limit: 20, search, status });
        return { data: res.data, total: res.total };
      }}
      keyExtractor={(r) => r.id}
      columns={[
        { id: "title", header: "Título", accessor: (r) => r.title },
        { id: "stage", header: "Estágio", accessor: (r) => r.stage },
        { id: "prob", header: "Prob.", accessor: (r) => `${r.probability}%`, align: "center" },
        {
          id: "amount",
          header: "Valor",
          accessor: (r) => formatMoney(r.amount, r.currencyCode),
          align: "right",
        },
        { id: "close", header: "Fechamento", accessor: (r) => formatDate(r.expectedCloseDate) },
        { id: "status", header: "Status", accessor: (r) => r.status },
      ]}
    />
  );
}
