/**
 * Density tokens — layout operacional denso (estilo ERP enterprise)
 */

export const density = {
  rowHeight: {
    compact: "28px",
    default: "32px",
    comfortable: "40px",
  },
  cellPadding: {
    compact: "4px 8px",
    default: "6px 10px",
    comfortable: "10px 14px",
  },
  sidebarWidth: {
    collapsed: "48px",
    expanded: "220px",
  },
  headerHeight: "40px",
  filterBarHeight: "36px",
  fontSize: {
    xs: "11px",
    sm: "12px",
    base: "13px",
    md: "14px",
  },
} as const;

export type DensityToken = typeof density;
