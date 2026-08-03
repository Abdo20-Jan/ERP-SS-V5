"use client";

import { ErpListPage } from "../../../../components/erp-list-page";
import {
  formatDate,
  integrationsApi,
  type IntegrationConnectorDto,
} from "../../../../lib/api/modules";

const STATUS_OPTIONS = [
  { value: "ACTIVE", label: "Ativo" },
  { value: "INACTIVE", label: "Inativo" },
  { value: "ERROR", label: "Erro" },
];

export default function IntegrationsPage() {
  return (
    <ErpListPage<IntegrationConnectorDto>
      title="Conectores de Integração"
      subtitle="Plataforma · adapters externos e sincronização"
      breadcrumbs={["Plataforma", "Integrações"]}
      permissionDeniedMessage="Sem permissão integration:read."
      statusOptions={STATUS_OPTIONS}
      testId="integrations-list"
      loadData={async ({ page, status }) => {
        const res = await integrationsApi.listConnectors({ page, limit: 20, status });
        return { data: res.data, total: res.total };
      }}
      keyExtractor={(r) => r.id}
      columns={[
        { id: "code", header: "Código", accessor: (r) => <span className="font-mono text-accent-600">{r.code}</span> },
        { id: "name", header: "Nome", accessor: (r) => r.name },
        { id: "type", header: "Tipo", accessor: (r) => r.connectorType },
        {
          id: "status",
          header: "Status",
          accessor: (r) => (
            <span className={r.status === "ERROR" ? "text-error-600" : r.status === "ACTIVE" ? "text-success-700" : ""}>
              {r.status}
            </span>
          ),
        },
        { id: "sync", header: "Última Sync", accessor: (r) => formatDate(r.lastSyncAt) },
        { id: "error", header: "Último Erro", accessor: (r) => r.lastError ?? "—" },
      ]}
    />
  );
}
