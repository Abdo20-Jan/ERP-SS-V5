"use client";

import { useEffect, useState } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
  permissions: string[];
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement actual auth check
    // For now, this is a stub
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (token) {
          // Validate token and get user
          setUser({
            id: "stub-id",
            email: "admin@sunset.local",
            name: "Administrador",
            permissions: ["user:read", "user:write"],
          });
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (_email: string, _password: string) => {
    // TODO: Implement actual login
    throw new Error("Not implemented");
  };

  const logout = async () => {
    localStorage.removeItem("access_token");
    setUser(null);
  };

  const hasPermission = (permission: string) => {
    return user?.permissions.includes(permission) ?? false;
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    hasPermission,
  };
}
