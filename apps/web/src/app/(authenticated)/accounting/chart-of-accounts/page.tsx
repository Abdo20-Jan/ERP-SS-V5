"use client";

import {
  EmptyState,
  ErrorState,
  ListReport,
  LoadingState,
  NoPermissionState,
  OfflineState,
  StatusBadge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  useOnlineStatus,
} from "@sunset/ui";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { ApiError } from "../../../../lib/api";
import {
  type ChartOfAccountsDto,
  modulesApi,
} from "../../../../lib/api/modules";

type FlatAccount = {
  id: string;
  code: string;
  name: string;
  type: string;
  isActive: boolean;
  depth: number;
};

function flattenAccounts(
  nodes: ChartOfAccountsDto["accounts"] | undefined,
  depth = 0,
): FlatAccount[] {
  if (!nodes?.length) return [];
  const out: FlatAccount[] = [];
  for (const node of nodes) {
    out.push({
      id: node.id,
      code: node.code,
      name: node.name,
      type: String(node.type ?? "—"),
      isActive: node.isActive !== false,
      depth,
    });
    const children = node.children as ChartOfAccountsDto["accounts"];
    out.push(...flattenAccounts(children, depth + 1));
  }
  return out;
}

export default function ChartOfAccountsPage() {
  const online = useOnlineStatus(true);
  const [coa, setCoa] = useState<ChartOfAccountsDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);
  const [forbidden, setForbidden] = useState(false);
  const [search, setSearch] = useState("");

  const load = useCallback(() => {
    setLoading(true);
    setError(null);
    setForbidden(false);
    modulesApi
      .activeCoa()
      .then((res) => setCoa(res))
      .catch((err: ApiError) => {
        if (err.status === 403 || err.error?.code === "FORBIDDEN") {
          setForbidden(true);
        } else {
          setError(err);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const rows = useMemo(() => {
    const flat = flattenAccounts(coa?.accounts);
    const q = search.trim().toLowerCase();
    if (!q) return flat;
    return flat.filter(
      (a) =>
        a.code.toLowerCase().includes(q) || a.name.toLowerCase().includes(q),
    );
  }, [coa, search]);

  if (forbidden) {
    return (
      <div className="p-4">
        <NoPermissionState message="Sem permissão accounting:read." />
      </div>
    );
  }

  return (
    <ListReport
      title="Plano de contas"
      subtitle={`Contabilidade · SM-ACCOUNTING-01${coa?.name ? ` · ${coa.name}` : ""}`}
      filters={
        <input
          className="ns-filter-input w-64"
          placeholder="Código ou nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar contas"
        />
      }
      footer={`${rows.length} contas`}
      data-testid="accounting-coa-page"
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
            onAction={load}
          />
        </div>
      ) : rows.length === 0 ? (
        <div className="p-4">
          <EmptyState title="Nenhuma conta no plano ativo." />
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  className="font-mono text-[12px] text-nsuite-link"
                  style={{ paddingLeft: `${8 + row.depth * 14}px` }}
                >
                  {row.code}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>
                  <StatusBadge isActive={row.isActive} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </ListReport>
  );
}
