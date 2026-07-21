---
id: QA-MASTER-500-FULL
status: ACTIVE
version: 1.12.0
questions: 500
prs: 65
---

# Master completo — 500 perguntas por módulo e PR

Este arquivo reúne todas as perguntas. Para trabalho diário, os arquivos separados por módulo são mais leves.


---

# Registro de fontes e princípios de desenho

As recomendações não copiam uma tela específica. Elas usam padrões consolidados de UX empresarial, acessibilidade, segurança e domínios regulados. Cada pergunta referencia os IDs abaixo.

## UX-01 — SAP Fiori — List Report e Filter Bar

- **Fonte:** https://experience.sap.com/fiori-design-web/list-report-header-sap-fiori-elements/
- **Aplicação no ERP:** Listas extensas devem usar barra de filtros única, variantes salvas e tabela coerente com os filtros.

## UX-02 — SAP Fiori — Object Page

- **Fonte:** https://experience.sap.com/fiori-design-web/object-page/
- **Aplicação no ERP:** Objetos complexos devem ter cabeçalho resumido, status, ações e seções/tabs previsíveis.

## UX-03 — SAP Fiori — Worklist

- **Fonte:** https://experience.sap.com/fiori-design-web/work-list/
- **Aplicação no ERP:** Filas de trabalho devem priorizar itens acionáveis, urgência, SLA e próxima ação.

## UX-04 — SAP Fiori — Wizard

- **Fonte:** https://experience.sap.com/fiori-design-web/wizard/
- **Aplicação no ERP:** Tarefas longas ou pouco familiares devem ser divididas em passos com revisão final.

## UX-05 — SAP Fiori — Side Content/Side Panel

- **Fonte:** https://experience.sap.com/fiori-design-web/dynamic-side-content-web-component/
- **Aplicação no ERP:** Conteúdo auxiliar pode aparecer ao lado, sem esconder informação crítica nem virar navegação.

## UX-06 — GOV.UK — Error Summary

- **Fonte:** https://design-system.service.gov.uk/components/error-summary/
- **Aplicação no ERP:** Erros devem aparecer no topo e junto ao campo, com foco e links para correção.

## UX-07 — GOV.UK — Check Answers

- **Fonte:** https://design-system.service.gov.uk/patterns/check-answers/
- **Aplicação no ERP:** Transações críticas devem ter página de revisão antes da confirmação.

## UX-08 — W3C WCAG 2.2

- **Fonte:** https://www.w3.org/WAI/WCAG22/understanding/
- **Aplicação no ERP:** A interface deve atender teclado, foco, mensagens de status, contraste, alvos e semântica.

## UX-09 — WAI-ARIA APG — Grid/Combobox/Dialog

- **Fonte:** https://www.w3.org/WAI/ARIA/apg/patterns/
- **Aplicação no ERP:** Grids, seletores e diálogos devem seguir padrões de teclado e foco previsíveis.

## UX-10 — Nielsen Norman Group — Usability Heuristics

- **Fonte:** https://www.nngroup.com/articles/ten-usability-heuristics/
- **Aplicação no ERP:** Visibilidade de status, prevenção de erros, consistência, reconhecimento e controle do usuário.

## DOM-01 — WCO Data Model

- **Fonte:** https://www.wcoomd.org/DataModel
- **Aplicação no ERP:** Dados de comércio exterior devem ser estruturados, reutilizáveis e interoperáveis.

## DOM-02 — GS1 Traceability/EPCIS

- **Fonte:** https://www.gs1.org/standards/traceability
- **Aplicação no ERP:** Rastreabilidade deve registrar eventos críticos e dados-chave de objeto, tempo, local e motivo.

## DOM-03 — ARCA — Webservices de Factura Electrónica

- **Fonte:** https://www.arca.gob.ar/ws/documentacion/ws-factura-electronica.asp
- **Aplicação no ERP:** Documentos fiscais e autorização devem respeitar os contratos oficiais e ambientes de homologação.

## DOM-04 — BCRA — Exterior y Cambios

- **Fonte:** https://www.bcra.gob.ar/normativa-de-exterior-y-cambios/
- **Aplicação no ERP:** Operações cambiais exigem documentação, conceito, banco interveniente e rastreabilidade.

## ARCH-01 — NIST SSDF

- **Fonte:** https://csrc.nist.gov/pubs/sp/800/218/final
- **Aplicação no ERP:** Desenvolvimento seguro deve integrar requisitos, proteção, verificação e resposta a vulnerabilidades.

## ARCH-02 — W3C OpenAPI Specification

- **Fonte:** https://spec.openapis.org/oas/latest.html
- **Aplicação no ERP:** APIs HTTP devem ter contratos versionados e testáveis.


---

# Catálogo de layouts recomendados

Estes layouts são padrões reutilizáveis. O objetivo é reduzir desenvolvimento customizado e manter consistência entre módulos.

## LAY-01 — List Report

Barra de filtros única no topo, variantes salvas, tabela densa, colunas personalizáveis, ações contextuais e exportação.

## LAY-02 — Object Page

Cabeçalho fixo com identificador, status, KPIs e ação primária; conteúdo em tabs/seções; histórico e anexos em painel auxiliar.

## LAY-03 — Worklist

Fila ordenada por urgência/SLA, tabs por estado, próxima ação visível, contadores e ações rápidas.

## LAY-04 — Wizard

Passos curtos, progresso visível, salvamento automático, validação por etapa e revisão final antes de confirmar.

## LAY-05 — Control Tower

KPIs no topo, exceções priorizadas, timeline/calendário, mapa ou gráfico somente quando ajuda a decidir.

## LAY-06 — Reconciliation Workspace

Duas fontes lado a lado, diferenças destacadas, filtros, sugestão de match, justificativa e aprovação.

## LAY-07 — Editable Data Grid

Grid acessível com teclado, edição controlada, colunas fixas, colar em massa, validação por célula e resumo de erros.

## LAY-08 — Review & Confirm

Resumo por seção, links Alterar, diferenças em destaque, impacto financeiro e ação final explícita.

## LAY-09 — Timeline

Eventos em ordem cronológica com ator, documento, origem, estado e drill-down.

## LAY-10 — Split View

Lista à esquerda e detalhe à direita em desktop; navegação em tela inteira no mobile.

## LAY-11 — Dashboard Operacional

Cards limitados a decisões, tendências, filas críticas e atalhos; sem gráficos decorativos.

## LAY-12 — Admin Console

Navegação por domínio, busca global, tabelas versionadas, comparação antes/depois e publicação controlada.

## Regras globais de interface

- Uma ação primária por contexto; ações secundárias no overflow.
- Filtros em um único lugar e views salvas por usuário.
- Cabeçalhos mostram estado, identificador, valor/quantidade e exceção.
- Formulários usam preenchimento progressivo, valores padrão e autocomplete.
- Erros aparecem no topo e junto ao campo; nada digitado é perdido.
- Operações críticas têm revisão antes da confirmação.
- Todas as telas suportam teclado, foco visível, mensagens de status e alvos adequados.
- Mobile não replica grids complexos: oferece tarefas críticas em layout responsivo simplificado.


---

# COMEX — 50 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: DOM-01, DOM-04, UX-01, UX-02.

## PR-COMEX-01 — Pedido internacional e produção

**Objetivo do PR:** entregar o fluxo de pedido internacional com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-08` + `LAY-01`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-COMEX-001 — Qual é o resultado exato que deve encerrar o PR **Pedido internacional e produção**, e quais situações devem ficar explicitamente fora dele?

- **PR:** `PR-COMEX-01`
- **Sugestão recomendada:** Definir uma única condição de conclusão observável para pedido internacional, mais uma lista curta de exclusões. O PR não deve misturar melhorias adjacentes que não sejam necessárias ao fluxo principal.
- **Exemplo Sunset:** Fornecedor confirma 252 pneus e 60 unidades ficam pendentes. O PR termina quando o usuário conclui **aprovar e enviar pedido** e vê confirmação, histórico e impacto nos módulos dependentes.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Tela de revisão final com escopo, impacto, pendências e ação explícita de concluir; usar links para voltar e corrigir cada seção.
- **Otimização de tempo e UX:** Evita PRs intermináveis, reduz retrabalho e permite homologação por resultado, não por quantidade de telas.
- **Critério de aceite sugerido:** Há um teste E2E que prova a conclusão de pedido internacional e uma lista de itens fora do escopo aprovada.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-002 — Quais estados de **pedido internacional** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-COMEX-01`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → PENDING_APPROVAL → ORDER_SENT → PROFORMA_CONFIRMED → IN_PRODUCTION → READY_TO_SHIP**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Fornecedor confirma 252 pneus e 60 unidades ficam pendentes. Ao abrir o registro, o usuário vê o estado atual e o botão **aprovar e enviar pedido** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-003 — Quais dados de **pedido internacional** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-COMEX-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **proforma, confirmação de fábrica e saldo por SKU**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Fornecedor confirma 252 pneus e 60 unidades ficam pendentes. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **aprovar e enviar pedido**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-004 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **pedido internacional**?

- **PR:** `PR-COMEX-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Fornecedor confirma 252 pneus e 60 unidades ficam pendentes. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo entre criação e confirmação**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-005 — Como deve ser organizada a página de detalhe de **pedido internacional** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-COMEX-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **proforma, confirmação de fábrica e saldo por SKU** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Fornecedor confirma 252 pneus e 60 unidades ficam pendentes. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-006 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **pedido internacional**?

- **PR:** `PR-COMEX-01`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Fornecedor confirma 252 pneus e 60 unidades ficam pendentes. O usuário abre a view de pendências e vê imediatamente itens que afetam **tempo entre criação e confirmação**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-007 — Quais ações rápidas e em lote devem existir para **pedido internacional**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-COMEX-01`
- **Sugestão recomendada:** Deixar **aprovar e enviar pedido** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Fornecedor confirma 252 pneus e 60 unidades ficam pendentes. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-008 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **aprovar e enviar pedido** em **pedido internacional**?

- **PR:** `PR-COMEX-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Fornecedor confirma 252 pneus e 60 unidades ficam pendentes. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-009 — O que deve ser automatizado em **pedido internacional** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-COMEX-01`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Fornecedor confirma 252 pneus e 60 unidades ficam pendentes. O sistema processa em segundo plano e atualiza o indicador de **tempo entre criação e confirmação** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-010 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **pedido internacional** neste PR?

- **PR:** `PR-COMEX-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Fornecedor confirma 252 pneus e 60 unidades ficam pendentes. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-COMEX-02 — Embarque, booking, BL e contêiner

**Objetivo do PR:** entregar o fluxo de embarque com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-08` + `LAY-01`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-COMEX-011 — Qual é o resultado exato que deve encerrar o PR **Embarque, booking, BL e contêiner**, e quais situações devem ficar explicitamente fora dele?

- **PR:** `PR-COMEX-02`
- **Sugestão recomendada:** Definir uma única condição de conclusão observável para embarque, mais uma lista curta de exclusões. O PR não deve misturar melhorias adjacentes que não sejam necessárias ao fluxo principal.
- **Exemplo Sunset:** Um pedido gera dois contêineres com BLs diferentes. O PR termina quando o usuário conclui **confirmar booking e embarque** e vê confirmação, histórico e impacto nos módulos dependentes.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Tela de revisão final com escopo, impacto, pendências e ação explícita de concluir; usar links para voltar e corrigir cada seção.
- **Otimização de tempo e UX:** Evita PRs intermináveis, reduz retrabalho e permite homologação por resultado, não por quantidade de telas.
- **Critério de aceite sugerido:** Há um teste E2E que prova a conclusão de embarque e uma lista de itens fora do escopo aprovada.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-012 — Quais estados de **embarque** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-COMEX-02`
- **Sugestão recomendada:** Usar a máquina de estados **READY_TO_SHIP → BOOKED → SHIPPED → IN_TRANSIT → ARRIVED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Um pedido gera dois contêineres com BLs diferentes. Ao abrir o registro, o usuário vê o estado atual e o botão **confirmar booking e embarque** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-013 — Quais dados de **embarque** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-COMEX-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **booking, BL, contêiner, lacre, ETD e ETA**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Um pedido gera dois contêineres com BLs diferentes. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **confirmar booking e embarque**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-014 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **embarque**?

- **PR:** `PR-COMEX-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Um pedido gera dois contêineres com BLs diferentes. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **desvio de ETA e dias em trânsito**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-015 — Como deve ser organizada a página de detalhe de **embarque** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-COMEX-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **booking, BL, contêiner, lacre, ETD e ETA** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Um pedido gera dois contêineres com BLs diferentes. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-016 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **embarque**?

- **PR:** `PR-COMEX-02`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Um pedido gera dois contêineres com BLs diferentes. O usuário abre a view de pendências e vê imediatamente itens que afetam **desvio de ETA e dias em trânsito**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-017 — Quais ações rápidas e em lote devem existir para **embarque**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-COMEX-02`
- **Sugestão recomendada:** Deixar **confirmar booking e embarque** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Um pedido gera dois contêineres com BLs diferentes. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-018 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **confirmar booking e embarque** em **embarque**?

- **PR:** `PR-COMEX-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Um pedido gera dois contêineres com BLs diferentes. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-019 — O que deve ser automatizado em **embarque** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-COMEX-02`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Um pedido gera dois contêineres com BLs diferentes. O sistema processa em segundo plano e atualiza o indicador de **desvio de ETA e dias em trânsito** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-020 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **embarque** neste PR?

- **PR:** `PR-COMEX-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Um pedido gera dois contêineres com BLs diferentes. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-COMEX-03 — Despacho e regimes aduaneiros

