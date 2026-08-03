"use client";

import * as React from "react";

import { cn } from "../lib/utils";

export interface SideNavItem {
  href: string;
  label: string;
  active?: boolean;
  group?: string;
}

export interface SideNavProps extends React.HTMLAttributes<HTMLElement> {
  items: SideNavItem[];
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  renderLink?: (item: SideNavItem) => React.ReactNode;
  footer?: React.ReactNode;
}

const SideNav = React.forwardRef<HTMLElement, SideNavProps>(
  (
    {
      className,
      items,
      collapsed = false,
      onToggleCollapse,
      renderLink,
      footer,
      ...props
    },
    ref,
  ) => {
    const groups = React.useMemo(() => {
      const map = new Map<string, SideNavItem[]>();
      for (const item of items) {
        const key = item.group ?? "Módulos";
        const list = map.get(key) ?? [];
        list.push(item);
        map.set(key, list);
      }
      return Array.from(map.entries());
    }, [items]);

    return (
      <aside
        ref={ref}
        className={cn(
          "flex h-full flex-col border-r border-nsuite-sidebarBorder bg-nsuite-sidebar text-nsuite-sidebarText transition-[width] duration-150",
          collapsed ? "w-14" : "w-56",
          className,
        )}
        data-testid="side-nav"
        data-collapsed={collapsed ? "true" : "false"}
        {...props}
      >
        <div className="flex h-10 items-center justify-between border-b border-nsuite-sidebarBorder px-2">
          {!collapsed ? (
            <span className="truncate px-1 text-[11px] font-semibold uppercase tracking-wide text-nsuite-sidebarMuted">
              Navegação
            </span>
          ) : (
            <span className="sr-only">Navegação</span>
          )}
          {onToggleCollapse ? (
            <button
              type="button"
              onClick={onToggleCollapse}
              className="rounded px-2 py-1 text-xs text-nsuite-sidebarMuted hover:bg-nsuite-sidebarHover hover:text-white"
              aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
              data-testid="side-nav-toggle"
            >
              {collapsed ? "»" : "«"}
            </button>
          ) : null}
        </div>

        <nav className="flex-1 overflow-y-auto py-2" aria-label="Módulos">
          {groups.map(([group, groupItems]) => (
            <div key={group} className="mb-3">
              {!collapsed ? (
                <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-wider text-nsuite-sidebarMuted">
                  {group}
                </p>
              ) : null}
              <ul className="space-y-0.5 px-1.5">
                {groupItems.map((item) => (
                  <li key={item.href}>
                    {renderLink ? (
                      renderLink(item)
                    ) : (
                      <a
                        href={item.href}
                        className={cn(
                          "flex items-center rounded px-2 py-1.5 text-[13px] transition-colors",
                          item.active
                            ? "bg-nsuite-sidebarActive font-medium text-white shadow-[inset_3px_0_0_0_#ff6700]"
                            : "text-nsuite-sidebarText hover:bg-nsuite-sidebarHover",
                          collapsed && "justify-center px-0",
                        )}
                        aria-current={item.active ? "page" : undefined}
                        title={item.label}
                      >
                        {collapsed ? item.label.slice(0, 1) : item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {footer ? (
          <div className="border-t border-nsuite-sidebarBorder p-2 text-[11px] text-nsuite-sidebarMuted">
            {footer}
          </div>
        ) : null}
      </aside>
    );
  },
);
SideNav.displayName = "SideNav";

export { SideNav };
