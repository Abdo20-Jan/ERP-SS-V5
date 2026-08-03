/**
 * Surface tokens — fundos e bordas para chrome ERP denso
 */

export const surfaces = {
  app: "#EDEEF0",
  content: "#FFFFFF",
  sidebar: "#1C3F6E",
  sidebarHover: "#254A7A",
  sidebarActive: "#2D5A8F",
  header: "#FFFFFF",
  tableHeader: "#E8EAED",
  tableRowAlt: "#F7F8FA",
  tableRowHover: "#EEF3FA",
  tableRowSelected: "#FFF8DC",
  border: "#C8CDD4",
  borderLight: "#E2E5EA",
  input: "#FFFFFF",
  toolbar: "#F5F6F8",
} as const;

export type SurfaceToken = typeof surfaces;