**Objetivo do PR:** entregar o fluxo de despacho aduaneiro com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-08` + `LAY-01`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-COMEX-021 — Qual é o resultado exato que deve encerrar o PR **Despacho e regimes aduaneiros**, e quais situações devem ficar explicitamente fora dele?

- **PR:** `PR-COMEX-03`
- **Sugestão recomendada:** Definir uma única condição de conclusão observável para despacho aduaneiro, mais uma lista curta de exclusões. O PR não deve misturar melhorias adjacentes que não sejam necessárias ao fluxo principal.
- **Exemplo Sunset:** Contêiner fica em ZPA antes de nacionalização definitiva. O PR termina quando o usuário conclui **registrar regime e liberação** e vê confirmação, histórico e impacto nos módulos dependentes.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Tela de revisão final com escopo, impacto, pendências e ação explícita de concluir; usar links para voltar e corrigir cada seção.
- **Otimização de tempo e UX:** Evita PRs intermináveis, reduz retrabalho e permite homologação por resultado, não por quantidade de telas.
- **Critério de aceite sugerido:** Há um teste E2E que prova a conclusão de despacho aduaneiro e uma lista de itens fora do escopo aprovada.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-022 — Quais estados de **despacho aduaneiro** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-COMEX-03`
- **Sugestão recomendada:** Usar a máquina de estados **CREATED → DOCUMENTING → PRESENTED → CHANNEL_ASSIGNED → RELEASED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Contêiner fica em ZPA antes de nacionalização definitiva. Ao abrir o registro, o usuário vê o estado atual e o botão **registrar regime e liberação** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-023 — Quais dados de **despacho aduaneiro** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-COMEX-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **importação definitiva, trânsito, Zona Primária Aduaneira e Zona Franca**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Contêiner fica em ZPA antes de nacionalização definitiva. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **registrar regime e liberação**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-024 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **despacho aduaneiro**?

- **PR:** `PR-COMEX-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Contêiner fica em ZPA antes de nacionalização definitiva. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo em aduana e exigências abertas**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-025 — Como deve ser organizada a página de detalhe de **despacho aduaneiro** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-COMEX-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **importação definitiva, trânsito, Zona Primária Aduaneira e Zona Franca** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Contêiner fica em ZPA antes de nacionalização definitiva. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-026 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **despacho aduaneiro**?

- **PR:** `PR-COMEX-03`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Contêiner fica em ZPA antes de nacionalização definitiva. O usuário abre a view de pendências e vê imediatamente itens que afetam **tempo em aduana e exigências abertas**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-027 — Quais ações rápidas e em lote devem existir para **despacho aduaneiro**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-COMEX-03`
- **Sugestão recomendada:** Deixar **registrar regime e liberação** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Contêiner fica em ZPA antes de nacionalização definitiva. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-028 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **registrar regime e liberação** em **despacho aduaneiro**?

- **PR:** `PR-COMEX-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Contêiner fica em ZPA antes de nacionalização definitiva. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-029 — O que deve ser automatizado em **despacho aduaneiro** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-COMEX-03`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Contêiner fica em ZPA antes de nacionalização definitiva. O sistema processa em segundo plano e atualiza o indicador de **tempo em aduana e exigências abertas** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-030 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **despacho aduaneiro** neste PR?

- **PR:** `PR-COMEX-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Contêiner fica em ZPA antes de nacionalização definitiva. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-COMEX-04 — Documentos, OCR, ocorrências e prazos

**Objetivo do PR:** entregar o fluxo de dossiê documental com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-08` + `LAY-01`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-COMEX-031 — Qual é o resultado exato que deve encerrar o PR **Documentos, OCR, ocorrências e prazos**, e quais situações devem ficar explicitamente fora dele?

- **PR:** `PR-COMEX-04`
- **Sugestão recomendada:** Definir uma única condição de conclusão observável para dossiê documental, mais uma lista curta de exclusões. O PR não deve misturar melhorias adjacentes que não sejam necessárias ao fluxo principal.
- **Exemplo Sunset:** OCR lê invoice e aponta quantidade divergente do packing list. O PR termina quando o usuário conclui **validar documentos e abrir ocorrência** e vê confirmação, histórico e impacto nos módulos dependentes.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Tela de revisão final com escopo, impacto, pendências e ação explícita de concluir; usar links para voltar e corrigir cada seção.
- **Otimização de tempo e UX:** Evita PRs intermináveis, reduz retrabalho e permite homologação por resultado, não por quantidade de telas.
- **Critério de aceite sugerido:** Há um teste E2E que prova a conclusão de dossiê documental e uma lista de itens fora do escopo aprovada.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-032 — Quais estados de **dossiê documental** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-COMEX-04`
- **Sugestão recomendada:** Usar a máquina de estados **INCOMPLETE → READY_FOR_REVIEW → VALIDATED → DIVERGENT → RESOLVED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** OCR lê invoice e aponta quantidade divergente do packing list. Ao abrir o registro, o usuário vê o estado atual e o botão **validar documentos e abrir ocorrência** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-033 — Quais dados de **dossiê documental** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-COMEX-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **invoice, packing list, BL, certificados, comprovantes e e-mails**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** OCR lê invoice e aponta quantidade divergente do packing list. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **validar documentos e abrir ocorrência**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-034 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **dossiê documental**?

- **PR:** `PR-COMEX-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** OCR lê invoice e aponta quantidade divergente do packing list. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **documentos pendentes e divergências**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-035 — Como deve ser organizada a página de detalhe de **dossiê documental** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-COMEX-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **invoice, packing list, BL, certificados, comprovantes e e-mails** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** OCR lê invoice e aponta quantidade divergente do packing list. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-036 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **dossiê documental**?

- **PR:** `PR-COMEX-04`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** OCR lê invoice e aponta quantidade divergente do packing list. O usuário abre a view de pendências e vê imediatamente itens que afetam **documentos pendentes e divergências**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-037 — Quais ações rápidas e em lote devem existir para **dossiê documental**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-COMEX-04`
- **Sugestão recomendada:** Deixar **validar documentos e abrir ocorrência** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** OCR lê invoice e aponta quantidade divergente do packing list. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-038 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **validar documentos e abrir ocorrência** em **dossiê documental**?

- **PR:** `PR-COMEX-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** OCR lê invoice e aponta quantidade divergente do packing list. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-039 — O que deve ser automatizado em **dossiê documental** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-COMEX-04`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** OCR lê invoice e aponta quantidade divergente do packing list. O sistema processa em segundo plano e atualiza o indicador de **documentos pendentes e divergências** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-040 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **dossiê documental** neste PR?

- **PR:** `PR-COMEX-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** OCR lê invoice e aponta quantidade divergente do packing list. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-COMEX-05 — Recebimento, devolução e fechamento

**Objetivo do PR:** entregar o fluxo de processo de importação com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-08` + `LAY-01`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-COMEX-041 — Qual é o resultado exato que deve encerrar o PR **Recebimento, devolução e fechamento**, e quais situações devem ficar explicitamente fora dele?

- **PR:** `PR-COMEX-05`
- **Sugestão recomendada:** Definir uma única condição de conclusão observável para processo de importação, mais uma lista curta de exclusões. O PR não deve misturar melhorias adjacentes que não sejam necessárias ao fluxo principal.
- **Exemplo Sunset:** Depósito confirma descarga, mas custo portuário chega depois. O PR termina quando o usuário conclui **encerrar ou reabrir importação** e vê confirmação, histórico e impacto nos módulos dependentes.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Tela de revisão final com escopo, impacto, pendências e ação explícita de concluir; usar links para voltar e corrigir cada seção.
- **Otimização de tempo e UX:** Evita PRs intermináveis, reduz retrabalho e permite homologação por resultado, não por quantidade de telas.
- **Critério de aceite sugerido:** Há um teste E2E que prova a conclusão de processo de importação e uma lista de itens fora do escopo aprovada.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-042 — Quais estados de **processo de importação** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-COMEX-05`
- **Sugestão recomendada:** Usar a máquina de estados **RELEASED → DECONSOLIDATED → WAREHOUSE_CONFIRMED → CONTAINER_RETURNED → CLOSED → REOPENED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Depósito confirma descarga, mas custo portuário chega depois. Ao abrir o registro, o usuário vê o estado atual e o botão **encerrar ou reabrir importação** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-043 — Quais dados de **processo de importação** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-COMEX-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **confirmação do depósito, remito, devolução e custos tardios**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Depósito confirma descarga, mas custo portuário chega depois. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **encerrar ou reabrir importação**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-044 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **processo de importação**?

- **PR:** `PR-COMEX-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Depósito confirma descarga, mas custo portuário chega depois. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **dias até fechamento e custos tardios**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-045 — Como deve ser organizada a página de detalhe de **processo de importação** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-COMEX-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **confirmação do depósito, remito, devolução e custos tardios** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Depósito confirma descarga, mas custo portuário chega depois. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-046 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **processo de importação**?

- **PR:** `PR-COMEX-05`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Depósito confirma descarga, mas custo portuário chega depois. O usuário abre a view de pendências e vê imediatamente itens que afetam **dias até fechamento e custos tardios**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-047 — Quais ações rápidas e em lote devem existir para **processo de importação**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-COMEX-05`
- **Sugestão recomendada:** Deixar **encerrar ou reabrir importação** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Depósito confirma descarga, mas custo portuário chega depois. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-048 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **encerrar ou reabrir importação** em **processo de importação**?

- **PR:** `PR-COMEX-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Depósito confirma descarga, mas custo portuário chega depois. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-049 — O que deve ser automatizado em **processo de importação** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-COMEX-05`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Depósito confirma descarga, mas custo portuário chega depois. O sistema processa em segundo plano e atualiza o indicador de **dias até fechamento e custos tardios** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMEX-050 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **processo de importação** neste PR?

- **PR:** `PR-COMEX-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Depósito confirma descarga, mas custo portuário chega depois. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-01, DOM-04, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________


---

# Landed cost — 40 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: UX-01, UX-02.

## PR-LANDED-01 — Catálogo de componentes e elegibilidade

**Objetivo do PR:** entregar o fluxo de componente de custo com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-LANDED-001 — Quais estados de **componente de custo** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → ACTIVE → INACTIVE → SUPERSEDED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. Ao abrir o registro, o usuário vê o estado atual e o botão **publicar regra de elegibilidade** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-002 — Quais dados de **componente de custo** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **FOB, fretes, seguros, porto, despachante, direitos e tributos recuperáveis**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **publicar regra de elegibilidade**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **componente de custo**?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **regras sem classificação**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-004 — Como deve ser organizada a página de detalhe de **componente de custo** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **FOB, fretes, seguros, porto, despachante, direitos e tributos recuperáveis** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-005 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **componente de custo**?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. O usuário abre a view de pendências e vê imediatamente itens que afetam **regras sem classificação**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-006 — Quais ações rápidas e em lote devem existir para **componente de custo**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Deixar **publicar regra de elegibilidade** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-007 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **publicar regra de elegibilidade** em **componente de custo**?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-008 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **componente de custo** neste PR?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-LANDED-02 — Pools provisórios e documentos

**Objetivo do PR:** entregar o fluxo de pool de custo com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-LANDED-009 — Quais estados de **pool de custo** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → ESTIMATED → DOCUMENTED → READY_TO_CALCULATE**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. Ao abrir o registro, o usuário vê o estado atual e o botão **completar pool provisório** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-010 — Quais dados de **pool de custo** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **estimativas, faturas, câmbio e vínculo ao despacho**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **completar pool provisório**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-011 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **pool de custo**?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **percentual documentado do pool**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-012 — Como deve ser organizada a página de detalhe de **pool de custo** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **estimativas, faturas, câmbio e vínculo ao despacho** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-013 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **pool de custo**?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. O usuário abre a view de pendências e vê imediatamente itens que afetam **percentual documentado do pool**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-014 — Quais ações rápidas e em lote devem existir para **pool de custo**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Deixar **completar pool provisório** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-015 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **completar pool provisório** em **pool de custo**?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-016 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **pool de custo** neste PR?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-LANDED-03 — Rateio e simulador

**Objetivo do PR:** entregar o fluxo de simulação de rateio com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-LANDED-017 — Quais estados de **simulação de rateio** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → CALCULATED → PENDING_REVIEW → APPROVED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. Ao abrir o registro, o usuário vê o estado atual e o botão **calcular e aprovar rateio** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-018 — Quais dados de **simulação de rateio** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **bases FOB, quantidade, peso, volume e regra configurada**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **calcular e aprovar rateio**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-019 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **simulação de rateio**?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **diferença de arredondamento**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-020 — Como deve ser organizada a página de detalhe de **simulação de rateio** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **bases FOB, quantidade, peso, volume e regra configurada** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-021 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **simulação de rateio**?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. O usuário abre a view de pendências e vê imediatamente itens que afetam **diferença de arredondamento**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-022 — Quais ações rápidas e em lote devem existir para **simulação de rateio**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Deixar **calcular e aprovar rateio** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-023 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **calcular e aprovar rateio** em **simulação de rateio**?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-024 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **simulação de rateio** neste PR?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-LANDED-04 — Aplicação a estoque e margem

**Objetivo do PR:** entregar o fluxo de versão de custo com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-LANDED-025 — Quais estados de **versão de custo** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Usar a máquina de estados **APPROVED → APPLIED → REOPENED → SUPERSEDED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. Ao abrir o registro, o usuário vê o estado atual e o botão **aplicar custo ao estoque** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-026 — Quais dados de **versão de custo** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **custo contábil, gerencial, cash-out e provisório**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **aplicar custo ao estoque**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-027 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **versão de custo**?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de recalculo**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-028 — Como deve ser organizada a página de detalhe de **versão de custo** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **custo contábil, gerencial, cash-out e provisório** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-029 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **versão de custo**?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. O usuário abre a view de pendências e vê imediatamente itens que afetam **tempo de recalculo**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-030 — Quais ações rápidas e em lote devem existir para **versão de custo**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Deixar **aplicar custo ao estoque** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-031 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **aplicar custo ao estoque** em **versão de custo**?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-032 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **versão de custo** neste PR?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-LANDED-05 — Custos tardios e reconciliação

**Objetivo do PR:** entregar o fluxo de reconciliação de custo com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-LANDED-033 — Quais estados de **reconciliação de custo** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Usar a máquina de estados **OPEN → MATCHED → DIFFERENCE → ADJUSTED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. Ao abrir o registro, o usuário vê o estado atual e o botão **reprocessar custo tardio** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-034 — Quais dados de **reconciliação de custo** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **estoque remanescente, parcela vendida e ajuste do período**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **reprocessar custo tardio**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-035 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **reconciliação de custo**?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **pool versus documentos versus estoque**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-036 — Como deve ser organizada a página de detalhe de **reconciliação de custo** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **estoque remanescente, parcela vendida e ajuste do período** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-037 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **reconciliação de custo**?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. O usuário abre a view de pendências e vê imediatamente itens que afetam **pool versus documentos versus estoque**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-038 — Quais ações rápidas e em lote devem existir para **reconciliação de custo**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Deixar **reprocessar custo tardio** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-039 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **reprocessar custo tardio** em **reconciliação de custo**?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-040 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **reconciliação de custo** neste PR?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________


---

# Fiscal — 45 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: DOM-03, UX-06, UX-07.

## PR-FISCAL-01 — Motor tributário e vigências

**Objetivo do PR:** entregar o fluxo de regra tributária com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-FISCAL-001 — Quais estados de **regra tributária** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-FISCAL-01`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → VALIDATED → ACTIVE → EXPIRED → SUPERSEDED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** IIBB muda por província e data. Ao abrir o registro, o usuário vê o estado atual e o botão **publicar regra fiscal** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-002 — Quais dados de **regra tributária** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-FISCAL-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **jurisdição, condição, base, alíquota, vigência e fonte**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** IIBB muda por província e data. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **publicar regra fiscal**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **regra tributária**?

