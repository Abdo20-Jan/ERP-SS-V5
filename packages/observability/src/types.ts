export type CorrelationId = string;

export type LogMetadata = Record<string, unknown>;

export interface MetricLabels {
  [key: string]: string;
}
