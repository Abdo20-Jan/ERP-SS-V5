"use client";

import {
  DataGrid,
  ListReportLayout,
  LoadingState,
} from "@sunset/ui";
import Link from "next/link";
import { useAuth } from "../../../providers/auth-provider";

interface WorklistItem {
  id: string;
  module: string;
  type: string;
  subject: string;
  priority: "ALTA" | "MÉDIA" | "BAIXA";
  dueDate: string;
  href: string;
}

const WORKLIST_ITEMS: WorklistItem[] = [
  {
    id: "1",
    module: "Tesouraria",
    type: "Conciliação",
    subject: "Conciliação pendente — conta BB-001",
    priority: "ALTA",
    dueDate: "2026-08-03",
    href: "/treasury/reconciliations",
  },
  {
    id: "2",
    module: "COMEX",
    type: "Documento",
    subject: "DI aguardando conferência — EMB-2026-0042",
    priority: "ALTA",
    dueDate: "2026-08-04",
    href: "/comex/shipments",
  },
  {
    id: "3",
    module: "Faturamento",
    type: "Cobrança",
    subject: "3 faturas vencidas sem baixa",
    priority: "MÉDIA",
    dueDate: "2026-08-05",
    href: "/billing/invoices",
  },
  {
    id: "4",
    module: "CRM",
    type: "Follow-up",
    subject: "Retornar contato — Lead Acme Pneus",
    priority: "MÉDIA",
    dueDate: "2026-08-03",
    href: "/crm/leads",
  },
  {
    id: "5",
    module: "Integrações",
    type: "Erro",
    subject: "Falha sync bancária — connector BANK_OFX",
    priority: "ALTA",
    dueDate: "2026-08-03",
    href: "/integrations/connectors",
  },
  {
    id: "6",
    module: "Contabilidade",
    type: "Lançamento",
    subject: "2 lançamentos em rascunho aguardando postagem",
    priority: "BAIXA",
    dueDate: "2026-08-06",
    href: "/accounting/journal-entries",
  },
];

const PRIORITY_CLASS: Record<WorklistItem["priority"], string> = {
  ALTA: "text-error-600 font-semibold",
  MÉDIA: "text-warning-700",
  BAIXA: "text-gray-500",
};

export default function AppPage() {
  const { user } = useAuth();

  return (
    <ListReportLayout
      title="Central de Tarefas"
      subtitle={`Operações pendentes · ${user?.name ?? "Usuário"}`}
      breadcrumbs={["Início"]}
    >
      <div className="mb-3 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { label: "Alta prioridade", value: "3", color: "text-error-600" },
          { label: "Conciliações abertas", value: "1", color: "text-primary-700" },
          { label: "Integrações com erro", value: "1", color: "text-warning-700" },
          { label: "Itens na fila", value: String(WORKLIST_ITEMS.length), color: "text-gray-700" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded border border-gray-300 bg-white px-3 py-2"
          >
            <div className="text-[10px] uppercase tracking-wide text-gray-500">
              {kpi.label}
            </div>
            <div className={`text-lg font-semibold ${kpi.color}`}>{kpi.value}</div>
          </div>
        ))}
      </div>

      <LoadingState message="" className="hidden" />
      <DataGrid
        columns={[
          { id: "module", header: "Módulo", accessor: (r) => r.module },
          { id: "type", header: "Tipo", accessor: (r) => r.type },
          {
            id: "subject",
            header: "Assunto",
            cell: (r) => (
              <Link href={r.href} className="text-accent-600 hover:underline">
                {r.subject}
              </Link>
            ),
          },
          {
            id: "priority",
            header: "Prioridade",
            cell: (r) => (
              <span className={PRIORITY_CLASS[r.priority]}>{r.priority}</span>
            ),
            align: "center",
          },
          {
            id: "due",
            header: "Prazo",
            accessor: (r) =>
              new Date(r.dueDate).toLocaleDateString("pt-BR"),
          },
        ]}
        data={WORKLIST_ITEMS}
        keyExtractor={(r) => r.id}
        data-testid="worklist-table"
      />
    </ListReportLayout>
  );
}
