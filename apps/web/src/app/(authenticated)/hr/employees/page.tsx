"use client";

import { ErpListPage } from "../../../../components/erp-list-page";
import {
  formatDate,
  hrApi,
  type HrEmployeeDto,
} from "../../../../lib/api/modules";

const STATUS_OPTIONS = [
  { value: "ACTIVE", label: "Ativo" },
  { value: "ON_LEAVE", label: "Afastado" },
  { value: "TERMINATED", label: "Desligado" },
];

export default function HrEmployeesPage() {
  return (
    <ErpListPage<HrEmployeeDto>
      title="Colaboradores"
      subtitle="Recursos Humanos · cadastro e organograma"
      breadcrumbs={["RH", "Colaboradores"]}
      permissionDeniedMessage="Sem permissão hr:read."
      searchPlaceholder="Nome ou matrícula"
      statusOptions={STATUS_OPTIONS}
      testId="hr-employees-list"
      loadData={async ({ page, search, status }) => {
        const res = await hrApi.listEmployees({ page, limit: 20, search, status });
        return { data: res.data, total: res.total };
      }}
      keyExtractor={(r) => r.id}
      columns={[
        { id: "code", header: "Matrícula", accessor: (r) => <span className="font-mono">{r.employeeCode}</span> },
        { id: "name", header: "Nome", accessor: (r) => r.fullName },
        { id: "dept", header: "Departamento", accessor: (r) => r.department?.name ?? "—" },
        { id: "position", header: "Cargo", accessor: (r) => r.position?.title ?? "—" },
        { id: "hire", header: "Admissão", accessor: (r) => formatDate(r.hireDate) },
        { id: "status", header: "Status", accessor: (r) => r.status },
      ]}
    />
  );
}