- **PR:** `PR-FISCAL-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** IIBB muda por província e data. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **regras vencidas ou sem fonte**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-004 — Como deve ser organizada a página de detalhe de **regra tributária** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-FISCAL-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **jurisdição, condição, base, alíquota, vigência e fonte** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** IIBB muda por província e data. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-005 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **regra tributária**?

- **PR:** `PR-FISCAL-01`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** IIBB muda por província e data. O usuário abre a view de pendências e vê imediatamente itens que afetam **regras vencidas ou sem fonte**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-006 — Quais ações rápidas e em lote devem existir para **regra tributária**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-FISCAL-01`
- **Sugestão recomendada:** Deixar **publicar regra fiscal** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** IIBB muda por província e data. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-007 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **publicar regra fiscal** em **regra tributária**?

- **PR:** `PR-FISCAL-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** IIBB muda por província e data. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-008 — O que deve ser automatizado em **regra tributária** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-FISCAL-01`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** IIBB muda por província e data. O sistema processa em segundo plano e atualiza o indicador de **regras vencidas ou sem fonte** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-009 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **regra tributária** neste PR?

- **PR:** `PR-FISCAL-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** IIBB muda por província e data. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-FISCAL-02 — Emissão SI Factura/ARCA

**Objetivo do PR:** entregar o fluxo de comprovante fiscal com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-FISCAL-010 — Quais estados de **comprovante fiscal** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-FISCAL-02`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → VALIDATED → QUEUED → PENDING_AUTHORIZATION → AUTHORIZED → REJECTED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Venda de pneu envia detalhe e despacho à SI Factura. Ao abrir o registro, o usuário vê o estado atual e o botão **autorizar comprovante** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-011 — Quais dados de **comprovante fiscal** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-FISCAL-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **Factura A/B/C, linhas, despacho e resposta do provedor**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Venda de pneu envia detalhe e despacho à SI Factura. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **autorizar comprovante**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-012 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **comprovante fiscal**?

- **PR:** `PR-FISCAL-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Venda de pneu envia detalhe e despacho à SI Factura. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de autorização e rejeições**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-013 — Como deve ser organizada a página de detalhe de **comprovante fiscal** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-FISCAL-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **Factura A/B/C, linhas, despacho e resposta do provedor** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Venda de pneu envia detalhe e despacho à SI Factura. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-014 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **comprovante fiscal**?

- **PR:** `PR-FISCAL-02`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Venda de pneu envia detalhe e despacho à SI Factura. O usuário abre a view de pendências e vê imediatamente itens que afetam **tempo de autorização e rejeições**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-015 — Quais ações rápidas e em lote devem existir para **comprovante fiscal**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-FISCAL-02`
- **Sugestão recomendada:** Deixar **autorizar comprovante** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Venda de pneu envia detalhe e despacho à SI Factura. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-016 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **autorizar comprovante** em **comprovante fiscal**?

- **PR:** `PR-FISCAL-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Venda de pneu envia detalhe e despacho à SI Factura. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-017 — O que deve ser automatizado em **comprovante fiscal** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-FISCAL-02`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Venda de pneu envia detalhe e despacho à SI Factura. O sistema processa em segundo plano e atualiza o indicador de **tempo de autorização e rejeições** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-018 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **comprovante fiscal** neste PR?

- **PR:** `PR-FISCAL-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Venda de pneu envia detalhe e despacho à SI Factura. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-FISCAL-03 — Notas, remitos e contingência

**Objetivo do PR:** entregar o fluxo de documento fiscal relacionado com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-FISCAL-019 — Quais estados de **documento fiscal relacionado** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-FISCAL-03`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → LINKED → AUTHORIZED → CANCELLED → IMPORTED_EXTERNAL**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** ARCA indisponível gera comprovante interno pendente. Ao abrir o registro, o usuário vê o estado atual e o botão **emitir nota ou remito** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-020 — Quais dados de **documento fiscal relacionado** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-FISCAL-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **nota de crédito/débito, remito e comprovante interno não fiscal**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** ARCA indisponível gera comprovante interno pendente. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **emitir nota ou remito**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-021 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **documento fiscal relacionado**?

- **PR:** `PR-FISCAL-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** ARCA indisponível gera comprovante interno pendente. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **pendências de autorização**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-022 — Como deve ser organizada a página de detalhe de **documento fiscal relacionado** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-FISCAL-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **nota de crédito/débito, remito e comprovante interno não fiscal** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** ARCA indisponível gera comprovante interno pendente. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-023 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **documento fiscal relacionado**?

- **PR:** `PR-FISCAL-03`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** ARCA indisponível gera comprovante interno pendente. O usuário abre a view de pendências e vê imediatamente itens que afetam **pendências de autorização**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-024 — Quais ações rápidas e em lote devem existir para **documento fiscal relacionado**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-FISCAL-03`
- **Sugestão recomendada:** Deixar **emitir nota ou remito** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** ARCA indisponível gera comprovante interno pendente. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-025 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **emitir nota ou remito** em **documento fiscal relacionado**?

- **PR:** `PR-FISCAL-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** ARCA indisponível gera comprovante interno pendente. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-026 — O que deve ser automatizado em **documento fiscal relacionado** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-FISCAL-03`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** ARCA indisponível gera comprovante interno pendente. O sistema processa em segundo plano e atualiza o indicador de **pendências de autorização** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-027 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **documento fiscal relacionado** neste PR?

- **PR:** `PR-FISCAL-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** ARCA indisponível gera comprovante interno pendente. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-FISCAL-04 — Percepções, retenções e obrigações

**Objetivo do PR:** entregar o fluxo de apuração fiscal com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-FISCAL-028 — Quais estados de **apuração fiscal** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-FISCAL-04`
- **Sugestão recomendada:** Usar a máquina de estados **OPEN → CALCULATED → REVIEWED → FILED → PAID → RECONCILED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Crédito de IVA é conciliado com compras e importação. Ao abrir o registro, o usuário vê o estado atual e o botão **calcular e fechar obrigação** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-029 — Quais dados de **apuração fiscal** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-FISCAL-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **IVA, IIBB, percepções, retenções e créditos**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Crédito de IVA é conciliado com compras e importação. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **calcular e fechar obrigação**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-030 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **apuração fiscal**?

- **PR:** `PR-FISCAL-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Crédito de IVA é conciliado com compras e importação. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **diferença de apuração**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-031 — Como deve ser organizada a página de detalhe de **apuração fiscal** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-FISCAL-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **IVA, IIBB, percepções, retenções e créditos** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Crédito de IVA é conciliado com compras e importação. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-032 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **apuração fiscal**?

- **PR:** `PR-FISCAL-04`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Crédito de IVA é conciliado com compras e importação. O usuário abre a view de pendências e vê imediatamente itens que afetam **diferença de apuração**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-033 — Quais ações rápidas e em lote devem existir para **apuração fiscal**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-FISCAL-04`
- **Sugestão recomendada:** Deixar **calcular e fechar obrigação** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Crédito de IVA é conciliado com compras e importação. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-034 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **calcular e fechar obrigação** em **apuração fiscal**?

- **PR:** `PR-FISCAL-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Crédito de IVA é conciliado com compras e importação. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-035 — O que deve ser automatizado em **apuração fiscal** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-FISCAL-04`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Crédito de IVA é conciliado com compras e importação. O sistema processa em segundo plano e atualiza o indicador de **diferença de apuração** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-036 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **apuração fiscal** neste PR?

- **PR:** `PR-FISCAL-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Crédito de IVA é conciliado com compras e importação. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-FISCAL-05 — Reconciliação e auditoria fiscal

**Objetivo do PR:** entregar o fluxo de reconciliação fiscal com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-FISCAL-037 — Quais estados de **reconciliação fiscal** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-FISCAL-05`
- **Sugestão recomendada:** Usar a máquina de estados **OPEN → MATCHED → DIFFERENCE → RESOLVED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** CAE existe na SI Factura, mas falta no ERP. Ao abrir o registro, o usuário vê o estado atual e o botão **resolver divergência fiscal** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-038 — Quais dados de **reconciliação fiscal** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-FISCAL-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **ERP, SI Factura, ARCA e razão contábil**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** CAE existe na SI Factura, mas falta no ERP. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **resolver divergência fiscal**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-039 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **reconciliação fiscal**?

- **PR:** `PR-FISCAL-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** CAE existe na SI Factura, mas falta no ERP. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **documentos sem match**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-040 — Como deve ser organizada a página de detalhe de **reconciliação fiscal** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-FISCAL-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **ERP, SI Factura, ARCA e razão contábil** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** CAE existe na SI Factura, mas falta no ERP. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-041 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **reconciliação fiscal**?

- **PR:** `PR-FISCAL-05`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** CAE existe na SI Factura, mas falta no ERP. O usuário abre a view de pendências e vê imediatamente itens que afetam **documentos sem match**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-042 — Quais ações rápidas e em lote devem existir para **reconciliação fiscal**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-FISCAL-05`
- **Sugestão recomendada:** Deixar **resolver divergência fiscal** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** CAE existe na SI Factura, mas falta no ERP. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-043 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **resolver divergência fiscal** em **reconciliação fiscal**?

- **PR:** `PR-FISCAL-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** CAE existe na SI Factura, mas falta no ERP. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-044 — O que deve ser automatizado em **reconciliação fiscal** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-FISCAL-05`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** CAE existe na SI Factura, mas falta no ERP. O sistema processa em segundo plano e atualiza o indicador de **documentos sem match** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-FISCAL-045 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **reconciliação fiscal** neste PR?

- **PR:** `PR-FISCAL-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** CAE existe na SI Factura, mas falta no ERP. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________


---

# Contábil — fundação — 45 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: UX-01, UX-02.

## PR-ACCOUNTING-01 — Plano de contas e dimensões

**Objetivo do PR:** entregar o fluxo de conta contábil com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-ACCOUNTING-001 — Quais estados de **conta contábil** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-ACCOUNTING-01`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → ACTIVE → BLOCKED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Conta de frete internacional aceita dimensão importação. Ao abrir o registro, o usuário vê o estado atual e o botão **publicar conta ou dimensão** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-002 — Quais dados de **conta contábil** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-ACCOUNTING-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **conta, natureza, moeda, centro de custo, canal, região e depósito**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Conta de frete internacional aceita dimensão importação. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **publicar conta ou dimensão**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **conta contábil**?

- **PR:** `PR-ACCOUNTING-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Conta de frete internacional aceita dimensão importação. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **lançamentos sem dimensão**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-004 — Como deve ser organizada a página de detalhe de **conta contábil** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-ACCOUNTING-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **conta, natureza, moeda, centro de custo, canal, região e depósito** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Conta de frete internacional aceita dimensão importação. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-005 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **conta contábil**?

- **PR:** `PR-ACCOUNTING-01`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Conta de frete internacional aceita dimensão importação. O usuário abre a view de pendências e vê imediatamente itens que afetam **lançamentos sem dimensão**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-006 — Quais ações rápidas e em lote devem existir para **conta contábil**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-ACCOUNTING-01`
- **Sugestão recomendada:** Deixar **publicar conta ou dimensão** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Conta de frete internacional aceita dimensão importação. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-007 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **publicar conta ou dimensão** em **conta contábil**?

- **PR:** `PR-ACCOUNTING-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Conta de frete internacional aceita dimensão importação. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-008 — O que deve ser automatizado em **conta contábil** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-ACCOUNTING-01`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Conta de frete internacional aceita dimensão importação. O sistema processa em segundo plano e atualiza o indicador de **lançamentos sem dimensão** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-009 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **conta contábil** neste PR?

