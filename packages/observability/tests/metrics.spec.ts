import { describe, expect, it } from "vitest";
import { createMetricsClient, metrics } from "../src/metrics";

describe("metrics stub", () => {
  it("default metrics client exposes all methods", () => {
    expect(() => metrics.counter("requests")).not.toThrow();
    expect(() => metrics.gauge("temperature", 22)).not.toThrow();
    expect(() => metrics.timing("duration", 120)).not.toThrow();
    expect(() => metrics.histogram("size", 42)).not.toThrow();
  });

  it("factory returns independent no-op client", () => {
    const client = createMetricsClient();
    expect(() =>
      client.counter("requests", { endpoint: "/health" }),
    ).not.toThrow();
    expect(() =>
      client.gauge("temperature", 22, { unit: "celsius" }),
    ).not.toThrow();
    expect(() =>
      client.timing("duration", 120, { path: "/ready" }),
    ).not.toThrow();
    expect(() =>
      client.histogram("size", 42, { bucket: "small" }),
    ).not.toThrow();
  });
});
