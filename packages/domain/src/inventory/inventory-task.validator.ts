import { InventoryTaskValidationError } from "../common/errors";
import {
  INVENTORY_TASK_REASON_MIN_LENGTH,
  InventoryTaskPriority,
  InventoryTaskSourceType,
  InventoryTaskStatus,
  isInventoryTaskPriority,
  isInventoryTaskSourceType,
  isInventoryTaskStatus,
} from "./inventory-task.enums";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function validateTaskType(type: string): string {
  const t = type?.trim() ?? "";
  if (!t) {
    throw new InventoryTaskValidationError("type is required");
  }
  if (t.length > 64) {
    throw new InventoryTaskValidationError("type must be at most 64 characters", {
      actualLength: t.length,
    });
  }
  return t;
}

export function validateTaskTitle(title: string): string {
  const t = title?.trim() ?? "";
  if (!t) {
    throw new InventoryTaskValidationError("title is required");
  }
  if (t.length > 240) {
    throw new InventoryTaskValidationError("title must be at most 240 characters", {
      actualLength: t.length,
    });
  }
  return t;
}

export function optionalDescription(description?: string | null): string | null {
  if (description == null || description.trim() === "") return null;
  return description.trim();
}

export function validateTaskPriority(value?: string | null): InventoryTaskPriority {
  if (value == null || value.trim() === "") return InventoryTaskPriority.MEDIUM;
  if (!isInventoryTaskPriority(value)) {
    throw new InventoryTaskValidationError(`Invalid priority: ${value}`, {
      priority: value,
    });
  }
  return value;
}

export function validateTaskSourceType(value: string): InventoryTaskSourceType {
  if (!isInventoryTaskSourceType(value)) {
    throw new InventoryTaskValidationError(`Invalid sourceType: ${value}`, {
      sourceType: value,
    });
  }
  return value;
}

export function validateOptionalUuid(
  value: string | null | undefined,
  field: string,
): string | null {
  if (value == null || value.trim() === "") return null;
  const id = value.trim();
  if (!UUID_RE.test(id)) {
    throw new InventoryTaskValidationError(`${field} must be a UUID`, { field, value: id });
  }
  return id;
}

export function validateSourcePair(
  sourceType: InventoryTaskSourceType,
  sourceId: string | null,
): void {
  if (sourceType === InventoryTaskSourceType.MANUAL) {
    return;
  }
  if (!sourceId) {
    throw new InventoryTaskValidationError(
      `sourceId is required when sourceType is ${sourceType}`,
      { sourceType },
    );
  }
}

export function validateReason(reason: string, field = "reason"): string {
  const trimmed = reason?.trim() ?? "";
  if (trimmed.length < INVENTORY_TASK_REASON_MIN_LENGTH) {
    throw new InventoryTaskValidationError(`${field} is required`, {
      field,
      minLength: INVENTORY_TASK_REASON_MIN_LENGTH,
    });
  }
  return trimmed;
}

export function optionalReason(reason?: string | null): string | null {
  if (reason == null || reason.trim() === "") return null;
  return reason.trim();
}

export function validateOptionalSlaMinutes(value?: number | null): number | null {
  if (value == null) return null;
  if (!Number.isInteger(value) || value < 1) {
    throw new InventoryTaskValidationError("slaMinutes must be a positive integer", {
      slaMinutes: value,
    });
  }
  return value;
}

export function parseOptionalDueAt(value?: string | Date | null): Date | null {
  if (value == null || value === "") return null;
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) {
    throw new InventoryTaskValidationError("dueAt is invalid", { dueAt: String(value) });
  }
  return d;
}

export function validateUnblockTarget(
  value?: string | null,
): InventoryTaskStatus.OPEN | InventoryTaskStatus.IN_PROGRESS {
  if (value == null || value.trim() === "") {
    return InventoryTaskStatus.IN_PROGRESS;
  }
  if (
    value !== InventoryTaskStatus.OPEN &&
    value !== InventoryTaskStatus.IN_PROGRESS
  ) {
    throw new InventoryTaskValidationError(
      "unblock targetStatus must be OPEN or IN_PROGRESS",
      { targetStatus: value },
    );
  }
  return value;
}

export function validateDependencyType(value: string): string {
  const t = value?.trim() ?? "";
  if (!t) {
    throw new InventoryTaskValidationError("dependencyType is required");
  }
  return t;
}

export function isInventoryTaskStatusValue(value: string): boolean {
  return isInventoryTaskStatus(value);
}

