import type { LoggerService } from "@nestjs/common";
import type { Logger } from "@sunset/observability";

export class PinoLogger implements LoggerService {
  constructor(private readonly logger: Logger) {}

  log(message: string, ...optionalParams: unknown[]) {
    this.logger.info({ context: optionalParams[0] }, message);
  }

  error(message: string, ...optionalParams: unknown[]) {
    this.logger.error(
      { context: optionalParams[0], trace: optionalParams[1] },
      message,
    );
  }

  warn(message: string, ...optionalParams: unknown[]) {
    this.logger.warn({ context: optionalParams[0] }, message);
  }

  debug(message: string, ...optionalParams: unknown[]) {
    this.logger.debug({ context: optionalParams[0] }, message);
  }

  verbose(message: string, ...optionalParams: unknown[]) {
    this.logger.trace({ context: optionalParams[0] }, message);
  }
}
