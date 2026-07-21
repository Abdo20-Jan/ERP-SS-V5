"use client";

import { useEffect, useState } from "react";

export function useCorrelationId() {
  const [correlationId, setCorrelationId] = useState<string | null>(null);

  useEffect(() => {
    // Get correlation ID from meta tag or generate new one
    const metaTag = document.querySelector('meta[name="correlation-id"]');
    if (metaTag) {
      setCorrelationId(metaTag.getAttribute("content"));
    } else {
      setCorrelationId(crypto.randomUUID());
    }
  }, []);

  return correlationId;
}
