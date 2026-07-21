#!/usr/bin/env bash
set -euo pipefail
SLICE="${1:?usage: scripts/opencode/worktree-slice.sh <SLICE_ID> [base-branch]}"
BASE_BRANCH="${2:-${SUNSET_MAIN_BRANCH:-main}}"
ROOT="$(git rev-parse --show-toplevel)"
SAFE="$(printf '%s' "$SLICE" | tr -cs 'A-Za-z0-9._-' '-')"
PARENT="${ERP_WORKTREES:-$HOME/Developer/ERP-OPENCODE-WORKTREES}"
WT="$PARENT/$SAFE"
BRANCH="agent/$SAFE"

if [ -n "$(git -C "$ROOT" status --porcelain)" ] && [ "${SUNSET_ALLOW_DIRTY_BASE:-0}" != "1" ]; then
  echo "Base worktree is dirty. Commit or stash changes first." >&2
  exit 1
fi
if git -C "$ROOT" show-ref --verify --quiet "refs/heads/$BRANCH"; then echo "Branch already exists: $BRANCH" >&2; exit 1; fi
if [ -e "$WT" ]; then echo "Worktree path already exists: $WT" >&2; exit 1; fi
if git -C "$ROOT" remote get-url origin >/dev/null 2>&1; then git -C "$ROOT" fetch origin --prune; fi
mkdir -p "$PARENT"
git -C "$ROOT" worktree add -b "$BRANCH" "$WT" "$BASE_BRANCH"

echo "Worktree: $WT"
echo "Branch:   $BRANCH"
echo "Next:     scripts/opencode/launch-builder.sh '$WT' '$SLICE' --approved"
