import * as React from "react";

import { cn } from "../lib/utils";

export type StatusBadgeStatus = "ACTIVE" | "INACTIVE" | string;

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /** Prefer isActive when available; status string is fallback. */
  isActive?: boolean;
  status?: StatusBadgeStatus;
  activeLabel?: string;
  inactiveLabel?: string;
}

function resolveActive(
  isActive: boolean | undefined,
  status: StatusBadgeStatus | undefined,
): boolean {
  if (typeof isActive === "boolean") return isActive;
  if (!status) return false;
  const normalized = status.toUpperCase();
  return normalized === "ACTIVE" || normalized === "ATIVO";
}

const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  (
    {
      className,
      isActive,
      status,
      activeLabel = "Ativo",
      inactiveLabel = "Inativo",
      ...props
    },
    ref,
  ) => {
    const active = resolveActive(isActive, status);
    const label = active ? activeLabel : inactiveLabel;

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
          active
            ? "bg-success-100 text-success-800"
            : "bg-gray-100 text-gray-700",
          className,
        )}
        data-status={active ? "ACTIVE" : "INACTIVE"}
        data-active={active ? "true" : "false"}
        {...props}
      >
        <span
          className={cn(
            "mr-1.5 h-1.5 w-1.5 rounded-full",
            active ? "bg-success-600" : "bg-gray-400",
          )}
          aria-hidden="true"
        />
        {label}
      </span>
    );
  },
);
StatusBadge.displayName = "StatusBadge";

export { StatusBadge };
