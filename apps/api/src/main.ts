import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
  );

  // Enable CORS for web app
  await app.register(require("@fastify/cors"), {
    origin: process.env.WEB_URL || "http://localhost:3001",
    credentials: true,
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
    exclude: ["health", "ready"],
  });

  const port = process.env.API_PORT || 3000;
  const host = process.env.API_HOST || "0.0.0.0";

  await app.listen(port, host);

  console.log(`🚀 API running on http://${host}:${port}`);
  console.log(`📊 Health check: http://${host}:${port}/health`);
  console.log(`📊 Ready check: http://${host}:${port}/ready`);
}

bootstrap();
