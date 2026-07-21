import { AppError } from "./app-error";

export class ConflictError extends AppError {
  constructor(
    message: string,
    public readonly entityType?: string,
    public readonly entityId?: string,
    correlationId?: string,
  ) {
    super(message, "CONFLICT", 409, correlationId);
    this.name = "ConflictError";
  }

  toJSON() {
    return {
      error: {
        code: this.code,
        message: this.message,
        entityType: this.entityType,
        entityId: this.entityId,
        correlationId: this.correlationId,
      },
    };
  }
}
