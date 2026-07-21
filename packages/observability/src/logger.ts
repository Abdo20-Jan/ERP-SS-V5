import pino, { type DestinationStream, type Logger as PinoLogger } from "pino";
import { getCorrelationId } from "./correlation-context";

export type Logger = PinoLogger;

export interface LoggerOptions {
  name: string;
  level?: string;
  pretty?: boolean;
  destination?: DestinationStream;
}

export function createLogger(options: LoggerOptions): Logger {
  const {
    name,
    level = process.env.LOG_LEVEL || "info",
    pretty = process.env.NODE_ENV === "development",
    destination,
  } = options;

  const transport = pretty
    ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:standard",
        },
      }
    : undefined;

  const pinoOptions: pino.LoggerOptions = {
    name,
    level,
    base: { service: name },
    mixin() {
      const correlationId = getCorrelationId();
      return correlationId ? { correlationId } : {};
    },
    redact: {
      paths: [
        "password",
        "*.password",
        "passwordHash",
        "*.passwordHash",
        "token",
        "*.token",
        "secret",
        "*.secret",
        "authorization",
        "*.authorization",
        "req.headers.authorization",
        "headers.authorization",
      ],
      censor: "[REDACTED]",
    },
    timestamp: pino.stdTimeFunctions.isoTime,
  };

  if (transport) {
    pinoOptions.transport = transport;
  }

  return pino(pinoOptions, destination);
}
