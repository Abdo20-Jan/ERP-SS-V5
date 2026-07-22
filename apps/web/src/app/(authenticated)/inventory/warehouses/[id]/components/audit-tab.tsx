"use client";

import {
  EmptyState,
  ErrorState,
  NoPermissionState,
  SkeletonRows,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@sunset/ui";
import { useEffect, useState } from "react";
import {
  type ApiError,
  type DetailHistoryItemDto,
  listAudit,
} from "../../../../../../lib/api/inventory";

export interface AuditTabProps {
  warehouseId: string;
  fallback: DetailHistoryItemDto[];
  active: boolean;
}

export function AuditTab({ warehouseId, fallback, active }: AuditTabProps) {
  const [rows, setRows] = useState<DetailHistoryItemDto[]>(fallback);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [forbidden, setForbidden] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setRows(fallback);
  }, [fallback]);

  useEffect(() => {
    if (!active || loaded) return;
    let cancelled = false;
    setLoading(true);
    listAudit({
      entityType: "warehouse",
      entityId: warehouseId,
      limit: 50,
    })
      .then((res) => {
        if (cancelled) return;
        setRows(res.data ?? []);
        setLoaded(true);
      })
      .catch((err: ApiError) => {
        if (cancelled) return;
        if (err.status === 403 || err.error?.code === "FORBIDDEN") {
          setForbidden(true);
          // keep fallback from detail BFF (inventory:read history)
          setRows(fallback);
        } else if (fallback.length === 0) {
          setError(err);
        }
        setLoaded(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [active, loaded, warehouseId, fallback]);

  if (loading && rows.length === 0) {
    return <SkeletonRows rows={4} columns={4} />;
  }

  if (forbidden && rows.length === 0) {
    return (
      <NoPermissionState
        title="Auditoria restrita"
        message="Você não tem permissão audit:read. O histórico embutido no detalhe também está vazio."
      />
    );
  }

  if (error && rows.length === 0) {
    return (
      <ErrorState
        message={error.error.message}
        onAction={() => {
          setLoaded(false);
          setError(null);
        }}
      />
    );
  }

  if (rows.length === 0) {
    return (
      <EmptyState
        title="Sem auditoria"
        description="Nenhum registro de auditoria para este depósito."
      />
    );
  }

  return (
    <div className="space-y-2">
      {forbidden ? (
        <p className="text-xs text-warning-800" role="status">
          Exibindo histórico do detalhe (sem audit:read).
        </p>
      ) : null}
      <Table data-testid="audit-tab-table">
        <TableHeader>
          <TableRow>
            <TableHead>Ação</TableHead>
            <TableHead>Usuário</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Correlação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.action}</TableCell>
              <TableCell className="font-mono text-xs">
                {row.userId ?? "—"}
              </TableCell>
              <TableCell className="text-xs text-gray-500">
                {formatDate(row.createdAt)}
              </TableCell>
              <TableCell className="font-mono text-xs">
                {row.correlationId ?? "—"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString("pt-BR");
  } catch {
    return iso;
  }
}
