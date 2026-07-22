"use client";

import * as React from "react";

import { Button } from "../components/button";
import { cn } from "../lib/utils";

export interface TopNavItem {
  href: string;
  label: string;
  active?: boolean;
}

export interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  user?: {
    name: string;
    email: string;
  };
  onLogout?: () => void;
  environment?: string;
  /** Optional module links (e.g. Depósitos). Rendered between logo and user. */
  navItems?: TopNavItem[];
  /** Optional custom link renderer (Next.js Link). Defaults to <a>. */
  renderNavLink?: (item: TopNavItem) => React.ReactNode;
}

const TopNav = React.forwardRef<HTMLElement, TopNavProps>(
  (
    {
      className,
      logo,
      user,
      onLogout,
      environment = "dev",
      navItems,
      renderNavLink,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-4">
          {logo || (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-600">
                <span className="text-sm font-bold text-white">S</span>
              </div>
              <span className="font-semibold text-gray-900">Sunset ERP</span>
            </div>
          )}
          {environment && environment !== "production" && (
            <span className="rounded bg-warning-100 px-2 py-1 text-xs font-medium text-warning-800">
              {environment.toUpperCase()}
            </span>
          )}
          {navItems && navItems.length > 0 ? (
            <div
              className="ml-2 hidden items-center gap-1 md:flex"
              data-testid="top-nav-items"
            >
              {navItems.map((item) =>
                renderNavLink ? (
                  <React.Fragment key={item.href}>
                    {renderNavLink(item)}
                  </React.Fragment>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-md px-2 py-1 text-sm font-medium transition-colors",
                      item.active
                        ? "bg-primary-50 text-primary-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    )}
                    aria-current={item.active ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                ),
              )}
            </div>
          ) : null}
        </div>

        <div className="flex items-center gap-4">
          {children}

          {user && (
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              {onLogout && (
                <Button variant="ghost" size="sm" onClick={onLogout}>
                  Sair
                </Button>
              )}
            </div>
          )}
        </div>
      </nav>
    );
  },
);
TopNav.displayName = "TopNav";

export { TopNav };
