"use client";

import { LoadingState, Shell, ShellMain, TopNav } from "@sunset/ui";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode, useEffect } from "react";
import { useAuth } from "../../providers/auth-provider";

const NAV_ITEMS = [
  { href: "/app", label: "Início" },
  { href: "/inventory/warehouses", label: "Depósitos" },
];

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoading, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingState message="Verificando autenticação..." />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const navItems = NAV_ITEMS.map((item) => ({
    ...item,
    active:
      item.href === "/app"
        ? pathname === "/app"
        : pathname === item.href || pathname.startsWith(`${item.href}/`),
  }));

  return (
    <Shell>
      <TopNav
        {...(user
          ? { user: { name: user.name, email: user.email } }
          : {})}
        onLogout={async () => {
          await logout();
          router.push("/login");
        }}
        environment={process.env.NODE_ENV}
        navItems={navItems}
        renderNavLink={(item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              item.active
                ? "rounded-md bg-primary-50 px-2 py-1 text-sm font-medium text-primary-700"
                : "rounded-md px-2 py-1 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }
            aria-current={item.active ? "page" : undefined}
          >
            {item.label}
          </Link>
        )}
      />
      <ShellMain>{children}</ShellMain>
    </Shell>
  );
}
