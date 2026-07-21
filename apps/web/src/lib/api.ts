const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export interface ApiError {
  error: {
    code: string;
    message: string;
    correlationId?: string;
  };
}

async function request<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  const correlationId = crypto.randomUUID();

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-correlation-id": correlationId,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error: ApiError = await response.json().catch(() => ({
      error: {
        code: "NETWORK_ERROR",
        message: "Erro de comunicação com o servidor.",
      },
    }));
    throw error;
  }

  return response.json();
}

export const api = {
  login: (email: string, password: string) =>
    request<{ access_token: string; user: any }>("/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  logout: () =>
    request<{ message: string }>("/v1/auth/logout", { method: "POST" }),

  me: () => request<any>("/v1/auth/me"),

  health: () => request<{ status: string }>("/health"),

  ready: () => request<{ status: string }>("/ready"),
};
