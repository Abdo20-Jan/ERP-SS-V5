import * as React from "react";

import { cn } from "../lib/utils";

export interface LoadingStateProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
}

const LoadingState = React.forwardRef<HTMLDivElement, LoadingStateProps>(
  ({ className, message = "Carregando...", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center gap-4 p-8",
          className,
        )}
        role="status"
        aria-live="polite"
        aria-label={message}
        {...props}
      >
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-primary-600" />
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    );
  },
);
LoadingState.displayName = "LoadingState";

export { LoadingState };
