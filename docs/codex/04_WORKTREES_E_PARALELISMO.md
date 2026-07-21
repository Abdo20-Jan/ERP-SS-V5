# Worktrees e paralelismo

## Limite recomendado

Comece com 2 agentes. Suba para 3 ou 4 somente quando os contratos centrais estiverem estáveis.

## Pode rodar em paralelo

- UI usando mocks e contratos congelados;
- testes e documentação de um domínio já estabilizado;
- módulos sem tabelas/contratos compartilhados.

## Não pode rodar em paralelo

- duas migrations na mesma tabela/schema;
- duas mudanças no mesmo contrato compartilhado;
- auth/RBAC e feature que depende da mesma permissão ainda indefinida;
- fechamento contábil enquanto os eventos do subledger mudam.

## Convenção

- worktree/branch: `codex/<SLICE_ID>-<objetivo-curto>`;
- um chat por slice;
- um controller por PR lógico;
- merge sequencial quando houver dependência;
- rebase/atualização antes do review final.
