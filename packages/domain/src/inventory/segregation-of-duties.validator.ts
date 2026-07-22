import { SoDValidationError } from "../common/errors";
import { isSoDSeverity, SOD_REASON_MIN_LENGTH } from "./segregation-of-duties.enums";

export function validateSoDCode(code: string): string {
  const trimmed = code?.trim() ?? "";
  if (trimmed.length < 2) {
    throw new SoDValidationError("SoD rule code must be at least 2 characters", {
      code,
    });
  }
  return trimmed;
}

export function validateSoDName(name: string): string {
  const trimmed = name?.trim() ?? "";
  if (trimmed.length < 3) {
    throw new SoDValidationError("SoD rule name must be at least 3 characters", {
      name,
    });
  }
  return trimmed;
}

export function validateSoDAction(action: string): string {
  const trimmed = action?.trim() ?? "";
  if (!trimmed) {
    throw new SoDValidationError("action is required");
  }
  return trimmed;
}

export function validateSoDResourceType(resourceType: string): string {
  const trimmed = resourceType?.trim() ?? "";
  if (!trimmed) {
    throw new SoDValidationError("resourceType is required");
  }
  return trimmed;
}

export function validateSoDSeverity(severity: string): string {
  if (!isSoDSeverity(severity)) {
    throw new SoDValidationError(`Invalid SoD severity: ${severity}`, {
      severity,
    });
  }
  return severity;
}

export function validateSoDReason(reason: string, field = "reason"): string {
  const trimmed = reason?.trim() ?? "";
  if (trimmed.length < SOD_REASON_MIN_LENGTH) {
    throw new SoDValidationError(
      `${field} must be at least ${SOD_REASON_MIN_LENGTH} characters`,
      { field, minLength: SOD_REASON_MIN_LENGTH, actualLength: trimmed.length },
    );
  }
  return trimmed;
}

export function validateActorId(actorId: string, field = "actorId"): string {
  const trimmed = actorId?.trim() ?? "";
  if (!trimmed) {
    throw new SoDValidationError(`${field} is required`);
  }
  return trimmed;
}

export function validateResourceId(resourceId: string): string {
  const trimmed = resourceId?.trim() ?? "";
  if (!trimmed) {
    throw new SoDValidationError("resourceId is required");
  }
  return trimmed;
}

export function optionalString(value?: string | null): string | null {
  if (value == null || value.trim() === "") return null;
  return value.trim();
}

export function normalizeStringArray(values: string[]): string[] {
  return (values ?? []).map((v) => v?.trim()).filter((v): v is string => !!v);
}

export function permissionMatchesAction(
  permission: string,
  action: string,
): boolean {
  if (!permission || !action) return false;
  if (permission === action) return true;
  if (permission.endsWith(`:${action}`)) return true;
  if (permission.includes(`:${action}:`)) return true;
  return false;
}
