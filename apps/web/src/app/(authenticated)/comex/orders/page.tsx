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
import { useCallback, useMemo, useState } from "react";
import { useListQuery } from "../../../../components/use-list-query";
import {
  type ComexOrderDto,
  modulesApi,
} from "../../../../lib/api/modules";
import { statusTone } from "../../../../lib/status-tone";

export default function ComexOrdersPage() {
  const online = useOnlineStatus(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const loader = useCallback(
    () => modulesApi.comexOrders({ search, status }),
    [search, status],
  );
  const { rows, total, loading, error, forbidden, reload } =
    useListQuery<ComexOrderDto>(loader);

  const statuses = useMemo(
    () => Array.from(new Set(rows.map((r) => r.status))).sort(),
    [rows],
  );

  if (forbidden) {
    return (
      <div className="p-4">
        <NoPermissionState message="Sem permissão comex:read." />
      </div>
    );
  }

  return (
    <ListReport
      title="Pedidos internacionais"
      subtitle="COMEX · SM-COMEX-01 — lista operacional"
      filters={
        <>
          <input
            className="ns-filter-input w-56"
            placeholder="Buscar código, fornecedor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Buscar pedidos COMEX"
          />
          <select
            className="ns-filter-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Filtrar status"
          >
            <option value="">Todos os status</option>
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </>
      }
      footer={`${total} pedidos`}
      data-testid="comex-orders-page"
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
          <EmptyState title="Nenhum pedido internacional." />
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pedido</TableHead>
              <TableHead>Fornecedor</TableHead>
              <TableHead>Incoterm</TableHead>
              <TableHead>Moeda</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>ETA</TableHead>
              <TableHead>Próxima ação</TableHead>
              <TableHead>Owner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium text-nsuite-link">
                  {row.code}
                </TableCell>
                <TableCell>{row.supplierName}</TableCell>
                <TableCell>{row.incoterm}</TableCell>
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
                <TableCell>{row.eta ?? "—"}</TableCell>
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
