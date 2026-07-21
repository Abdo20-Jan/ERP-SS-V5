import { describe, expect, it } from "vitest";
import { InvalidJournalTypeError, Journal, JournalType } from "../../src";

describe("Journal", () => {
  it("creates GENERAL with nextSequence 1", () => {
    const j = Journal.create({
      code: "01",
      name: "Diário Geral",
      type: JournalType.GENERAL,
    });
    expect(j.type).toBe("GENERAL");
    expect(j.nextSequence).toBe(1);
    expect(j.formatEntryNumber(1)).toBe("01-000001");
  });

  it("rejects unknown type", () => {
    expect(() =>
      Journal.create({ code: "X", name: "X", type: "FUTURE" }),
    ).toThrow(InvalidJournalTypeError);
  });

  it("allocateSequence increments", () => {
    const j = Journal.create({
      code: "02",
      name: "Vendas",
      type: "SALES",
    });
    const a = j.allocateSequence();
    expect(a.entryNumber).toBe("02-000001");
    const b = j.allocateSequence();
    expect(b.entryNumber).toBe("02-000002");
    expect(j.nextSequence).toBe(3);
  });
});
