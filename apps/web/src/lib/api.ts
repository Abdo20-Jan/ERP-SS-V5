const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const CORRELATION_STORAGE_KEY = "sunset-correlation-id";

export interface ApiError {
  error: {
    code: string;
    message: string;
    correlationId?: string;
  };
}

function getCorrelationId(): string {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem(CORRELATION_STORAGE_KEY);
    if (stored) {
      return stored;
    }
    const id = crypto.randomUUID();
    window.localStorage.setItem(CORRELATION_STORAGE_KEY, id);
    return id;
  }
  return crypto.randomUUID();
}

async function request<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  const correlationId = getCorrelationId();

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
    request<{ access_token: string; user: unknown }>("/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  logout: () =>
    request<{ message: string }>("/v1/auth/logout", { method: "POST" }),

  me: () => request<unknown>("/v1/auth/me"),

  health: () => request<{ status: string }>("/health"),

  ready: () => request<{ status: string }>("/ready"),
};
