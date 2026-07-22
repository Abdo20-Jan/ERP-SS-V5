"use client";

import {
  EmptyState,
  ErrorState,
  SkeletonRows,
  StatusBadge,
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
  type WarehouseLocationDto,
  listLocations,
} from "../../../../../../lib/api/inventory";

export interface LocationTabProps {
  warehouseId: string;
  preview: WarehouseLocationDto[];
  /** When true, fetch full list on mount. */
  active: boolean;
}

export function LocationTab({ warehouseId, preview, active }: LocationTabProps) {
  const [rows, setRows] = useState<WarehouseLocationDto[]>(preview);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setRows(preview);
  }, [preview]);

  useEffect(() => {
    if (!active || loaded) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    listLocations(warehouseId, { limit: 100 })
      .then((res) => {
        if (cancelled) return;
        setRows(res.data ?? []);
        setLoaded(true);
      })
      .catch((err: ApiError) => {
        if (cancelled) return;
        // Keep preview if full list fails
        if (preview.length === 0) setError(err);
        setLoaded(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [active, loaded, warehouseId, preview.length]);

  if (loading && rows.length === 0) {
    return <SkeletonRows rows={4} columns={5} />;
  }

  if (error && rows.length === 0) {
    return (
      <ErrorState
        message={error.error.message}
        correlationId={error.error.correlationId}
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
        title="Nenhuma posição"
        description="Este depósito ainda não possui posições cadastradas."
      />
    );
  }

  return (
    <Table data-testid="location-tab-table">
      <TableHeader>
        <TableRow>
          <TableHead>Código</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Nível</TableHead>
          <TableHead>Caminho</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((loc) => (
          <TableRow key={loc.id}>
            <TableCell className="font-mono text-xs">{loc.code}</TableCell>
            <TableCell>{loc.name}</TableCell>
            <TableCell>{loc.level}</TableCell>
            <TableCell className="font-mono text-xs text-gray-500">
              {loc.path}
            </TableCell>
            <TableCell>
              <StatusBadge isActive={loc.isActive} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
