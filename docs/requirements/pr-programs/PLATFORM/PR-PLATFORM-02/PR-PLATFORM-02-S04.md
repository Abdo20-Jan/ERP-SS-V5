---
id: PR-PLATFORM-02-S04
parent_pr: PR-PLATFORM-02
module: PLATFORM
status: READY_FOR_PLAN
requirements: 50
source: docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/PLATFORM/PR-PLATFORM-02_APROVACOES_OVERRIDE_AUDITORIA_E_PARAMETROS_500_PERGUNTAS.md
---

# PR-PLATFORM-02-S04 — Aprovações, override, auditoria e parâmetros

> Esta é uma fatia de execução. O PR lógico mantém 500 requisitos aceitos; cada fatia contém 50 para reduzir risco, contexto e tempo de revisão.

## Gate antes de codificar

- executar em **Plan Mode**;
- listar arquivos, migrations, contratos, telas, testes, riscos e rollback;
- conferir dependências com outros slices;
- não alterar código antes da aprovação do plano;
- manter rastreabilidade requisito → teste → diff.

## Requisitos aceitos (PR-PLATFORM-02-Q0151 a PR-PLATFORM-02-Q0200)

### PR-PLATFORM-02-Q0151 — Escopo do pr

- **Pergunta de projeto:** Como **anexos e versões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra de plataforma**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **anexos e versões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0152 — Arquitetura e componentes

- **Pergunta de projeto:** Como **anexos e versões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra de plataforma**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **anexos e versões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0153 — Modelo de dados e migration

- **Pergunta de projeto:** Como **anexos e versões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra de plataforma**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **anexos e versões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0154 — Api, eventos e erros

- **Pergunta de projeto:** Como **anexos e versões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra de plataforma**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **anexos e versões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0155 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **anexos e versões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra de plataforma**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **anexos e versões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0156 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **anexos e versões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra de plataforma**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **anexos e versões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0157 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **anexos e versões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra de plataforma**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **anexos e versões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0158 — Testes e evidências

- **Pergunta de projeto:** Como **anexos e versões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra de plataforma**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **anexos e versões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0159 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **anexos e versões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra de plataforma**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **anexos e versões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0160 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **anexos e versões** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra de plataforma**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **anexos e versões** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0161 — Escopo do pr

- **Pergunta de projeto:** Como **OCR e extração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra de plataforma**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **OCR e extração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **UX/tempo:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0162 — Arquitetura e componentes

- **Pergunta de projeto:** Como **OCR e extração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra de plataforma**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **OCR e extração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **UX/tempo:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0163 — Modelo de dados e migration

- **Pergunta de projeto:** Como **OCR e extração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra de plataforma**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **OCR e extração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **UX/tempo:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0164 — Api, eventos e erros

- **Pergunta de projeto:** Como **OCR e extração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra de plataforma**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **OCR e extração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **UX/tempo:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0165 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **OCR e extração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra de plataforma**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **OCR e extração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **UX/tempo:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0166 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **OCR e extração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra de plataforma**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **OCR e extração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **UX/tempo:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0167 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **OCR e extração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra de plataforma**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **OCR e extração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **UX/tempo:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0168 — Testes e evidências

- **Pergunta de projeto:** Como **OCR e extração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra de plataforma**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **OCR e extração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **UX/tempo:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0169 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **OCR e extração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra de plataforma**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **OCR e extração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **UX/tempo:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0170 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **OCR e extração** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra de plataforma**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **OCR e extração** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **UX/tempo:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0171 — Escopo do pr

- **Pergunta de projeto:** Como **busca global e local** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra de plataforma**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **busca global e local** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0172 — Arquitetura e componentes

- **Pergunta de projeto:** Como **busca global e local** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra de plataforma**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **busca global e local** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0173 — Modelo de dados e migration

- **Pergunta de projeto:** Como **busca global e local** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra de plataforma**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **busca global e local** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0174 — Api, eventos e erros

