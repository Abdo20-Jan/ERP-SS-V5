"use client";

import { AppShell, LoadingState } from "@sunset/ui";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode, useEffect, useState } from "react";
import { isNavActive, MODULE_NAV } from "../../lib/modules";
import { useAuth } from "../../providers/auth-provider";

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoading, isAuthenticated, logout } = useAuth();
  const [globalSearch, setGlobalSearch] = useState("");

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-nsuite-contentBg">
        <LoadingState message="Verificando autenticação..." />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const navItems = MODULE_NAV.map((item) => ({
    href: item.href,
    label: item.label,
    group: item.group,
    active: isNavActive(pathname, item),
  }));

  return (
    <AppShell
      {...(user ? { user: { name: user.name, email: user.email } } : {})}
      onLogout={async () => {
        await logout();
        router.push("/login");
      }}
      environment={process.env.NODE_ENV}
      navItems={navItems}
      searchSlot={
        <input
          className="h-7 w-full rounded-sm border-0 bg-white/15 px-2 text-xs text-white placeholder:text-white/70 focus:bg-white/25 focus:outline-none"
          placeholder="Busca global (Ctrl+K)"
          value={globalSearch}
          onChange={(e) => setGlobalSearch(e.target.value)}
          aria-label="Busca global"
        />
      }
      renderSideLink={(item) => (
        <Link
          key={item.href}
          href={item.href}
          className={
            item.active
              ? "flex items-center rounded px-2 py-1.5 text-[13px] font-medium text-white shadow-[inset_3px_0_0_0_#ff6700] bg-[#2f3a4a]"
              : "flex items-center rounded px-2 py-1.5 text-[13px] text-[#e8ecf0] hover:bg-[#4a586c]"
          }
          aria-current={item.active ? "page" : undefined}
          title={item.label}
        >
          {item.label}
        </Link>
      )}
    >
      {children}
    </AppShell>
  );
}
