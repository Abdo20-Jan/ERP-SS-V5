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
  type SalesInvoiceDto,
} from "../../../../lib/api/modules";
import { statusTone } from "../../../../lib/status-tone";

export default function SalesInvoicesPage() {
  const online = useOnlineStatus(true);
  const [search, setSearch] = useState("");
  const loader = useCallback(
    () => modulesApi.salesInvoices({ search }),
    [search],
  );
  const { rows, total, loading, error, forbidden, reload } =
    useListQuery<SalesInvoiceDto>(loader);

  if (forbidden) {
    return (
      <div className="p-4">
        <NoPermissionState message="Sem permissão sales:read." />
      </div>
    );
  }

  return (
    <ListReport
      title="Faturamento e liberação"
      subtitle="Comercial · SM-SALES-04 — gate fiscal/pagamento/liberação"
      filters={
        <input
          className="ns-filter-input w-64"
          placeholder="Fatura, cliente, canal..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar faturas"
        />
      }
      footer={`${total} faturas`}
      data-testid="sales-invoices-page"
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
              <TableHead>Fatura</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Canal</TableHead>
              <TableHead>Moeda</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Gate</TableHead>
              <TableHead>Próxima ação</TableHead>
              <TableHead>Owner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium text-nsuite-link">
                  {row.number}
                </TableCell>
                <TableCell>{row.customerName}</TableCell>
                <TableCell>{row.channel}</TableCell>
                <TableCell>{row.currency}</TableCell>
                <TableCell className="text-right font-mono text-[12px]">
                  {row.totalAmount}
                </TableCell>
                <TableCell>
                  <WorkflowBadge
                    label={row.status}
                    tone={statusTone(row.status)}
                  />
                </TableCell>
                <TableCell>
                  <WorkflowBadge
                    label={row.releaseGate}
                    tone={statusTone(row.releaseGate)}
                  />
                </TableCell>
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
