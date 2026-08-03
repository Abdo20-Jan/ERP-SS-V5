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
  type ConnectorDto,
  modulesApi,
} from "../../../../lib/api/modules";
import { statusTone } from "../../../../lib/status-tone";

export default function IntegrationsConnectorsPage() {
  const online = useOnlineStatus(true);
  const [search, setSearch] = useState("");
  const loader = useCallback(
    () => modulesApi.connectors({ search }),
    [search],
  );
  const { rows, total, loading, error, forbidden, reload } =
    useListQuery<ConnectorDto>(loader);

  if (forbidden) {
    return (
      <div className="p-4">
        <NoPermissionState message="Sem permissão integrations:read." />
      </div>
    );
  }

  return (
    <ListReport
      title="Conectores e integrações"
      subtitle="Plataforma · SM-PLATFORM-05 — saúde, filas e reprocessamento"
      filters={
        <input
          className="ns-filter-input w-64"
          placeholder="Código, nome, categoria..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar conectores"
        />
      }
      footer={`${total} conectores`}
      data-testid="integrations-connectors-page"
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
              <TableHead>Categoria</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Fila</TableHead>
              <TableHead>Último sucesso</TableHead>
              <TableHead>Último erro</TableHead>
              <TableHead>Próxima ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium text-nsuite-link">
                  {row.code}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>
                  <WorkflowBadge
                    label={row.status}
                    tone={statusTone(row.status)}
                  />
                </TableCell>
                <TableCell className="text-right">{row.pendingJobs}</TableCell>
                <TableCell>
                  {row.lastSuccessAt
                    ? new Date(row.lastSuccessAt).toISOString().slice(0, 16)
                    : "—"}
                </TableCell>
                <TableCell>
                  {row.lastErrorAt
                    ? new Date(row.lastErrorAt).toISOString().slice(0, 16)
                    : "—"}
                </TableCell>
                <TableCell>{row.nextAction}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </ListReport>
  );
}
