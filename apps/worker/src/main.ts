import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from "@nestjs/platform-fastify";
import {
  createLogger,
  generateCorrelationId,
  runWithCorrelationId,
} from "@sunset/observability";
import { WorkerModule } from "./worker.module";

async function bootstrap() {
  const logger = createLogger({ name: "worker" });

  const app = await NestFactory.create<NestFastifyApplication>(
    WorkerModule,
    new FastifyAdapter({ logger: false }),
  );

  app.useLogger({
    log: (message: string) => logger.info(message),
    error: (message: string, trace?: string) =>
      logger.error({ trace }, message),
    warn: (message: string) => logger.warn(message),
    debug: (message: string) => logger.debug(message),
    verbose: (message: string) => logger.trace(message),
  });

  const fastify = app.getHttpAdapter().getInstance();
  fastify.addHook("onRequest", (request, reply, done) => {
    const correlationId =
      (request.headers["x-correlation-id"] as string | undefined) ||
      generateCorrelationId();
    runWithCorrelationId(correlationId, () => {
      (request as unknown as Record<string, unknown>).correlationId =
        correlationId;
      reply.header("x-correlation-id", correlationId);
      done();
    });
  });

  const port = process.env.WORKER_PORT || 3002;
  const host = process.env.WORKER_HOST || "0.0.0.0";

  await app.listen(port, host);
  logger.info({ port, host }, "Worker started");
}

bootstrap().catch((error) => {
  console.error("Worker failed to start", error);
  process.exit(1);
});
