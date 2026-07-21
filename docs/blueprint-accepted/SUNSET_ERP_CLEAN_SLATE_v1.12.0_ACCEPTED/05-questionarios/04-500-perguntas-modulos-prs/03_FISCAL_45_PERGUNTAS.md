---
id: QA-500-FISCAL
title: Fiscal — perguntas por PR com sugestões de UX
status: ACTIVE
version: 1.12.0
questions: 45
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
