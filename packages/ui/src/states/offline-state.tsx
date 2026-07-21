import * as React from "react";

import { cn } from "../lib/utils";

export interface OfflineStateProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
}

const OfflineState = React.forwardRef<HTMLDivElement, OfflineStateProps>(
  (
    {
      className,
      message = "Você está offline. Algumas funcionalidades podem não estar disponíveis.",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-2 bg-warning-50 border-b border-warning-200 px-4 py-2",
          className,
        )}
        role="alert"
        aria-live="polite"
        {...props}
      >
        <svg
          className="h-4 w-4 text-warning-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
          />
        </svg>
        <p className="text-sm text-warning-800">{message}</p>
      </div>
    );
  },
);
OfflineState.displayName = "OfflineState";

export { OfflineState };
