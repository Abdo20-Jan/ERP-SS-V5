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
import { type LeadDto, modulesApi } from "../../../../lib/api/modules";
import { statusTone } from "../../../../lib/status-tone";

export default function CrmLeadsPage() {
  const online = useOnlineStatus(true);
  const [search, setSearch] = useState("");
  const loader = useCallback(() => modulesApi.leads({ search }), [search]);
  const { rows, total, loading, error, forbidden, reload } =
    useListQuery<LeadDto>(loader);

  if (forbidden) {
    return (
      <div className="p-4">
        <NoPermissionState message="Sem permissão crm:read." />
      </div>
    );
  }

  return (
    <ListReport
      title="Leads"
      subtitle="CRM · SM-CRM-01 — entrada, deduplicação e distribuição"
      filters={
        <input
          className="ns-filter-input w-64"
          placeholder="Nome, empresa, canal..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar leads"
        />
      }
      footer={`${total} leads`}
      data-testid="crm-leads-page"
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
              <TableHead>Empresa</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Canal</TableHead>
              <TableHead>Região</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>SLA 1º contato (h)</TableHead>
              <TableHead>Próxima ação</TableHead>
              <TableHead>Owner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium text-nsuite-link">
                  {row.company}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.channel}</TableCell>
                <TableCell>{row.region}</TableCell>
                <TableCell>
                  <WorkflowBadge
                    label={row.status}
                    tone={statusTone(row.status)}
                  />
                </TableCell>
                <TableCell>{row.slaFirstContactHours}</TableCell>
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
