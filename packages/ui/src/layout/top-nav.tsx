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
  /** Optional module links (legacy horizontal nav). Prefer SideNav. */
  navItems?: TopNavItem[];
  renderNavLink?: (item: TopNavItem) => React.ReactNode;
  searchSlot?: React.ReactNode;
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
      searchSlot,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "flex h-11 items-center justify-between bg-nsuite-orange px-3 text-nsuite-headerText shadow-sm",
          className,
        )}
        data-testid="top-nav"
        {...props}
      >
        <div className="flex min-w-0 items-center gap-3">
          {logo || (
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-white/15 ring-1 ring-white/30">
                <span className="text-xs font-bold text-white">S</span>
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-semibold tracking-tight text-white">
                  Sunset ERP
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-wider text-white/80">
                  Operacional
                </span>
              </div>
            </div>
          )}
          {environment && environment !== "production" && (
            <span className="rounded-sm bg-black/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
              {environment}
            </span>
          )}
          {searchSlot ? (
            <div className="ml-2 hidden min-w-[240px] max-w-md flex-1 md:block">
              {searchSlot}
            </div>
          ) : null}
          {navItems && navItems.length > 0 ? (
            <div
              className="ml-2 hidden items-center gap-1 lg:flex"
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
                      "rounded-sm px-2 py-1 text-xs font-medium transition-colors",
                      item.active
                        ? "bg-white/20 text-white"
                        : "text-white/85 hover:bg-white/10 hover:text-white",
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

        <div className="flex items-center gap-3">
          {children}

          {user && (
            <div className="flex items-center gap-2">
              <div className="hidden text-right sm:block">
                <p className="text-xs font-medium text-white">{user.name}</p>
                <p className="text-[10px] text-white/75">{user.email}</p>
              </div>
              {onLogout && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLogout}
                  className="h-7 text-xs text-white hover:bg-white/15 hover:text-white"
                >
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
