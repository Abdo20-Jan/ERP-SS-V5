"use client";

import * as React from "react";

import { cn } from "../lib/utils";
import { SideNav, type SideNavProps } from "./side-nav";
import { TopNav, type TopNavProps } from "./top-nav";

export interface ErpShellProps {
  children: React.ReactNode;
  topNav: TopNavProps;
  sideNav: SideNavProps;
  className?: string;
}

export function ErpShell({
  children,
  topNav,
  sideNav,
  className,
}: ErpShellProps) {
  return (
    <div className={cn("flex h-screen flex-col bg-gray-100", className)}>
      <TopNav {...topNav} />
      <div className="flex min-h-0 flex-1">
        <SideNav {...sideNav} />
        <main className="min-w-0 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
