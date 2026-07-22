export type SoDDomainEventType =
  | "SoDRuleCreated"
  | "SoDRuleUpdated"
  | "SoDRuleDeactivated"
  | "SoDViolationDetected"
  | "SoDViolationResolved"
  | "SoDExceptionRequested"
  | "SoDExceptionApproved"
  | "SoDExceptionRejected"
  | "SoDExceptionRevoked"
  | "SoDExceptionExpired";

export interface SoDDomainEvent {
  type: SoDDomainEventType;
  aggregateId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

function base(
  type: SoDDomainEventType,
  aggregateId: string,
  payload?: Record<string, unknown>,
): SoDDomainEvent {
  return { type, aggregateId, occurredAt: new Date().toISOString(), payload };
}

export function soDRuleCreatedEvent(
  ruleId: string,
  payload: Record<string, unknown>,
): SoDDomainEvent {
  return base("SoDRuleCreated", ruleId, payload);
}

export function soDRuleUpdatedEvent(
  ruleId: string,
  payload: Record<string, unknown>,
): SoDDomainEvent {
  return base("SoDRuleUpdated", ruleId, payload);
}

export function soDRuleDeactivatedEvent(
  ruleId: string,
  payload?: Record<string, unknown>,
): SoDDomainEvent {
  return base("SoDRuleDeactivated", ruleId, payload);
}

export function soDViolationDetectedEvent(
  violationId: string,
  payload: Record<string, unknown>,
): SoDDomainEvent {
  return base("SoDViolationDetected", violationId, payload);
}

export function soDViolationResolvedEvent(
  violationId: string,
  payload: Record<string, unknown>,
): SoDDomainEvent {
  return base("SoDViolationResolved", violationId, payload);
}

export function soDExceptionRequestedEvent(
  exceptionId: string,
  payload: Record<string, unknown>,
): SoDDomainEvent {
  return base("SoDExceptionRequested", exceptionId, payload);
}

export function soDExceptionApprovedEvent(
  exceptionId: string,
  payload: Record<string, unknown>,
): SoDDomainEvent {
  return base("SoDExceptionApproved", exceptionId, payload);
}

export function soDExceptionRejectedEvent(
  exceptionId: string,
  payload: Record<string, unknown>,
): SoDDomainEvent {
  return base("SoDExceptionRejected", exceptionId, payload);
}

export function soDExceptionRevokedEvent(
  exceptionId: string,
  payload: Record<string, unknown>,
): SoDDomainEvent {
  return base("SoDExceptionRevoked", exceptionId, payload);
}

export function soDExceptionExpiredEvent(
  exceptionId: string,
  payload?: Record<string, unknown>,
): SoDDomainEvent {
  return base("SoDExceptionExpired", exceptionId, payload);
}
