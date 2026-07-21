#!/usr/bin/env bash
set -euo pipefail
WT="${1:?usage: scripts/opencode/launch-builder.sh <worktree-path> <slice-id> --approved}"
SLICE="${2:?usage: scripts/opencode/launch-builder.sh <worktree-path> <slice-id> --approved}"
APPROVAL="${3:-}"
[ "$APPROVAL" = "--approved" ] || { echo "Refusing to build without explicit --approved after human plan review." >&2; exit 1; }
WT="$(cd "$WT" && pwd)"
BRANCH="$(git -C "$WT" branch --show-current)"
case "$BRANCH" in agent/*) ;; *) echo "Refusing: branch must start with agent/; current=$BRANCH" >&2; exit 1;; esac
MAIN_ROOT="$(git -C "$WT" worktree list --porcelain | awk 'NR==1 && $1=="worktree" {print $2}')"
# shellcheck disable=SC1090
[ -f "$MAIN_ROOT/.env.opencode" ] && { set -a; . "$MAIN_ROOT/.env.opencode"; set +a; }
: "${OPENCODE_MODEL_IMPLEMENTER:?Missing OPENCODE_MODEL_IMPLEMENTER}"
RUN_ID="$(date +%Y%m%d-%H%M%S)"
OUT="$WT/.opencode-runs/$RUN_ID-builder"
mkdir -p "$OUT"
opencode run --auto --dir "$WT" --agent slice_builder --model "$OPENCODE_MODEL_IMPLEMENTER" --format json --title "$RUN_ID-$SLICE-builder" --command slice-implement "$SLICE" > "$OUT/builder.jsonl" 2> "$OUT/builder.err"
echo "Builder evidence: $OUT"
