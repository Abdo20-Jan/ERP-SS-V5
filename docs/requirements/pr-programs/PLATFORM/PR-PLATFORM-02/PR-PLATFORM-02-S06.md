---
id: PR-PLATFORM-02-S06
parent_pr: PR-PLATFORM-02
module: PLATFORM
status: READY_FOR_PLAN
requirements: 50
source: docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/PLATFORM/PR-PLATFORM-02_APROVACOES_OVERRIDE_AUDITORIA_E_PARAMETROS_500_PERGUNTAS.md
---

# PR-PLATFORM-02-S06 — Aprovações, override, auditoria e parâmetros

> Esta é uma fatia de execução. O PR lógico mantém 500 requisitos aceitos; cada fatia contém 50 para reduzir risco, contexto e tempo de revisão.

## Gate antes de codificar

- executar em **Plan Mode**;
- listar arquivos, migrations, contratos, telas, testes, riscos e rollback;
- conferir dependências com outros slices;
- não alterar código antes da aprovação do plano;
- manter rastreabilidade requisito → teste → diff.

## Requisitos aceitos (PR-PLATFORM-02-Q0251 a PR-PLATFORM-02-Q0300)

### PR-PLATFORM-02-Q0251 — Escopo do pr

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra de plataforma**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tarefas, SLA e filas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0252 — Arquitetura e componentes

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra de plataforma**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tarefas, SLA e filas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0253 — Modelo de dados e migration

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra de plataforma**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tarefas, SLA e filas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0254 — Api, eventos e erros

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra de plataforma**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tarefas, SLA e filas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0255 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra de plataforma**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tarefas, SLA e filas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0256 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra de plataforma**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tarefas, SLA e filas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0257 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra de plataforma**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tarefas, SLA e filas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0258 — Testes e evidências

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra de plataforma**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tarefas, SLA e filas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0259 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra de plataforma**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tarefas, SLA e filas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0260 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **tarefas, SLA e filas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra de plataforma**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tarefas, SLA e filas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0261 — Escopo do pr

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra de plataforma**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **comentários e colaboração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0262 — Arquitetura e componentes

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra de plataforma**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **comentários e colaboração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0263 — Modelo de dados e migration

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra de plataforma**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **comentários e colaboração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0264 — Api, eventos e erros

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra de plataforma**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **comentários e colaboração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0265 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra de plataforma**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **comentários e colaboração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0266 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra de plataforma**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **comentários e colaboração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0267 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra de plataforma**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **comentários e colaboração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0268 — Testes e evidências

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra de plataforma**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **comentários e colaboração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0269 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra de plataforma**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **comentários e colaboração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0270 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **comentários e colaboração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra de plataforma**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **comentários e colaboração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0271 — Escopo do pr

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra de plataforma**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **timeline e histórico** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0272 — Arquitetura e componentes

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra de plataforma**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **timeline e histórico** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0273 — Modelo de dados e migration

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra de plataforma**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **timeline e histórico** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0274 — Api, eventos e erros

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra de plataforma**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **timeline e histórico** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0275 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra de plataforma**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **timeline e histórico** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0276 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra de plataforma**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **timeline e histórico** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0277 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra de plataforma**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **timeline e histórico** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0278 — Testes e evidências

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra de plataforma**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **timeline e histórico** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0279 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra de plataforma**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **timeline e histórico** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0280 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **timeline e histórico** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra de plataforma**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **timeline e histórico** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0281 — Escopo do pr

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra de plataforma**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **auditoria** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0282 — Arquitetura e componentes

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra de plataforma**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **auditoria** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0283 — Modelo de dados e migration

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra de plataforma**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **auditoria** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0284 — Api, eventos e erros

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra de plataforma**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **auditoria** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0285 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra de plataforma**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **auditoria** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0286 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra de plataforma**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **auditoria** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0287 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra de plataforma**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **auditoria** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0288 — Testes e evidências

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra de plataforma**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **auditoria** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0289 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra de plataforma**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **auditoria** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0290 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **auditoria** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra de plataforma**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **auditoria** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0291 — Escopo do pr

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra de plataforma**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **permissões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0292 — Arquitetura e componentes

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra de plataforma**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **permissões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0293 — Modelo de dados e migration

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra de plataforma**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **permissões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0294 — Api, eventos e erros

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra de plataforma**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **permissões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0295 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra de plataforma**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **permissões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0296 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra de plataforma**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **permissões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0297 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra de plataforma**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **permissões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0298 — Testes e evidências

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra de plataforma**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **permissões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0299 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra de plataforma**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **permissões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0300 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **permissões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra de plataforma**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **permissões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

## Saída obrigatória do slice

- implementação funcional e reversível;
- testes unitários, integração e contrato pertinentes;
- evidência visual quando houver UI;
- atualização de OpenAPI/eventos/migrations quando aplicável;
- `docs/traceability/PR-PLATFORM-02-S06.md`;
- nenhum segredo, credencial ou dado real no repositório.
