#!/usr/bin/env python3
"""MS-01-SS9 — static guard/permission verification (also runnable as CI)."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
API_SRC = ROOT / "apps" / "api" / "src"

SCOPE = [
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
    "inventory/inventory-task.controller.ts",
    "inventory/inventory-sod.controller.ts",
    "inventory/inventory-import.controller.ts",
    "inventory/inventory-export.controller.ts",
    "inventory/inventory-posting.controller.ts",
    "inventory/inventory-event.controller.ts",
    "comex/comex.controller.ts",
    "treasury/treasury.controller.ts",
    "finance/finance.controller.ts",
    "sales/sales.controller.ts",
    "crm/crm.controller.ts",
    "hr/hr.controller.ts",
    "integrations/integrations.controller.ts",
]

HTTP = ("Get", "Post", "Patch", "Put", "Delete")
WRITE = {"Post", "Patch", "Put", "Delete"}

CLASS_RE = re.compile(
    r"@UseGuards\(([^)]+)\)\s*(?:@\w+\([^)]*\)\s*)*export\s+class\s+(\w+)"
)
HANDLER_RE = re.compile(
    r"((?:@(?:Get|Post|Patch|Put|Delete|HttpCode|RequirePermission)\b[^\n]*\n\s*)+)"
    r"async\s+(\w+)\s*\("
)
PERM_RE = re.compile(r'@RequirePermission\(\s*["\']([^"\']+)["\']\s*\)')
COMMENT_BLOCK = re.compile(r"/\*.*?\*/", re.S)
COMMENT_LINE = re.compile(r"^\s*//.*$", re.M)


def family(rel: str) -> tuple[str, str] | None:
    if rel.startswith("party/"):
        return ("party:read", "party:write")
    if rel.startswith("product/"):
        return ("product:read", "product:write")
    if rel.startswith("accounting/"):
        return ("accounting:read", "accounting:write")
    # Override uses inventory:override:* — presence-only check (no read/write pair).
    if (
        rel.startswith("inventory/override")
        or rel.startswith("inventory/inventory-document")
        or rel.startswith("inventory/inventory-task")
        or rel.startswith("inventory/inventory-sod")
        or rel.startswith("inventory/inventory-import")
        or rel.startswith("inventory/inventory-export")
        or rel.startswith("inventory/inventory-posting")
        or rel.startswith("inventory/inventory-event")
    ):
        return None
    if rel.startswith("inventory/"):
        return ("inventory:read", "inventory:write")
    # Read-only workspace foundations (PR-PLATFORM-UX-01) — presence-only check.
    if rel.startswith(
        (
            "comex/",
            "treasury/",
            "finance/",
            "sales/",
            "crm/",
            "hr/",
            "integrations/",
        )
    ):
        return None
    return None


def strip_comments(src: str) -> str:
    return COMMENT_LINE.sub("", COMMENT_BLOCK.sub("", src))


def main() -> int:
    total = 0
    errors: list[str] = []

    for rel in SCOPE:
        path = API_SRC / rel
        if not path.exists():
            errors.append(f"{rel}: missing file")
            continue
        src = strip_comments(path.read_text(encoding="utf-8"))
        cm = CLASS_RE.search(src)
        if not cm:
            errors.append(f"{rel}: missing @UseGuards before class")
            continue
        guards, class_name = cm.group(1), cm.group(2)
        if "JwtAuthGuard" not in guards or "PermissionsGuard" not in guards:
            errors.append(
                f"{rel}::{class_name}: @UseGuards must include JwtAuthGuard and PermissionsGuard (got {guards})"
            )
        fam = family(rel)
        for hm in HANDLER_RE.finditer(src):
            block, method = hm.group(1), hm.group(2)
            kinds = [d for d in HTTP if re.search(rf"@{d}\(", block)]
            if not kinds:
                continue
            total += 1
            pm = PERM_RE.search(block)
            if not pm:
                errors.append(f"{rel}::{class_name}.{method}: missing @RequirePermission")
                continue
            perm = pm.group(1)
            is_write = any(k in WRITE for k in kinds)
            if fam:
                expected = fam[1] if is_write else fam[0]
                if perm != expected:
                    errors.append(
                        f"{rel}::{class_name}.{method}: expected {expected}, got {perm}"
                    )

    if errors:
        print(f"❌ Guard verification failed ({len(errors)} gap(s)):\n", file=sys.stderr)
        for e in errors:
            print(f"  - {e}", file=sys.stderr)
        print(f"\nEndpoints scanned: {total}", file=sys.stderr)
        return 1

    print(
        f"✅ All {total} endpoints have guards and permissions ({len(SCOPE)} controllers)"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
