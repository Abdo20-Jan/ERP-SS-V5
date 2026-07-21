import { uuidv7 } from "uuidv7";
import { InvalidEntityIdError } from "./errors";

export type EntityId = string & { readonly __brand: "EntityId" };

/** UUIDv7: version nibble = 7, variant RFC 4122. */
const UUID_V7_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isEntityId(value: string): value is EntityId {
  return typeof value === "string" && UUID_V7_RE.test(value);
}

export function createEntityId(id: string): EntityId {
  if (!isEntityId(id)) {
    throw new InvalidEntityIdError(
      `Invalid EntityId: expected UUIDv7, got '${id}'`,
      { id },
    );
  }
  return id.toLowerCase() as EntityId;
}

export function generateEntityId(): EntityId {
  return createEntityId(uuidv7());
}
