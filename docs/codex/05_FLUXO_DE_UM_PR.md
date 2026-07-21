# Fluxo de um PR físico

1. Escolha um slice `S01...S10`.
2. Crie worktree a partir de `main`.
3. Abra chat novo no app Codex.
4. Cole `prompts/01_PLAN_SLICE.md` preenchido.
5. Revise e aprove o plano.
6. Execute `prompts/02_IMPLEMENT_SLICE.md`.
7. Inspecione manualmente no VS Code.
8. Rode lint, typecheck, testes, migrations dry-run e testes de rollback.
9. Use `/review` contra `main`.
10. Corrija P0/P1 e repita `/review`.
11. Gere descrição do PR.
12. Abra PR, exija CI verde e revisão humana.
13. Merge; só então inicie slice dependente.

Um PR físico deve ser revisável em horas, não semanas. Os 500 requisitos do PR lógico são preservados pelos 10 slices.
