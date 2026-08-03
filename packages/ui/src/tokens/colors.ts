/**
 * Design tokens - Colors (NetSuite-inspired heavy-data palette)
 * Visual logic: orange chrome, slate sidebar, dense gray content, blue operational links.
 */

export const colors = {
  // Primary brand — NetSuite orange
  primary: {
    50: "#fff4eb",
    100: "#ffe4cc",
    200: "#ffc999",
    300: "#ffa866",
    400: "#ff8833",
    500: "#ff6700",
    600: "#e85d00",
    700: "#c44f00",
    800: "#9a3e00",
    900: "#6b2b00",
    950: "#3d1800",
  },

  // NetSuite shell tokens
  nsuite: {
    orange: "#ff6700",
    orangeDark: "#e85d00",
    orangeHover: "#ff8533",
    headerText: "#ffffff",
    sidebar: "#3d4a5c",
    sidebarHover: "#4a586c",
    sidebarActive: "#2f3a4a",
    sidebarBorder: "#2a3442",
    sidebarText: "#e8ecf0",
    sidebarMuted: "#a8b3c0",
    contentBg: "#eef1f4",
    link: "#255599",
    linkHover: "#1a3f73",
    tableHeader: "#f5f6f8",
    tableBorder: "#c9d1d9",
    rowHover: "#f0f4f8",
    rowSelected: "#e5eef7",
  },

  // Semantic - Success
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },

  // Semantic - Warning
  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },

  // Semantic - Error
  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },

  // Neutral - Gray
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712",
  },
} as const;

export type ColorToken = typeof colors;
