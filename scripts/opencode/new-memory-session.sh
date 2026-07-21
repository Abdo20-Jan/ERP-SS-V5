#!/usr/bin/env bash
set -euo pipefail

ERP_ROOT="${ERP_ROOT:-$(git rev-parse --show-toplevel 2>/dev/null || pwd)}"
ERP_VAULT="${ERP_VAULT:-$HOME/Documents/ERP-OPENCODE-VAULT}"
MACRO_SLICE="${1:-UNASSIGNED}"
OBJECTIVE="${2:-Definir objetivo da sessão}"
STAMP="$(date +%Y-%m-%d-%H%M)"
DATE_VALUE="$(date +%Y-%m-%d)"
TIME_VALUE="$(date +%H:%M)"
BRANCH="$(git -C "$ERP_ROOT" branch --show-current 2>/dev/null || true)"
COMMIT="$(git -C "$ERP_ROOT" rev-parse --short HEAD 2>/dev/null || true)"
WORKTREE="$(git -C "$ERP_ROOT" rev-parse --show-toplevel 2>/dev/null || printf '%s' "$ERP_ROOT")"
FILE="$ERP_VAULT/08-SESSIONS/${STAMP}-${MACRO_SLICE}.md"
INDEX="$ERP_VAULT/08-SESSIONS/SESSION-INDEX.md"

mkdir -p "$(dirname "$FILE")"

cat > "$FILE" <<NOTE
---
type: session
project: ERP-OPENCODE
date: "$DATE_VALUE"
time: "$TIME_VALUE"
macro_slice: "$MACRO_SLICE"
branch: "$BRANCH"
worktree: "$WORKTREE"
commit: "$COMMIT"
status: active
---

# Sessão — $STAMP — $MACRO_SLICE

## Objetivo
$OBJECTIVE

## Contexto carregado

## Arquivos e contratos afetados

## Alterações realizadas

## Testes e evidências

## Decisões

## Riscos e bloqueios

## Próxima ação exata
NOTE

if [[ -f "$INDEX" ]]; then
  RELATIVE="${FILE#$ERP_VAULT/}"
  LINK="${RELATIVE%.md}"
  grep -qxF -- "- [[$LINK]]" "$INDEX" || printf '%s\n' "- [[$LINK]]" >> "$INDEX"
fi

printf '%s\n' "$FILE"
