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
  modulesApi,
  type ObligationDto,
} from "../../../../lib/api/modules";
import { statusTone } from "../../../../lib/status-tone";

export default function ReceivablesPage() {
  const online = useOnlineStatus(true);
  const [search, setSearch] = useState("");
  const loader = useCallback(
    () => modulesApi.receivables({ search }),
    [search],
  );
  const { rows, total, loading, error, forbidden, reload } =
    useListQuery<ObligationDto>(loader);

  if (forbidden) {
    return (
      <div className="p-4">
        <NoPermissionState message="Sem permissão finance:read." />
      </div>
    );
  }

  return (
    <ListReport
      title="Contas a receber"
      subtitle="Finanças · worklist AR (SALES → Tesouraria)"
      filters={
        <input
          className="ns-filter-input w-64"
          placeholder="Documento, cliente..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar contas a receber"
        />
      }
      footer={`${total} obrigações`}
      data-testid="finance-receivables-page"
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
              <TableHead>Documento</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Origem</TableHead>
              <TableHead>Moeda</TableHead>
              <TableHead className="text-right">Original</TableHead>
              <TableHead className="text-right">Em aberto</TableHead>
              <TableHead>Vencimento</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Próxima ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium text-nsuite-link">
                  {row.documentNumber}
                </TableCell>
                <TableCell>{row.counterparty}</TableCell>
                <TableCell>{row.sourceModule}</TableCell>
                <TableCell>{row.currency}</TableCell>
                <TableCell className="text-right font-mono text-[12px]">
                  {row.originalAmount}
                </TableCell>
                <TableCell className="text-right font-mono text-[12px]">
                  {row.openAmount}
                </TableCell>
                <TableCell>{row.dueDate}</TableCell>
                <TableCell>
                  <WorkflowBadge
                    label={row.status}
                    tone={statusTone(row.status)}
                  />
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
