const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const CORRELATION_STORAGE_KEY = "sunset-correlation-id";

export interface ApiError {
  error: {
    code: string;
    message: string;
    correlationId?: string;
  };
  status?: number;
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

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  const correlationId = getCorrelationId();

  let response: Response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "x-correlation-id": correlationId,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    });
  } catch {
    const networkError: ApiError = {
      error: {
        code: "NETWORK_ERROR",
        message: "Erro de comunicação com o servidor.",
        correlationId,
      },
      status: 0,
    };
    throw networkError;
  }

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    const error: ApiError = {
      error: {
        code:
          body?.error?.code ??
          (response.status === 403
            ? "FORBIDDEN"
            : response.status === 404
              ? "NOT_FOUND"
              : response.status === 409
                ? "CONFLICT"
                : "HTTP_ERROR"),
        message:
          body?.error?.message ??
          body?.message ??
          "Erro de comunicação com o servidor.",
        correlationId: body?.error?.correlationId ?? correlationId,
      },
      status: response.status,
    };
    throw error;
  }

  return response.json();
}

export const api = {
  login: (email: string, password: string) =>
    apiRequest<{ access_token: string; user: unknown }>("/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  logout: () =>
    apiRequest<{ message: string }>("/v1/auth/logout", { method: "POST" }),

  me: () => apiRequest<unknown>("/v1/auth/me"),

  health: () => apiRequest<{ status: string }>("/health"),

  ready: () => apiRequest<{ status: string }>("/ready"),
};

export * from "./api/inventory";
