---
version: 1.10.0
status: ACCEPTED
priority: P0
---

# P0 — Implementação de COMEX



Estas perguntas não rediscutem o escopo empresarial já aprovado. Elas transformam COMEX em uma especificação implementável.

## P0-START-41 — Hierarquia dos registros de COMEX

**O que significa:** Definir qual registro é pai de qual registro.

**Exemplo aplicado à Sunset:** Um pedido internacional pode gerar dois embarques, quatro contêineres e dois despachos.

**Decisão sugerida:** Usar a hierarquia: pedido internacional → embarque → contêiner → despacho/destinação → linhas por SKU. Permitir relações muitos-para-muitos quando um despacho reunir mais de um contêiner.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-42 — Tipos de operação separados

**O que significa:** Definir os workflows que não podem ser tratados como sinônimos.

**Exemplo aplicado à Sunset:** Importação definitiva nacionaliza; trânsito move mercadoria sob controle aduaneiro; Zona Primária e Zona Franca têm estados próprios.

**Decisão sugerida:** Criar tipos distintos: importação definitiva, trânsito aduaneiro, operação em Zona Primária Aduaneira e operação em Zona Franca. Compartilhar cadastros e documentos, mas manter estados, validações e encerramentos próprios.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-43 — Estados exatos da importação definitiva

**O que significa:** Definir a máquina de estados principal.

**Exemplo aplicado à Sunset:** A operação passa por pedido, produção, embarque, chegada, despacho, descarga e fechamento.

**Decisão sugerida:** Usar: RASCUNHO → AGUARDANDO APROVAÇÃO → PEDIDO CONFIRMADO → EM PRODUÇÃO → PRONTA PARA EMBARQUE → BOOKING CONFIRMADO → EMBARCADA → EM TRÂNSITO → CHEGADA AO PORTO → EM DESPACHO → LIBERADA → EM TRANSFERÊNCIA → DESCARREGADA → CONFERIDA → ESTOQUE DISPONÍVEL → FECHADA, com estados de CANCELADA e SUSPENSA.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-44 — Transições e responsáveis

**O que significa:** Definir quem pode mover a operação de uma etapa para outra.

**Exemplo aplicado à Sunset:** COMEX confirma embarque; despachante informa oficialização; depósito confirma descarga.

**Decisão sugerida:** Cada transição terá papel responsável, data/hora, evidência e comentário. Integração pode sugerir; usuário autorizado confirma. Master pode override com auditoria, exceto invariantes legais e técnicas.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-45 — Campos mínimos para criar uma operação

**O que significa:** Definir o mínimo para salvar um rascunho e o mínimo para aprovar.

**Exemplo aplicado à Sunset:** No começo pode existir apenas fornecedor e moeda; antes de aprovar é necessário ter SKUs, quantidades e condições.

**Decisão sugerida:** Rascunho exige fornecedor/exportador e tipo de operação. Aprovação exige moeda, Incoterm, condição de pagamento, origem, itens, quantidades, preços, previsão e responsável.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-46 — Documentos obrigatórios por etapa

**O que significa:** Definir em qual momento cada documento passa a ser exigido.

**Exemplo aplicado à Sunset:** Não faz sentido exigir BL antes do embarque, mas não se pode registrar embarque sem documento de transporte ou justificativa.

**Decisão sugerida:** Proforma antes da confirmação; commercial invoice e packing list antes do embarque; booking antes de embarcar; BL após emissão; despacho e comprovantes na fase aduaneira; faturas de gastos antes do fechamento, admitindo pendência controlada.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-47 — Leitura automática e revisão dos documentos

**O que significa:** Definir como uma proposta extraída vira dado oficial.

**Exemplo aplicado à Sunset:** OCR identifica invoice `INV-100`, mas lê 295 como 285.

