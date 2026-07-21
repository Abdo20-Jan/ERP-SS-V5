"use client";

import { LoadingState, Shell, ShellMain, TopNav } from "@sunset/ui";
import { useRouter } from "next/navigation";
import { type ReactNode, useEffect } from "react";
import { useAuth } from "../../providers/auth-provider";

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
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

  return (
    <Shell>
      <TopNav
        user={user ? { name: user.name, email: user.email } : undefined}
        onLogout={async () => {
          await logout();
          router.push("/login");
        }}
        environment={process.env.NODE_ENV}
      />
      <ShellMain>{children}</ShellMain>
    </Shell>
  );
}
