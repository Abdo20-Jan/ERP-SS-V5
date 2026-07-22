"use client";

import {
  EmptyState,
  ErrorState,
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
  type InventoryDocumentDto,
  listWarehouseDocuments,
} from "../../../../../../lib/api/inventory";

export interface DocumentTabProps {
  warehouseId: string;
  preview: InventoryDocumentDto[];
  active: boolean;
}

export function DocumentTab({ warehouseId, preview, active }: DocumentTabProps) {
  const [rows, setRows] = useState<InventoryDocumentDto[]>(preview);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [forbidden, setForbidden] = useState(false);

  useEffect(() => {
    setRows(preview);
  }, [preview]);

  useEffect(() => {
    if (!active || loaded) return;
    let cancelled = false;
    setLoading(true);
    listWarehouseDocuments(warehouseId, { limit: 50 })
      .then((res) => {
        if (cancelled) return;
        setRows(res.data ?? []);
        setLoaded(true);
      })
      .catch((err: ApiError) => {
        if (cancelled) return;
        if (err.status === 403 || err.error?.code === "FORBIDDEN") {
          setForbidden(true);
        } else if (preview.length === 0) {
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
  }, [active, loaded, warehouseId, preview.length]);

  if (loading && rows.length === 0) {
    return <SkeletonRows rows={3} columns={4} />;
  }

  if (forbidden && rows.length === 0) {
    return (
      <EmptyState
        title="Documentos restritos"
        description="Sem permissão inventory:document:read. Exibindo apenas preview do detalhe, se houver."
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
        title="Nenhum documento"
        description="Não há documentos anexados a este depósito."
      />
    );
  }

  return (
    <Table data-testid="document-tab-table">
      <TableHeader>
        <TableRow>
          <TableHead>Arquivo</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Versão</TableHead>
          <TableHead>Enviado em</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((doc) => (
          <TableRow key={doc.id}>
            <TableCell>{doc.fileName}</TableCell>
            <TableCell>{doc.documentType}</TableCell>
            <TableCell>{doc.version}</TableCell>
            <TableCell className="text-xs text-gray-500">
              {formatDate(doc.uploadedAt)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString("pt-BR");
  } catch {
    return iso;
  }
}
