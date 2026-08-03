"use client";

import {
  ErpShell,
  isItemActive,
  LoadingState,
  type SideNavItem,
} from "@sunset/ui";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode, useEffect, useState } from "react";
import { buildSideNavSections } from "../../config/navigation";
import { useAuth } from "../../providers/auth-provider";

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoading, isAuthenticated, logout } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <LoadingState message="Verificando autenticação..." />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const sections = buildSideNavSections(pathname);

  const renderNavLink = (item: SideNavItem) => {
    const active = isItemActive(item, pathname);
    return (
      <Link
        key={item.href}
        href={item.href}
        className={
          active
            ? "flex items-center gap-2 bg-primary-600 px-3 py-1.5 text-xs font-medium text-white"
            : "flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-primary-100 hover:bg-primary-600/70 hover:text-white"
        }
        aria-current={active ? "page" : undefined}
      >
        <span className="truncate">{item.label}</span>
      </Link>
    );
  };

  return (
    <ErpShell
      topNav={{
        ...(user ? { user: { name: user.name, email: user.email } } : {}),
        onLogout: async () => {
          await logout();
          router.push("/login");
        },
        environment: process.env.NODE_ENV,
        children: (
          <div className="hidden items-center gap-2 md:flex">
            <input
              type="search"
              placeholder="Busca global (Ctrl+K)"
              className="erp-input w-56"
              aria-label="Busca global"
            />
          </div>
        ),
      }}
      sideNav={{
        sections,
        collapsed: sidebarCollapsed,
        onToggleCollapse: () => setSidebarCollapsed((c) => !c),
        renderLink: renderNavLink,
      }}
    >
      {children}
    </ErpShell>
  );
}
