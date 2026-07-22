export enum VirtualLocationType {
  TRANSIT = "TRANSIT",
  PORT = "PORT",
}

export function isVirtualLocationType(
  value: string,
): value is VirtualLocationType {
  return Object.values(VirtualLocationType).includes(
    value as VirtualLocationType,
  );
}

export function defaultVirtualCode(type: VirtualLocationType): string {
  switch (type) {
    case VirtualLocationType.TRANSIT:
      return "V-TRANSIT";
    case VirtualLocationType.PORT:
      return "V-PORT";
    default: {
      const _exhaustive: never = type;
      return _exhaustive;
    }
  }
}
