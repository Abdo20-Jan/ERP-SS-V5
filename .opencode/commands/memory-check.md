---
description: Audita a consistência entre vault, blueprint, código, testes e Git
agent: requirements_traceability
subtask: true
---

Audite o vault `@erp-memory` contra:

- blueprint aprovado;
- branch e worktree atuais;
- `git status`, `git log` e `git diff`;
- planos aprovados;
- evidências e verdicts do macro-slice informado em `$ARGUMENTS`.

Reporte:

- memória desatualizada;
- decisões sem evidência;
- estado incompatível com o Git;
- tarefas marcadas como concluídas sem testes;
- próximos passos contraditórios;
- itens que devem ser corrigidos pelo `memory_curator`.

Não edite nenhum arquivo.
