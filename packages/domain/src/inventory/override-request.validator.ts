import { OverrideValidationError } from "../common/errors";
import {
  isOverrideAction,
  isOverrideRequestContext,
  isOverrideResourceType,
  OVERRIDE_REASON_MIN_LENGTH,
  OverrideAction,
  OverrideRequestContext,
  OverrideResourceType,
} from "./override-request.enums";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const ACTION_RESOURCE_PAIRS: Readonly<
  Record<
    OverrideRequestContext,
    ReadonlyArray<readonly [OverrideAction, OverrideResourceType]>
  >
> = {
  [OverrideRequestContext.INVENTORY]: [
    [OverrideAction.DEACTIVATE_WAREHOUSE, OverrideResourceType.WAREHOUSE],
    [OverrideAction.DEACTIVATE_LOCATION, OverrideResourceType.LOCATION],
    [OverrideAction.RECONFIGURE_LEVELS, OverrideResourceType.LOCATION_CONFIG],
  ],
  [OverrideRequestContext.COMEX]: [
    [
      OverrideAction.READY_TO_SHIP_PARTIAL,
      OverrideResourceType.INTERNATIONAL_ORDER,
    ],
  ],
};

export function validateOverrideReason(reason: string): string {
  const trimmed = reason?.trim() ?? "";
  if (trimmed.length < OVERRIDE_REASON_MIN_LENGTH) {
    throw new OverrideValidationError(
      `Override reason must be at least ${OVERRIDE_REASON_MIN_LENGTH} characters`,
      { minLength: OVERRIDE_REASON_MIN_LENGTH, actualLength: trimmed.length },
    );
  }
  return trimmed;
}

export function validateOverrideAction(action: string): OverrideAction {
  if (!isOverrideAction(action)) {
    throw new OverrideValidationError(`Invalid override action: ${action}`, {
      action,
    });
  }
  return action;
}

export function validateOverrideResourceType(
  resourceType: string,
): OverrideResourceType {
  if (!isOverrideResourceType(resourceType)) {
    throw new OverrideValidationError(
      `Invalid override resourceType: ${resourceType}`,
      { resourceType },
    );
  }
  return resourceType;
}

export function validateResourceId(resourceId: string): string {
  const id = resourceId?.trim() ?? "";
  if (!id) {
    throw new OverrideValidationError("resourceId is required");
  }
  return id;
}

export function validateActorId(actorId: string, field = "actorId"): string {
  const id = actorId?.trim() ?? "";
  if (!id) {
    throw new OverrideValidationError(`${field} is required`);
  }
  return id;
}

export function validateActionResourcePair(
  action: OverrideAction,
  resourceType: OverrideResourceType,
  context: OverrideRequestContext = OverrideRequestContext.INVENTORY,
): void {
  const contextValue = String(context);
  if (!isOverrideRequestContext(contextValue)) {
    throw new OverrideValidationError(
      `Invalid override request context: ${contextValue}`,
      { context: contextValue },
    );
  }

  const isAllowed = ACTION_RESOURCE_PAIRS[contextValue].some(
    ([allowedAction, allowedResourceType]) =>
      action === allowedAction && resourceType === allowedResourceType,
  );

  if (!isAllowed) {
    throw new OverrideValidationError(
      `action ${action} is not valid for resourceType ${resourceType} in context ${contextValue}`,
      { action, resourceType, context: contextValue },
    );
  }
}

export function optionalEvidenceUrl(url?: string | null): string | null {
  if (url == null || url.trim() === "") return null;
  return url.trim();
}

export function looksLikeUuid(id: string): boolean {
  return UUID_RE.test(id);
}