- **PR:** `PR-ACCOUNTING-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Conta de frete internacional aceita dimensão importação. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-ACCOUNTING-02 — Motor de lançamentos e journals

**Objetivo do PR:** entregar o fluxo de lançamento contábil com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-ACCOUNTING-010 — Quais estados de **lançamento contábil** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-ACCOUNTING-02`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → VALIDATED → POSTED → REVERSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Recebimento gera débito em banco e crédito em cliente. Ao abrir o registro, o usuário vê o estado atual e o botão **postar ou reverter journal** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-011 — Quais dados de **lançamento contábil** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-ACCOUNTING-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **débitos, créditos, origem, documento e regra de posting**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Recebimento gera débito em banco e crédito em cliente. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **postar ou reverter journal**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-012 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **lançamento contábil**?

- **PR:** `PR-ACCOUNTING-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Recebimento gera débito em banco e crédito em cliente. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **journals desbalanceados**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-013 — Como deve ser organizada a página de detalhe de **lançamento contábil** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-ACCOUNTING-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **débitos, créditos, origem, documento e regra de posting** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Recebimento gera débito em banco e crédito em cliente. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-014 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **lançamento contábil**?

- **PR:** `PR-ACCOUNTING-02`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Recebimento gera débito em banco e crédito em cliente. O usuário abre a view de pendências e vê imediatamente itens que afetam **journals desbalanceados**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-015 — Quais ações rápidas e em lote devem existir para **lançamento contábil**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-ACCOUNTING-02`
- **Sugestão recomendada:** Deixar **postar ou reverter journal** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Recebimento gera débito em banco e crédito em cliente. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-016 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **postar ou reverter journal** em **lançamento contábil**?

- **PR:** `PR-ACCOUNTING-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Recebimento gera débito em banco e crédito em cliente. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-017 — O que deve ser automatizado em **lançamento contábil** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-ACCOUNTING-02`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Recebimento gera débito em banco e crédito em cliente. O sistema processa em segundo plano e atualiza o indicador de **journals desbalanceados** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-018 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **lançamento contábil** neste PR?

- **PR:** `PR-ACCOUNTING-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Recebimento gera débito em banco e crédito em cliente. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-ACCOUNTING-03 — Moedas e diferenças cambiais

**Objetivo do PR:** entregar o fluxo de posição monetária com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-ACCOUNTING-019 — Quais estados de **posição monetária** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-ACCOUNTING-03`
- **Sugestão recomendada:** Usar a máquina de estados **OPEN → REVALUED → REALIZED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Dívida de US$25.000 é paga com taxa diferente. Ao abrir o registro, o usuário vê o estado atual e o botão **reavaliar ou liquidar posição** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-020 — Quais dados de **posição monetária** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-ACCOUNTING-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **USD original, ARS funcional, taxa e diferença realizada/não realizada**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Dívida de US$25.000 é paga com taxa diferente. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **reavaliar ou liquidar posição**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-021 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **posição monetária**?

- **PR:** `PR-ACCOUNTING-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Dívida de US$25.000 é paga com taxa diferente. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **diferença cambial por conta**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-022 — Como deve ser organizada a página de detalhe de **posição monetária** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-ACCOUNTING-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **USD original, ARS funcional, taxa e diferença realizada/não realizada** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Dívida de US$25.000 é paga com taxa diferente. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-023 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **posição monetária**?

- **PR:** `PR-ACCOUNTING-03`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Dívida de US$25.000 é paga com taxa diferente. O usuário abre a view de pendências e vê imediatamente itens que afetam **diferença cambial por conta**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-024 — Quais ações rápidas e em lote devem existir para **posição monetária**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-ACCOUNTING-03`
- **Sugestão recomendada:** Deixar **reavaliar ou liquidar posição** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Dívida de US$25.000 é paga com taxa diferente. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-025 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **reavaliar ou liquidar posição** em **posição monetária**?

- **PR:** `PR-ACCOUNTING-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Dívida de US$25.000 é paga com taxa diferente. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-026 — O que deve ser automatizado em **posição monetária** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-ACCOUNTING-03`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Dívida de US$25.000 é paga com taxa diferente. O sistema processa em segundo plano e atualiza o indicador de **diferença cambial por conta** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-027 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **posição monetária** neste PR?

- **PR:** `PR-ACCOUNTING-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Dívida de US$25.000 é paga com taxa diferente. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-ACCOUNTING-04 — Livros, períodos e controles

**Objetivo do PR:** entregar o fluxo de período contábil com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-ACCOUNTING-028 — Quais estados de **período contábil** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-ACCOUNTING-04`
- **Sugestão recomendada:** Usar a máquina de estados **OPEN → SOFT_CLOSED → HARD_CLOSED → REOPENED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Mês fechado impede postagem comum. Ao abrir o registro, o usuário vê o estado atual e o botão **fechar ou reabrir período** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-029 — Quais dados de **período contábil** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-ACCOUNTING-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **calendário, bloqueios, exceções e aprovadores**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Mês fechado impede postagem comum. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **fechar ou reabrir período**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-030 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **período contábil**?

- **PR:** `PR-ACCOUNTING-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Mês fechado impede postagem comum. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **postagens após fechamento**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-031 — Como deve ser organizada a página de detalhe de **período contábil** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-ACCOUNTING-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **calendário, bloqueios, exceções e aprovadores** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Mês fechado impede postagem comum. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-032 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **período contábil**?

- **PR:** `PR-ACCOUNTING-04`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Mês fechado impede postagem comum. O usuário abre a view de pendências e vê imediatamente itens que afetam **postagens após fechamento**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-033 — Quais ações rápidas e em lote devem existir para **período contábil**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-ACCOUNTING-04`
- **Sugestão recomendada:** Deixar **fechar ou reabrir período** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Mês fechado impede postagem comum. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-034 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **fechar ou reabrir período** em **período contábil**?

- **PR:** `PR-ACCOUNTING-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Mês fechado impede postagem comum. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-035 — O que deve ser automatizado em **período contábil** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-ACCOUNTING-04`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Mês fechado impede postagem comum. O sistema processa em segundo plano e atualiza o indicador de **postagens após fechamento** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-036 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **período contábil** neste PR?

- **PR:** `PR-ACCOUNTING-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Mês fechado impede postagem comum. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-ACCOUNTING-05 — Razão, balanço, DRE e drill-down

**Objetivo do PR:** entregar o fluxo de relatório contábil com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-ACCOUNTING-037 — Quais estados de **relatório contábil** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-ACCOUNTING-05`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → GENERATED → REVIEWED → PUBLISHED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Clique no saldo abre journal e documento origem. Ao abrir o registro, o usuário vê o estado atual e o botão **gerar e publicar demonstração** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-038 — Quais dados de **relatório contábil** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-ACCOUNTING-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **razão, balancete, balanço, DRE e fluxo de caixa**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Clique no saldo abre journal e documento origem. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **gerar e publicar demonstração**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-039 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **relatório contábil**?

- **PR:** `PR-ACCOUNTING-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Clique no saldo abre journal e documento origem. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de geração e diferenças**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-040 — Como deve ser organizada a página de detalhe de **relatório contábil** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-ACCOUNTING-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **razão, balancete, balanço, DRE e fluxo de caixa** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Clique no saldo abre journal e documento origem. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-041 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **relatório contábil**?

- **PR:** `PR-ACCOUNTING-05`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Clique no saldo abre journal e documento origem. O usuário abre a view de pendências e vê imediatamente itens que afetam **tempo de geração e diferenças**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-042 — Quais ações rápidas e em lote devem existir para **relatório contábil**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-ACCOUNTING-05`
- **Sugestão recomendada:** Deixar **gerar e publicar demonstração** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Clique no saldo abre journal e documento origem. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-043 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **gerar e publicar demonstração** em **relatório contábil**?

- **PR:** `PR-ACCOUNTING-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Clique no saldo abre journal e documento origem. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-044 — O que deve ser automatizado em **relatório contábil** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-ACCOUNTING-05`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Clique no saldo abre journal e documento origem. O sistema processa em segundo plano e atualiza o indicador de **tempo de geração e diferenças** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-ACCOUNTING-045 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **relatório contábil** neste PR?

