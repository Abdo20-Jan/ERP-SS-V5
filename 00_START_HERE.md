# COMECE AQUI — SUNSET ERP Blueprint Aprovado Build-Ready v3.0.0

Este pacote reúne, em um único ZIP:

- todas as decisões e sugestões aprovadas;
- o corpus integral de 71.500 requisitos;
- o blueprint master;
- 13 blueprints de módulo;
- 65 blueprints de submódulo;
- 520 funções principais catalogadas;
- 65 PRs lógicos divididos em 650 slices;
- arquitetura, UX, segurança, integrações e qualidade;
- scaffold inicial do monorepo;
- configuração, prompts e regras para o Codex.

## Primeiro dia

```bash
unzip SUNSET_ERP_BLUEPRINT_APROVADO_BUILD_READY_v3.0.0.zip
cd SUNSET_ERP_BLUEPRINT_APROVADO_BUILD_READY_v3.0.0
./scripts/init-repository.sh
git add .
git commit -m "chore: initialize approved Sunset ERP blueprint"
code .
```

Depois abra a mesma pasta no aplicativo do Codex/ChatGPT desktop.

## Ordem de leitura

1. `docs/blueprint-master/README.md`
2. `docs/governance/DECISION_PRECEDENCE.md`
3. `AGENTS.md`
4. `docs/execution/00_BUILD_ORDER.md`
5. `prompts/00_BOOTSTRAP_PLAN.md`

## Primeira execução

1. Abra um chat em **Plan Mode**.
2. Use `prompts/00_BOOTSTRAP_PLAN.md`.
3. Não autorize código antes de revisar o plano, versões, migrations, testes e rollback.
4. Implemente BOOT-01.
5. Execute `/review`.
6. Só então inicie os primeiros slices de Plataforma e QA.

## Importante

O scaffold não contém o ERP implementado. Ele contém o plano aprovado, controles de execução e estrutura inicial para que o Codex desenvolva o sistema sem inventar requisitos.

## Sistema de agentes v4

O pacote inclui agentes customizados em `.codex/agents/`, todos com mais de 200 linhas de instruções operacionais.

Leia nesta ordem:

1. `AGENTS.md`
2. `docs/agents/00_AGENT_SYSTEM_OVERVIEW.md`
3. `docs/agents/01_AGENT_ROUTING_MATRIX.md`
4. `docs/agents/02_HANDOFF_PROTOCOL.md`
5. `docs/agents/SOURCE_BASIS.md`

Valide com:

```bash
python3 scripts/validate-agent-pack.py
```

Use `prompts/06_MULTI_AGENT_PLAN.md` em Plan Mode antes de uma execução multiagente.

