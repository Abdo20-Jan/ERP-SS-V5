---
id: PR-COMEX-04-S09
parent_pr: PR-COMEX-04
module: COMEX
status: READY_FOR_PLAN
requirements: 50
source: docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/COMEX/PR-COMEX-04_DOCUMENTOS_OCR_OCORRENCIAS_E_PRAZOS_500_PERGUNTAS.md
---

# PR-COMEX-04-S09 — Documentos, OCR, ocorrências e prazos

> Esta é uma fatia de execução. O PR lógico mantém 500 requisitos aceitos; cada fatia contém 50 para reduzir risco, contexto e tempo de revisão.

## Gate antes de codificar

- executar em **Plan Mode**;
- listar arquivos, migrations, contratos, telas, testes, riscos e rollback;
- conferir dependências com outros slices;
- não alterar código antes da aprovação do plano;
- manter rastreabilidade requisito → teste → diff.

## Requisitos aceitos (PR-COMEX-04-Q0401 a PR-COMEX-04-Q0450)

### PR-COMEX-04-Q0401 — Escopo do pr

- **Pergunta de projeto:** Como **impacto contábil** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **dossiê documental**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto contábil** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **UX/tempo:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0402 — Arquitetura e componentes

- **Pergunta de projeto:** Como **impacto contábil** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **dossiê documental**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto contábil** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **UX/tempo:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0403 — Modelo de dados e migration

- **Pergunta de projeto:** Como **impacto contábil** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **dossiê documental**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto contábil** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **UX/tempo:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0404 — Api, eventos e erros

- **Pergunta de projeto:** Como **impacto contábil** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **dossiê documental**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto contábil** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **UX/tempo:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0405 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **impacto contábil** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **dossiê documental**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto contábil** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **UX/tempo:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0406 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **impacto contábil** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **dossiê documental**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto contábil** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **UX/tempo:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0407 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **impacto contábil** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **dossiê documental**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto contábil** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **UX/tempo:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0408 — Testes e evidências

- **Pergunta de projeto:** Como **impacto contábil** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **dossiê documental**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto contábil** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **UX/tempo:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0409 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **impacto contábil** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **dossiê documental**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto contábil** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **UX/tempo:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0410 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **impacto contábil** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **dossiê documental**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto contábil** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **UX/tempo:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0411 — Escopo do pr

- **Pergunta de projeto:** Como **impacto fiscal** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **dossiê documental**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto fiscal** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **UX/tempo:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0412 — Arquitetura e componentes

- **Pergunta de projeto:** Como **impacto fiscal** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **dossiê documental**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto fiscal** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **UX/tempo:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0413 — Modelo de dados e migration

- **Pergunta de projeto:** Como **impacto fiscal** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **dossiê documental**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto fiscal** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **UX/tempo:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0414 — Api, eventos e erros

- **Pergunta de projeto:** Como **impacto fiscal** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **dossiê documental**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto fiscal** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **UX/tempo:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0415 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **impacto fiscal** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **dossiê documental**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto fiscal** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **UX/tempo:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0416 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **impacto fiscal** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **dossiê documental**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto fiscal** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **UX/tempo:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0417 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **impacto fiscal** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **dossiê documental**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto fiscal** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **UX/tempo:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0418 — Testes e evidências

- **Pergunta de projeto:** Como **impacto fiscal** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **dossiê documental**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto fiscal** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **UX/tempo:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0419 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **impacto fiscal** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **dossiê documental**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto fiscal** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **UX/tempo:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0420 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **impacto fiscal** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **dossiê documental**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **impacto fiscal** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **UX/tempo:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0421 — Escopo do pr

- **Pergunta de projeto:** Como **reconciliação** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **dossiê documental**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **reconciliação** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0422 — Arquitetura e componentes

- **Pergunta de projeto:** Como **reconciliação** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **dossiê documental**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **reconciliação** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0423 — Modelo de dados e migration

- **Pergunta de projeto:** Como **reconciliação** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **dossiê documental**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **reconciliação** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0424 — Api, eventos e erros