- **PR:** `PR-ACCOUNTING-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Clique no saldo abre journal e documento origem. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________


---

# Estoque — 40 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: DOM-02, UX-01, UX-02.

## PR-INVENTORY-01 — Depósitos, posições e disponibilidade

**Objetivo do PR:** entregar o fluxo de posição de estoque com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-INVENTORY-001 — Quais estados de **posição de estoque** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Usar a máquina de estados **ACTIVE → BLOCKED → INACTIVE**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. Ao abrir o registro, o usuário vê o estado atual e o botão **configurar posição e disponibilidade** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-002 — Quais dados de **posição de estoque** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **depósito, zona, rua, rack, nível e posição**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **configurar posição e disponibilidade**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **posição de estoque**?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **posições sem saldo confiável**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-004 — Como deve ser organizada a página de detalhe de **posição de estoque** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **depósito, zona, rua, rack, nível e posição** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-005 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **posição de estoque**?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. O usuário abre a view de pendências e vê imediatamente itens que afetam **posições sem saldo confiável**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-006 — Quais ações rápidas e em lote devem existir para **posição de estoque**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Deixar **configurar posição e disponibilidade** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-007 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **configurar posição e disponibilidade** em **posição de estoque**?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-008 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **posição de estoque** neste PR?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-INVENTORY-02 — Recebimentos e movimentos

**Objetivo do PR:** entregar o fluxo de movimento de estoque com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-INVENTORY-009 — Quais estados de **movimento de estoque** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → CONFIRMED → POSTED → REVERSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. Ao abrir o registro, o usuário vê o estado atual e o botão **confirmar entrada ou transferência** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-010 — Quais dados de **movimento de estoque** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **SKU, despacho, contêiner, origem, destino e evidência**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **confirmar entrada ou transferência**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-011 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **movimento de estoque**?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de confirmação**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-012 — Como deve ser organizada a página de detalhe de **movimento de estoque** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **SKU, despacho, contêiner, origem, destino e evidência** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-013 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **movimento de estoque**?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. O usuário abre a view de pendências e vê imediatamente itens que afetam **tempo de confirmação**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-014 — Quais ações rápidas e em lote devem existir para **movimento de estoque**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Deixar **confirmar entrada ou transferência** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-015 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **confirmar entrada ou transferência** em **movimento de estoque**?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-016 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **movimento de estoque** neste PR?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-INVENTORY-03 — Reserva, alocação e FIFO

**Objetivo do PR:** entregar o fluxo de reserva de estoque com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-INVENTORY-017 — Quais estados de **reserva de estoque** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Usar a máquina de estados **REQUESTED → RESERVED → PARTIALLY_RELEASED → RELEASED → CANCELLED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. Ao abrir o registro, o usuário vê o estado atual e o botão **reservar e alocar camada FIFO** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-018 — Quais dados de **reserva de estoque** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **pedido, SKU, depósito, despacho e quantidade**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **reservar e alocar camada FIFO**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-019 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **reserva de estoque**?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **reservas vencidas**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-020 — Como deve ser organizada a página de detalhe de **reserva de estoque** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **pedido, SKU, depósito, despacho e quantidade** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-021 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **reserva de estoque**?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. O usuário abre a view de pendências e vê imediatamente itens que afetam **reservas vencidas**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-022 — Quais ações rápidas e em lote devem existir para **reserva de estoque**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Deixar **reservar e alocar camada FIFO** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-023 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **reservar e alocar camada FIFO** em **reserva de estoque**?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-024 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **reserva de estoque** neste PR?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-INVENTORY-04 — Sincronização com operadores

**Objetivo do PR:** entregar o fluxo de snapshot do operador com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-INVENTORY-025 — Quais estados de **snapshot do operador** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Usar a máquina de estados **RECEIVED → VALIDATED → MATCHED → DIFFERENCE → ACCEPTED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. Ao abrir o registro, o usuário vê o estado atual e o botão **importar e conciliar arquivo/API** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-026 — Quais dados de **snapshot do operador** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **arquivo semanal, API, saldo e último movimento**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **importar e conciliar arquivo/API**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-027 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **snapshot do operador**?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **diferenças por operador**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-028 — Como deve ser organizada a página de detalhe de **snapshot do operador** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **arquivo semanal, API, saldo e último movimento** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-029 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **snapshot do operador**?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. O usuário abre a view de pendências e vê imediatamente itens que afetam **diferenças por operador**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-030 — Quais ações rápidas e em lote devem existir para **snapshot do operador**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Deixar **importar e conciliar arquivo/API** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-031 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **importar e conciliar arquivo/API** em **snapshot do operador**?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-032 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **snapshot do operador** neste PR?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-INVENTORY-05 — Ajustes, perdas e relatórios

**Objetivo do PR:** entregar o fluxo de ajuste de estoque com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-INVENTORY-033 — Quais estados de **ajuste de estoque** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Usar a máquina de estados **PROPOSED → RECOUNTED → APPROVED → POSTED → CHARGEBACK**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. Ao abrir o registro, o usuário vê o estado atual e o botão **aprovar perda ou correção** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-034 — Quais dados de **ajuste de estoque** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **recontagem, causa, conta a cobrar e evidência**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **aprovar perda ou correção**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-035 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **ajuste de estoque**?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **ajustes e perdas**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-036 — Como deve ser organizada a página de detalhe de **ajuste de estoque** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **recontagem, causa, conta a cobrar e evidência** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-037 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **ajuste de estoque**?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. O usuário abre a view de pendências e vê imediatamente itens que afetam **ajustes e perdas**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-038 — Quais ações rápidas e em lote devem existir para **ajuste de estoque**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Deixar **aprovar perda ou correção** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-039 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **aprovar perda ou correção** em **ajuste de estoque**?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-040 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **ajuste de estoque** neste PR?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________


---

# Tesouraria — 45 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: DOM-04, UX-03, UX-06.

## PR-TREASURY-01 — Contas bancárias e posição de caixa

**Objetivo do PR:** entregar o fluxo de conta bancária com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-TREASURY-001 — Quais estados de **conta bancária** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Usar a máquina de estados **ACTIVE → RESTRICTED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. Ao abrir o registro, o usuário vê o estado atual e o botão **registrar e conciliar conta** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-002 — Quais dados de **conta bancária** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **banco, país, ARS/USD, saldo contábil, conciliado e disponível**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **registrar e conciliar conta**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **conta bancária**?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **posição de caixa por moeda**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-004 — Como deve ser organizada a página de detalhe de **conta bancária** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **banco, país, ARS/USD, saldo contábil, conciliado e disponível** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-005 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **conta bancária**?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. O usuário abre a view de pendências e vê imediatamente itens que afetam **posição de caixa por moeda**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-006 — Quais ações rápidas e em lote devem existir para **conta bancária**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Deixar **registrar e conciliar conta** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-007 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **registrar e conciliar conta** em **conta bancária**?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-008 — O que deve ser automatizado em **conta bancária** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. O sistema processa em segundo plano e atualiza o indicador de **posição de caixa por moeda** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-009 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **conta bancária** neste PR?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-TREASURY-02 — Pagamentos e terceiros pagadores

**Objetivo do PR:** entregar o fluxo de ordem de pagamento com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-TREASURY-010 — Quais estados de **ordem de pagamento** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → PENDING_APPROVAL → SCHEDULED → EXECUTED → RECONCILED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. Ao abrir o registro, o usuário vê o estado atual e o botão **pagar documentos selecionados** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-011 — Quais dados de **ordem de pagamento** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **faturas, beneficiário efetivo, pagador intermediário e saldo residual**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **pagar documentos selecionados**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-012 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **ordem de pagamento**?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de aprovação e exceções**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-013 — Como deve ser organizada a página de detalhe de **ordem de pagamento** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **faturas, beneficiário efetivo, pagador intermediário e saldo residual** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-014 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **ordem de pagamento**?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. O usuário abre a view de pendências e vê imediatamente itens que afetam **tempo de aprovação e exceções**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-015 — Quais ações rápidas e em lote devem existir para **ordem de pagamento**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Deixar **pagar documentos selecionados** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-016 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **pagar documentos selecionados** em **ordem de pagamento**?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-017 — O que deve ser automatizado em **ordem de pagamento** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. O sistema processa em segundo plano e atualiza o indicador de **tempo de aprovação e exceções** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-018 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **ordem de pagamento** neste PR?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-TREASURY-03 — Recebimentos e meios de pagamento

**Objetivo do PR:** entregar o fluxo de recebimento com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-TREASURY-019 — Quais estados de **recebimento** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Usar a máquina de estados **EXPECTED → IDENTIFIED → PARTIALLY_APPLIED → APPLIED → REVERSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. Ao abrir o registro, o usuário vê o estado atual e o botão **aplicar recebimento** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-020 — Quais dados de **recebimento** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **transferência, cheque, cartão, depósito e pagamentos parciais**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **aplicar recebimento**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-021 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **recebimento**?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **valores não identificados**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-022 — Como deve ser organizada a página de detalhe de **recebimento** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **transferência, cheque, cartão, depósito e pagamentos parciais** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-023 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **recebimento**?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. O usuário abre a view de pendências e vê imediatamente itens que afetam **valores não identificados**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-024 — Quais ações rápidas e em lote devem existir para **recebimento**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Deixar **aplicar recebimento** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-025 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **aplicar recebimento** em **recebimento**?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-026 — O que deve ser automatizado em **recebimento** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. O sistema processa em segundo plano e atualiza o indicador de **valores não identificados** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-027 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **recebimento** neste PR?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-TREASURY-04 — Câmbio, empréstimos e aportes

**Objetivo do PR:** entregar o fluxo de operação financeira com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-TREASURY-028 — Quais estados de **operação financeira** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Usar a máquina de estados **QUOTED → APPROVED → CONTRACTED → SETTLED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. Ao abrir o registro, o usuário vê o estado atual e o botão **fechar câmbio ou registrar empréstimo** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-029 — Quais dados de **operação financeira** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **taxa negociada, SWIFT, comissão, conceito e banco**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **fechar câmbio ou registrar empréstimo**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-030 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **operação financeira**?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **spread e custo financeiro**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-031 — Como deve ser organizada a página de detalhe de **operação financeira** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **taxa negociada, SWIFT, comissão, conceito e banco** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-032 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **operação financeira**?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. O usuário abre a view de pendências e vê imediatamente itens que afetam **spread e custo financeiro**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-033 — Quais ações rápidas e em lote devem existir para **operação financeira**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Deixar **fechar câmbio ou registrar empréstimo** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-034 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **fechar câmbio ou registrar empréstimo** em **operação financeira**?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-035 — O que deve ser automatizado em **operação financeira** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. O sistema processa em segundo plano e atualiza o indicador de **spread e custo financeiro** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-036 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **operação financeira** neste PR?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-TREASURY-05 — Conciliação e previsão de caixa

**Objetivo do PR:** entregar o fluxo de conciliação bancária com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-TREASURY-037 — Quais estados de **conciliação bancária** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Usar a máquina de estados **IMPORTED → SUGGESTED → MATCHED → REVIEWED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. Ao abrir o registro, o usuário vê o estado atual e o botão **conciliar extrato e projetar caixa** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-038 — Quais dados de **conciliação bancária** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **extrato, sugestão automática, saldo e previsão**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **conciliar extrato e projetar caixa**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-039 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **conciliação bancária**?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **itens não conciliados**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-040 — Como deve ser organizada a página de detalhe de **conciliação bancária** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **extrato, sugestão automática, saldo e previsão** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-041 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **conciliação bancária**?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. O usuário abre a view de pendências e vê imediatamente itens que afetam **itens não conciliados**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-042 — Quais ações rápidas e em lote devem existir para **conciliação bancária**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Deixar **conciliar extrato e projetar caixa** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-043 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **conciliar extrato e projetar caixa** em **conciliação bancária**?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-044 — O que deve ser automatizado em **conciliação bancária** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. O sistema processa em segundo plano e atualiza o indicador de **itens não conciliados** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-045 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **conciliação bancária** neste PR?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________


---

# Comercial — 45 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: UX-01, UX-02, UX-07.

## PR-SALES-01 — Preço, catálogo e margem

**Objetivo do PR:** entregar o fluxo de condição comercial com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-SALES-001 — Quais estados de **condição comercial** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-SALES-01`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → ACTIVE → EXPIRED → SUPERSEDED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Preço B2B mostra margem sobre custo e sobre venda. Ao abrir o registro, o usuário vê o estado atual e o botão **calcular preço e margem** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-002 — Quais dados de **condição comercial** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-SALES-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **preço líquido, IVA, custo gerencial, canal e validade**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Preço B2B mostra margem sobre custo e sobre venda. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **calcular preço e margem**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **condição comercial**?

- **PR:** `PR-SALES-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Preço B2B mostra margem sobre custo e sobre venda. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **cotações fora da margem**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-004 — Como deve ser organizada a página de detalhe de **condição comercial** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-SALES-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **preço líquido, IVA, custo gerencial, canal e validade** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Preço B2B mostra margem sobre custo e sobre venda. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-005 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **condição comercial**?

- **PR:** `PR-SALES-01`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Preço B2B mostra margem sobre custo e sobre venda. O usuário abre a view de pendências e vê imediatamente itens que afetam **cotações fora da margem**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-006 — Quais ações rápidas e em lote devem existir para **condição comercial**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-SALES-01`
- **Sugestão recomendada:** Deixar **calcular preço e margem** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Preço B2B mostra margem sobre custo e sobre venda. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-007 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **calcular preço e margem** em **condição comercial**?

- **PR:** `PR-SALES-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Preço B2B mostra margem sobre custo e sobre venda. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-008 — O que deve ser automatizado em **condição comercial** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-SALES-01`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Preço B2B mostra margem sobre custo e sobre venda. O sistema processa em segundo plano e atualiza o indicador de **cotações fora da margem** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-009 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **condição comercial** neste PR?

- **PR:** `PR-SALES-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Preço B2B mostra margem sobre custo e sobre venda. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-SALES-02 — Orçamento e desconto

**Objetivo do PR:** entregar o fluxo de orçamento com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-SALES-010 — Quais estados de **orçamento** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-SALES-02`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → SENT → NEGOTIATING → APPROVED → EXPIRED → LOST**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Cliente pede 54 pneus e desconto adicional. Ao abrir o registro, o usuário vê o estado atual e o botão **enviar orçamento ou solicitar desconto** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-011 — Quais dados de **orçamento** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-SALES-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **cliente, SKU, quantidade, preço, validade e desconto**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Cliente pede 54 pneus e desconto adicional. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **enviar orçamento ou solicitar desconto**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-012 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **orçamento**?

- **PR:** `PR-SALES-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Cliente pede 54 pneus e desconto adicional. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo até aprovação**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-013 — Como deve ser organizada a página de detalhe de **orçamento** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-SALES-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **cliente, SKU, quantidade, preço, validade e desconto** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Cliente pede 54 pneus e desconto adicional. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-014 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **orçamento**?

- **PR:** `PR-SALES-02`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Cliente pede 54 pneus e desconto adicional. O usuário abre a view de pendências e vê imediatamente itens que afetam **tempo até aprovação**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-015 — Quais ações rápidas e em lote devem existir para **orçamento**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-SALES-02`
- **Sugestão recomendada:** Deixar **enviar orçamento ou solicitar desconto** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Cliente pede 54 pneus e desconto adicional. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-016 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **enviar orçamento ou solicitar desconto** em **orçamento**?

- **PR:** `PR-SALES-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Cliente pede 54 pneus e desconto adicional. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-017 — O que deve ser automatizado em **orçamento** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-SALES-02`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Cliente pede 54 pneus e desconto adicional. O sistema processa em segundo plano e atualiza o indicador de **tempo até aprovação** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-018 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **orçamento** neste PR?

- **PR:** `PR-SALES-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Cliente pede 54 pneus e desconto adicional. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-SALES-03 — Pedido, reserva e disponibilidade

**Objetivo do PR:** entregar o fluxo de pedido de venda com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-SALES-019 — Quais estados de **pedido de venda** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-SALES-03`
- **Sugestão recomendada:** Usar a máquina de estados **OPEN → RESERVED → PARTIALLY_FULFILLED → FULFILLED → CANCELLED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Pedido reserva estoque somente após confirmação. Ao abrir o registro, o usuário vê o estado atual e o botão **abrir pedido e reservar estoque** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-020 — Quais dados de **pedido de venda** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-SALES-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **linhas, depósito, despacho, pagamento e entrega**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Pedido reserva estoque somente após confirmação. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **abrir pedido e reservar estoque**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-021 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **pedido de venda**?

- **PR:** `PR-SALES-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Pedido reserva estoque somente após confirmação. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **fill rate e rupturas**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-022 — Como deve ser organizada a página de detalhe de **pedido de venda** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-SALES-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **linhas, depósito, despacho, pagamento e entrega** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Pedido reserva estoque somente após confirmação. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-023 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **pedido de venda**?

- **PR:** `PR-SALES-03`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Pedido reserva estoque somente após confirmação. O usuário abre a view de pendências e vê imediatamente itens que afetam **fill rate e rupturas**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-024 — Quais ações rápidas e em lote devem existir para **pedido de venda**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-SALES-03`
- **Sugestão recomendada:** Deixar **abrir pedido e reservar estoque** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Pedido reserva estoque somente após confirmação. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-025 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **abrir pedido e reservar estoque** em **pedido de venda**?

- **PR:** `PR-SALES-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Pedido reserva estoque somente após confirmação. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-026 — O que deve ser automatizado em **pedido de venda** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-SALES-03`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Pedido reserva estoque somente após confirmação. O sistema processa em segundo plano e atualiza o indicador de **fill rate e rupturas** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-027 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **pedido de venda** neste PR?

- **PR:** `PR-SALES-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Pedido reserva estoque somente após confirmação. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-SALES-04 — Faturamento, pagamento e liberação

**Objetivo do PR:** entregar o fluxo de liberação comercial com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-SALES-028 — Quais estados de **liberação comercial** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-SALES-04`
- **Sugestão recomendada:** Usar a máquina de estados **INVOICED → AWAITING_PAYMENT → PAID → RELEASED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Mercadoria libera após crédito efetivo da financeira. Ao abrir o registro, o usuário vê o estado atual e o botão **liberar mercadoria** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-029 — Quais dados de **liberação comercial** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-SALES-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **fatura, comprovante, baixa bancária e regra de financeira**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Mercadoria libera após crédito efetivo da financeira. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **liberar mercadoria**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-030 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **liberação comercial**?

- **PR:** `PR-SALES-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Mercadoria libera após crédito efetivo da financeira. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo entre pagamento e liberação**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-031 — Como deve ser organizada a página de detalhe de **liberação comercial** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-SALES-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **fatura, comprovante, baixa bancária e regra de financeira** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Mercadoria libera após crédito efetivo da financeira. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-032 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **liberação comercial**?

- **PR:** `PR-SALES-04`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Mercadoria libera após crédito efetivo da financeira. O usuário abre a view de pendências e vê imediatamente itens que afetam **tempo entre pagamento e liberação**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-033 — Quais ações rápidas e em lote devem existir para **liberação comercial**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-SALES-04`
- **Sugestão recomendada:** Deixar **liberar mercadoria** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Mercadoria libera após crédito efetivo da financeira. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-034 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **liberar mercadoria** em **liberação comercial**?