**Decisão sugerida:** Mostrar documento ao lado dos campos extraídos, confiança por campo, divergência contra pedido e botão de aprovar/corrigir. Guardar valor original, valor corrigido, usuário e motivo.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-48 — Embarques parciais, saldos e divisão de contêineres

**O que significa:** Definir como controlar o que foi pedido, produzido, embarcado e ainda falta.

**Exemplo aplicado à Sunset:** Pedido de 1.008 unidades: 504 embarcam agora e 504 no mês seguinte.

**Decisão sugerida:** Controlar quantidades pedida, confirmada, produzida, embarcada, chegada, despachada, recebida, cancelada e pendente por SKU. Permitir vários embarques e contêineres sem duplicar o pedido.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-49 — Divergências e exceções

**O que significa:** Definir o tratamento quando documentos ou quantidades não coincidem.

**Exemplo aplicado à Sunset:** Packing list registra 252 unidades e descarga confirma 250.

**Decisão sugerida:** Abrir ocorrência tipificada, calcular diferença, anexar evidências e exigir aprovação para continuar quando o ponto for crítico. Nunca corrigir silenciosamente o documento original.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-50 — Dados do despacho e destinação aduaneira

**O que significa:** Definir os campos mínimos do processo aduaneiro.

**Exemplo aplicado à Sunset:** O despachante informa número IC04, aduana, oficialização, canal, tributos e liberação.

**Decisão sugerida:** Guardar identificador da destinação, aduana, regime, despachante, datas, canal, exigências, documentos, tributos por conceito, pagamentos, garantias, retificações e liberação.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-51 — Eventos que alimentam landed cost

**O que significa:** Definir quando um custo fica disponível para rateio.

**Exemplo aplicado à Sunset:** Invoice do porto tem terminal, balança e precinto; IVA e percepções aparecem separados.

**Decisão sugerida:** Cada linha líquida de gasto recebe categoria, fornecedor, documento, moeda, taxa, importação, despacho e contêiner. Tributos recuperáveis ficam separados; componentes elegíveis entram no pool provisório ou definitivo.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-52 — Momento em que o estoque fica vendável

**O que significa:** Definir a transição exata entre COMEX e estoque disponível.

**Exemplo aplicado à Sunset:** A mercadoria foi liberada pela aduana, mas ainda não chegou ao depósito nacional.

**Decisão sugerida:** Somente criar saldo vendável após liberação aplicável, transferência, descarga, conferência e confirmação do depósito nacional. Antes disso, mostrar estoque em trânsito ou sob controle aduaneiro.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-53 — COMEX no modo offline

**O que significa:** Definir o que o usuário pode fazer sem internet e o que aguarda sincronização.

**Exemplo aplicado à Sunset:** Usuário anexa packing list e atualiza previsão durante uma viagem sem conexão.

**Decisão sugerida:** Permitir consulta, rascunho, atualização operacional, anexos e ocorrências offline. Oficialização, validação externa, confirmação de integração e fechamento definitivo ficam pendentes até sincronização.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-54 — Painel, alertas e tarefas

**O que significa:** Definir o que o responsável vê ao abrir COMEX.

**Exemplo aplicado à Sunset:** Há contêiner chegando em três dias, documento faltante e prazo de devolução próximo.

**Decisão sugerida:** Exibir operações por estado, ETA, atraso, documentos faltantes, divergências, custos pendentes, contêineres e prazos. Gerar tarefas e alertas configuráveis, sem depender apenas de e-mail.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-55 — Fechamento, reabertura e custos tardios

**O que significa:** Definir quando a importação fecha e como tratar fatos posteriores.

**Exemplo aplicado à Sunset:** A importação foi encerrada e depois chega uma fatura de armazenagem.

**Decisão sugerida:** Fechar quando mercadoria, documentos, contêiner, despacho e conciliações mínimas estiverem completos. Reabertura exige permissão e auditoria. Custo tardio permanece vinculado e segue a regra aprovada de ajuste de estoque e despesa.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

