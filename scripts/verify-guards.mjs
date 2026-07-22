#!/usr/bin/env node
/**
 * MS-01-SS9 — verify that secured API controllers declare JwtAuthGuard,
 * PermissionsGuard, and @RequirePermission on every HTTP handler.
 *
 * Usage: node scripts/verify-guards.mjs
 * Exit 0 when all in-scope endpoints pass; 1 on gaps.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const API_SRC = path.join(ROOT, "apps/api/src");

/** Controllers in SS9 scope (Party, Product, Accounting). */
const SCOPE_GLOBS = [
  "party/party.controller.ts",
  "product/product.controller.ts",
  "product/product-category.controller.ts",
  "accounting/chart-of-accounts.controller.ts",
  "accounting/currency.controller.ts",
  "accounting/dimension.controller.ts",
  "accounting/ledger.controller.ts",
  "accounting/posting-rule.controller.ts",
  "inventory/warehouse.controller.ts",
  "inventory/location.controller.ts",
  "inventory/override.controller.ts",
  "inventory/inventory-document.controller.ts",
  "inventory/inventory-detail.controller.ts",
];

const HTTP_DECORATORS = ["Get", "Post", "Patch", "Put", "Delete"];
const WRITE_DECORATORS = new Set(["Post", "Patch", "Put", "Delete"]);

function read(file) {
  return fs.readFileSync(file, "utf8");
}

/**
 * Strip block and line comments (naive but enough for decorator scan).
 */
function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");
}

function findClassGuards(src) {
  // @UseGuards(...) immediately before export class XController
  const m = src.match(
    /@UseGuards\(([^)]+)\)\s*(?:@\w+\([^)]*\)\s*)*export\s+class\s+(\w+)/,
  );
  if (!m) return null;
  return {
    className: m[2],
    guardsRaw: m[1],
    hasJwt: /\bJwtAuthGuard\b/.test(m[1]),
    hasPermissions: /\bPermissionsGuard\b/.test(m[1]),
  };
}

/**
 * Extract HTTP handlers: decorator + method name + nearby RequirePermission.
 */
function findHandlers(src) {
  const handlers = [];
  // Match sequences of decorators ending in async methodName(
  const re =
    /((?:@(?:Get|Post|Patch|Put|Delete|HttpCode|RequirePermission)\b[^\n]*\n\s*)+)async\s+(\w+)\s*\(/g;
  let match = re.exec(src);
  while (match) {
    const block = match[1];
    const methodName = match[2];
    const http = [];
    for (const d of HTTP_DECORATORS) {
      const dm = block.match(new RegExp(`@${d}\\(([^)]*)\\)`));
      if (dm) {
        http.push({ decorator: d, pathArg: dm[1].trim() });
      }
    }
    if (http.length === 0) {
      match = re.exec(src);
      continue;
    }
    const permMatch = block.match(
      /@RequirePermission\(\s*["']([^"']+)["']\s*\)/,
    );
    const isWrite = http.some((h) => WRITE_DECORATORS.has(h.decorator));
    handlers.push({
      methodName,
      http,
      permission: permMatch?.[1] ?? null,
      isWrite,
    });
    match = re.exec(src);
  }
  return handlers;
}

function expectedPermissionFamily(fileRel) {
  if (fileRel.includes("party/")) return { read: "party:read", write: "party:write" };
  if (fileRel.includes("product/"))
    return { read: "product:read", write: "product:write" };
  if (fileRel.includes("accounting/"))
    return { read: "accounting:read", write: "accounting:write" };
  if (fileRel.includes("inventory/override") || fileRel.includes("inventory/inventory-document")) return null;
  if (fileRel.includes("inventory/"))
    return { read: "inventory:read", write: "inventory:write" };
  return null;
}

function verifyFile(rel) {
  const abs = path.join(API_SRC, rel);
  const errors = [];
  if (!fs.existsSync(abs)) {
    errors.push({ file: rel, message: "controller file missing" });
    return { endpoints: 0, errors };
  }
  const src = stripComments(read(abs));
  const classInfo = findClassGuards(src);
  if (!classInfo) {
    errors.push({
      file: rel,
      message: "missing @UseGuards before controller class",
    });
    return { endpoints: 0, errors };
  }
  if (!classInfo.hasJwt || !classInfo.hasPermissions) {
    errors.push({
      file: rel,
      className: classInfo.className,
      message: `@UseGuards must include JwtAuthGuard and PermissionsGuard (got: ${classInfo.guardsRaw})`,
    });
  }

  const family = expectedPermissionFamily(rel);
  const handlers = findHandlers(src);
  if (handlers.length === 0) {
    errors.push({
      file: rel,
      className: classInfo.className,
      message: "no HTTP handlers found",
    });
  }

  for (const h of handlers) {
    if (!h.permission) {
      errors.push({
        file: rel,
        className: classInfo.className,
        method: h.methodName,
        message: "missing @RequirePermission",
      });
      continue;
    }
    if (family) {
      const expected = h.isWrite ? family.write : family.read;
      // activate/deactivate are POST write — already isWrite
      // GET must be read; mutations write
      if (h.permission !== expected) {
        // Allow only exact family match for SS9 matrix
        const ok =
          h.permission === family.read || h.permission === family.write;
        if (!ok) {
          errors.push({
            file: rel,
            method: h.methodName,
            message: `unexpected permission '${h.permission}' (expected ${family.read}|${family.write})`,
          });
        } else if (h.isWrite && h.permission !== family.write) {
          errors.push({
            file: rel,
            method: h.methodName,
            message: `write handler must use ${family.write}, got ${h.permission}`,
          });
        } else if (!h.isWrite && h.permission !== family.read) {
          errors.push({
            file: rel,
            method: h.methodName,
            message: `read handler must use ${family.read}, got ${h.permission}`,
          });
        }
      }
    }
  }

  return { endpoints: handlers.length, errors, className: classInfo.className };
}

export function verifyGuards(scope = SCOPE_GLOBS) {
  const results = [];
  let totalEndpoints = 0;
  const allErrors = [];
  for (const rel of scope) {
    const r = verifyFile(rel);
    totalEndpoints += r.endpoints;
    results.push({ file: rel, ...r });
    allErrors.push(...r.errors);
  }
  return { totalEndpoints, results, errors: allErrors, ok: allErrors.length === 0 };
}

function main() {
  const { totalEndpoints, errors, ok } = verifyGuards();
  if (ok) {
    console.log(
      `✅ All ${totalEndpoints} endpoints have guards and permissions (${SCOPE_GLOBS.length} controllers)`,
    );
    process.exit(0);
  }
  console.error(`❌ Guard verification failed (${errors.length} gap(s)):\n`);
  for (const e of errors) {
    const loc = [e.file, e.className, e.method].filter(Boolean).join(" :: ");
    console.error(`  - ${loc}: ${e.message}`);
  }
  console.error(`\nScanned endpoints before failure count: ${totalEndpoints}`);
  process.exit(1);
}

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  main();
}
