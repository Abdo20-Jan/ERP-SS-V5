export interface ModuleNavItem {
  href: string;
  label: string;
  group: string;
  match?: "exact" | "prefix";
}

/** Catalog-aligned operational navigation (NetSuite-style side menu). */
export const MODULE_NAV: ModuleNavItem[] = [
  { href: "/app", label: "Worklist", group: "Operação", match: "exact" },
  { href: "/comex/orders", label: "COMEX", group: "Operação" },
  { href: "/inventory/warehouses", label: "Estoque", group: "Operação" },
  { href: "/finance/payables", label: "Finanças · AP", group: "Financeiro" },
  {
    href: "/finance/receivables",
    label: "Finanças · AR",
    group: "Financeiro",
  },
  {
    href: "/treasury/bank-accounts",
    label: "Tesouraria",
    group: "Financeiro",
  },
  {
    href: "/treasury/reconciliation",
    label: "Conciliação",
    group: "Financeiro",
  },
  {
    href: "/accounting/chart-of-accounts",
    label: "Contabilidade",
    group: "Financeiro",
  },
  { href: "/sales/invoices", label: "Faturamento", group: "Comercial" },
  { href: "/crm/leads", label: "CRM · Leads", group: "Comercial" },
  {
    href: "/crm/opportunities",
    label: "CRM · Pipeline",
    group: "Comercial",
  },
  { href: "/hr/employees", label: "RH", group: "Pessoas" },
  {
    href: "/integrations/connectors",
    label: "Integrações",
    group: "Plataforma",
  },
];

export function isNavActive(pathname: string, item: ModuleNavItem): boolean {
  if (item.match === "exact") {
    return pathname === item.href;
  }
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}
