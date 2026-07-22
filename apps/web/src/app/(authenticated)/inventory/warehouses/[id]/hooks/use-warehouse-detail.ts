"use client";

import { useCallback, useEffect, useState } from "react";
import {
  type ApiError,
  type WarehouseDetailDto,
  getWarehouseDetail,
} from "../../../../../../lib/api/inventory";

export type DetailLoadState =
  | "idle"
  | "loading"
  | "success"
  | "error"
  | "forbidden"
  | "conflict"
  | "not_found";

export interface UseWarehouseDetailResult {
  detail: WarehouseDetailDto | null;
  state: DetailLoadState;
  error: ApiError | null;
  reload: () => void;
}

export function useWarehouseDetail(warehouseId: string): UseWarehouseDetailResult {
  const [detail, setDetail] = useState<WarehouseDetailDto | null>(null);
  const [state, setState] = useState<DetailLoadState>("loading");
  const [error, setError] = useState<ApiError | null>(null);
  const [tick, setTick] = useState(0);

  const reload = useCallback(() => setTick((t) => t + 1), []);

  useEffect(() => {
    let cancelled = false;
    setState("loading");
    setError(null);

    getWarehouseDetail(warehouseId)
      .then((data) => {
        if (cancelled) return;
        setDetail(data);
        setState("success");
      })
      .catch((err: ApiError) => {
        if (cancelled) return;
        setDetail(null);
        setError(err);
        const code = err?.error?.code ?? "";
        const status = err?.status;
        if (status === 403 || code === "FORBIDDEN") {
          setState("forbidden");
        } else if (status === 409 || code === "CONFLICT") {
          setState("conflict");
        } else if (status === 404 || code === "NOT_FOUND") {
          setState("not_found");
        } else {
          setState("error");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [warehouseId, tick]);

  return { detail, state, error, reload };
}
