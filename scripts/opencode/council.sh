#!/usr/bin/env bash
set -euo pipefail
TASK="${1:?usage: scripts/opencode/council.sh <slice-or-task> [domain-agent]}"
DOMAIN_AGENT="${2:-domain_model}"
ROOT="$(git rev-parse --show-toplevel)"
# shellcheck disable=SC1091
. "$ROOT/scripts/opencode/lib.sh"
sunset_load_env "$ROOT"
RUN_ID="$(sunset_run_id)"
OUT="$ROOT/.opencode-runs/$RUN_ID-council"
mkdir -p "$OUT"

run_agent() {
  name="$1"; model="$2"; prompt="$3"
  echo "START $name -> $model"
  opencode run --dir "$ROOT" --agent "$name" --model "$model" --format json --title "$RUN_ID-$name" "$prompt" > "$OUT/$name.jsonl" 2> "$OUT/$name.err"
  echo "DONE  $name"
}

case "$DOMAIN_AGENT" in
  fiscal|accounting|landed_cost|inventory_treasury|financial_reconciler) DOMAIN_MODEL="${OPENCODE_MODEL_FINANCE:?}" ;;
  platform_devops) DOMAIN_MODEL="${OPENCODE_MODEL_DEVOPS:?}" ;;
  migration_release|release_commander) DOMAIN_MODEL="${OPENCODE_MODEL_RELEASE:?}" ;;
  ux_operations|accessibility_reviewer) DOMAIN_MODEL="${OPENCODE_MODEL_UIUX:?}" ;;
  database|data_integrity_reviewer) DOMAIN_MODEL="${OPENCODE_MODEL_DATABASE:?}" ;;
  api_integration|contract_reviewer) DOMAIN_MODEL="${OPENCODE_MODEL_API:?}" ;;
  *) DOMAIN_MODEL="${OPENCODE_MODEL_DOMAIN:?}" ;;
esac

# Wave 1: source, architecture, domain, adversarial.
run_agent architecture "${OPENCODE_MODEL_ARCHITECT:?}" "Analyze architecture for $TASK. Read-only. Cite evidence, boundaries, contracts, risks and decisions." & P1=$!
run_agent requirements_traceability "${OPENCODE_MODEL_RESEARCH:?}" "Map accepted requirements, source precedence and traceability for $TASK. Read-only." & P2=$!
run_agent "$DOMAIN_AGENT" "$DOMAIN_MODEL" "Analyze domain rules and invariants for $TASK. Read-only; do not invent rules." & P3=$!
run_agent contradiction_researcher "${OPENCODE_MODEL_CRITIC:?}" "Attempt to falsify the assumptions of $TASK. Find conflicts, omissions and counterexamples." & P4=$!
wait "$P1" "$P2" "$P3" "$P4"

# Wave 2: implementation feasibility, data, security, tests.
run_agent database "${OPENCODE_MODEL_DATABASE:?}" "Analyze data model, migrations, integrity and concurrency for $TASK. Read-only." & P5=$!
run_agent security "${OPENCODE_MODEL_SECURITY:?}" "Threat-model $TASK and identify authorization, audit, privacy and abuse risks. Read-only." & P6=$!
run_agent testing_quality "${OPENCODE_MODEL_TESTING:?}" "Design mandatory tests and quality gates for $TASK. Read-only." & P7=$!
run_agent implementation_shadow "${OPENCODE_MODEL_IMPLEMENTER_ALT:?}" "Propose a shadow implementation strategy for $TASK without editing. Expose trade-offs and likely failure modes." & P8=$!
wait "$P5" "$P6" "$P7" "$P8"

opencode run --dir "$ROOT" --agent supreme_judge --model "${OPENCODE_MODEL_JUDGE:?}" --format default --title "$RUN_ID-judge" \
  --file "$OUT/architecture.jsonl" \
  --file "$OUT/requirements_traceability.jsonl" \
  --file "$OUT/$DOMAIN_AGENT.jsonl" \
  --file "$OUT/contradiction_researcher.jsonl" \
  --file "$OUT/database.jsonl" \
  --file "$OUT/security.jsonl" \
  --file "$OUT/testing_quality.jsonl" \
  --file "$OUT/implementation_shadow.jsonl" \
  "Judge the eight independent memoranda for $TASK. Resolve conflicts by evidence and source precedence. Produce one governed plan with file locks, acceptance tests, rollout, rollback and READY/BLOCKED. Do not edit." \
  > "$OUT/judge.md" 2> "$OUT/judge.err"

echo "Council evidence: $OUT"
echo "Judge output:     $OUT/judge.md"
