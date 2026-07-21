import { describe, expect, it } from "vitest";
import type { DestinationStream } from "pino";
import { createLogger, runWithCorrelationId } from "../src";

interface LogLine {
  level: number;
  levelLabel?: string;
  msg: string;
  service: string;
  correlationId?: string;
  password?: string;
}

function captureLogs(): {
  stream: DestinationStream;
  logs: string[];
  parse(): LogLine[];
} {
  const logs: string[] = [];
  const stream: DestinationStream = {
    write(chunk: string) {
      logs.push(chunk.trim());
    },
  } as DestinationStream;

  return {
    stream,
    logs,
    parse() {
      return logs.map((line) => JSON.parse(line) as LogLine);
    },
  };
}

describe("logger", () => {
  it("outputs structured json with service name", () => {
    const { stream, parse } = captureLogs();
    const logger = createLogger({ name: "test-service", destination: stream });

    logger.info("hello world");

    const line = parse()[0];
    expect(line).toBeDefined();
    expect(line?.msg).toBe("hello world");
    expect(line?.service).toBe("test-service");
    expect(line?.level).toBe(30);
  });

  it("injects correlation id from async local storage", () => {
    const { stream, parse } = captureLogs();
    const logger = createLogger({ name: "test-service", destination: stream });

    runWithCorrelationId("cid-abc", () => {
      logger.warn("with correlation");
    });

    const line = parse()[0];
    expect(line).toBeDefined();
    expect(line?.msg).toBe("with correlation");
    expect(line?.correlationId).toBe("cid-abc");
  });

  it("does not include correlation id when context is absent", () => {
    const { stream, parse } = captureLogs();
    const logger = createLogger({ name: "test-service", destination: stream });

    logger.info("no context");

    const line = parse()[0];
    expect(line).toBeDefined();
    expect(line?.msg).toBe("no context");
    expect(line).not.toHaveProperty("correlationId");
  });

  it("redacts sensitive fields", () => {
    const { stream, parse } = captureLogs();
    const logger = createLogger({ name: "test-service", destination: stream });

    logger.info({ password: "secret123", token: "bearer-token" }, "sensitive");

    const line = parse()[0] as Record<string, unknown> | undefined;
    expect(line).toBeDefined();
    expect(line?.password).toBe("[REDACTED]");
    expect(line?.token).toBe("[REDACTED]");
  });
});
