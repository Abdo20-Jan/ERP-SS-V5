import { describe, expect, it } from "vitest";
import { EventType, isValidEventType } from "../../src";

describe("EventType", () => {
  it("EventType.UNKNOWN equals 'UNKNOWN'", () => {
    expect(EventType.UNKNOWN).toBe("UNKNOWN");
  });

  it("isValidEventType('UNKNOWN') is true", () => {
    expect(isValidEventType("UNKNOWN")).toBe(true);
  });

  it("isValidEventType('FAKE') is false", () => {
    expect(isValidEventType("FAKE")).toBe(false);
  });
});
