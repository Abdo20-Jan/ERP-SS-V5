import {
  type ArgumentsHost,
  Catch,
  type ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { AppError } from "@sunset/contracts";
import { createLogger } from "@sunset/observability";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = createLogger({ name: "api.exceptions" });

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let errorResponse: Record<string, unknown> = {
      error: {
        code: "INTERNAL_ERROR",
        message: "Erro interno do servidor",
      },
    };

    if (exception instanceof AppError) {
      status = exception.statusCode;
      errorResponse = exception.toJSON();
    } else if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      errorResponse = {
        error: {
          code: exception.message,
          message:
            typeof exceptionResponse === "string"
              ? exceptionResponse
              : ((exceptionResponse as Record<string, unknown>).message as
                  | string
                  | undefined) || exception.message,
        },
      };
    } else if (exception instanceof Error) {
      this.logger.error(
        { err: { message: exception.message, stack: exception.stack } },
        "Unhandled exception",
      );
    }

    // Add correlation ID to error response
    if (request.correlationId) {
      (errorResponse.error as Record<string, unknown>).correlationId =
        request.correlationId;
    }

    this.logger.error(
      {
        status,
        method: request.method,
        url: request.url,
        response: errorResponse,
      },
      `HTTP ${status}`,
    );

    response.status(status).send(errorResponse);
  }
}
