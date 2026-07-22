"use client";

import * as React from "react";

/**
 * Tracks navigator.onLine with online/offline window events.
 * SSR-safe: defaults to true until mounted.
 */
export function useOnlineStatus(initialOnline = true): boolean {
  const [online, setOnline] = React.useState(initialOnline);

  React.useEffect(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return;
    }

    const sync = () => setOnline(navigator.onLine);
    sync();

    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  return online;
}
