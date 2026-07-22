import type {
  CreateSoDRuleCommand,
  UpdateSoDRuleCommand,
  DeactivateSoDRuleCommand,
  EvaluateSoDCommand,
  ResolveSoDViolationCommand,
  RequestSoDExceptionCommand,
  ApproveSoDExceptionCommand,
  RejectSoDExceptionCommand,
  RevokeSoDExceptionCommand,
} from "@sunset/contracts";

export type CreateSoDRuleDto = CreateSoDRuleCommand;
export type UpdateSoDRuleDto = Omit<UpdateSoDRuleCommand, "ruleId">;
export type DeactivateSoDRuleDto = Omit<DeactivateSoDRuleCommand, "ruleId">;
export type EvaluateSoDDto = Omit<EvaluateSoDCommand, "actorUserId" | "actorRoles" | "actorPermissions">;
export type ResolveSoDViolationDto = Omit<ResolveSoDViolationCommand, "violationId" | "resolvedByUserId">;
export type RequestSoDExceptionDto = Omit<RequestSoDExceptionCommand, "violationId" | "requestedByUserId">;
export type ApproveSoDExceptionDto = Omit<ApproveSoDExceptionCommand, "exceptionId" | "approvedByUserId">;
export type RejectSoDExceptionDto = Omit<RejectSoDExceptionCommand, "exceptionId" | "rejectedByUserId">;
export type RevokeSoDExceptionDto = Omit<RevokeSoDExceptionCommand, "exceptionId" | "revokedByUserId">;
