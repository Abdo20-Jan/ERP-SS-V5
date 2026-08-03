"use client";

import { useCallback, useEffect, useState } from "react";
import type { ApiError } from "../lib/api";

export function useListQuery<T>(loader: () => Promise<{ data: T[]; total: number }>) {
  const [rows, setRows] = useState<T[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);
  const [forbidden, setForbidden] = useState(false);

  const reload = useCallback(() => {
    setLoading(true);
    setError(null);
    setForbidden(false);
    loader()
      .then((res) => {
        setRows(res.data ?? []);
        setTotal(res.total ?? res.data?.length ?? 0);
      })
      .catch((err: ApiError) => {
        if (err.status === 403 || err.error?.code === "FORBIDDEN") {
          setForbidden(true);
        } else {
          setError(err);
        }
      })
      .finally(() => setLoading(false));
  }, [loader]);

  useEffect(() => {
    reload();
  }, [reload]);

  return { rows, total, loading, error, forbidden, reload };
}
