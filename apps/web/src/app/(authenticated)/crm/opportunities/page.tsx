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
  type OpportunityDto,
} from "../../../../lib/api/modules";
import { statusTone } from "../../../../lib/status-tone";

export default function CrmOpportunitiesPage() {
  const online = useOnlineStatus(true);
  const [search, setSearch] = useState("");
  const loader = useCallback(
    () => modulesApi.opportunities({ search }),
    [search],
  );
  const { rows, total, loading, error, forbidden, reload } =
    useListQuery<OpportunityDto>(loader);

  if (forbidden) {
    return (
      <div className="p-4">
        <NoPermissionState message="Sem permissão crm:read." />
      </div>
    );
  }

  return (
    <ListReport
      title="Pipeline de oportunidades"
      subtitle="CRM · SM-CRM-03 — etapas, probabilidade e forecast"
      filters={
        <input
          className="ns-filter-input w-64"
          placeholder="Título, conta, owner..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar oportunidades"
        />
      }
      footer={`${total} oportunidades`}
      data-testid="crm-opportunities-page"
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
              <TableHead>Oportunidade</TableHead>
              <TableHead>Conta</TableHead>
              <TableHead>Etapa</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead className="text-right">Prob. %</TableHead>
              <TableHead>Fechamento</TableHead>
              <TableHead>Próxima ação</TableHead>
              <TableHead>Owner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium text-nsuite-link">
                  {row.title}
                </TableCell>
                <TableCell>{row.accountName}</TableCell>
                <TableCell>
                  <WorkflowBadge
                    label={row.stage}
                    tone={statusTone(row.stage)}
                  />
                </TableCell>
                <TableCell className="text-right font-mono text-[12px]">
                  {row.amount} {row.currency}
                </TableCell>
                <TableCell className="text-right">{row.probability}</TableCell>
                <TableCell>{row.expectedCloseDate}</TableCell>
                <TableCell>{row.nextAction}</TableCell>
                <TableCell>{row.owner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </ListReport>
  );
}
