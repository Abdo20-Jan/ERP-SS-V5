#!/usr/bin/env python3
"""Run domain + API tests for PR-INVENTORY-01-S02 contracts/API layer."""
from __future__ import annotations

import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def run(cmd: list[str], cwd: Path) -> int:
    print("+", " ".join(cmd), f"(cwd={cwd})")
    sys.stdout.flush()
    p = subprocess.run(cmd, cwd=str(cwd))
    return p.returncode


def main() -> int:
    steps = [
        (["pnpm", "test"], ROOT / "packages/domain"),
        (["pnpm", "exec", "tsc"], ROOT / "packages/contracts"),
        (
            [
                "pnpm",
                "exec",
                "vitest",
                "run",
                "src/inventory/tests/location",
            ],
            ROOT / "apps/api",
        ),
        ([sys.executable, "scripts/validate-guards.py"], ROOT),
    ]

    # Build deps for API location tests (domain + contracts + db tsc)
    pre = [
        (["pnpm", "exec", "tsc"], ROOT / "packages/domain"),
        (["pnpm", "exec", "tsc"], ROOT / "packages/contracts"),
        (["pnpm", "exec", "prisma", "generate"], ROOT / "packages/db"),
        (["pnpm", "exec", "tsc"], ROOT / "packages/db"),
    ]
    for cmd, cwd in pre:
        code = run(cmd, cwd)
        if code != 0:
            print(f"FAIL pre: {cmd} -> {code}")
            return code

    failed = 0
    for cmd, cwd in steps:
        code = run(cmd, cwd)
        if code != 0:
            print(f"FAIL: {cmd} -> {code}")
            failed = code
    if failed:
        return failed
    print("OK: PR-INVENTORY-01-S02 domain+contracts+api location tests")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
