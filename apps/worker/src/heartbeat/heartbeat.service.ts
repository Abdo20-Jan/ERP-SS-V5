import {
  Injectable,
  type OnModuleDestroy,
  type OnModuleInit,
} from "@nestjs/common";
import { createLogger, generateCorrelationId, runWithCorrelationId } from "@sunset/observability";

const HEARTBEAT_INTERVAL_MS = 60_000;

@Injectable()
export class HeartbeatService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = createLogger({ name: "worker.heartbeat" });
  private intervalId: ReturnType<typeof setInterval> | null = null;

  onModuleInit() {
    this.intervalId = setInterval(() => {
      this.beat();
    }, HEARTBEAT_INTERVAL_MS);

    // Emit an initial heartbeat so the service is observable immediately
    this.beat();
  }

  onModuleDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private beat() {
    const correlationId = generateCorrelationId();
    runWithCorrelationId(correlationId, () => {
      this.logger.info(
        { uptime: process.uptime(), correlationId },
        "worker heartbeat",
      );
    });
  }
}
