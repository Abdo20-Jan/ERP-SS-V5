export class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly statusCode: number = 500,
    public readonly correlationId?: string,
  ) {
    super(message);
    this.name = "AppError";
    (
      Error as unknown as {
        captureStackTrace?: (target: object, ctor: new (...args: never[]) => Error) => void;
      }
    ).captureStackTrace?.(this, this.constructor as new (...args: never[]) => Error);
  }

  toJSON() {
    return {
      error: {
        code: this.code,
        message: this.message,
        correlationId: this.correlationId,
      },
    };
  }
}
