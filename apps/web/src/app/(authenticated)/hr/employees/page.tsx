"use client";

import {
  EmptyState,
  ErrorState,
  ListReport,
  LoadingState,
  NoPermissionState,
  OfflineState,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  useOnlineStatus,
  WorkflowBadge,
} from "@sunset/ui";
import { useCallback, useState } from "react";
import { useListQuery } from "../../../../components/use-list-query";
import {
  type EmployeeDto,
  modulesApi,
} from "../../../../lib/api/modules";
import { statusTone } from "../../../../lib/status-tone";

export default function HrEmployeesPage() {
  const online = useOnlineStatus(true);
  const [search, setSearch] = useState("");
  const loader = useCallback(
    () => modulesApi.employees({ search }),
    [search],
  );
  const { rows, total, loading, error, forbidden, reload } =
    useListQuery<EmployeeDto>(loader);

  if (forbidden) {
    return (
      <div className="p-4">
        <NoPermissionState message="Sem permissão hr:read." />
      </div>
    );
  }

  return (
    <ListReport
      title="Colaboradores"
      subtitle="RH · SM-COMP-04 — perfil, setor, cargo e provisionamento"
      filters={
        <input
          className="ns-filter-input w-64"
          placeholder="Código, nome, setor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar colaboradores"
        />
      }
      footer={`${total} colaboradores`}
      data-testid="hr-employees-page"
    >
      {!online ? <OfflineState /> : null}
      {loading ? (
        <div className="p-4">
          <LoadingState />
        </div>
      ) : error ? (
        <div className="p-4">
          <ErrorState
            correlationId={error.error.correlationId}
            onAction={reload}
          />
        </div>
      ) : rows.length === 0 ? (
        <div className="p-4">
          <EmptyState />
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Setor</TableHead>
              <TableHead>Cargo</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Acesso</TableHead>
              <TableHead>Gestor</TableHead>
              <TableHead>Próxima ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium text-nsuite-link">
                  {row.employeeCode}
                </TableCell>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>{row.jobTitle}</TableCell>
                <TableCell>
                  <WorkflowBadge
                    label={row.status}
                    tone={statusTone(row.status)}
                  />
                </TableCell>
                <TableCell>
                  <WorkflowBadge
                    label={row.accessProvisioning}
                    tone={statusTone(row.accessProvisioning)}
                  />
                </TableCell>
                <TableCell>{row.manager}</TableCell>
                <TableCell>{row.nextAction}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </ListReport>
  );
}
