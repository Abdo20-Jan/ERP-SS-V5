import { describe, expect, it } from "vitest";
import {
  generateCorrelationId,
  getCorrelationId,
  runWithCorrelationId,
} from "../src/correlation-context";

describe("correlation-context", () => {
  it("returns undefined when outside of a correlation context", () => {
    expect(getCorrelationId()).toBeUndefined();
  });

  it("exposes the correlation id inside runWithCorrelationId", () => {
    runWithCorrelationId("cid-123", () => {
      expect(getCorrelationId()).toBe("cid-123");
    });
  });

  it("isolates nested contexts", () => {
    runWithCorrelationId("outer", () => {
      expect(getCorrelationId()).toBe("outer");
      runWithCorrelationId("inner", () => {
        expect(getCorrelationId()).toBe("inner");
      });
      expect(getCorrelationId()).toBe("outer");
    });
  });

  it("generates a uuid correlation id", () => {
    const id = generateCorrelationId();
    expect(typeof id).toBe("string");
    expect(id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
    );
  });
});
