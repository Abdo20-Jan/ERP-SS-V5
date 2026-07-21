"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "sunset-correlation-id";

interface CorrelationContextValue {
  correlationId: string | null;
}

const CorrelationContext = createContext<CorrelationContextValue | undefined>(
  undefined,
);

export function CorrelationProvider({ children }: { children: ReactNode }) {
  const [correlationId, setCorrelationId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let id = window.localStorage.getItem(STORAGE_KEY);
    if (!id) {
      id = crypto.randomUUID();
      window.localStorage.setItem(STORAGE_KEY, id);
    }
    setCorrelationId(id);
  }, []);

  return (
    <CorrelationContext.Provider value={{ correlationId }}>
      {children}
    </CorrelationContext.Provider>
  );
}

export function useCorrelation() {
  const context = useContext(CorrelationContext);
  if (!context) {
    throw new Error("useCorrelation must be used within CorrelationProvider");
  }
  return context;
}
