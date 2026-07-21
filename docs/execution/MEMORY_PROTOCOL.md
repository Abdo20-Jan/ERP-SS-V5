# ERP-OPENCODE — protocolo de memória

## Ordem de autoridade

1. Blueprint aprovado e decisões formais versionadas no repositório.
2. Código, contratos, migrations e testes da branch ou worktree atual.
3. Planos aprovados, evidências e verdicts do macro-slice.
4. Vault `@erp-memory`.
5. Histórico temporário da sessão atual.

O vault registra memória operacional. Ele nunca substitui o blueprint, o Git,
os contratos, as migrations, os testes ou os verdicts.

## Leitura obrigatória no início de uma missão

- `@erp-memory/00-HOME.md`
- `@erp-memory/01-PROJECT/CURRENT-STATE.md`
- `@erp-memory/01-PROJECT/CONSTRAINTS.md`
- `@erp-memory/02-DECISIONS/DECISION-LOG.md`
- `@erp-memory/03-MACRO-SLICES/ROADMAP.md`
- notas do macro-slice ativo, quando existirem.

## Escrita obrigatória ao encerrar sessão ou checkpoint

Registrar somente fatos verificáveis:

- macro-slice e work packet;
- branch, worktree e commit;
- alterações efetivamente realizadas;
- testes executados e resultados;
- decisões aprovadas;
- riscos e bloqueios;
- próxima ação exata.

## Proibições

Nunca registrar no vault:

- API keys, tokens, senhas ou credenciais;
- conteúdo de `.env`, `auth.json`, certificados ou chaves privadas;
- hipóteses apresentadas como fatos;
- tarefas marcadas como concluídas sem evidência;
- cópias integrais desnecessárias do blueprint ou do código.
