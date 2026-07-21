import { describe, expect, it } from "vitest";
import {
  Account,
  AccountNature,
  AccountType,
  InvalidAccountTypeError,
  InvalidHierarchyError,
  SystemAccountError,
  generateEntityId,
} from "../../src";

const coaId = () => generateEntityId();

describe("Account aggregate", () => {
  it("creates ASSET + DEBITOR", () => {
    const a = Account.create({
      coaId: coaId(),
      code: "1",
      name: "ATIVO",
      type: AccountType.ASSET,
      nature: AccountNature.DEBITOR,
      isSystem: true,
    });
    expect(a.level).toBe(1);
    expect(a.pullEvents().map((e) => e.type)).toContain("AccountCreated");
  });

  it("rejects ASSET + CREDITOR", () => {
    expect(() =>
      Account.create({
        coaId: coaId(),
        code: "1",
        name: "X",
        type: AccountType.ASSET,
        nature: AccountNature.CREDITOR,
      }),
    ).toThrow(InvalidAccountTypeError);
  });

  it("creates EQUITY + CREDITOR", () => {
    const a = Account.create({
      coaId: coaId(),
      code: "3",
      name: "PL",
      type: AccountType.EQUITY,
      nature: AccountNature.CREDITOR,
    });
    expect(a.type).toBe(AccountType.EQUITY);
  });

  it("rejects EQUITY + DEBITOR", () => {
    expect(() =>
      Account.create({
        coaId: coaId(),
        code: "3",
        name: "X",
        type: AccountType.EQUITY,
        nature: AccountNature.DEBITOR,
      }),
    ).toThrow(InvalidAccountTypeError);
  });

  it("creates REVENUE + CREDITOR", () => {
    Account.create({
      coaId: coaId(),
      code: "4",
      name: "REC",
      type: AccountType.REVENUE,
      nature: AccountNature.CREDITOR,
    });
  });

  it("creates EXPENSE + DEBITOR", () => {
    Account.create({
      coaId: coaId(),
      code: "5",
      name: "DESP",
      type: AccountType.EXPENSE,
      nature: AccountNature.DEBITOR,
    });
  });

  it("level 1 without parent OK", () => {
    const a = Account.create({
      coaId: coaId(),
      code: "1",
      name: "A",
      type: AccountType.ASSET,
      nature: AccountNature.DEBITOR,
    });
    expect(a.parentId).toBeNull();
  });

  it("level 1 with parent fails", () => {
    expect(() =>
      Account.create({
        coaId: coaId(),
        code: "1.01",
        name: "X",
        type: AccountType.ASSET,
        nature: AccountNature.DEBITOR,
        parentId: generateEntityId(),
        parentCode: "1",
        parentLevel: 0,
      }),
    ).toThrow(InvalidHierarchyError);
  });

  it("parent without parentLevel fails", () => {
    expect(() =>
      Account.create({
        coaId: coaId(),
        code: "1.01",
        name: "X",
        type: AccountType.ASSET,
        nature: AccountNature.DEBITOR,
        parentId: generateEntityId(),
        parentCode: "1",
      }),
    ).toThrow(InvalidHierarchyError);
  });

  it("isSystem level 2 fails", () => {
    expect(() =>
      Account.create({
        coaId: coaId(),
        code: "1.01",
        name: "X",
        type: AccountType.ASSET,
        nature: AccountNature.DEBITOR,
        parentId: generateEntityId(),
        parentCode: "1",
        parentLevel: 1,
        isSystem: true,
      }),
    ).toThrow(InvalidHierarchyError);
  });

  it("createChild inherits type/nature and prefixes code", () => {
    const parent = Account.create({
      coaId: coaId(),
      code: "1",
      name: "ATIVO",
      type: AccountType.ASSET,
      nature: AccountNature.DEBITOR,
      isSystem: true,
    });
    const child = parent.createChild("01", "Circulante");
    expect(child.code).toBe("1.01");
    expect(child.level).toBe(2);
    expect(child.parentId).toBe(parent.id);
    expect(child.isSystem).toBe(false);
  });

  it("blocks delete of system account", () => {
    const a = Account.create({
      coaId: coaId(),
      code: "1",
      name: "ATIVO",
      type: AccountType.ASSET,
      nature: AccountNature.DEBITOR,
      isSystem: true,
    });
    expect(() => a.assertCanDelete(false, false)).toThrow(SystemAccountError);
  });
});
