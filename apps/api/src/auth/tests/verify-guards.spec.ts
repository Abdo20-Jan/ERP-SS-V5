import { execFileSync } from "node:child_process";
import path from "node:path";
import { describe, expect, it } from "vitest";

const ROOT = path.resolve(__dirname, "../../../../../");
const SCRIPT = path.join(ROOT, "scripts/validate-guards.py");

describe("verify-guards script (MS-01-SS9)", () => {
  it("reports zero gaps for Party/Product/Accounting controllers", () => {
    const out = execFileSync("python3", [SCRIPT], {
      cwd: ROOT,
      encoding: "utf8",
    });
    expect(out).toMatch(/All \d+ endpoints have guards and permissions/);
    expect(out).toMatch(/✅/);
  });
});
