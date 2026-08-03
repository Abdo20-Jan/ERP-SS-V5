"use client";

import * as React from "react";

import { cn } from "../lib/utils";
import { Shell, ShellMain } from "./shell";
import { SideNav, type SideNavItem } from "./side-nav";
import { TopNav, type TopNavProps } from "./top-nav";

export interface AppShellProps {
  user?: TopNavProps["user"];
  onLogout?: () => void;
  environment?: string;
  navItems: SideNavItem[];
  renderSideLink?: (item: SideNavItem) => React.ReactNode;
  searchSlot?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const AppShell = React.forwardRef<HTMLDivElement, AppShellProps>(
  (
    {
      user,
      onLogout,
      environment,
      navItems,
      renderSideLink,
      searchSlot,
      children,
      className,
    },
    ref,
  ) => {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
      <Shell
        ref={ref}
        className={cn("bg-nsuite-contentBg", className)}
        data-testid="app-shell"
      >
        <TopNav
          {...(user ? { user } : {})}
          {...(onLogout ? { onLogout } : {})}
          {...(environment ? { environment } : {})}
          searchSlot={searchSlot}
        />
        <div className="flex min-h-0 flex-1">
          <SideNav
            items={navItems}
            collapsed={collapsed}
            onToggleCollapse={() => setCollapsed((v) => !v)}
            {...(renderSideLink ? { renderLink: renderSideLink } : {})}
          />
          <ShellMain className="min-w-0 overflow-auto bg-nsuite-contentBg">
            {children}
          </ShellMain>
        </div>
      </Shell>
    );
  },
);
AppShell.displayName = "AppShell";

export { AppShell };
