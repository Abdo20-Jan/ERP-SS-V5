"use client";

import * as React from "react";

import { cn } from "../lib/utils";

const TONE_CLASSES: Record<string, string> = {
  neutral: "bg-gray-100 text-gray-700 ring-gray-200",
  info: "bg-sky-50 text-sky-800 ring-sky-200",
  success: "bg-success-100 text-success-800 ring-success-200",
  warning: "bg-warning-100 text-warning-800 ring-warning-200",
  danger: "bg-error-100 text-error-800 ring-error-200",
  accent: "bg-primary-50 text-primary-800 ring-primary-200",
};

export type WorkflowTone = keyof typeof TONE_CLASSES;

export interface WorkflowBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  tone?: WorkflowTone;
}

const WorkflowBadge = React.forwardRef<HTMLSpanElement, WorkflowBadgeProps>(
  ({ className, label, tone = "neutral", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-sm px-1.5 py-0.5 text-[11px] font-medium ring-1 ring-inset",
          TONE_CLASSES[tone] ?? TONE_CLASSES.neutral,
          className,
        )}
        data-tone={tone}
        {...props}
      >
        {label}
      </span>
    );
  },
);
WorkflowBadge.displayName = "WorkflowBadge";

export { WorkflowBadge };
