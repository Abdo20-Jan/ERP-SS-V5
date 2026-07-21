export enum EventType {
  UNKNOWN = "UNKNOWN",
}

const VALUES = new Set<string>(Object.values(EventType));

export function isValidEventType(value: string): value is EventType {
  return VALUES.has(value);
}
