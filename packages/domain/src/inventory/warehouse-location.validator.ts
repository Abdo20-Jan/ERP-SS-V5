import { LocationValidationError } from "../common/errors";
import {
  isVirtualLocationType,
  type VirtualLocationType,
} from "./virtual-location-type.enum";

export const LOCATION_MAX_LEVELS_MIN = 1;
export const LOCATION_MAX_LEVELS_MAX = 5;
export const LOCATION_PHYSICAL_LEVEL_MIN = 1;
export const LOCATION_PHYSICAL_LEVEL_MAX = 5;
export const LOCATION_VIRTUAL_LEVEL = 0;
export const LOCATION_ROOT_PARENT_KEY = "ROOT";

export function validateMaxLevels(maxLevels: number): void {
  if (
    !Number.isInteger(maxLevels) ||
    maxLevels < LOCATION_MAX_LEVELS_MIN ||
    maxLevels > LOCATION_MAX_LEVELS_MAX
  ) {
    throw new LocationValidationError(
      `maxLevels must be an integer between ${LOCATION_MAX_LEVELS_MIN} and ${LOCATION_MAX_LEVELS_MAX}`,
      { maxLevels },
    );
  }
}

export function validateLevelName(name: string, field: string): string {
  const trimmed = name.trim();
  if (!trimmed) {
    throw new LocationValidationError(`${field} is required`, { field });
  }
  return trimmed;
}

export function validateLocationCode(code: string): string {
  const trimmed = code.trim();
  if (!trimmed) {
    throw new LocationValidationError("code is required");
  }
  return trimmed;
}

export function validateLocationName(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) {
    throw new LocationValidationError("name is required");
  }
  return trimmed;
}

export function validateCapacity(capacity: number | null | undefined): number | null {
  if (capacity === undefined || capacity === null) {
    return null;
  }
  const n = Number(capacity);
  if (!Number.isFinite(n) || n < 0) {
    throw new LocationValidationError("capacity must be >= 0", { capacity });
  }
  return n;
}

export function validatePhysicalLevel(level: number): void {
  if (
    !Number.isInteger(level) ||
    level < LOCATION_PHYSICAL_LEVEL_MIN ||
    level > LOCATION_PHYSICAL_LEVEL_MAX
  ) {
    throw new LocationValidationError(
      `physical level must be an integer between ${LOCATION_PHYSICAL_LEVEL_MIN} and ${LOCATION_PHYSICAL_LEVEL_MAX}`,
      { level },
    );
  }
}

export function validateVirtualType(
  value: string | VirtualLocationType,
): VirtualLocationType {
  const str = String(value ?? "");
  if (!isVirtualLocationType(str)) {
    throw new LocationValidationError(`Invalid virtual location type: ${str}`, {
      virtualType: str,
    });
  }
  return str;
}

export function validateUseFlagsConsistent(input: {
  maxLevels: number;
  useLevel2: boolean;
  useLevel3: boolean;
  useLevel4: boolean;
  useLevel5: boolean;
}): void {
  if (input.useLevel2 && input.maxLevels < 2) {
    throw new LocationValidationError(
      "useLevel2 requires maxLevels >= 2",
      input,
    );
  }
  if (input.useLevel3 && input.maxLevels < 3) {
    throw new LocationValidationError(
      "useLevel3 requires maxLevels >= 3",
      input,
    );
  }
  if (input.useLevel4 && input.maxLevels < 4) {
    throw new LocationValidationError(
      "useLevel4 requires maxLevels >= 4",
      input,
    );
  }
  if (input.useLevel5 && input.maxLevels < 5) {
    throw new LocationValidationError(
      "useLevel5 requires maxLevels >= 5",
      input,
    );
  }
  // Higher flags require lower flags enabled when within maxLevels
  if (input.useLevel3 && !input.useLevel2) {
    throw new LocationValidationError("useLevel3 requires useLevel2", input);
  }
  if (input.useLevel4 && !input.useLevel3) {
    throw new LocationValidationError("useLevel4 requires useLevel3", input);
  }
  if (input.useLevel5 && !input.useLevel4) {
    throw new LocationValidationError("useLevel5 requires useLevel4", input);
  }
}
