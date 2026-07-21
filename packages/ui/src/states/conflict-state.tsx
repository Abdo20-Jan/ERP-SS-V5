import * as React from "react";

import { Button } from "../components/button";
import { cn } from "../lib/utils";

export interface ConflictStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  onReload?: () => void;
}

const ConflictState = React.forwardRef<HTMLDivElement, ConflictStateProps>(
  (
    {
      className,
      title = "Conflito de dados",
      message = "Outro usuário alterou este registro. Recarregue e tente novamente.",
      actionLabel = "Recarregar",
      onAction,
      onReload,
      ...props
    },
    ref,
  ) => {
    const handleAction = onAction || onReload;

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
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{message}</p>
        </div>
        {actionLabel && handleAction && (
          <Button onClick={handleAction} variant="outline">
            {actionLabel}
          </Button>
        )}
      </div>
    );
  },
);
ConflictState.displayName = "ConflictState";

export { ConflictState };
