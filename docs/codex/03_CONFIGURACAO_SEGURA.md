# Configuração segura do Codex

O arquivo `.codex/config.toml` usa:

- `approval_policy = "on-request"`;
- `approvals_reviewer = "user"`;
- `sandbox_mode = "workspace-write"`;
- rede desativada dentro do sandbox por padrão;
- Plan Mode em `xhigh`;
- instruções de projeto até 64 KiB;
- hooks habilitados.

## Quando habilitar rede

Somente em uma tarefa dedicada para instalar/atualizar dependências ou consultar documentação. Revise o plano, habilite temporariamente, use registries oficiais e volte a desabilitar.

## Nunca como padrão

- `danger-full-access`;
- `approval_policy = "never"` em desenvolvimento interativo;
- acesso a credenciais de produção;
- shell irrestrito fora do workspace.

## Hooks

Revise `.codex/hooks.json` e os dois scripts. Depois use `/hooks` para confiar no hash atual. Qualquer alteração futura exige nova revisão.
