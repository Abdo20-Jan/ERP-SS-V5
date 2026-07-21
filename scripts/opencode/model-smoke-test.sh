#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
# shellcheck disable=SC1091
. "$ROOT/scripts/opencode/lib.sh"
sunset_load_env "$ROOT"
MODE="${1:---core}"
CORE='OPENCODE_MODEL_ORCHESTRATOR OPENCODE_MODEL_ARCHITECT OPENCODE_MODEL_IMPLEMENTER OPENCODE_MODEL_REVIEWER OPENCODE_MODEL_CRITIC OPENCODE_MODEL_FAST'
ALL="$CORE OPENCODE_MODEL_JUDGE OPENCODE_MODEL_IMPLEMENTER_ALT OPENCODE_MODEL_REVIEWER_ALT OPENCODE_MODEL_RESEARCH OPENCODE_MODEL_WEB_RESEARCH OPENCODE_MODEL_DOMAIN OPENCODE_MODEL_FINANCE OPENCODE_MODEL_FINANCE_ALT OPENCODE_MODEL_UIUX OPENCODE_MODEL_UIUX_ALT OPENCODE_MODEL_DATABASE OPENCODE_MODEL_DATABASE_ALT OPENCODE_MODEL_API OPENCODE_MODEL_SECURITY OPENCODE_MODEL_TESTING OPENCODE_MODEL_DEVOPS OPENCODE_MODEL_PERFORMANCE OPENCODE_MODEL_RELEASE OPENCODE_MODEL_RELEASE_ALT"
[ "$MODE" = "--all" ] && VARS="$ALL" || VARS="$CORE"
RUN_ID="$(sunset_run_id)"
OUT="$ROOT/.opencode-runs/$RUN_ID-smoke"
mkdir -p "$OUT"
FAIL=0
for var in $VARS; do
  eval "model=\${$var:-}"
  if [ -z "$model" ]; then echo "SKIP $var: unset"; FAIL=1; continue; fi
  echo "TEST $var -> $model"
  if opencode run --dir "$ROOT" --agent orchestrator --model "$model" --format json --title "smoke-$var" "Return exactly MODEL_OK and the model ID you are serving. Do not use tools." > "$OUT/$var.jsonl" 2> "$OUT/$var.err"; then
    echo "PASS $var"
  else
    echo "FAIL $var (see $OUT/$var.err)"
    FAIL=1
  fi
done
echo "Evidence: $OUT"
exit "$FAIL"
