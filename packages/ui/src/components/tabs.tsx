"use client";

import * as React from "react";

import { cn } from "../lib/utils";

export interface TabItem {
  id: string;
  label: string;
  count?: number | null;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  value: string;
  onValueChange: (id: string) => void;
  className?: string;
  "aria-label"?: string;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      items,
      value,
      onValueChange,
      className,
      "aria-label": ariaLabel = "Abas",
    },
    ref,
  ) => {
    const listRef = React.useRef<HTMLDivElement>(null);

    const enabledItems = items.filter((item) => !item.disabled);
    const selectedIndex = enabledItems.findIndex((item) => item.id === value);

    const focusTab = (id: string) => {
      const el = listRef.current?.querySelector<HTMLElement>(
        `[data-tab-id="${id}"]`,
      );
      el?.focus();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (enabledItems.length === 0) return;

      let nextIndex = selectedIndex < 0 ? 0 : selectedIndex;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextIndex = (selectedIndex + 1) % enabledItems.length;
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        nextIndex =
          (selectedIndex - 1 + enabledItems.length) % enabledItems.length;
      } else if (event.key === "Home") {
        event.preventDefault();
        nextIndex = 0;
      } else if (event.key === "End") {
        event.preventDefault();
        nextIndex = enabledItems.length - 1;
      } else {
        return;
      }

      const next = enabledItems[nextIndex];
      if (!next) return;
      onValueChange(next.id);
      focusTab(next.id);
    };

    return (
      <div ref={ref} className={cn("w-full", className)}>
        <div
          ref={listRef}
          role="tablist"
          aria-label={ariaLabel}
          className="flex flex-wrap gap-1 border-b border-gray-200"
          onKeyDown={handleKeyDown}
        >
          {items.map((item) => {
            const selected = item.id === value;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                data-tab-id={item.id}
                aria-selected={selected}
                aria-controls={`tabpanel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                disabled={item.disabled}
                className={cn(
                  "inline-flex items-center gap-2 border-b-2 px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500",
                  selected
                    ? "border-primary-600 text-primary-700"
                    : "border-transparent text-gray-600 hover:text-gray-900",
                  item.disabled && "cursor-not-allowed opacity-50",
                )}
                onClick={() => {
                  if (!item.disabled) onValueChange(item.id);
                }}
              >
                <span>{item.label}</span>
                {item.count != null && (
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 text-xs font-medium",
                      selected
                        ? "bg-primary-100 text-primary-800"
                        : "bg-gray-100 text-gray-600",
                    )}
                    aria-label={`${item.count} itens`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  },
);
Tabs.displayName = "Tabs";

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  value: string;
  activeValue: string;
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({ id, value, activeValue, className, children, ...props }, ref) => {
    if (value !== activeValue) return null;
    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`tabpanel-${id}`}
        aria-labelledby={`tab-${id}`}
        className={cn("pt-4", className)}
        tabIndex={0}
        {...props}
      >
        {children}
      </div>
    );
  },
);
TabPanel.displayName = "TabPanel";

export { Tabs, TabPanel };
