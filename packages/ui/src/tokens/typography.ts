/**
 * Design tokens - Typography (dense, operational)
 * IBM Plex Sans for heavy-data ERP readability.
 */

export const typography = {
  fontFamily: {
    sans: [
      "IBM Plex Sans",
      "Segoe UI",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ],
    mono: [
      "IBM Plex Mono",
      "JetBrains Mono",
      "Consolas",
      "Monaco",
      "monospace",
    ],
  },

  fontSize: {
    xs: ["0.6875rem", { lineHeight: "1rem" }], // 11px
    sm: ["0.8125rem", { lineHeight: "1.125rem" }], // 13px
    base: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
    lg: ["1rem", { lineHeight: "1.375rem" }], // 16px
    xl: ["1.125rem", { lineHeight: "1.5rem" }], // 18px
    "2xl": ["1.25rem", { lineHeight: "1.625rem" }], // 20px
    "3xl": ["1.5rem", { lineHeight: "1.875rem" }], // 24px
    "4xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
    "5xl": ["2.25rem", { lineHeight: "1" }], // 36px
  },

  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },

  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

export type TypographyToken = typeof typography;
