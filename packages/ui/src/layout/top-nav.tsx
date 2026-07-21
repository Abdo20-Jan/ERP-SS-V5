"use client";

import * as React from "react";

import { Button } from "../components/button";
import { cn } from "../lib/utils";

export interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  user?: {
    name: string;
    email: string;
  };
  onLogout?: () => void;
  environment?: string;
}

const TopNav = React.forwardRef<HTMLElement, TopNavProps>(
  (
    {
      className,
      logo,
      user,
      onLogout,
      environment = "dev",
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
              <div className="h-8 w-8 rounded bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-gray-900">Sunset ERP</span>
            </div>
          )}
          {environment && environment !== "production" && (
            <span className="rounded bg-warning-100 px-2 py-1 text-xs font-medium text-warning-800">
              {environment.toUpperCase()}
            </span>
          )}
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
