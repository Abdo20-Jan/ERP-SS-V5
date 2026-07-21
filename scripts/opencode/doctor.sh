#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
# shellcheck disable=SC1091
. "$ROOT/scripts/opencode/lib.sh"
sunset_load_env "$ROOT"

FAIL=0
for cmd in opencode git python3 node pnpm jq; do
  if ! command -v "$cmd" >/dev/null 2>&1; then echo "MISSING: $cmd"; FAIL=1; else echo "OK: $cmd -> $(command -v "$cmd")"; fi
done
command -v gh >/dev/null 2>&1 && echo "OK: gh -> $(command -v gh)" || echo "OPTIONAL MISSING: gh"

python3 -m json.tool "$ROOT/opencode.json" >/dev/null && echo "OK: opencode.json parses"
for f in "$ROOT"/scripts/opencode/*.sh; do bash -n "$f" || FAIL=1; done
[ "$FAIL" -eq 0 ] && echo "OK: shell syntax"

if [ -d "$ROOT/.git" ] || git -C "$ROOT" rev-parse --git-dir >/dev/null 2>&1; then echo "OK: git repository"; else echo "MISSING: initialize git repository"; FAIL=1; fi

opencode --version || true
opencode auth list || true
opencode agent list || FAIL=1
opencode mcp list || true

python3 "$ROOT/scripts/doctor.py" || FAIL=1
python3 "$ROOT/scripts/validate-agent-pack.py" || FAIL=1

vars='OPENCODE_MODEL_ORCHESTRATOR OPENCODE_MODEL_JUDGE OPENCODE_MODEL_ARCHITECT OPENCODE_MODEL_IMPLEMENTER OPENCODE_MODEL_REVIEWER OPENCODE_MODEL_CRITIC OPENCODE_MODEL_FAST'
for v in $vars; do eval "val=\${$v:-}"; [ -n "$val" ] && echo "MODEL OK: $v=$val" || { echo "MODEL MISSING: $v"; FAIL=1; }; done

exit "$FAIL"
