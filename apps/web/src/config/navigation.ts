import type { SideNavSection } from "@sunset/ui";

export interface NavItemDef {
  href: string;
  label: string;
}

export const MODULE_NAV: SideNavSection[] = [
  {
    title: "Operacional",
    items: [
      { href: "/app", label: "Central de Tarefas" },
      { href: "/inventory/warehouses", label: "Depósitos" },
    ],
  },
  {
    title: "Comercial",
    items: [
      { href: "/crm/leads", label: "Leads" },
      { href: "/crm/opportunities", label: "Oportunidades" },
      { href: "/billing/invoices", label: "Faturas" },
    ],
  },
  {
    title: "Comex",
    items: [{ href: "/comex/shipments", label: "Embarques" }],
  },
  {
    title: "Finanças",
    items: [
      { href: "/accounting/journal-entries", label: "Lançamentos" },
      { href: "/treasury/bank-accounts", label: "Contas Bancárias" },
      { href: "/treasury/reconciliations", label: "Conciliação Bancária" },
    ],
  },
  {
    title: "RH",
    items: [{ href: "/hr/employees", label: "Colaboradores" }],
  },
  {
    title: "Plataforma",
    items: [{ href: "/integrations/connectors", label: "Integrações" }],
  },
];

export function buildSideNavSections(pathname: string): SideNavSection[] {
  return MODULE_NAV.map((section) => ({
    ...section,
    items: section.items.map((item) => ({
      ...item,
      active:
        pathname === item.href ||
        (item.href !== "/app" && pathname.startsWith(`${item.href}/`)),
    })),
  }));
}
