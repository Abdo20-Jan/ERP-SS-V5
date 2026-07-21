import * as React from "react";

import { cn } from "../lib/utils";

export interface SuccessStateProps
  extends React.HTMLAttributes<HTMLOutputElement> {
  message?: string;
}

const SuccessState = React.forwardRef<HTMLOutputElement, SuccessStateProps>(
  (
    { className, message = "Operação concluída com sucesso.", ...props },
    ref,
  ) => {
    return (
      <output
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-2 bg-success-50 border-b border-success-200 px-4 py-2",
          className,
        )}
        aria-live="polite"
        {...props}
      >
        <svg
          className="h-4 w-4 text-success-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-sm text-success-800">{message}</p>
      </output>
    );
  },
);
SuccessState.displayName = "SuccessState";

export { SuccessState };
