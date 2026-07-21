import {
  type CallHandler,
  type ExecutionContext,
  Injectable,
  type NestInterceptor,
} from "@nestjs/common";
import { generateCorrelationId } from "@sunset/observability";
import type { Observable } from "rxjs";

@Injectable()
export class CorrelationIdInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const correlationId =
      request.headers["x-correlation-id"] ||
      request.correlationId ||
      generateCorrelationId();

    request.correlationId = correlationId;

    const response = context.switchToHttp().getResponse();
    response.header("x-correlation-id", correlationId);

    return next.handle();
  }
}
