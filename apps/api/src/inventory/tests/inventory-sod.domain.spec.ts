import { describe, expect, it } from "vitest";
import {
  SoDRule,
  SoDViolation,
  SoDException,
  SoDEvaluator,
  SoDEvaluationResult,
  SoDExceptionStatus,
  SoDApprovalNotAllowedError,
} from "@sunset/domain";

describe("SoD Domain", () => {
  it("evaluates allowed when no rules match", () => {
    const outcome = SoDEvaluator.evaluate({
      actorUserId: "u1", action: "test", resourceType: "wh", resourceId: "w1",
      actorRoles: [], actorPermissions: [], organizationId: "org1",
    }, []);
    expect(outcome.result).toBe(SoDEvaluationResult.ALLOWED);
  });

  it("evaluates blocked when rule matches and no approval required", () => {
    const rule = SoDRule.create({
      code: "R1", name: "Rule 1", action: "test", resourceType: "wh",
      incompatiblePermission: "other:write", severity: "HIGH", organizationId: "org1",
    });
    const outcome = SoDEvaluator.evaluate({
      actorUserId: "u1", action: "test", resourceType: "wh", resourceId: "w1",
      actorRoles: [], actorPermissions: ["other:write"], organizationId: "org1",
    }, [rule.toSnapshot() as any]);
    expect(outcome.result).toBe(SoDEvaluationResult.BLOCKED);
  });

  it("evaluates approval required when rule matches and approval required", () => {
    const rule = SoDRule.create({
      code: "R1", name: "Rule 1", action: "test", resourceType: "wh",
      incompatiblePermission: "other:write", requiresIndependentApproval: true,
      severity: "HIGH", organizationId: "org1",
    });
    const outcome = SoDEvaluator.evaluate({
      actorUserId: "u1", action: "test", resourceType: "wh", resourceId: "w1",
      actorRoles: [], actorPermissions: ["other:write"], organizationId: "org1",
    }, [rule.toSnapshot() as any]);
    expect(outcome.result).toBe(SoDEvaluationResult.APPROVAL_REQUIRED);
  });

  it("exception approval prevents self-approval", () => {
    const exc = SoDException.request({
      violationId: "v1", requestedByUserId: "u1", reason: "valid reason for exception",
    }, "org1");
    expect(() => exc.approve({ exceptionId: exc.id, approvedByUserId: "u1", reason: "valid reason for approval" }))
      .toThrow(SoDApprovalNotAllowedError);
    exc.approve({ exceptionId: exc.id, approvedByUserId: "u2", reason: "valid reason for approval" });
    expect(exc.status).toBe(SoDExceptionStatus.APPROVED);
  });
});
