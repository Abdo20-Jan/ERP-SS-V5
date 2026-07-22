import * as React from "react";

import { Button } from "./button";
import { StatusBadge } from "./status-badge";
import { cn } from "../lib/utils";

export interface ObjectPagePrimaryAction {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
}

export interface ObjectPageHeaderProps
  extends React.HTMLAttributes<HTMLElement> {
  code: string;
  title: string;
  subtitle?: string;
  isActive?: boolean;
  status?: string;
  lastUpdated?: string;
  exceptionBanner?: React.ReactNode;
  primaryAction?: ObjectPagePrimaryAction | null;
  secondaryActions?: React.ReactNode;
}

const ObjectPageHeader = React.forwardRef<HTMLElement, ObjectPageHeaderProps>(
  (
    {
      className,
      code,
      title,
      subtitle,
      isActive,
      status,
      lastUpdated,
      exceptionBanner,
      primaryAction,
      secondaryActions,
      ...props
    },
    ref,
  ) => {
    return (
      <header
        ref={ref}
        className={cn(
          "border-b border-gray-200 bg-white px-4 py-3 md:px-6",
          className,
        )}
        data-testid="object-page-header"
        {...props}
      >
        {exceptionBanner ? (
          <div className="mb-3" data-testid="object-page-exception">
            {exceptionBanner}
          </div>
        ) : null}

        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="font-mono text-sm font-semibold text-gray-700"
                data-testid="object-page-code"
              >
                {code}
              </span>
              <StatusBadge
                isActive={isActive}
                {...(status !== undefined ? { status } : {})}
              />
            </div>
            <h1
              className="truncate text-xl font-bold text-gray-900"
              data-testid="object-page-title"
            >
              {title}
            </h1>
            {subtitle ? (
              <p className="text-sm text-gray-500" data-testid="object-page-subtitle">
                {subtitle}
              </p>
            ) : null}
            {lastUpdated ? (
              <p className="text-xs text-gray-400">
                Atualizado em {lastUpdated}
              </p>
            ) : null}
          </div>

          <div className="flex flex-shrink-0 flex-wrap items-center gap-2">
            {secondaryActions}
            {primaryAction ? (
              <Button
                type="button"
                disabled={primaryAction.disabled}
                title={primaryAction.title}
                onClick={primaryAction.onClick}
                data-testid="object-page-primary-action"
              >
                {primaryAction.label}
              </Button>
            ) : null}
          </div>
        </div>
      </header>
    );
  },
);
ObjectPageHeader.displayName = "ObjectPageHeader";

export { ObjectPageHeader };
