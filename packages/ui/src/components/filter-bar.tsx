"use client";

import * as React from "react";

import { cn } from "../lib/utils";

export interface FilterBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function FilterBar({ className, children, ...props }: FilterBarProps) {
  return (
    <div
      className={cn("flex flex-wrap items-end gap-2", className)}
      data-testid="filter-bar"
      {...props}
    >
      {children}
    </div>
  );
}

export interface FilterFieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function FilterField({ label, children, className }: FilterFieldProps) {
  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      <label className="text-[10px] font-medium uppercase tracking-wide text-gray-500">
        {label}
      </label>
      {children}
    </div>
  );
}
