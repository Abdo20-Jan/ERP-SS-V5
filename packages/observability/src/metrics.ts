import type { MetricLabels } from "./types";

export interface MetricsClient {
  counter(name: string, labels?: MetricLabels): void;
  gauge(name: string, value: number, labels?: MetricLabels): void;
  timing(name: string, durationMs: number, labels?: MetricLabels): void;
  histogram(name: string, value: number, labels?: MetricLabels): void;
}

class NoOpMetricsClient implements MetricsClient {
  counter(_name: string, _labels?: MetricLabels): void {
    // stub: real implementation will push to metrics backend
  }

  gauge(_name: string, _value: number, _labels?: MetricLabels): void {
    // stub
  }

  timing(_name: string, _durationMs: number, _labels?: MetricLabels): void {
    // stub
  }

  histogram(_name: string, _value: number, _labels?: MetricLabels): void {
    // stub
  }
}

export const metrics: MetricsClient = new NoOpMetricsClient();

export function createMetricsClient(): MetricsClient {
  return new NoOpMetricsClient();
}
