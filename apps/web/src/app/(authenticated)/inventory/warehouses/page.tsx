"use client";

import {
  EmptyState,
  ErrorState,
  Input,
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  type ApiError,
  type WarehouseDto,
  listWarehouses,
} from "../../../../lib/api/inventory";

export default function WarehouseListPage() {
  const router = useRouter();
  const online = useOnlineStatus(true);
  const [rows, setRows] = useState<WarehouseDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);
  const [forbidden, setForbidden] = useState(false);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [activeFilter, setActiveFilter] = useState<"" | "true" | "false">("");

  const load = useCallback(() => {
    setLoading(true);
    setError(null);
    setForbidden(false);
    listWarehouses({ limit: 100 })
      .then((res) => {
        setRows(res.data ?? []);
      })
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

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows.filter((w) => {
      if (typeFilter && w.type !== typeFilter) return false;
      if (activeFilter === "true" && !w.isActive) return false;
      if (activeFilter === "false" && w.isActive) return false;
      if (!q) return true;
      return (
        w.code.toLowerCase().includes(q) || w.name.toLowerCase().includes(q)
      );
    });
  }, [rows, search, typeFilter, activeFilter]);

  const types = useMemo(
    () => Array.from(new Set(rows.map((r) => r.type))).sort(),
    [rows],
  );

  if (forbidden) {
    return (
      <div className="p-6">
        <NoPermissionState
          message="Sem permissão inventory:read para listar depósitos."
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-full flex-col" data-testid="warehouse-list-page">
      {!online ? <OfflineState /> : null}
      <div className="border-b border-gray-200 bg-white px-4 py-4 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Depósitos</h1>
            <p className="text-sm text-gray-500">
              Inventário · lista operacional (LAY-02 entrada)
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Input
              placeholder="Buscar código ou nome"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-56"
              aria-label="Buscar depósitos"
            />
            <select
              className="h-9 rounded-md border border-gray-300 bg-white px-2 text-sm"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              aria-label="Filtrar por tipo"
            >
              <option value="">Todos os tipos</option>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <select
              className="h-9 rounded-md border border-gray-300 bg-white px-2 text-sm"
              value={activeFilter}
              onChange={(e) =>
                setActiveFilter(e.target.value as "" | "true" | "false")
              }
              aria-label="Filtrar por status"
            >
              <option value="">Ativos e inativos</option>
              <option value="true">Somente ativos</option>
              <option value="false">Somente inativos</option>
            </select>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6">
        {loading ? (
          <LoadingState message="Carregando depósitos..." />
        ) : error ? (
          <ErrorState
            message={error.error.message}
            correlationId={error.error.correlationId}
            onAction={load}
          />
        ) : filtered.length === 0 ? (
          <EmptyState
            title="Nenhum depósito"
            description={
              rows.length === 0
                ? "Não há depósitos cadastrados."
                : "Nenhum depósito corresponde aos filtros."
            }
          />
        ) : (
          <Table data-testid="warehouse-list-table">
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Atualizado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((w) => (
                <TableRow
                  key={w.id}
                  className="cursor-pointer"
                  onClick={() => router.push(`/inventory/warehouses/${w.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      router.push(`/inventory/warehouses/${w.id}`);
                    }
                  }}
                  tabIndex={0}
                  role="link"
                  aria-label={`Abrir depósito ${w.code}`}
                >
                  <TableCell className="font-mono text-xs">
                    <Link
                      href={`/inventory/warehouses/${w.id}`}
                      className="text-primary-700 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {w.code}
                    </Link>
                  </TableCell>
                  <TableCell className="font-medium">{w.name}</TableCell>
                  <TableCell>{w.type}</TableCell>
                  <TableCell>
                    <StatusBadge isActive={w.isActive} />
                  </TableCell>
                  <TableCell className="text-xs text-gray-500">
                    {formatDate(w.updatedAt)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
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
