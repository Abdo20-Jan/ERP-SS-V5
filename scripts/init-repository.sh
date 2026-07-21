#!/usr/bin/env bash
set -euo pipefail
if [ ! -d .git ]; then
  git init
  git branch -M main
fi
python3 scripts/validate-requirements.py
python3 scripts/doctor.py
git add .
git status --short
cat <<'EOF'

Repository initialized. Review the staged files before the first commit.
Suggested first commit:
  git commit -m "chore: initialize accepted Sunset ERP build baseline"

Do not install dependencies until BOOT-01 has been planned in Codex Plan Mode.
EOF
