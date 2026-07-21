# SUNSET ERP — OpenCode Army Overlay v1.1.0

Correção e expansão do overlay v1.0.0. Inclui 31 agentes lógicos, roteamento por modelo, conselho paralelo em duas ondas, tribunal de revisão, smoke tests, worktrees e guardrails.

## Correções v1.1.0

- remove a barra invertida inválida antes do shebang nos scripts e no plugin;
- usa a permissão atual `edit`, que cobre edit/write/patch;
- bloqueia diretórios externos e arquivos sensíveis;
- evita providers/MCPs placeholder com variáveis vazias;
- muda auto-update para `notify`;
- reduz instruções globais para não carregar o corpus inteiro em toda chamada;
- adiciona perfis de modelos e 9 especialistas independentes;
- adiciona smoke test, conselho, tribunal e lançamento seguro do builder.

## Instalação resumida

```bash
cp -R SUNSET_ERP_OPENCODE_ARMY_OVERLAY_v1.1.0/. /caminho/do/SUNSET_ERP_BLUEPRINT_APROVADO_BUILD_READY_v4.0.0/
cd /caminho/do/SUNSET_ERP_BLUEPRINT_APROVADO_BUILD_READY_v4.0.0
cp MODELS.env.ultra.example .env.opencode
chmod 600 .env.opencode
set -a; source .env.opencode; set +a
chmod +x scripts/opencode/*.sh
./scripts/opencode/doctor.sh
./scripts/opencode/model-smoke-test.sh --core
```

Consulte `MODEL_MATRIX.md`.
