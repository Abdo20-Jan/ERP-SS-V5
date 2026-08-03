"use client";

import { ErpListPage } from "../../../../components/erp-list-page";
import {
  comexApi,
  formatDate,
  formatMoney,
  type ComexShipmentDto,
} from "../../../../lib/api/modules";

const STATUS_OPTIONS = [
  { value: "DRAFT", label: "Rascunho" },
  { value: "IN_TRANSIT", label: "Em trânsito" },
  { value: "CUSTOMS", label: "Desembaraço" },
  { value: "DELIVERED", label: "Entregue" },
  { value: "CLOSED", label: "Encerrado" },
];

export default function ComexShipmentsPage() {
  return (
    <ErpListPage<ComexShipmentDto>
      title="Embarques COMEX"
      subtitle="Comércio exterior · operações de importação/exportação"
      breadcrumbs={["Comex", "Embarques"]}
      permissionDeniedMessage="Sem permissão comex:read."
      searchPlaceholder="Referência do embarque"
      statusOptions={STATUS_OPTIONS}
      testId="comex-shipments-list"
      loadData={async ({ page, search, status }) => {
        const res = await comexApi.listShipments({ page, limit: 20, search, status });
        return { data: res.data, total: res.total };
      }}
      keyExtractor={(r) => r.id}
      columns={[
        { id: "ref", header: "Referência", accessor: (r) => <span className="font-mono text-accent-600">{r.reference}</span> },
        { id: "status", header: "Status", accessor: (r) => r.status },
        { id: "incoterm", header: "Incoterm", accessor: (r) => r.incoterm },
        { id: "route", header: "Rota", accessor: (r) => `${r.originCountry} → ${r.destinationCountry}` },
        {
          id: "value",
          header: "FOB",
          accessor: (r) => formatMoney(r.totalFobValue, r.currencyCode),
          align: "right",
        },
        { id: "eta", header: "ETA", accessor: (r) => formatDate(r.estimatedArrival) },
        { id: "docs", header: "Docs", accessor: (r) => r._count?.documents ?? 0, align: "center" },
      ]}
    />
  );
}
