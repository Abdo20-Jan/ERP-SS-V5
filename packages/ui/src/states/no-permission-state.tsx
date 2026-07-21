import * as React from "react";

import { Button } from "../components/button";
import { cn } from "../lib/utils";

export interface NoPermissionStateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
}

const NoPermissionState = React.forwardRef<HTMLDivElement, NoPermissionStateProps>(
  (
    {
      className,
      title = "Acesso negado",
      message = "Você não tem permissão para acessar esta página.",
      actionLabel = "Voltar",
      onAction,
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
        {...props}
      >
        <svg
          className="h-12 w-12 text-warning-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{message}</p>
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
NoPermissionState.displayName = "NoPermissionState";

export { NoPermissionState };
