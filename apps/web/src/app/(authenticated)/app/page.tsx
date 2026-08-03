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
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { useListQuery } from "../../../components/use-list-query";
import { modulesApi } from "../../../lib/api/modules";
import { statusTone } from "../../../lib/status-tone";
import { useAuth } from "../../../providers/auth-provider";

type WorkItem = {
  id: string;
  module: string;
  href: string;
  reference: string;
  summary: string;
  status: string;
  nextAction: string;
  owner: string;
};

export default function AppPage() {
  const { user } = useAuth();
  const online = useOnlineStatus(true);
  const [search, setSearch] = useState("");

  const loader = useCallback(async () => {
    const settled = await Promise.allSettled([
      modulesApi.comexOrders(),
      modulesApi.reconciliationLines(),
      modulesApi.payables(),
      modulesApi.salesInvoices(),
      modulesApi.leads(),
      modulesApi.connectors(),
    ]);

    const value = <T,>(index: number): T[] => {
      const result = settled[index];
      if (result?.status === "fulfilled") {
        return (result.value.data ?? []) as T[];
      }
      return [];
    };

    const forbiddenCount = settled.filter(
      (r) =>
        r.status === "rejected" &&
        ((r.reason as { status?: number })?.status === 403 ||
          (r.reason as { error?: { code?: string } })?.error?.code ===
            "FORBIDDEN"),
    ).length;
    if (forbiddenCount === settled.length) {
      const err = settled.find((r) => r.status === "rejected") as
        | PromiseRejectedResult
        | undefined;
      throw err?.reason ?? { status: 403, error: { code: "FORBIDDEN" } };
    }

    const items: WorkItem[] = [
      ...value<{
        id: string;
        code: string;
        supplierName: string;
        status: string;
        nextAction: string;
        owner: string;
      }>(0)
        .filter((o) => !["CLOSED", "CANCELLED"].includes(o.status))
        .map((o) => ({
          id: o.id,
          module: "COMEX",
          href: "/comex/orders",
          reference: o.code,
          summary: o.supplierName,
          status: o.status,
          nextAction: o.nextAction,
          owner: o.owner,
        })),
      ...value<{
        id: string;
        reference: string;
        description: string;
        matchStatus: string;
        nextAction: string;
        accountCode: string;
      }>(1)
        .filter((l) => l.matchStatus !== "MATCHED")
        .map((l) => ({
          id: l.id,
          module: "Conciliação",
          href: "/treasury/reconciliation",
          reference: l.reference,
          summary: l.description,
          status: l.matchStatus,
          nextAction: l.nextAction,
          owner: l.accountCode,
        })),
      ...value<{
        id: string;
        documentNumber: string;
        counterparty: string;
        status: string;
        nextAction: string;
        sourceModule: string;
      }>(2)
        .filter((o) => o.status !== "SETTLED")
        .map((o) => ({
          id: o.id,
          module: "Finanças",
          href: "/finance/payables",
          reference: o.documentNumber,
          summary: o.counterparty,
          status: o.status,
          nextAction: o.nextAction,
          owner: o.sourceModule,
        })),
      ...value<{
        id: string;
        number: string;
        customerName: string;
        status: string;
        nextAction: string;
        owner: string;
      }>(3)
        .filter((i) => i.status !== "RELEASED")
        .map((i) => ({
          id: i.id,
          module: "Faturamento",
          href: "/sales/invoices",
          reference: i.number,
          summary: i.customerName,
          status: i.status,
          nextAction: i.nextAction,
          owner: i.owner,
        })),
      ...value<{
        id: string;
        company: string;
        name: string;
        status: string;
        nextAction: string;
        owner: string;
      }>(4).map((l) => ({
        id: l.id,
        module: "CRM",
        href: "/crm/leads",
        reference: l.company,
        summary: l.name,
        status: l.status,
        nextAction: l.nextAction,
        owner: l.owner,
      })),
      ...value<{
        id: string;
        code: string;
        name: string;
        status: string;
        nextAction: string;
        category: string;
        pendingJobs: number;
      }>(5)
        .filter((c) => c.status !== "ACTIVE" || c.pendingJobs > 0)
        .map((c) => ({
          id: c.id,
          module: "Integrações",
          href: "/integrations/connectors",
          reference: c.code,
          summary: c.name,
          status: c.status,
          nextAction: c.nextAction,
          owner: c.category,
        })),
    ];

    return { data: items, total: items.length };
  }, []);

  const { rows, total, loading, error, forbidden, reload } =
    useListQuery<WorkItem>(loader);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) =>
      [r.module, r.reference, r.summary, r.nextAction, r.owner, r.status]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [rows, search]);

  if (forbidden) {
    return (
      <div className="p-4">
        <NoPermissionState message="Sem permissão para montar a worklist operacional." />
      </div>
    );
  }

  return (
    <ListReport
      title={`Worklist · ${user?.name ?? "Operador"}`}
      subtitle="Exceções e próximas ações — sem dashboard decorativo"
      filters={
        <input
          className="ns-filter-input w-64"
          placeholder="Filtrar fila"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Filtrar worklist"
        />
      }
      footer={`${filtered.length} de ${total} itens prioritários`}
      data-testid="home-worklist"
    >
      {!online ? <OfflineState /> : null}
      {loading ? (
        <div className="p-4">
          <LoadingState message="Carregando fila operacional..." />
        </div>
      ) : error ? (
        <div className="p-4">
          <ErrorState
            correlationId={error.error.correlationId}
            onAction={reload}
          />
        </div>
      ) : filtered.length === 0 ? (
        <div className="p-4">
          <EmptyState title="Nenhuma pendência na worklist." />
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Módulo</TableHead>
              <TableHead>Referência</TableHead>
              <TableHead>Resumo</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Próxima ação</TableHead>
              <TableHead>Responsável</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Link href={row.href} className="ns-link">
                    {row.module}
                  </Link>
                </TableCell>
                <TableCell className="font-medium">{row.reference}</TableCell>
                <TableCell>{row.summary}</TableCell>
                <TableCell>
                  <WorkflowBadge
                    label={row.status}
                    tone={statusTone(row.status)}
                  />
                </TableCell>
                <TableCell>{row.nextAction}</TableCell>
                <TableCell>{row.owner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </ListReport>
  );
}
