#!/usr/bin/env bash
set -euo pipefail

sunset_root() { git rev-parse --show-toplevel 2>/dev/null; }

sunset_load_env() {
  local root="$1"
  if [ -f "$root/.env.opencode" ]; then
    set -a
    # shellcheck disable=SC1090
    . "$root/.env.opencode"
    set +a
  fi
}

sunset_require() {
  command -v "$1" >/dev/null 2>&1 || { echo "Missing command: $1" >&2; return 1; }
}

sunset_require_env() {
  local name="$1"
  eval "local value=\${$name:-}"
  [ -n "$value" ] || { echo "Missing environment variable: $name" >&2; return 1; }
}

sunset_run_id() { date +%Y%m%d-%H%M%S; }
