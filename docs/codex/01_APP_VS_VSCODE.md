# App Codex ou extensão do VS Code?

## Recomendação

Use ambos, com papéis distintos.

### ChatGPT desktop app em modo Codex — principal

Use para:
- Plan Mode e decisões de arquitetura;
- múltiplos chats em paralelo;
- worktrees independentes;
- tarefas longas;
- acompanhamento de vários PRs/slices;
- revisão final e coordenação.

### Extensão Codex no VS Code — complementar

Use para:
- tarefas locais e focadas;
- enviar arquivo aberto ou seleção como contexto;
- inspecionar diff ao lado do código;
- depurar e executar testes no terminal do projeto;
- pequenos ajustes depois da revisão.

## Regra prática

- planejamento e coordenação: app;
- implementação diária e debug: VS Code;
- revisão: `/review` em qualquer um, preferencialmente app + inspeção manual no VS Code;
- comandos repetíveis/CI: CLI.