- **Pergunta de projeto:** Como **busca global e local** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra de plataforma**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **busca global e local** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0175 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **busca global e local** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra de plataforma**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **busca global e local** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0176 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **busca global e local** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra de plataforma**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **busca global e local** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0177 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **busca global e local** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra de plataforma**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **busca global e local** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0178 — Testes e evidências

- **Pergunta de projeto:** Como **busca global e local** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra de plataforma**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **busca global e local** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0179 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **busca global e local** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra de plataforma**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **busca global e local** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0180 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **busca global e local** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra de plataforma**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **busca global e local** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **UX/tempo:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0181 — Escopo do pr

- **Pergunta de projeto:** Como **filtros e views salvas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra de plataforma**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **filtros e views salvas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0182 — Arquitetura e componentes

- **Pergunta de projeto:** Como **filtros e views salvas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra de plataforma**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **filtros e views salvas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0183 — Modelo de dados e migration

- **Pergunta de projeto:** Como **filtros e views salvas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra de plataforma**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **filtros e views salvas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0184 — Api, eventos e erros

- **Pergunta de projeto:** Como **filtros e views salvas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra de plataforma**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **filtros e views salvas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0185 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **filtros e views salvas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra de plataforma**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **filtros e views salvas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0186 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **filtros e views salvas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra de plataforma**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **filtros e views salvas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0187 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **filtros e views salvas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra de plataforma**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **filtros e views salvas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0188 — Testes e evidências

- **Pergunta de projeto:** Como **filtros e views salvas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra de plataforma**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **filtros e views salvas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0189 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **filtros e views salvas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra de plataforma**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **filtros e views salvas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0190 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **filtros e views salvas** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra de plataforma**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **filtros e views salvas** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0191 — Escopo do pr

- **Pergunta de projeto:** Como **tabela, colunas e ordenação** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra de plataforma**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tabela, colunas e ordenação** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0192 — Arquitetura e componentes

- **Pergunta de projeto:** Como **tabela, colunas e ordenação** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra de plataforma**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tabela, colunas e ordenação** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0193 — Modelo de dados e migration

- **Pergunta de projeto:** Como **tabela, colunas e ordenação** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra de plataforma**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tabela, colunas e ordenação** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0194 — Api, eventos e erros

- **Pergunta de projeto:** Como **tabela, colunas e ordenação** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra de plataforma**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tabela, colunas e ordenação** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0195 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **tabela, colunas e ordenação** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra de plataforma**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tabela, colunas e ordenação** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0196 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **tabela, colunas e ordenação** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra de plataforma**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tabela, colunas e ordenação** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0197 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **tabela, colunas e ordenação** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra de plataforma**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tabela, colunas e ordenação** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0198 — Testes e evidências

- **Pergunta de projeto:** Como **tabela, colunas e ordenação** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra de plataforma**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tabela, colunas e ordenação** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0199 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **tabela, colunas e ordenação** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra de plataforma**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tabela, colunas e ordenação** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

### PR-PLATFORM-02-Q0200 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **tabela, colunas e ordenação** deve ser definido no PR **Aprovações, override, auditoria e parâmetros** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra de plataforma**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, a aplicação web roda no Vercel, API e PostgreSQL no Railway e o desktop Tauri mantém SQLite local para operar offline. A decisão sobre **tabela, colunas e ordenação** deve permitir que usuário final, master, administrador, suporte, API e worker executem **autenticar, autorizar, sincronizar, parametrizar ou auditar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando latência, disponibilidade, erros, conflitos offline, filas, segurança e tempo de recuperação.

## Saída obrigatória do slice

- implementação funcional e reversível;
- testes unitários, integração e contrato pertinentes;
- evidência visual quando houver UI;
- atualização de OpenAPI/eventos/migrations quando aplicável;
- `docs/traceability/PR-PLATFORM-02-S04.md`;
- nenhum segredo, credencial ou dado real no repositório.
