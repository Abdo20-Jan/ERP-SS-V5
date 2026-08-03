"use client";

import * as React from "react";

import { cn } from "../lib/utils";

export interface ListReportProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  toolbar?: React.ReactNode;
  filters?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Dense List Report chrome (LAY-02): header + filters + table surface.
 * Prefer tables over cards/dashboards for operational work.
 */
const ListReport = React.forwardRef<HTMLDivElement, ListReportProps>(
  (
    { className, title, subtitle, toolbar, filters, footer, children, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("flex min-h-full flex-col", className)}
        data-testid="list-report"
        {...props}
      >
        <div className="border-b border-nsuite-tableBorder bg-white px-3 py-2.5 md:px-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <h1 className="truncate text-base font-semibold text-gray-900">
                {title}
              </h1>
              {subtitle ? (
                <p className="truncate text-[12px] text-gray-500">{subtitle}</p>
              ) : null}
            </div>
            {toolbar ? (
              <div className="flex flex-wrap items-center gap-2">{toolbar}</div>
            ) : null}
          </div>
          {filters ? (
            <div className="mt-2 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-2">
              {filters}
            </div>
          ) : null}
        </div>

        <div className="flex-1 p-2 md:p-3">
          <div className="overflow-hidden rounded-sm border border-nsuite-tableBorder bg-white shadow-sm">
            {children}
          </div>
        </div>

        {footer ? (
          <div className="border-t border-nsuite-tableBorder bg-white px-3 py-1.5 text-[11px] text-gray-500 md:px-4">
            {footer}
          </div>
        ) : null}
      </div>
    );
  },
);
ListReport.displayName = "ListReport";

export { ListReport };