- **PR:** `PR-SALES-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Mercadoria libera após crédito efetivo da financeira. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-035 — O que deve ser automatizado em **liberação comercial** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-SALES-04`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Mercadoria libera após crédito efetivo da financeira. O sistema processa em segundo plano e atualiza o indicador de **tempo entre pagamento e liberação** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-036 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **liberação comercial** neste PR?

- **PR:** `PR-SALES-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Mercadoria libera após crédito efetivo da financeira. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-SALES-05 — Entrega, devolução e comissão

**Objetivo do PR:** entregar o fluxo de entrega comercial com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-SALES-037 — Quais estados de **entrega comercial** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-SALES-05`
- **Sugestão recomendada:** Usar a máquina de estados **PLANNED → DISPATCHED → DELIVERED → CONFIRMED → RETURNED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Comissão fica pagável após quitação integral. Ao abrir o registro, o usuário vê o estado atual e o botão **confirmar entrega e comissão** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-038 — Quais dados de **entrega comercial** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-SALES-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **remito, assinatura, frete, devolução e comissão**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Comissão fica pagável após quitação integral. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **confirmar entrega e comissão**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-039 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **entrega comercial**?

- **PR:** `PR-SALES-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Comissão fica pagável após quitação integral. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **OTIF e comissão pendente**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-040 — Como deve ser organizada a página de detalhe de **entrega comercial** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-SALES-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **remito, assinatura, frete, devolução e comissão** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Comissão fica pagável após quitação integral. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-041 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **entrega comercial**?

- **PR:** `PR-SALES-05`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Comissão fica pagável após quitação integral. O usuário abre a view de pendências e vê imediatamente itens que afetam **OTIF e comissão pendente**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-042 — Quais ações rápidas e em lote devem existir para **entrega comercial**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-SALES-05`
- **Sugestão recomendada:** Deixar **confirmar entrega e comissão** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Comissão fica pagável após quitação integral. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-043 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **confirmar entrega e comissão** em **entrega comercial**?

- **PR:** `PR-SALES-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Comissão fica pagável após quitação integral. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-044 — O que deve ser automatizado em **entrega comercial** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-SALES-05`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Comissão fica pagável após quitação integral. O sistema processa em segundo plano e atualiza o indicador de **OTIF e comissão pendente** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-SALES-045 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **entrega comercial** neste PR?

- **PR:** `PR-SALES-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Comissão fica pagável após quitação integral. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________


---

# Compras — 35 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: UX-03, UX-04, UX-07.

## PR-PURCHASING-01 — Requisições e compras emergenciais

**Objetivo do PR:** entregar o fluxo de requisição de compra com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PURCHASING-001 — Quais estados de **requisição de compra** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PURCHASING-01`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → SUBMITTED → APPROVED → SOURCING → CANCELLED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Compra emergencial de papel para escritório. Ao abrir o registro, o usuário vê o estado atual e o botão **aprovar necessidade** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-002 — Quais dados de **requisição de compra** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PURCHASING-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **solicitante, item/serviço, urgência, centro de custo e justificativa**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Compra emergencial de papel para escritório. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **aprovar necessidade**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **requisição de compra**?

- **PR:** `PR-PURCHASING-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Compra emergencial de papel para escritório. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de aprovação**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-004 — Como deve ser organizada a página de detalhe de **requisição de compra** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PURCHASING-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **solicitante, item/serviço, urgência, centro de custo e justificativa** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Compra emergencial de papel para escritório. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-005 — Quais ações rápidas e em lote devem existir para **requisição de compra**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PURCHASING-01`
- **Sugestão recomendada:** Deixar **aprovar necessidade** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Compra emergencial de papel para escritório. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-006 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **aprovar necessidade** em **requisição de compra**?

- **PR:** `PR-PURCHASING-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Compra emergencial de papel para escritório. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-007 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **requisição de compra** neste PR?

- **PR:** `PR-PURCHASING-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Compra emergencial de papel para escritório. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-PURCHASING-02 — Cotação e pedido de compra

**Objetivo do PR:** entregar o fluxo de pedido de compra com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PURCHASING-008 — Quais estados de **pedido de compra** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PURCHASING-02`
- **Sugestão recomendada:** Usar a máquina de estados **RFQ → QUOTED → SELECTED → PO_ISSUED → ACKNOWLEDGED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Três cotações de frete terrestre são comparadas. Ao abrir o registro, o usuário vê o estado atual e o botão **selecionar fornecedor e emitir pedido** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-009 — Quais dados de **pedido de compra** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PURCHASING-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **fornecedor, preço, condição, prazo e comparação**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Três cotações de frete terrestre são comparadas. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **selecionar fornecedor e emitir pedido**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-010 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **pedido de compra**?

- **PR:** `PR-PURCHASING-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Três cotações de frete terrestre são comparadas. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **economia versus orçamento**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-011 — Como deve ser organizada a página de detalhe de **pedido de compra** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PURCHASING-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **fornecedor, preço, condição, prazo e comparação** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Três cotações de frete terrestre são comparadas. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-012 — Quais ações rápidas e em lote devem existir para **pedido de compra**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PURCHASING-02`
- **Sugestão recomendada:** Deixar **selecionar fornecedor e emitir pedido** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Três cotações de frete terrestre são comparadas. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-013 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **selecionar fornecedor e emitir pedido** em **pedido de compra**?

- **PR:** `PR-PURCHASING-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Três cotações de frete terrestre são comparadas. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-014 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **pedido de compra** neste PR?

- **PR:** `PR-PURCHASING-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Três cotações de frete terrestre são comparadas. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-PURCHASING-03 — Recebimento de bens e serviços

**Objetivo do PR:** entregar o fluxo de recebimento de compra com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PURCHASING-015 — Quais estados de **recebimento de compra** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PURCHASING-03`
- **Sugestão recomendada:** Usar a máquina de estados **EXPECTED → PARTIAL → RECEIVED → ACCEPTED → REJECTED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Operador confirma serviço de armazenagem mensal. Ao abrir o registro, o usuário vê o estado atual e o botão **confirmar recebimento** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-016 — Quais dados de **recebimento de compra** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PURCHASING-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **quantidade, serviço, evidência, divergência e aceite**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Operador confirma serviço de armazenagem mensal. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **confirmar recebimento**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-017 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **recebimento de compra**?

- **PR:** `PR-PURCHASING-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Operador confirma serviço de armazenagem mensal. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **recebimentos pendentes**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-018 — Como deve ser organizada a página de detalhe de **recebimento de compra** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PURCHASING-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **quantidade, serviço, evidência, divergência e aceite** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Operador confirma serviço de armazenagem mensal. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-019 — Quais ações rápidas e em lote devem existir para **recebimento de compra**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PURCHASING-03`
- **Sugestão recomendada:** Deixar **confirmar recebimento** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Operador confirma serviço de armazenagem mensal. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-020 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **confirmar recebimento** em **recebimento de compra**?

- **PR:** `PR-PURCHASING-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Operador confirma serviço de armazenagem mensal. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-021 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **recebimento de compra** neste PR?

- **PR:** `PR-PURCHASING-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Operador confirma serviço de armazenagem mensal. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-PURCHASING-04 — Fatura e contas a pagar

**Objetivo do PR:** entregar o fluxo de fatura de fornecedor com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PURCHASING-022 — Quais estados de **fatura de fornecedor** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PURCHASING-04`
- **Sugestão recomendada:** Usar a máquina de estados **RECEIVED → VALIDATED → MATCHED → APPROVED → POSTED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Fatura do porto é conciliada com serviço recebido. Ao abrir o registro, o usuário vê o estado atual e o botão **validar e aprovar fatura** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-023 — Quais dados de **fatura de fornecedor** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PURCHASING-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **pedido, recebimento, impostos, vencimento e pagamento**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Fatura do porto é conciliada com serviço recebido. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **validar e aprovar fatura**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-024 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **fatura de fornecedor**?

- **PR:** `PR-PURCHASING-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Fatura do porto é conciliada com serviço recebido. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **divergências three-way match**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-025 — Como deve ser organizada a página de detalhe de **fatura de fornecedor** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PURCHASING-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **pedido, recebimento, impostos, vencimento e pagamento** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Fatura do porto é conciliada com serviço recebido. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-026 — Quais ações rápidas e em lote devem existir para **fatura de fornecedor**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PURCHASING-04`
- **Sugestão recomendada:** Deixar **validar e aprovar fatura** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Fatura do porto é conciliada com serviço recebido. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-027 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **validar e aprovar fatura** em **fatura de fornecedor**?

- **PR:** `PR-PURCHASING-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Fatura do porto é conciliada com serviço recebido. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-028 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **fatura de fornecedor** neste PR?

- **PR:** `PR-PURCHASING-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Fatura do porto é conciliada com serviço recebido. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-PURCHASING-05 — Contratos, reposição e análise

**Objetivo do PR:** entregar o fluxo de contrato de compra com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PURCHASING-029 — Quais estados de **contrato de compra** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PURCHASING-05`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → ACTIVE → RENEWAL_DUE → EXPIRED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Contrato do operador logístico alerta 60 dias antes. Ao abrir o registro, o usuário vê o estado atual e o botão **renovar ou encerrar contrato** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-030 — Quais dados de **contrato de compra** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PURCHASING-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **vigência, reajuste, SLA, consumo e alerta**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Contrato do operador logístico alerta 60 dias antes. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **renovar ou encerrar contrato**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-031 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **contrato de compra**?

- **PR:** `PR-PURCHASING-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Contrato do operador logístico alerta 60 dias antes. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **gasto por categoria**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-032 — Como deve ser organizada a página de detalhe de **contrato de compra** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PURCHASING-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **vigência, reajuste, SLA, consumo e alerta** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Contrato do operador logístico alerta 60 dias antes. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-033 — Quais ações rápidas e em lote devem existir para **contrato de compra**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PURCHASING-05`
- **Sugestão recomendada:** Deixar **renovar ou encerrar contrato** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Contrato do operador logístico alerta 60 dias antes. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-034 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **renovar ou encerrar contrato** em **contrato de compra**?

- **PR:** `PR-PURCHASING-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Contrato do operador logístico alerta 60 dias antes. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PURCHASING-035 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **contrato de compra** neste PR?

- **PR:** `PR-PURCHASING-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Contrato do operador logístico alerta 60 dias antes. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-04, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________


---

# CRM — 35 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: UX-03, UX-10.

## PR-CRM-01 — Entrada, deduplicação e distribuição de leads

**Objetivo do PR:** entregar o fluxo de lead com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CRM-001 — Quais estados de **lead** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CRM-01`
- **Sugestão recomendada:** Usar a máquina de estados **NEW → QUALIFYING → QUALIFIED → DISQUALIFIED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Lead chega por WhatsApp com CUIT já existente. Ao abrir o registro, o usuário vê o estado atual e o botão **qualificar ou atribuir lead** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-002 — Quais dados de **lead** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CRM-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **origem, CUIT, segmento, região e responsável**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Lead chega por WhatsApp com CUIT já existente. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **qualificar ou atribuir lead**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **lead**?

- **PR:** `PR-CRM-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Lead chega por WhatsApp com CUIT já existente. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de primeira resposta**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-004 — Como deve ser organizada a página de detalhe de **lead** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CRM-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **origem, CUIT, segmento, região e responsável** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Lead chega por WhatsApp com CUIT já existente. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-005 — Quais ações rápidas e em lote devem existir para **lead**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-CRM-01`
- **Sugestão recomendada:** Deixar **qualificar ou atribuir lead** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Lead chega por WhatsApp com CUIT já existente. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-006 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **qualificar ou atribuir lead** em **lead**?

- **PR:** `PR-CRM-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Lead chega por WhatsApp com CUIT já existente. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-007 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **lead** neste PR?

- **PR:** `PR-CRM-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Lead chega por WhatsApp com CUIT já existente. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-CRM-02 — Contas, contatos e carteira

**Objetivo do PR:** entregar o fluxo de conta comercial com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CRM-008 — Quais estados de **conta comercial** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CRM-02`
- **Sugestão recomendada:** Usar a máquina de estados **PROSPECT → ACTIVE → DORMANT → BLOCKED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Transportadora tem comprador e responsável de manutenção. Ao abrir o registro, o usuário vê o estado atual e o botão **atualizar carteira** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-009 — Quais dados de **conta comercial** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CRM-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **cliente, contatos, endereços, segmento e histórico**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Transportadora tem comprador e responsável de manutenção. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **atualizar carteira**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-010 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **conta comercial**?

- **PR:** `PR-CRM-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Transportadora tem comprador e responsável de manutenção. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **cadastros desatualizados**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-011 — Como deve ser organizada a página de detalhe de **conta comercial** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CRM-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **cliente, contatos, endereços, segmento e histórico** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Transportadora tem comprador e responsável de manutenção. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-012 — Quais ações rápidas e em lote devem existir para **conta comercial**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-CRM-02`
- **Sugestão recomendada:** Deixar **atualizar carteira** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Transportadora tem comprador e responsável de manutenção. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-013 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **atualizar carteira** em **conta comercial**?

- **PR:** `PR-CRM-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Transportadora tem comprador e responsável de manutenção. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-014 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **conta comercial** neste PR?

- **PR:** `PR-CRM-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Transportadora tem comprador e responsável de manutenção. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-CRM-03 — Oportunidades, pipeline e forecast

