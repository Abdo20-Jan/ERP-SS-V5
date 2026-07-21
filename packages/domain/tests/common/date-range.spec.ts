import { describe, expect, it } from "vitest";
import { DateRange, InvalidDateRangeError } from "../../src";

describe("DateRange", () => {
  const from = new Date("2026-01-01T00:00:00.000Z");
  const until = new Date("2026-12-31T23:59:59.999Z");

  it("accepts normal range validFrom < validUntil", () => {
    const range = new DateRange(from, until);
    expect(range.isValid).toBe(true);
    expect(range.validFrom.toISOString()).toBe(from.toISOString());
    expect(range.validUntil?.toISOString()).toBe(until.toISOString());
  });

  it("throws when validFrom > validUntil", () => {
    expect(() => new DateRange(until, from)).toThrow(InvalidDateRangeError);
  });

  it("contains date inside range", () => {
    const range = new DateRange(from, until);
    expect(range.contains(new Date("2026-06-15T12:00:00.000Z"))).toBe(true);
  });

  it("does not contain date before validFrom", () => {
    const range = new DateRange(from, until);
    expect(range.contains(new Date("2025-12-31T23:59:59.000Z"))).toBe(false);
  });

  it("does not contain date after validUntil", () => {
    const range = new DateRange(from, until);
    expect(range.contains(new Date("2027-01-01T00:00:00.000Z"))).toBe(false);
  });

  it("isInfinite when validUntil is omitted", () => {
    const range = new DateRange(from);
    expect(range.isInfinite).toBe(true);
    expect(range.contains(new Date("2099-01-01T00:00:00.000Z"))).toBe(true);
  });

  it("detects overlapping ranges", () => {
    const a = new DateRange(
      new Date("2026-01-01T00:00:00.000Z"),
      new Date("2026-06-30T00:00:00.000Z"),
    );
    const b = new DateRange(
      new Date("2026-06-01T00:00:00.000Z"),
      new Date("2026-12-31T00:00:00.000Z"),
    );
    expect(a.overlaps(b)).toBe(true);
  });

  it("detects disjoint ranges", () => {
    const a = new DateRange(
      new Date("2026-01-01T00:00:00.000Z"),
      new Date("2026-03-31T00:00:00.000Z"),
    );
    const b = new DateRange(
      new Date("2026-04-01T00:00:00.000Z"),
      new Date("2026-06-30T00:00:00.000Z"),
    );
    expect(a.overlaps(b)).toBe(false);
  });
});
