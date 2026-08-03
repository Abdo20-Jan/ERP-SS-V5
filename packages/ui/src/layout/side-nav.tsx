"use client";

import * as React from "react";

import { cn } from "../lib/utils";

export interface SideNavItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  children?: SideNavItem[];
}

export interface SideNavSection {
  title?: string;
  items: SideNavItem[];
}

export interface SideNavProps extends React.HTMLAttributes<HTMLElement> {
  sections: SideNavSection[];
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  renderLink?: (item: SideNavItem) => React.ReactNode;
}

function isItemActive(item: SideNavItem, pathname: string): boolean {
  if (item.active) return true;
  if (pathname === item.href) return true;
  if (item.href !== "/" && pathname.startsWith(`${item.href}/`)) return true;
  return item.children?.some((c) => isItemActive(c, pathname)) ?? false;
}

const SideNav = React.forwardRef<HTMLElement, SideNavProps>(
  (
    {
      className,
      sections,
      collapsed = false,
      onToggleCollapse,
      renderLink,
      ...props
    },
    ref,
  ) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "flex h-full flex-col border-r border-primary-800 bg-primary-700 text-white transition-all duration-200",
          collapsed ? "w-12" : "w-[220px]",
          className,
        )}
        data-testid="side-nav"
        {...props}
      >
        {onToggleCollapse ? (
          <button
            type="button"
            onClick={onToggleCollapse}
            className="flex h-9 items-center justify-center border-b border-primary-600 text-xs text-primary-100 hover:bg-primary-600"
            aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
          >
            {collapsed ? "»" : "«"}
          </button>
        ) : null}

        <nav className="flex-1 overflow-y-auto py-1">
          {sections.map((section, si) => (
            <div key={section.title ?? `section-${si}`} className="mb-1">
              {section.title && !collapsed ? (
                <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary-200">
                  {section.title}
                </div>
              ) : null}
              <ul className="space-y-px">
                {section.items.map((item) => (
                  <li key={item.href}>
                    {renderLink ? (
                      renderLink({ ...item, active: item.active })
                    ) : (
                      <a
                        href={item.href}
                        className={cn(
                          "flex items-center gap-2 px-3 py-1.5 text-xs font-medium transition-colors",
                          item.active
                            ? "bg-primary-600 text-white"
                            : "text-primary-100 hover:bg-primary-600/70 hover:text-white",
                        )}
                        aria-current={item.active ? "page" : undefined}
                      >
                        {item.icon ? (
                          <span className="shrink-0">{item.icon}</span>
                        ) : null}
                        {!collapsed ? (
                          <span className="truncate">{item.label}</span>
                        ) : null}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    );
  },
);
SideNav.displayName = "SideNav";

export { SideNav, isItemActive };
