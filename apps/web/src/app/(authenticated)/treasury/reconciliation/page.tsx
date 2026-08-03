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
  type ReconciliationLineDto,
} from "../../../../lib/api/modules";
import { statusTone } from "../../../../lib/status-tone";

export default function ReconciliationPage() {
  const online = useOnlineStatus(true);
  const [search, setSearch] = useState("");
  const [matchStatus, setMatchStatus] = useState("");
  const loader = useCallback(
    () => modulesApi.reconciliationLines({ search, matchStatus }),
    [search, matchStatus],
  );
  const { rows, total, loading, error, forbidden, reload } =
    useListQuery<ReconciliationLineDto>(loader);

  if (forbidden) {
    return (
      <div className="p-4">
        <NoPermissionState message="Sem permissão treasury:read." />
      </div>
    );
  }

  return (
    <ListReport
      title="Conciliação bancária"
      subtitle="Tesouraria · SM-TREASURY-05 — matching e exceções"
      filters={
        <>
          <input
            className="ns-filter-input w-56"
            placeholder="Referência, descrição..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Buscar linhas de conciliação"
          />
          <select
            className="ns-filter-select"
            value={matchStatus}
            onChange={(e) => setMatchStatus(e.target.value)}
            aria-label="Filtrar match status"
          >
            <option value="">Todos</option>
            <option value="UNMATCHED">UNMATCHED</option>
            <option value="SUGGESTED">SUGGESTED</option>
            <option value="MATCHED">MATCHED</option>
            <option value="EXCEPTION">EXCEPTION</option>
          </select>
        </>
      }
      footer={`${total} linhas de extrato`}
      data-testid="treasury-reconciliation-page"
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
              <TableHead>Conta</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Referência</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead>Match</TableHead>
              <TableHead>Sugestão</TableHead>
              <TableHead>Próxima ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.accountCode}</TableCell>
                <TableCell>{row.statementDate}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell className="text-nsuite-link">{row.reference}</TableCell>
                <TableCell className="text-right font-mono text-[12px]">
                  {row.amount} {row.currency}
                </TableCell>
                <TableCell>
                  <WorkflowBadge
                    label={row.matchStatus}
                    tone={statusTone(row.matchStatus)}
                  />
                </TableCell>
                <TableCell>{row.suggestedDocument ?? "—"}</TableCell>
                <TableCell>{row.nextAction}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </ListReport>
  );
}