**Objetivo do PR:** entregar o fluxo de oportunidade com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CRM-015 — Quais estados de **oportunidade** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CRM-03`
- **Sugestão recomendada:** Usar a máquina de estados **DISCOVERY → QUOTING → NEGOTIATION → COMMIT → WON → LOST**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Teste de 20 pneus pode virar pedido de 200. Ao abrir o registro, o usuário vê o estado atual e o botão **mover etapa e prever venda** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-016 — Quais dados de **oportunidade** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CRM-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **valor, quantidade, probabilidade, data e concorrente**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Teste de 20 pneus pode virar pedido de 200. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **mover etapa e prever venda**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-017 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **oportunidade**?

- **PR:** `PR-CRM-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Teste de 20 pneus pode virar pedido de 200. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **acurácia do forecast**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-018 — Como deve ser organizada a página de detalhe de **oportunidade** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CRM-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **valor, quantidade, probabilidade, data e concorrente** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Teste de 20 pneus pode virar pedido de 200. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-019 — Quais ações rápidas e em lote devem existir para **oportunidade**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-CRM-03`
- **Sugestão recomendada:** Deixar **mover etapa e prever venda** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Teste de 20 pneus pode virar pedido de 200. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-020 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **mover etapa e prever venda** em **oportunidade**?

- **PR:** `PR-CRM-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Teste de 20 pneus pode virar pedido de 200. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-021 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **oportunidade** neste PR?

- **PR:** `PR-CRM-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Teste de 20 pneus pode virar pedido de 200. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-CRM-04 — Atividades, WhatsApp, e-mail e tickets

**Objetivo do PR:** entregar o fluxo de atividade comercial com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CRM-022 — Quais estados de **atividade comercial** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CRM-04`
- **Sugestão recomendada:** Usar a máquina de estados **PLANNED → DONE → OVERDUE → CANCELLED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Vendedor agenda follow-up após orçamento. Ao abrir o registro, o usuário vê o estado atual e o botão **registrar próxima ação** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-023 — Quais dados de **atividade comercial** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CRM-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **ligação, e-mail, WhatsApp, reunião e anexo**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Vendedor agenda follow-up após orçamento. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **registrar próxima ação**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-024 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **atividade comercial**?

- **PR:** `PR-CRM-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Vendedor agenda follow-up após orçamento. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **atividades vencidas**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-025 — Como deve ser organizada a página de detalhe de **atividade comercial** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CRM-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **ligação, e-mail, WhatsApp, reunião e anexo** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Vendedor agenda follow-up após orçamento. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-026 — Quais ações rápidas e em lote devem existir para **atividade comercial**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-CRM-04`
- **Sugestão recomendada:** Deixar **registrar próxima ação** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Vendedor agenda follow-up após orçamento. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-027 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **registrar próxima ação** em **atividade comercial**?

- **PR:** `PR-CRM-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Vendedor agenda follow-up após orçamento. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-028 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **atividade comercial** neste PR?

- **PR:** `PR-CRM-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Vendedor agenda follow-up após orçamento. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-CRM-05 — Metas, desempenho e offline

**Objetivo do PR:** entregar o fluxo de meta comercial com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CRM-029 — Quais estados de **meta comercial** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CRM-05`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → ACTIVE → ACHIEVED → MISSED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Meta mensal de 700 pneus por equipe. Ao abrir o registro, o usuário vê o estado atual e o botão **acompanhar meta** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-030 — Quais dados de **meta comercial** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CRM-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **vendedor, canal, região, volume, receita e margem**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Meta mensal de 700 pneus por equipe. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **acompanhar meta**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-031 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **meta comercial**?

- **PR:** `PR-CRM-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Meta mensal de 700 pneus por equipe. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo administrativo do vendedor**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-032 — Como deve ser organizada a página de detalhe de **meta comercial** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CRM-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **vendedor, canal, região, volume, receita e margem** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Meta mensal de 700 pneus por equipe. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-033 — Quais ações rápidas e em lote devem existir para **meta comercial**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-CRM-05`
- **Sugestão recomendada:** Deixar **acompanhar meta** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Meta mensal de 700 pneus por equipe. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-034 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **acompanhar meta** em **meta comercial**?

- **PR:** `PR-CRM-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Meta mensal de 700 pneus por equipe. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CRM-035 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **meta comercial** neste PR?

- **PR:** `PR-CRM-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Meta mensal de 700 pneus por equipe. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________


---

# Fechamento contábil transversal — 30 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: UX-03, UX-06, UX-07.

## PR-CLOSE-01 — Calendário e tarefas de fechamento

**Objetivo do PR:** entregar o fluxo de tarefa de fechamento com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CLOSE-001 — Quais estados de **tarefa de fechamento** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CLOSE-01`
- **Sugestão recomendada:** Usar a máquina de estados **PLANNED → READY → IN_PROGRESS → BLOCKED → DONE**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Conciliação bancária bloqueia fechamento mensal. Ao abrir o registro, o usuário vê o estado atual e o botão **concluir ou escalar tarefa** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-002 — Quais dados de **tarefa de fechamento** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CLOSE-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **período, responsável, dependência, evidência e SLA**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Conciliação bancária bloqueia fechamento mensal. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **concluir ou escalar tarefa**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **tarefa de fechamento**?

- **PR:** `PR-CLOSE-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Conciliação bancária bloqueia fechamento mensal. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tarefas atrasadas**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-004 — Como deve ser organizada a página de detalhe de **tarefa de fechamento** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CLOSE-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **período, responsável, dependência, evidência e SLA** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Conciliação bancária bloqueia fechamento mensal. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-005 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **concluir ou escalar tarefa** em **tarefa de fechamento**?

- **PR:** `PR-CLOSE-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Conciliação bancária bloqueia fechamento mensal. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-006 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **tarefa de fechamento** neste PR?

- **PR:** `PR-CLOSE-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Conciliação bancária bloqueia fechamento mensal. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-CLOSE-02 — Reconciliação de subledgers

**Objetivo do PR:** entregar o fluxo de reconciliação contábil com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CLOSE-007 — Quais estados de **reconciliação contábil** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CLOSE-02`
- **Sugestão recomendada:** Usar a máquina de estados **OPEN → MATCHED → DIFFERENCE → EXPLAINED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Saldo de estoque difere do razão. Ao abrir o registro, o usuário vê o estado atual e o botão **resolver diferença** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-008 — Quais dados de **reconciliação contábil** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CLOSE-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **estoque, fiscal, clientes, fornecedores e bancos**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Saldo de estoque difere do razão. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **resolver diferença**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-009 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **reconciliação contábil**?

- **PR:** `PR-CLOSE-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Saldo de estoque difere do razão. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **diferenças materiais**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-010 — Como deve ser organizada a página de detalhe de **reconciliação contábil** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CLOSE-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **estoque, fiscal, clientes, fornecedores e bancos** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Saldo de estoque difere do razão. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-011 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **resolver diferença** em **reconciliação contábil**?

- **PR:** `PR-CLOSE-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Saldo de estoque difere do razão. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-012 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **reconciliação contábil** neste PR?

- **PR:** `PR-CLOSE-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Saldo de estoque difere do razão. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-CLOSE-03 — Provisões, accruals e câmbio

**Objetivo do PR:** entregar o fluxo de ajuste de fechamento com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CLOSE-013 — Quais estados de **ajuste de fechamento** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CLOSE-03`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → REVIEWED → POSTED → REVERSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Frete não faturado é provisionado no mês. Ao abrir o registro, o usuário vê o estado atual e o botão **postar provisão ou reavaliação** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-014 — Quais dados de **ajuste de fechamento** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CLOSE-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **custos pendentes, despesas, câmbio e reversão**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Frete não faturado é provisionado no mês. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **postar provisão ou reavaliação**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-015 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **ajuste de fechamento**?

- **PR:** `PR-CLOSE-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Frete não faturado é provisionado no mês. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **ajustes manuais**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-016 — Como deve ser organizada a página de detalhe de **ajuste de fechamento** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CLOSE-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **custos pendentes, despesas, câmbio e reversão** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Frete não faturado é provisionado no mês. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-017 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **postar provisão ou reavaliação** em **ajuste de fechamento**?

- **PR:** `PR-CLOSE-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Frete não faturado é provisionado no mês. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-018 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **ajuste de fechamento** neste PR?

- **PR:** `PR-CLOSE-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Frete não faturado é provisionado no mês. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-CLOSE-04 — Demonstrações e pacote gerencial

**Objetivo do PR:** entregar o fluxo de pacote de fechamento com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CLOSE-019 — Quais estados de **pacote de fechamento** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CLOSE-04`
- **Sugestão recomendada:** Usar a máquina de estados **GENERATED → REVIEWED → APPROVED → PUBLISHED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Direção revisa ARS e USD no mesmo pacote. Ao abrir o registro, o usuário vê o estado atual e o botão **publicar pacote** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-020 — Quais dados de **pacote de fechamento** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CLOSE-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **balanço, DRE, caixa, margem e comentários**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Direção revisa ARS e USD no mesmo pacote. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **publicar pacote**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-021 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **pacote de fechamento**?

- **PR:** `PR-CLOSE-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Direção revisa ARS e USD no mesmo pacote. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de fechamento**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-022 — Como deve ser organizada a página de detalhe de **pacote de fechamento** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CLOSE-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **balanço, DRE, caixa, margem e comentários** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Direção revisa ARS e USD no mesmo pacote. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-023 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **publicar pacote** em **pacote de fechamento**?

- **PR:** `PR-CLOSE-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Direção revisa ARS e USD no mesmo pacote. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-024 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **pacote de fechamento** neste PR?

- **PR:** `PR-CLOSE-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Direção revisa ARS e USD no mesmo pacote. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-CLOSE-05 — Reabertura, auditoria e cockpit

**Objetivo do PR:** entregar o fluxo de período fechado com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-CLOSE-025 — Quais estados de **período fechado** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-CLOSE-05`
- **Sugestão recomendada:** Usar a máquina de estados **CLOSED → REOPEN_REQUESTED → REOPENED → RECLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Nota tardia exige reabrir mês. Ao abrir o registro, o usuário vê o estado atual e o botão **aprovar reabertura** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-026 — Quais dados de **período fechado** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-CLOSE-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **motivo, impacto, aprovador, journals e nova versão**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Nota tardia exige reabrir mês. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **aprovar reabertura**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-027 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **período fechado**?

- **PR:** `PR-CLOSE-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Nota tardia exige reabrir mês. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **quantidade de reaberturas**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-028 — Como deve ser organizada a página de detalhe de **período fechado** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-CLOSE-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **motivo, impacto, aprovador, journals e nova versão** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Nota tardia exige reabrir mês. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-029 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **aprovar reabertura** em **período fechado**?

- **PR:** `PR-CLOSE-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Nota tardia exige reabrir mês. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-CLOSE-030 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **período fechado** neste PR?

- **PR:** `PR-CLOSE-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Nota tardia exige reabrir mês. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-06, UX-07, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________


---

# Plataforma — 45 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: ARCH-01, ARCH-02, UX-08, UX-09.

## PR-PLATFORM-01 — Identidade, RBAC e escopos

**Objetivo do PR:** entregar o fluxo de usuário e permissão com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PLATFORM-001 — Quais estados de **usuário e permissão** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Usar a máquina de estados **INVITED → ACTIVE → LOCKED → INACTIVE**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. Ao abrir o registro, o usuário vê o estado atual e o botão **provisionar e conceder acesso** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-002 — Quais dados de **usuário e permissão** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **papel, permissão, escopo, MFA e sessão**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **provisionar e conceder acesso**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **usuário e permissão**?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **acessos excessivos**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-004 — Como deve ser organizada a página de detalhe de **usuário e permissão** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **papel, permissão, escopo, MFA e sessão** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-005 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **usuário e permissão**?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. O usuário abre a view de pendências e vê imediatamente itens que afetam **acessos excessivos**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-006 — Quais ações rápidas e em lote devem existir para **usuário e permissão**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Deixar **provisionar e conceder acesso** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-007 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **provisionar e conceder acesso** em **usuário e permissão**?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-008 — O que deve ser automatizado em **usuário e permissão** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. O sistema processa em segundo plano e atualiza o indicador de **acessos excessivos** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-009 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **usuário e permissão** neste PR?

- **PR:** `PR-PLATFORM-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Vendedor vê só sua carteira, master vê tudo. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-PLATFORM-02 — Aprovações, override, auditoria e parâmetros

**Objetivo do PR:** entregar o fluxo de regra de plataforma com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PLATFORM-010 — Quais estados de **regra de plataforma** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → ACTIVE → SUPERSEDED → DISABLED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. Ao abrir o registro, o usuário vê o estado atual e o botão **publicar política ou parâmetro** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-011 — Quais dados de **regra de plataforma** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **alçada, aprovadores, override, vigência e log**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **publicar política ou parâmetro**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-012 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **regra de plataforma**?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **overrides por período**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-013 — Como deve ser organizada a página de detalhe de **regra de plataforma** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **alçada, aprovadores, override, vigência e log** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-014 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **regra de plataforma**?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. O usuário abre a view de pendências e vê imediatamente itens que afetam **overrides por período**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-015 — Quais ações rápidas e em lote devem existir para **regra de plataforma**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Deixar **publicar política ou parâmetro** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-016 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **publicar política ou parâmetro** em **regra de plataforma**?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-017 — O que deve ser automatizado em **regra de plataforma** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. O sistema processa em segundo plano e atualiza o indicador de **overrides por período** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-018 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **regra de plataforma** neste PR?

