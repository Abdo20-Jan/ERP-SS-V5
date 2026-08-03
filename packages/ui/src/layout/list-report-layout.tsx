"use client";

import * as React from "react";

import { cn } from "../lib/utils";

export interface ListReportLayoutProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: string[];
  actions?: React.ReactNode;
  filters?: React.ReactNode;
  toolbar?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function ListReportLayout({
  title,
  subtitle,
  breadcrumbs,
  actions,
  filters,
  toolbar,
  footer,
  children,
  className,
}: ListReportLayoutProps) {
  return (
    <div
      className={cn("flex min-h-full flex-col", className)}
      data-testid="list-report-layout"
    >
      <div className="border-b border-gray-300 bg-white">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-1">
            <nav
              className="text-[11px] text-gray-500"
              aria-label="Breadcrumb"
            >
              {breadcrumbs.join(" › ")}
            </nav>
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-4 px-4 py-2">
          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold text-gray-900">
              {title}
            </h1>
            {subtitle ? (
              <p className="truncate text-[11px] text-gray-500">{subtitle}</p>
            ) : null}
          </div>
          {actions ? (
            <div className="flex shrink-0 items-center gap-2">{actions}</div>
          ) : null}
        </div>

        {filters ? (
          <div className="border-t border-gray-200 bg-gray-50 px-4 py-2">
            {filters}
          </div>
        ) : null}

        {toolbar ? (
          <div className="flex items-center gap-2 border-t border-gray-200 bg-white px-4 py-1.5">
            {toolbar}
          </div>
        ) : null}
      </div>

      <div className="flex-1 p-3">{children}</div>

      {footer ? (
        <div className="border-t border-gray-300 bg-white px-4 py-2">
          {footer}
        </div>
      ) : null}
    </div>
  );
}
