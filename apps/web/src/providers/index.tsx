"use client";

import type { ReactNode } from "react";
import { AuthProvider } from "./auth-provider";
import { CorrelationProvider } from "./correlation-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CorrelationProvider>
      <AuthProvider>{children}</AuthProvider>
    </CorrelationProvider>
  );
}
