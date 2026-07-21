import { describe, expect, it } from "vitest";
import {
  Document,
  DocumentType,
  InvalidCuitError,
  isValidCuitMod11,
  normalizeTaxId,
} from "../../src";

describe("Document / CUIT mod-11", () => {
  it("creates valid CUIT and sets validatedAt", () => {
    const doc = new Document({
      type: DocumentType.CUIT,
      value: "20-12345678-6",
      isPrimary: true,
    });
    expect(doc.value).toBe("20123456786");
    expect(doc.type).toBe("CUIT");
    expect(doc.validatedAt).toBeInstanceOf(Date);
    expect(isValidCuitMod11(doc.value)).toBe(true);
  });

  it("rejects invalid CUIT check digit", () => {
    expect(
      () =>
        new Document({
          type: DocumentType.CUIT,
          value: "20-12345678-0",
        }),
    ).toThrow(InvalidCuitError);
  });

  it("normalizes punctuated CUIT to digits", () => {
    expect(normalizeTaxId("20-12345678-6")).toBe("20123456786");
    const doc = new Document({ type: "CUIT", value: "20-12345678-6" });
    expect(doc.value).toBe("20123456786");
  });

  it("accepts valid CUIL", () => {
    const doc = new Document({ type: DocumentType.CUIL, value: "20123456786" });
    expect(doc.type).toBe("CUIL");
    expect(doc.value).toBe("20123456786");
  });

  it("accepts DNI without mod-11", () => {
    const doc = new Document({ type: DocumentType.DNI, value: "30111222" });
    expect(doc.value).toBe("30111222");
    expect(doc.validatedAt).toBeNull();
  });

  it("defaults isPrimary to false", () => {
    const doc = new Document({ type: DocumentType.DNI, value: "123" });
    expect(doc.isPrimary).toBe(false);
  });

  it("accepts isPrimary true", () => {
    const doc = new Document({
      type: DocumentType.CUIT,
      value: "20123456786",
      isPrimary: true,
    });
    expect(doc.isPrimary).toBe(true);
  });

  it("allows multiple documents in a list", () => {
    const docs = [
      new Document({ type: "CUIT", value: "20123456786", isPrimary: true }),
      new Document({ type: "DNI", value: "30111222" }),
    ];
    expect(docs).toHaveLength(2);
  });
});