- **PR:** `PR-PLATFORM-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Pagamento exige dois aprovadores diferentes. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-PLATFORM-03 — Documentos, OCR, busca e notificações

**Objetivo do PR:** entregar o fluxo de documento e job com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PLATFORM-019 — Quais estados de **documento e job** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Usar a máquina de estados **UPLOADED → PROCESSING → REVIEW_REQUIRED → VALIDATED → ARCHIVED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. Ao abrir o registro, o usuário vê o estado atual e o botão **processar documento** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-020 — Quais dados de **documento e job** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **arquivo, hash, versão, OCR, tags e origem**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **processar documento**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-021 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **documento e job**?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de processamento**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-022 — Como deve ser organizada a página de detalhe de **documento e job** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **arquivo, hash, versão, OCR, tags e origem** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-023 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **documento e job**?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. O usuário abre a view de pendências e vê imediatamente itens que afetam **tempo de processamento**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-024 — Quais ações rápidas e em lote devem existir para **documento e job**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Deixar **processar documento** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-025 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **processar documento** em **documento e job**?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-026 — O que deve ser automatizado em **documento e job** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. O sistema processa em segundo plano e atualiza o indicador de **tempo de processamento** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-027 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **documento e job** neste PR?

- **PR:** `PR-PLATFORM-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Invoice é lida e associada ao fornecedor. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-PLATFORM-04 — Desktop offline e sincronização

**Objetivo do PR:** entregar o fluxo de operação offline com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PLATFORM-028 — Quais estados de **operação offline** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Usar a máquina de estados **LOCAL_DRAFT → QUEUED → SYNCING → CONFLICT → SYNCED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. Ao abrir o registro, o usuário vê o estado atual e o botão **sincronizar e resolver conflito** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-029 — Quais dados de **operação offline** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **dispositivo, cursor, versão, dependência externa e retry**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **sincronizar e resolver conflito**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-030 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **operação offline**?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **conflitos e fila pendente**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-031 — Como deve ser organizada a página de detalhe de **operação offline** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **dispositivo, cursor, versão, dependência externa e retry** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-032 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **operação offline**?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. O usuário abre a view de pendências e vê imediatamente itens que afetam **conflitos e fila pendente**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-033 — Quais ações rápidas e em lote devem existir para **operação offline**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Deixar **sincronizar e resolver conflito** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-034 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **sincronizar e resolver conflito** em **operação offline**?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-035 — O que deve ser automatizado em **operação offline** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. O sistema processa em segundo plano e atualiza o indicador de **conflitos e fila pendente** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-036 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **operação offline** neste PR?

- **PR:** `PR-PLATFORM-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Pedido criado offline sincroniza ao voltar internet. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-PLATFORM-05 — APIs, jobs, observabilidade e continuidade

**Objetivo do PR:** entregar o fluxo de serviço de plataforma com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-PLATFORM-037 — Quais estados de **serviço de plataforma** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Usar a máquina de estados **HEALTHY → DEGRADED → FAILED → RECOVERING**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. Ao abrir o registro, o usuário vê o estado atual e o botão **operar e restaurar serviço** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-038 — Quais dados de **serviço de plataforma** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **API, fila, retry, log, métrica, backup e restore**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **operar e restaurar serviço**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-039 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **serviço de plataforma**?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **SLO e tempo de recuperação**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-040 — Como deve ser organizada a página de detalhe de **serviço de plataforma** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **API, fila, retry, log, métrica, backup e restore** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-041 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **serviço de plataforma**?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. O usuário abre a view de pendências e vê imediatamente itens que afetam **SLO e tempo de recuperação**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-042 — Quais ações rápidas e em lote devem existir para **serviço de plataforma**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Deixar **operar e restaurar serviço** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-043 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **operar e restaurar serviço** em **serviço de plataforma**?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-044 — O que deve ser automatizado em **serviço de plataforma** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. O sistema processa em segundo plano e atualiza o indicador de **SLO e tempo de recuperação** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-PLATFORM-045 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **serviço de plataforma** neste PR?

- **PR:** `PR-PLATFORM-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Falha da SI Factura vai para dead-letter e alerta. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, ARCH-02, UX-08, UX-09, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________


---

# Módulos complementares — 25 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: UX-03, UX-02.

## PR-COMP-01 — Qualidade e certificações

**Objetivo do PR:** entregar o fluxo de certificação/inspeção com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-COMP-001 — Quais estados de **certificação/inspeção** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-COMP-01`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → VALID → EXPIRING → EXPIRED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Certificado E4 é vinculado ao SKU. Ao abrir o registro, o usuário vê o estado atual e o botão **validar certificado** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-002 — Quais dados de **certificação/inspeção** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-COMP-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **SKU, número, organismo, validade e evidência**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Certificado E4 é vinculado ao SKU. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **validar certificado**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **certificação/inspeção**?

- **PR:** `PR-COMP-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Certificado E4 é vinculado ao SKU. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **certificados vencendo**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-004 — Como deve ser organizada a página de detalhe de **certificação/inspeção** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-COMP-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **SKU, número, organismo, validade e evidência** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Certificado E4 é vinculado ao SKU. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-005 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **certificação/inspeção** neste PR?

- **PR:** `PR-COMP-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Certificado E4 é vinculado ao SKU. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-COMP-02 — Garantia, reclamação e devolução

**Objetivo do PR:** entregar o fluxo de claim de garantia com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-COMP-006 — Quais estados de **claim de garantia** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-COMP-02`
- **Sugestão recomendada:** Usar a máquina de estados **OPEN → INSPECTION → APPROVED → REJECTED → RESOLVED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Cliente reclama de pneu e envia evidência. Ao abrir o registro, o usuário vê o estado atual e o botão **decidir garantia** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-007 — Quais dados de **claim de garantia** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-COMP-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **venda, SKU, despacho, fotos, laudo e impacto**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Cliente reclama de pneu e envia evidência. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **decidir garantia**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-008 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **claim de garantia**?

- **PR:** `PR-COMP-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Cliente reclama de pneu e envia evidência. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de resolução**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-009 — Como deve ser organizada a página de detalhe de **claim de garantia** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-COMP-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **venda, SKU, despacho, fotos, laudo e impacto** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Cliente reclama de pneu e envia evidência. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-010 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **claim de garantia** neste PR?

- **PR:** `PR-COMP-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Cliente reclama de pneu e envia evidência. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-COMP-03 — Atendimento e SLA

**Objetivo do PR:** entregar o fluxo de ticket com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-COMP-011 — Quais estados de **ticket** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-COMP-03`
- **Sugestão recomendada:** Usar a máquina de estados **OPEN → ASSIGNED → IN_PROGRESS → WAITING → RESOLVED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Cliente pergunta status de entrega. Ao abrir o registro, o usuário vê o estado atual e o botão **atender ou escalar ticket** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-012 — Quais dados de **ticket** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-COMP-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **cliente, canal, categoria, SLA e vínculo operacional**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Cliente pergunta status de entrega. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **atender ou escalar ticket**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-013 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **ticket**?

- **PR:** `PR-COMP-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Cliente pergunta status de entrega. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **SLA violado**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-014 — Como deve ser organizada a página de detalhe de **ticket** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-COMP-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **cliente, canal, categoria, SLA e vínculo operacional** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Cliente pergunta status de entrega. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-015 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **ticket** neste PR?

- **PR:** `PR-COMP-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Cliente pergunta status de entrega. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-COMP-04 — Ativos, manutenção, RH e jurídico

**Objetivo do PR:** entregar o fluxo de registro administrativo com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-COMP-016 — Quais estados de **registro administrativo** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-COMP-04`
- **Sugestão recomendada:** Usar a máquina de estados **ACTIVE → DUE → IN_PROGRESS → COMPLETED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Seguro de ativo alerta antes do vencimento. Ao abrir o registro, o usuário vê o estado atual e o botão **executar tarefa administrativa** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-017 — Quais dados de **registro administrativo** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-COMP-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **ativo/colaborador/documento, responsável e vencimento**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Seguro de ativo alerta antes do vencimento. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **executar tarefa administrativa**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-018 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **registro administrativo**?

- **PR:** `PR-COMP-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Seguro de ativo alerta antes do vencimento. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tarefas vencidas**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-019 — Como deve ser organizada a página de detalhe de **registro administrativo** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-COMP-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **ativo/colaborador/documento, responsável e vencimento** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Seguro de ativo alerta antes do vencimento. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-020 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **registro administrativo** neste PR?

- **PR:** `PR-COMP-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Seguro de ativo alerta antes do vencimento. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-COMP-05 — BI, KPIs e compliance

**Objetivo do PR:** entregar o fluxo de definição de KPI com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-COMP-021 — Quais estados de **definição de KPI** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-COMP-05`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → VALIDATED → PUBLISHED → SUPERSEDED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Margem por cliente explica base de custo usada. Ao abrir o registro, o usuário vê o estado atual e o botão **publicar KPI** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-022 — Quais dados de **definição de KPI** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-COMP-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **fórmula, fonte, granularidade, owner e vigência**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Margem por cliente explica base de custo usada. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **publicar KPI**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-023 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **definição de KPI**?

- **PR:** `PR-COMP-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Margem por cliente explica base de custo usada. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **KPIs sem fonte**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-024 — Como deve ser organizada a página de detalhe de **definição de KPI** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-COMP-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **fórmula, fonte, granularidade, owner e vigência** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Margem por cliente explica base de custo usada. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-COMP-025 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **definição de KPI** neste PR?

- **PR:** `PR-COMP-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Margem por cliente explica base de custo usada. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-03, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________


---

# Testes, migração e implantação — 20 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: ARCH-01, UX-08.

## PR-QA-01 — Arquitetura de testes e quality gates

**Objetivo do PR:** entregar o fluxo de execução de teste com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-09`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-QA-001 — Quais estados de **execução de teste** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-QA-01`
- **Sugestão recomendada:** Usar a máquina de estados **PLANNED → RUNNING → PASSED → FAILED → BLOCKED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Teste de rateio detecta diferença de centavos. Ao abrir o registro, o usuário vê o estado atual e o botão **aprovar ou bloquear release** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-002 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **execução de teste**?

- **PR:** `PR-QA-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Teste de rateio detecta diferença de centavos. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **defeitos críticos**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-003 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **aprovar ou bloquear release** em **execução de teste**?

- **PR:** `PR-QA-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Teste de rateio detecta diferença de centavos. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-004 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **execução de teste** neste PR?

- **PR:** `PR-QA-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Teste de rateio detecta diferença de centavos. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-QA-02 — Migração e reconciliação

**Objetivo do PR:** entregar o fluxo de lote de migração com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-09`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-QA-005 — Quais estados de **lote de migração** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-QA-02`
- **Sugestão recomendada:** Usar a máquina de estados **PREPARED → LOADED → VALIDATED → RECONCILED → ACCEPTED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** SKUs importados de Excel são reconciliados. Ao abrir o registro, o usuário vê o estado atual e o botão **aceitar lote migrado** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-006 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **lote de migração**?

- **PR:** `PR-QA-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** SKUs importados de Excel são reconciliados. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **registros rejeitados**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-007 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **aceitar lote migrado** em **lote de migração**?

- **PR:** `PR-QA-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** SKUs importados de Excel são reconciliados. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-008 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **lote de migração** neste PR?

- **PR:** `PR-QA-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** SKUs importados de Excel são reconciliados. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-QA-03 — Release, cutover e rollback

**Objetivo do PR:** entregar o fluxo de release com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-09`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-QA-009 — Quais estados de **release** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-QA-03`
- **Sugestão recomendada:** Usar a máquina de estados **PLANNED → READY → DEPLOYING → LIVE → ROLLED_BACK**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Deploy ocorre fora do horário comercial. Ao abrir o registro, o usuário vê o estado atual e o botão **liberar ou reverter** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-010 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **release**?

- **PR:** `PR-QA-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Deploy ocorre fora do horário comercial. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de rollback**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-011 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **liberar ou reverter** em **release**?

- **PR:** `PR-QA-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Deploy ocorre fora do horário comercial. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-012 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **release** neste PR?

- **PR:** `PR-QA-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Deploy ocorre fora do horário comercial. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-QA-04 — Carga, segurança, offline e DR

**Objetivo do PR:** entregar o fluxo de teste não funcional com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-09`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-QA-013 — Quais estados de **teste não funcional** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-QA-04`
- **Sugestão recomendada:** Usar a máquina de estados **READY → RUNNING → PASSED → FAILED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Desktop opera offline e restaura sem perda. Ao abrir o registro, o usuário vê o estado atual e o botão **aprovar requisito não funcional** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-014 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **teste não funcional**?

- **PR:** `PR-QA-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Desktop opera offline e restaura sem perda. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **RTO/RPO e erros**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-015 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **aprovar requisito não funcional** em **teste não funcional**?

- **PR:** `PR-QA-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Desktop opera offline e restaura sem perda. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-016 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **teste não funcional** neste PR?

- **PR:** `PR-QA-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Desktop opera offline e restaura sem perda. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-QA-05 — Hypercare, treinamento e incidentes

**Objetivo do PR:** entregar o fluxo de incidente de go-live com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-09`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-QA-017 — Quais estados de **incidente de go-live** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-QA-05`
- **Sugestão recomendada:** Usar a máquina de estados **OPEN → TRIAGED → MITIGATED → RESOLVED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Erro fiscal no primeiro dia recebe prioridade P0. Ao abrir o registro, o usuário vê o estado atual e o botão **resolver incidente** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-018 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **incidente de go-live**?

- **PR:** `PR-QA-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Erro fiscal no primeiro dia recebe prioridade P0. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de resolução**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-019 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **resolver incidente** em **incidente de go-live**?

- **PR:** `PR-QA-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Erro fiscal no primeiro dia recebe prioridade P0. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-QA-020 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **incidente de go-live** neste PR?

- **PR:** `PR-QA-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Erro fiscal no primeiro dia recebe prioridade P0. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** ARCH-01, UX-08, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________
