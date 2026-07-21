#!/usr/bin/env bash
set -euo pipefail
TASK="${1:?usage: scripts/opencode/review-tribunal.sh <slice-or-review-scope>}"
ROOT="$(git rev-parse --show-toplevel)"
# shellcheck disable=SC1091
. "$ROOT/scripts/opencode/lib.sh"
sunset_load_env "$ROOT"
RUN_ID="$(sunset_run_id)"
OUT="$ROOT/.opencode-runs/$RUN_ID-review"
mkdir -p "$OUT"

run_agent() {
  name="$1"; model="$2"; prompt="$3"
  opencode run --dir "$ROOT" --agent "$name" --model "$model" --format json --title "$RUN_ID-$name" "$prompt" > "$OUT/$name.jsonl" 2> "$OUT/$name.err"
}

run_agent pr_reviewer "${OPENCODE_MODEL_REVIEWER:?}" "Review $TASK against blueprint, approved plan, diff and evidence. Read-only." & P1=$!
run_agent security "${OPENCODE_MODEL_SECURITY:?}" "Security review for $TASK. Read-only; report evidence-backed findings." & P2=$!
run_agent testing_quality "${OPENCODE_MODEL_TESTING:?}" "Test and quality review for $TASK. Read-only." & P3=$!
run_agent contract_reviewer "${OPENCODE_MODEL_REVIEWER_ALT:?}" "Contract and compatibility review for $TASK. Read-only." & P4=$!
wait "$P1" "$P2" "$P3" "$P4"

run_agent data_integrity_reviewer "${OPENCODE_MODEL_DATABASE_ALT:?}" "Data integrity and migration review for $TASK. Read-only." & P5=$!
run_agent financial_reconciler "${OPENCODE_MODEL_FINANCE_ALT:?}" "Financial and reconciliation review for $TASK. Read-only; mark nonfinancial scope explicitly." & P6=$!
run_agent performance_reviewer "${OPENCODE_MODEL_PERFORMANCE:?}" "Performance and scalability review for $TASK. Read-only." & P7=$!
run_agent contradiction_researcher "${OPENCODE_MODEL_CRITIC:?}" "Adversarially challenge completion claims for $TASK. Read-only." & P8=$!
wait "$P5" "$P6" "$P7" "$P8"

opencode run --dir "$ROOT" --agent supreme_judge --model "${OPENCODE_MODEL_JUDGE:?}" --format default --title "$RUN_ID-verdict" \
  --file "$OUT/pr_reviewer.jsonl" --file "$OUT/security.jsonl" --file "$OUT/testing_quality.jsonl" \
  --file "$OUT/contract_reviewer.jsonl" --file "$OUT/data_integrity_reviewer.jsonl" \
  --file "$OUT/financial_reconciler.jsonl" --file "$OUT/performance_reviewer.jsonl" \
  --file "$OUT/contradiction_researcher.jsonl" \
  "Issue the final review verdict for $TASK. Deduplicate findings; include severity, evidence, remediation, merge status and READY/READY_WITH_RISKS/BLOCKED. Do not edit." \
  > "$OUT/verdict.md" 2> "$OUT/verdict.err"

echo "Review evidence: $OUT"
echo "Verdict:         $OUT/verdict.md"
