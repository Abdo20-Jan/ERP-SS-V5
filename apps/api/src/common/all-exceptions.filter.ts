import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import { AppError } from "@sunset/contracts";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let errorResponse: any = {
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
              : (exceptionResponse as any).message || exception.message,
        },
      };
    } else if (exception instanceof Error) {
      this.logger.error(
        `Unhandled exception: ${exception.message}`,
        exception.stack,
      );
    }

    // Add correlation ID to error response
    if (request.correlationId) {
      errorResponse.error.correlationId = request.correlationId;
    }

    this.logger.error(
      `HTTP ${status} - ${request.method} ${request.url} - ${JSON.stringify(errorResponse)}`,
    );

    response.status(status).send(errorResponse);
  }
}
