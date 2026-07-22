import type { EvaluateSoDCommand } from "./segregation-of-duties.commands";
import { SoDEvaluationResult } from "./segregation-of-duties.enums";
import type { SoDRuleSnapshot } from "./segregation-of-duties-rule.aggregate";
import { permissionMatchesAction } from "./segregation-of-duties.validator";

export interface SoDEvaluationOutcome {
  result: SoDEvaluationResult;
  matchedRules: SoDRuleSnapshot[];
}

export class SoDEvaluator {
  static evaluate(
    cmd: EvaluateSoDCommand,
    activeRules: SoDRuleSnapshot[],
  ): SoDEvaluationOutcome {
    const matchedRules: SoDRuleSnapshot[] = [];
    let requiresApproval = false;

    for (const rule of activeRules) {
      if (rule.action !== cmd.action || rule.resourceType !== cmd.resourceType) {
        continue;
      }

      let isMatch = false;

      if (rule.incompatibleRole && cmd.actorRoles.includes(rule.incompatibleRole)) {
        isMatch = true;
      }

      if (rule.incompatiblePermission) {
        for (const perm of cmd.actorPermissions) {
          if (permissionMatchesAction(perm, rule.incompatiblePermission)) {
            isMatch = true;
            break;
          }
        }
      }

      if (rule.incompatibleAction) {
        for (const perm of cmd.actorPermissions) {
          if (permissionMatchesAction(perm, rule.incompatibleAction)) {
            isMatch = true;
            break;
          }
        }
      }

      if (isMatch) {
        matchedRules.push(rule);
        if (rule.requiresIndependentApproval) {
          requiresApproval = true;
        }
      }
    }

    if (matchedRules.length === 0) {
      return { result: SoDEvaluationResult.ALLOWED, matchedRules: [] };
    }

    return {
      result: requiresApproval ? SoDEvaluationResult.APPROVAL_REQUIRED : SoDEvaluationResult.BLOCKED,
      matchedRules,
    };
  }
}