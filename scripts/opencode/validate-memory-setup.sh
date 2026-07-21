#!/usr/bin/env bash
set -euo pipefail

ERP_ROOT="${ERP_ROOT:-$(git rev-parse --show-toplevel 2>/dev/null || pwd)}"
ERP_VAULT="${ERP_VAULT:-$HOME/Documents/ERP-OPENCODE-VAULT}"

fail=0
check_file() {
  local file="$1"
  if [[ -f "$file" ]]; then
    printf 'OK   %s\n' "$file"
  else
    printf 'FAIL %s\n' "$file" >&2
    fail=1
  fi
}

check_file "$ERP_ROOT/opencode.json"
check_file "$ERP_ROOT/docs/execution/MEMORY_PROTOCOL.md"
check_file "$ERP_ROOT/.opencode/prompts/agents/memory-curator.md"
check_file "$ERP_ROOT/.opencode/commands/memory-load.md"
check_file "$ERP_ROOT/.opencode/commands/memory-save.md"
check_file "$ERP_ROOT/.opencode/commands/memory-check.md"
check_file "$ERP_ROOT/scripts/opencode/new-memory-session.sh"
check_file "$ERP_VAULT/00-HOME.md"
check_file "$ERP_VAULT/01-PROJECT/CURRENT-STATE.md"
check_file "$ERP_VAULT/01-PROJECT/CONSTRAINTS.md"
check_file "$ERP_VAULT/02-DECISIONS/DECISION-LOG.md"
check_file "$ERP_VAULT/03-MACRO-SLICES/ROADMAP.md"

python3 -m json.tool "$ERP_ROOT/opencode.json" >/dev/null || fail=1
python3 -m json.tool "$ERP_ROOT/tui.json" >/dev/null || fail=1
bash -n "$ERP_ROOT/scripts/opencode/new-memory-session.sh" || fail=1

ERP_ROOT="$ERP_ROOT" ERP_VAULT="$ERP_VAULT" python3 <<'PY' || fail=1
import json
import os
from pathlib import Path

cfg = json.loads((Path(os.environ["ERP_ROOT"]) / "opencode.json").read_text(encoding="utf-8"))
vault = str(Path(os.environ["ERP_VAULT"]))
assert cfg.get("references", {}).get("erp-memory", {}).get("path") == vault
assert "memory_curator" in cfg.get("agent", {})
assert "docs/execution/MEMORY_PROTOCOL.md" in cfg.get("instructions", [])
PY

if [[ "$fail" -ne 0 ]]; then
  printf '\nVALIDAÇÃO FALHOU\n' >&2
  exit 1
fi

printf '\nVALIDAÇÃO APROVADA\n'
