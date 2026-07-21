import { AppError } from "./app-error";

export class AuthError extends AppError {
  constructor(message: string, correlationId?: string) {
    super(message, "AUTH_ERROR", 401, correlationId);
    this.name = "AuthError";
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string, correlationId?: string) {
    super(message, "FORBIDDEN", 403, correlationId);
    this.name = "ForbiddenError";
  }
}
