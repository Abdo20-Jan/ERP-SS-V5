---
id: QA-500-COMEX
title: COMEX — perguntas por PR com sugestões de UX
status: ACTIVE
version: 1.12.0
questions: 50
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
