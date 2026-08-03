"use client";

import {
  EmptyState,
  ErrorState,
  ListReport,
  LoadingState,
  NoPermissionState,
  OfflineState,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  useOnlineStatus,
  WorkflowBadge,
} from "@sunset/ui";
import { useCallback, useState } from "react";
import { useListQuery } from "../../../../components/use-list-query";
import {
  type BankAccountDto,
  modulesApi,
} from "../../../../lib/api/modules";
import { statusTone } from "../../../../lib/status-tone";

export default function BankAccountsPage() {
  const online = useOnlineStatus(true);
  const [search, setSearch] = useState("");
  const loader = useCallback(
    () => modulesApi.bankAccounts({ search }),
    [search],
  );
  const { rows, total, loading, error, forbidden, reload } =
    useListQuery<BankAccountDto>(loader);

  if (forbidden) {
    return (
      <div className="p-4">
        <NoPermissionState message="Sem permissão treasury:read." />
      </div>
    );
  }

  return (
    <ListReport
      title="Contas bancárias"
      subtitle="Tesouraria · SM-TREASURY-01 — posição de caixa"
      filters={
        <input
          className="ns-filter-input w-64"
          placeholder="Conta, banco, moeda..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar contas bancárias"
        />
      }
      footer={`${total} contas`}
      data-testid="treasury-accounts-page"
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
            onAction={reload}
          />
        </div>
      ) : rows.length === 0 ? (
        <div className="p-4">
          <EmptyState />
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Banco</TableHead>
              <TableHead>País</TableHead>
              <TableHead>Moeda</TableHead>
              <TableHead className="text-right">Saldo contábil</TableHead>
              <TableHead className="text-right">Saldo bancário</TableHead>
              <TableHead className="text-right">Disponível</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Último extrato</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium text-nsuite-link">
                  {row.code}
                </TableCell>
                <TableCell>{row.bankName}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>{row.currency}</TableCell>
                <TableCell className="text-right font-mono text-[12px]">
                  {row.bookBalance}
                </TableCell>
                <TableCell className="text-right font-mono text-[12px]">
                  {row.bankBalance}
                </TableCell>
                <TableCell className="text-right font-mono text-[12px]">
                  {row.availableBalance}
                </TableCell>
                <TableCell>
                  <WorkflowBadge
                    label={row.status}
                    tone={statusTone(row.status)}
                  />
                </TableCell>
                <TableCell>
                  {row.lastStatementAt
                    ? new Date(row.lastStatementAt).toISOString().slice(0, 10)
                    : "—"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </ListReport>
  );
}
