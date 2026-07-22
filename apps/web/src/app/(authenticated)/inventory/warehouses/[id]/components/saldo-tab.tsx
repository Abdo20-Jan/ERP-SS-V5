"use client";

import { EmptyState } from "@sunset/ui";

export interface SaldoTabProps {
  balanceAvailable: boolean;
}

export function SaldoTab({ balanceAvailable }: SaldoTabProps) {
  if (balanceAvailable) {
    return (
      <EmptyState
        title="Saldo"
        description="Saldo físico disponível — implementação pendente de visualização."
      />
    );
  }

  return (
    <EmptyState
      title="Saldo físico indisponível"
      description="Saldo físico disponível em slice futuro (D-003.14). balanceAvailable=false."
      data-testid="saldo-deferred"
    />
  );
}
