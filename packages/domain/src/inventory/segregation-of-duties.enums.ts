export enum SoDSeverity {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  CRITICAL = "CRITICAL",
}

const SEVERITIES = Object.values(SoDSeverity);

export function isSoDSeverity(value: string): value is SoDSeverity {
  return SEVERITIES.includes(value as SoDSeverity);
}

export enum SoDEvaluationResult {
  ALLOWED = "ALLOWED",
  BLOCKED = "BLOCKED",
  APPROVAL_REQUIRED = "APPROVAL_REQUIRED",
}

const EVALUATION_RESULTS = Object.values(SoDEvaluationResult);

export function isSoDEvaluationResult(value: string): value is SoDEvaluationResult {
  return EVALUATION_RESULTS.includes(value as SoDEvaluationResult);
}

export enum SoDViolationStatus {
  OPEN = "OPEN",
  RESOLVED = "RESOLVED",
}

const VIOLATION_STATUSES = Object.values(SoDViolationStatus);

export function isSoDViolationStatus(value: string): value is SoDViolationStatus {
  return VIOLATION_STATUSES.includes(value as SoDViolationStatus);
}

export enum SoDExceptionStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  REVOKED = "REVOKED",
  EXPIRED = "EXPIRED",
}

const EXCEPTION_STATUSES = Object.values(SoDExceptionStatus);

export function isSoDExceptionStatus(value: string): value is SoDExceptionStatus {
  return EXCEPTION_STATUSES.includes(value as SoDExceptionStatus);
}

export const SOD_REASON_MIN_LENGTH = 10;
