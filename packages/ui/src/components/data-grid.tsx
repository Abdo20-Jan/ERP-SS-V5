"use client";

import * as React from "react";

import { cn } from "../lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

export interface DataGridColumn<T> {
  id: string;
  header: string;
  accessor?: (row: T) => React.ReactNode;
  cell?: (row: T) => React.ReactNode;
  className?: string;
  headerClassName?: string;
  align?: "left" | "center" | "right";
  width?: string;
}

export interface DataGridProps<T> {
  columns: DataGridColumn<T>[];
  data: T[];
  keyExtractor: (row: T) => string;
  onRowClick?: (row: T) => void;
  selectedKeys?: Set<string>;
  dense?: boolean;
  striped?: boolean;
  stickyHeader?: boolean;
  emptyMessage?: string;
  className?: string;
  "data-testid"?: string;
}

export function DataGrid<T>({
  columns,
  data,
  keyExtractor,
  onRowClick,
  selectedKeys,
  dense = true,
  striped = true,
  stickyHeader = true,
  emptyMessage = "Nenhum registro encontrado",
  className,
  "data-testid": testId,
}: DataGridProps<T>) {
  const rowHeight = dense ? "h-7" : "h-9";
  const cellClass = dense ? "px-2 py-0.5 text-xs" : "px-2 py-1 text-sm";
  const headClass = dense
    ? "h-7 px-2 py-0 text-[11px] font-semibold uppercase tracking-wide"
    : "h-9 px-2 text-xs font-semibold";

  if (data.length === 0) {
    return (
      <div
        className="rounded border border-gray-300 bg-white p-8 text-center text-xs text-gray-500"
        data-testid={testId}
      >
        {emptyMessage}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-auto rounded border border-gray-300 bg-white",
        className,
      )}
      data-testid={testId}
    >
      <Table>
        <TableHeader
          className={cn(
            stickyHeader && "sticky top-0 z-10",
            "bg-gray-200",
          )}
        >
          <TableRow className="border-b border-gray-300 hover:bg-gray-200">
            {columns.map((col) => (
              <TableHead
                key={col.id}
                className={cn(
                  headClass,
                  "text-gray-700",
                  col.align === "right" && "text-right",
                  col.align === "center" && "text-center",
                  col.headerClassName,
                )}
                style={col.width ? { width: col.width } : undefined}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, idx) => {
            const key = keyExtractor(row);
            const selected = selectedKeys?.has(key);
            return (
              <TableRow
                key={key}
                className={cn(
                  rowHeight,
                  "border-b border-gray-200",
                  striped && idx % 2 === 1 && "bg-gray-50",
                  onRowClick && "cursor-pointer hover:bg-primary-50",
                  selected && "bg-warning-50",
                )}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
                onKeyDown={
                  onRowClick
                    ? (e) => {
                        if (e.key === "Enter") onRowClick(row);
                      }
                    : undefined
                }
                tabIndex={onRowClick ? 0 : undefined}
                role={onRowClick ? "button" : undefined}
                data-state={selected ? "selected" : undefined}
              >
                {columns.map((col) => (
                  <TableCell
                    key={col.id}
                    className={cn(
                      cellClass,
                      col.align === "right" && "text-right font-mono",
                      col.align === "center" && "text-center",
                      col.className,
                    )}
                  >
                    {col.cell
                      ? col.cell(row)
                      : col.accessor
                        ? col.accessor(row)
                        : null}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export interface PaginationBarProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function PaginationBar({
  page,
  pageSize,
  total,
  onPageChange,
  className,
}: PaginationBarProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);

  return (
    <div
      className={cn(
        "flex items-center justify-between text-[11px] text-gray-600",
        className,
      )}
      data-testid="pagination-bar"
    >
      <span>
        {from}–{to} de {total}
      </span>
      <div className="flex items-center gap-1">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="rounded border border-gray-300 bg-white px-2 py-0.5 disabled:opacity-40"
        >
          Anterior
        </button>
        <span className="px-2">
          {page} / {totalPages}
        </span>
        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className="rounded border border-gray-300 bg-white px-2 py-0.5 disabled:opacity-40"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
