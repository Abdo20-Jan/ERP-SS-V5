import * as React from "react";

import { cn } from "../lib/utils";

export interface SkeletonRowsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  rows?: number;
  columns?: number;
}

const SkeletonRows = React.forwardRef<HTMLDivElement, SkeletonRowsProps>(
  ({ className, rows = 5, columns = 4, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full space-y-2", className)}
        role="status"
        aria-label="Carregando linhas"
        aria-busy="true"
        {...props}
      >
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={`skeleton-row-${rowIndex}`}
            className="flex gap-3"
            data-skeleton-row={rowIndex}
          >
            {Array.from({ length: columns }).map((__, colIndex) => (
              <div
                key={`skeleton-cell-${rowIndex}-${colIndex}`}
                className="h-8 flex-1 animate-pulse rounded bg-gray-200"
              />
            ))}
          </div>
        ))}
      </div>
    );
  },
);
SkeletonRows.displayName = "SkeletonRows";

export { SkeletonRows };
