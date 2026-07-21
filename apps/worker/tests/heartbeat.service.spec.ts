import { describe, expect, it, vi } from "vitest";
import { HeartbeatService } from "../src/heartbeat/heartbeat.service";

describe("HeartbeatService", () => {
  it("starts and stops heartbeat interval without errors", () => {
    vi.useFakeTimers();

    const service = new HeartbeatService();
    service.onModuleInit();

    vi.advanceTimersByTime(120_000);

    expect(() => service.onModuleDestroy()).not.toThrow();

    vi.useRealTimers();
  });
});
