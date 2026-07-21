import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { HeartbeatModule } from "./heartbeat/heartbeat.module";

@Module({
  imports: [HealthModule, HeartbeatModule],
})
export class WorkerModule {}
