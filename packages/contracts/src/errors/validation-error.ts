import { AppError } from "./app-error";

export class ValidationError extends AppError {
  constructor(
    message: string,
    public readonly fields: Record<string, string[]>,
    correlationId?: string,
  ) {
    super(message, "VALIDATION_ERROR", 400, correlationId);
    this.name = "ValidationError";
  }

  override toJSON() {
    return {
      error: {
        code: this.code,
        message: this.message,
        fields: this.fields,
        correlationId: this.correlationId,
      },
    };
  }
}
