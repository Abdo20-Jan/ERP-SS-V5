import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from "@nestjs/platform-fastify";
import type { FastifyReply, FastifyRequest } from "fastify";
import {
  createLogger,
  generateCorrelationId,
  runWithCorrelationId,
} from "@sunset/observability";
import { AppModule } from "./app.module";
import { PinoLogger } from "./common/pino-logger.service";

async function bootstrap() {
  const logger = createLogger({ name: "api" });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );

  app.useLogger(new PinoLogger(logger));

  // Correlation id propagation via AsyncLocalStorage
  const fastify = app.getHttpAdapter().getInstance();
  fastify.addHook(
    "onRequest",
    (
      request: FastifyRequest,
      reply: FastifyReply,
      done: () => void,
    ) => {
      const correlationId =
        (request.headers["x-correlation-id"] as string | undefined) ||
        generateCorrelationId();
      runWithCorrelationId(correlationId, () => {
        (request as unknown as Record<string, unknown>).correlationId =
          correlationId;
        reply.header("x-correlation-id", correlationId);
        done();
      });
    },
  );

  // Enable CORS for web app
  await app.register(require("@fastify/cors"), {
    origin: process.env.WEB_URL || "http://localhost:3001",
    credentials: true,
  });

  // Rate limiting (brute force protection)
  await app.register(require("@fastify/rate-limit"), {
    max: 100, // 100 requests
    timeWindow: "1 minute",
    errorResponseBuilder: (
      request: FastifyRequest,
      context: { after: string },
    ) => ({
      error: {
        code: "RATE_LIMIT_EXCEEDED",
        message: `Muitas requisições. Tente novamente em ${context.after}.`,
        correlationId: request.headers["x-correlation-id"],
      },
    }),
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Global prefix
  app.setGlobalPrefix("v1", {
    exclude: ["health", "health/detailed", "ready"],
  });

  const port = process.env.API_PORT || 3000;
  const host = process.env.API_HOST || "0.0.0.0";

  await app.listen(port, host);
  logger.info({ port, host }, "API started");
}

bootstrap().catch((error) => {
  console.error("API failed to start", error);
  process.exit(1);
});
