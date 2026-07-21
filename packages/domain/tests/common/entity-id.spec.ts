import { describe, expect, it } from "vitest";
import {
  createEntityId,
  generateEntityId,
  isEntityId,
  InvalidEntityIdError,
} from "../../src";

describe("EntityId", () => {
  it("generateEntityId returns a UUIDv7 string", () => {
    const id = generateEntityId();
    expect(typeof id).toBe("string");
    expect(isEntityId(id)).toBe(true);
    // version nibble
    expect(id[14]).toBe("7");
  });

  it("createEntityId accepts a valid UUIDv7", () => {
    const raw = generateEntityId();
    const id = createEntityId(raw);
    expect(id).toBe(raw.toLowerCase());
  });

  it("createEntityId('abc') throws DomainError", () => {
    expect(() => createEntityId("abc")).toThrow(InvalidEntityIdError);
  });

  it("isEntityId(valid) is true", () => {
    expect(isEntityId(generateEntityId())).toBe(true);
  });

  it("isEntityId('abc') is false", () => {
    expect(isEntityId("abc")).toBe(false);
  });
});