- **Pergunta de projeto:** Como **reconciliação** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **dossiê documental**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **reconciliação** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0425 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **reconciliação** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **dossiê documental**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **reconciliação** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0426 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **reconciliação** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **dossiê documental**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **reconciliação** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0427 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **reconciliação** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **dossiê documental**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **reconciliação** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0428 — Testes e evidências

- **Pergunta de projeto:** Como **reconciliação** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **dossiê documental**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **reconciliação** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0429 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **reconciliação** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **dossiê documental**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **reconciliação** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0430 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **reconciliação** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **dossiê documental**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **reconciliação** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0431 — Escopo do pr

- **Pergunta de projeto:** Como **relatórios e drill-down** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **dossiê documental**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **relatórios e drill-down** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **UX/tempo:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0432 — Arquitetura e componentes

- **Pergunta de projeto:** Como **relatórios e drill-down** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **dossiê documental**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **relatórios e drill-down** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **UX/tempo:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0433 — Modelo de dados e migration

- **Pergunta de projeto:** Como **relatórios e drill-down** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **dossiê documental**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **relatórios e drill-down** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **UX/tempo:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0434 — Api, eventos e erros

- **Pergunta de projeto:** Como **relatórios e drill-down** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **dossiê documental**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **relatórios e drill-down** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **UX/tempo:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0435 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **relatórios e drill-down** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **dossiê documental**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **relatórios e drill-down** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **UX/tempo:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0436 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **relatórios e drill-down** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **dossiê documental**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **relatórios e drill-down** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **UX/tempo:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0437 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **relatórios e drill-down** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **dossiê documental**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **relatórios e drill-down** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **UX/tempo:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0438 — Testes e evidências

- **Pergunta de projeto:** Como **relatórios e drill-down** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **dossiê documental**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **relatórios e drill-down** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **UX/tempo:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0439 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **relatórios e drill-down** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **dossiê documental**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **relatórios e drill-down** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **UX/tempo:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0440 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **relatórios e drill-down** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **dossiê documental**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **relatórios e drill-down** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **UX/tempo:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0441 — Escopo do pr

- **Pergunta de projeto:** Como **KPIs e alertas** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **dossiê documental**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **KPIs e alertas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **UX/tempo:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0442 — Arquitetura e componentes

- **Pergunta de projeto:** Como **KPIs e alertas** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **dossiê documental**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **KPIs e alertas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **UX/tempo:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0443 — Modelo de dados e migration

- **Pergunta de projeto:** Como **KPIs e alertas** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **dossiê documental**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **KPIs e alertas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **UX/tempo:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0444 — Api, eventos e erros

- **Pergunta de projeto:** Como **KPIs e alertas** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **dossiê documental**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **KPIs e alertas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **UX/tempo:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0445 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **KPIs e alertas** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **dossiê documental**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **KPIs e alertas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **UX/tempo:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0446 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **KPIs e alertas** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **dossiê documental**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **KPIs e alertas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **UX/tempo:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0447 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **KPIs e alertas** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **dossiê documental**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **KPIs e alertas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **UX/tempo:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0448 — Testes e evidências

- **Pergunta de projeto:** Como **KPIs e alertas** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **dossiê documental**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **KPIs e alertas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **UX/tempo:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0449 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **KPIs e alertas** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **dossiê documental**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **KPIs e alertas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **UX/tempo:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

### PR-COMEX-04-Q0450 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **KPIs e alertas** deve ser definido no PR **Documentos, OCR, ocorrências e prazos** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **dossiê documental**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um pedido internacional de pneus gera dois contêineres, desembarca no porto e segue para importação definitiva, trânsito ou Zona Primária Aduaneira. A decisão sobre **KPIs e alertas** deve permitir que analista de COMEX, despachante, agente de cargas, fornecedor e financeiro executem **avançar a importação para a próxima etapa** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **UX/tempo:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando dias de ciclo, atrasos, divergências documentais e custo por processo.

## Saída obrigatória do slice

- implementação funcional e reversível;
- testes unitários, integração e contrato pertinentes;
- evidência visual quando houver UI;
- atualização de OpenAPI/eventos/migrations quando aplicável;
- `docs/traceability/PR-COMEX-04-S09.md`;
- nenhum segredo, credencial ou dado real no repositório.
