"use client";

import * as React from "react";

import { cn } from "../lib/utils";

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Shell = React.forwardRef<HTMLDivElement, ShellProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex min-h-screen flex-col bg-nsuite-contentBg", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Shell.displayName = "Shell";

const ShellHeader = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  return (
    <header
      ref={ref}
      className={cn(
        "sticky top-0 z-40 w-full border-b border-gray-200 bg-white",
        className,
      )}
      {...props}
    >
      {children}
    </header>
  );
});
ShellHeader.displayName = "ShellHeader";

const ShellMain = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn("flex-1", className)}
      {...props}
    >
      {children}
    </main>
  );
});
ShellMain.displayName = "ShellMain";

const ShellFooter = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  return (
    <footer
      ref={ref}
      className={cn("border-t border-gray-200 bg-white", className)}
      {...props}
    >
      {children}
    </footer>
  );
});
ShellFooter.displayName = "ShellFooter";

export { Shell, ShellHeader, ShellMain, ShellFooter };
