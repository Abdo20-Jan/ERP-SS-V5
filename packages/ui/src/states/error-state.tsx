import * as React from "react";

import { Button } from "../components/button";
import { cn } from "../lib/utils";

export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  correlationId?: string;
}

const ErrorState = React.forwardRef<HTMLDivElement, ErrorStateProps>(
  (
    {
      className,
      title = "Erro ao carregar dados",
      message = "Ocorreu um erro inesperado. Tente novamente.",
      actionLabel = "Tentar novamente",
      onAction,
      correlationId,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center gap-4 p-8 text-center",
          className,
        )}
        role="alert"
        aria-live="assertive"
        {...props}
      >
        <svg
          className="h-12 w-12 text-error-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{message}</p>
          {correlationId && (
            <p className="text-xs text-gray-400">
              ID de correlação: {correlationId}
            </p>
          )}
        </div>
        {actionLabel && onAction && (
          <Button onClick={onAction} variant="outline">
            {actionLabel}
          </Button>
        )}
      </div>
    );
  },
);
ErrorState.displayName = "ErrorState";

export { ErrorState };
