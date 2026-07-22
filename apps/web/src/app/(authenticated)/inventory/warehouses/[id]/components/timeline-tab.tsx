"use client";

import { EmptyState } from "@sunset/ui";
import type { DetailHistoryItemDto } from "../../../../../../lib/api/inventory";

export interface TimelineTabProps {
  items: DetailHistoryItemDto[];
}

export function TimelineTab({ items }: TimelineTabProps) {
  if (items.length === 0) {
    return (
      <EmptyState
        title="Sem eventos"
        description="Nenhum evento recente no histórico deste depósito."
      />
    );
  }

  return (
    <ol
      className="space-y-3 border-l-2 border-gray-200 pl-4"
      data-testid="timeline-list"
    >
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span
            className="absolute -left-[1.35rem] top-1.5 h-2.5 w-2.5 rounded-full bg-primary-500"
            aria-hidden="true"
          />
          <p className="text-sm font-medium text-gray-900">{item.action}</p>
          <p className="text-xs text-gray-500">
            {formatDate(item.createdAt)}
            {item.userId ? ` · usuário ${item.userId}` : ""}
            {item.correlationId ? ` · corr ${item.correlationId}` : ""}
          </p>
        </li>
      ))}
    </ol>
  );
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString("pt-BR");
  } catch {
    return iso;
  }
}
