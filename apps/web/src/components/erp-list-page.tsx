"use client";

import {
  DataGrid,
  type DataGridColumn,
  EmptyState,
  ErrorState,
  FilterBar,
  FilterField,
  ListReportLayout,
  LoadingState,
  NoPermissionState,
  OfflineState,
  PaginationBar,
  useOnlineStatus,
} from "@sunset/ui";
import { useCallback, useEffect, useState } from "react";
import type { ApiError } from "../lib/api/modules";

export interface ErpListPageProps<T> {
  title: string;
  subtitle?: string;
  breadcrumbs?: string[];
  permissionDeniedMessage: string;
  loadData: (params: {
    page: number;
    search: string;
    status: string;
  }) => Promise<{ data: T[]; total: number }>;
  columns: DataGridColumn<T>[];
  keyExtractor: (row: T) => string;
  onRowClick?: (row: T) => void;
  statusOptions?: { value: string; label: string }[];
  searchPlaceholder?: string;
  testId?: string;
}

export function ErpListPage<T>({
  title,
  subtitle,
  breadcrumbs,
  permissionDeniedMessage,
  loadData,
  columns,
  keyExtractor,
  onRowClick,
  statusOptions,
  searchPlaceholder = "Buscar...",
  testId,
}: ErpListPageProps<T>) {
  const online = useOnlineStatus(true);
  const [rows, setRows] = useState<T[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);
  const [forbidden, setForbidden] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);
    setForbidden(false);
    loadData({ page, search, status })
      .then((res) => {
        setRows(res.data);
        setTotal(res.total);
      })
      .catch((err: ApiError) => {
        if (err.status === 403 || err.error?.code === "FORBIDDEN") {
          setForbidden(true);
        } else {
          setError(err);
        }
      })
      .finally(() => setLoading(false));
  }, [loadData, page, search, status]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (forbidden) {
    return (
      <ListReportLayout title={title} subtitle={subtitle}>
        <NoPermissionState message={permissionDeniedMessage} />
      </ListReportLayout>
    );
  }

  return (
    <ListReportLayout
      title={title}
      subtitle={subtitle}
      breadcrumbs={breadcrumbs}
      filters={
        <FilterBar>
          <FilterField label="Busca">
            <input
              type="search"
              className="erp-input w-48"
              placeholder={searchPlaceholder}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              aria-label="Busca"
            />
          </FilterField>
          {statusOptions && statusOptions.length > 0 ? (
            <FilterField label="Status">
              <select
                className="erp-select w-36"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                  setPage(1);
                }}
                aria-label="Filtrar por status"
              >
                <option value="">Todos</option>
                {statusOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </FilterField>
          ) : null}
        </FilterBar>
      }
      footer={
        <PaginationBar
          page={page}
          pageSize={20}
          total={total}
          onPageChange={setPage}
        />
      }
    >
      {!online ? <OfflineState /> : null}
      {loading ? (
        <LoadingState message="Carregando registros..." />
      ) : error ? (
        <ErrorState
          message={error.error.message}
          correlationId={error.error.correlationId}
          onAction={fetchData}
        />
      ) : rows.length === 0 ? (
        <EmptyState title="Nenhum registro" description="Ajuste os filtros ou cadastre um novo registro." />
      ) : (
        <DataGrid
          columns={columns}
          data={rows}
          keyExtractor={keyExtractor}
          onRowClick={onRowClick}
          data-testid={testId}
        />
      )}
    </ListReportLayout>
  );
}
