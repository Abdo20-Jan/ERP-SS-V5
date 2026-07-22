"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@sunset/ui";
import type { WarehouseDetailDto } from "../../../../../../lib/api/inventory";

export interface ContextPanelProps {
  detail: WarehouseDetailDto;
  open?: boolean;
  onClose?: () => void;
  className?: string;
}

export function ContextPanel({
  detail,
  open = true,
  onClose,
  className,
}: ContextPanelProps) {
  if (!open) return null;

  const { summary, header, availableActions, primaryAction } = detail;
  const capacity =
    header.capacity != null
      ? `${header.capacity}${header.capacityUnit ? ` ${header.capacityUnit}` : ""}`
      : "—";

  return (
    <aside
      className={className}
      data-testid="warehouse-context-panel"
      aria-label="Painel contextual"
    >
      <Card className="h-full border-0 shadow-none lg:border lg:shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-semibold">Resumo</CardTitle>
          {onClose ? (
            <button
              type="button"
              className="text-xs text-gray-500 underline lg:hidden"
              onClick={onClose}
            >
              Fechar
            </button>
          ) : null}
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <Metric
            label="Posições ativas"
            value={`${summary.locationActive} / ${summary.locationTotal}`}
          />
          <Metric label="Documentos" value={String(summary.documentTotal)} />
          <Metric
            label="Overrides abertos"
            value={String(summary.openOverrideCount)}
          />
          <Metric label="Capacidade" value={capacity} />
          <Metric label="Tipo" value={header.type} />
          <Metric
            label="Saldo físico"
            value={
              summary.balanceAvailable
                ? "Disponível"
                : "Indisponível (slice futuro)"
            }
          />
          <div className="border-t border-gray-100 pt-3">
            <p className="mb-1 text-xs font-medium uppercase text-gray-500">
              Ação primária
            </p>
            <p className="font-medium text-gray-900">
              {primaryAction ?? "—"}
            </p>
          </div>
          <div>
            <p className="mb-1 text-xs font-medium uppercase text-gray-500">
              Ações disponíveis
            </p>
            <ul className="list-inside list-disc text-xs text-gray-600">
              {availableActions.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
}
