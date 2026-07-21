import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { v7 as uuidv7 } from "uuidv7";

@Injectable()
export class CorrelationIdInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const correlationId =
      request.headers["x-correlation-id"] || uuidv7();

    request.correlationId = correlationId;

    const response = context.switchToHttp().getResponse();
    response.header("x-correlation-id", correlationId);

    return next.handle();
  }
}
