---
id: QA-ERP-EXPRESS-P0
title: ERP Express P0 — 72 decisões críticas para liberar o desenvolvimento
status: ACCEPTED
version: 1.8.1
priority: P0
purpose: Fechar somente as decisões indispensáveis de todos os módulos restantes, sem repetir levantamentos detalhados.
---

# ERP Express P0 — todos os módulos

> **Resultado:** 70 decisões sugeridas confirmadas sem alteração e 2 decisões ajustadas pelo proprietário do projeto (P0-ERP-001 e P0-ERP-036).

Este questionário substitui, para o primeiro release, as rodadas longas ainda não respondidas. As perguntas P1 e P2 ficam no backlog e não bloqueiam o início do desenvolvimento.

## Como responder com rapidez

Cada pergunta contém uma decisão sugerida baseada no que já foi definido. Você pode responder:

- `CONFIRMO`;
- `ALTERAR PARA: ...`;
- `CONFIRMO O BLOCO INTEIRO`, alterando apenas as exceções.

Exemplo:

```text
CONFIRMO O BLOCO 2 — LANDED COST
P0-ERP-014: ALTERAR PARA rateio por quantidade.
```

Não é necessário repetir a explicação nem escrever textos longos.

---

# BLOCO 1 — COMEX

## P0-ERP-001 — Escopo do primeiro release de COMEX

**O que significa:** Definir quais operações de comércio exterior precisam funcionar já na primeira versão.

**Exemplo aplicado à Sunset:** A operação atual é importar pneus da China por via marítima, em contêiner, para nacionalização definitiva na Argentina.

**Decisão sugerida:** Primeiro release com importação definitiva marítima em contêiner. Trânsito, zona franca, exportação e regimes especiais ficam preparados no modelo, mas entram depois.

**Sua resposta:** ALTERAR PARA: O primeiro release deve suportar importação definitiva, trânsito aduaneiro, operações em Zona Primária Aduaneira e operações em Zona Franca. Zona Primária Aduaneira e Zona Franca serão modeladas como regimes/localizações distintos, ainda que ambas precisem existir desde o primeiro release.

---

## P0-ERP-002 — Estrutura do processo

**O que significa:** Definir como pedido internacional, embarque, contêiner, despacho e SKU se relacionam.

**Exemplo aplicado à Sunset:** Um pedido de 1.008 pneus pode sair em quatro contêineres, em duas datas, e gerar mais de um despacho.

**Decisão sugerida:** Pedido internacional → vários embarques → vários contêineres → um ou vários despachos → itens por SKU e quantidade. Permitir embarque parcial e saldo pendente.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-003 — Estados e datas obrigatórias

**O que significa:** Definir as etapas que aparecem na tela e as datas previstas e reais controladas.

**Exemplo aplicado à Sunset:** Produção prevista para 10/08, concluída em 14/08; ETA prevista para 20/09, chegada real em 24/09.

**Decisão sugerida:** Rascunho, aprovação, pedido enviado, proforma confirmada, produção, pronta, booking, embarcada, em trânsito, chegada, despacho, liberada, desconsolidada, recebida, contêiner devolvido e fechada; guardar data prevista, revisada e real.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-004 — Documentos e leitura automática

**O que significa:** Definir quais documentos são obrigatórios e o que o sistema extrai automaticamente.

**Exemplo aplicado à Sunset:** A commercial invoice deve fornecer fornecedor, número, moeda, itens, quantidades e valores; o packing list deve fornecer pesos, volumes e contêiner.

**Decisão sugerida:** Exigir proforma, commercial invoice, packing list, booking, BL, seguro quando aplicável, despacho, comprovantes aduaneiros e faturas de gastos. A leitura automática cria proposta para revisão humana.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-005 — Conferência e divergências

**O que significa:** Definir como o ERP reage quando pedido, invoice, packing list, BL ou despacho não coincidem.

**Exemplo aplicado à Sunset:** Pedido com 252 pneus, invoice com 250 e packing list com 248.

**Decisão sugerida:** Comparar automaticamente SKU, quantidade, preço, moeda, peso, volumes, NCM, origem, contêiner e lacre. Divergência abre ocorrência; continuidade somente com aprovação ou override master auditado.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-006 — Dados aduaneiros por item

**O que significa:** Definir os dados mínimos necessários para nacionalizar e rastrear cada SKU.

**Exemplo aplicado à Sunset:** Pneu 295/80R22.5, origem China, NCM informado no embarque e certificado E4.

**Decisão sugerida:** Guardar SKU, descrição, fabricante, origem, procedência, NCM vigente, certificado, despacho, contêiner e quantidade. Toda mudança preserva histórico.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-007 — Despacho e liberação

**O que significa:** Definir os eventos aduaneiros que o sistema deve acompanhar.

**Exemplo aplicado à Sunset:** O despachante oficializa o IC04, informa canal, tributos, exigências e a liberação.

**Decisão sugerida:** Controlar número do despacho, aduana, despachante, oficialização, canal, exigências, tributos, pagamentos, retificações e liberação documental.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-008 — Gastos e conexão com landed cost

**O que significa:** Definir como as despesas da importação alimentam o motor de custos.

**Exemplo aplicado à Sunset:** Porto, despachante, agente de carga, linha marítima, frete terrestre e direitos aduaneiros.

**Decisão sugerida:** Registrar cada item líquido da fatura por categoria e vincular a importação, despacho e contêiner. IVA e percepções ficam separados. Somente componentes elegíveis seguem para landed cost.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-009 — Dívida e pagamento internacional

**O que significa:** Definir como a invoice em USD, o fechamento de câmbio e as despesas bancárias se relacionam.

**Exemplo aplicado à Sunset:** Invoice de USD 25.000 paga 120 dias após a chegada; o banco usa câmbio 1.490, mais SWIFT e comissão.

**Decisão sugerida:** Manter principal original em USD. Pagamento registra taxa negociada, ARS debitados, SWIFT, comissões, impostos e diferença cambial, sem alterar o principal em USD.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-010 — Entrada vendável e encerramento

**O que significa:** Definir quando o pneu vira estoque disponível e quando a importação pode ser fechada.

**Exemplo aplicado à Sunset:** O despacho foi liberado, mas o operador ainda não descarregou nem conferiu.

**Decisão sugerida:** Disponível para venda somente após liberação, descarga, conferência e confirmação do depósito nacional. Fechar após documentos, devolução do contêiner, divergências e conciliações mínimas; custos tardios continuam vinculados.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# BLOCO 2 — LANDED COST

## P0-ERP-011 — Bases de custo independentes

**O que significa:** Definir quais visões de custo o ERP manterá sem misturá-las.

**Exemplo aplicado à Sunset:** O mesmo pneu pode ter custo contábil de USD 150, custo gerencial de USD 165 e cash-out de USD 205.

**Decisão sugerida:** Manter quatro bases: custo contábil do estoque, custo gerencial, cash-out e custo provisório. Cada relatório deve indicar qual base usa.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-012 — Componentes incluídos e excluídos

**O que significa:** Definir exatamente quais gastos entram em cada base.

**Exemplo aplicado à Sunset:** FOB, frete marítimo, seguro, porto, despachante e direito de importação podem entrar; IVA recuperável não deve aumentar o custo contábil.

**Decisão sugerida:** Criar catálogo parametrizável por componente, com marcações: entra no custo contábil, entra no gerencial, entra no cash-out, recuperável ou despesa do período.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-013 — Regra de rateio por SKU

**O que significa:** Definir como um gasto total do contêiner será distribuído entre os produtos.

**Exemplo aplicado à Sunset:** Frete de USD 3.000 para dois SKUs com valores FOB diferentes.

**Decisão sugerida:** Padrão: rateio proporcional ao valor FOB de cada linha. Permitir regra alternativa por quantidade, peso, volume ou valor, escolhida por categoria de gasto e registrada no cálculo.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-014 — Custo provisório e custo definitivo

**O que significa:** Definir como vender antes de todas as faturas chegarem.

**Exemplo aplicado à Sunset:** O contêiner já foi vendido, mas a armazenagem chega no mês seguinte.

**Decisão sugerida:** Usar estimativas aprovadas para custo provisório. Ao chegar o gasto real, recalcular; aplicar diferença ao estoque remanescente e levar a parcela já vendida para ajuste de custo do período.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-015 — Câmbio aplicado ao custo

**O que significa:** Definir qual taxa converte cada componente e como preservar a origem.

**Exemplo aplicado à Sunset:** FOB em USD, frete em USD e porto em ARS, todos com datas diferentes.

**Decisão sugerida:** Cada documento conserva moeda original, taxa do evento, data e fonte. O motor também mantém uma visão em USD usando o câmbio master de apresentação.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-016 — Margem e reconciliação

**O que significa:** Definir o resultado mínimo mostrado ao usuário e como provar que o cálculo fecha.

**Exemplo aplicado à Sunset:** Venda líquida de USD 190, custo gerencial de USD 165 e margem de USD 25.

**Decisão sugerida:** Mostrar margem em valor e percentual sobre preço líquido e sobre custo, por item, venda, cliente, canal e região. Exigir reconciliação entre despesas importadas, pool rateado e custo aplicado.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# BLOCO 3 — FISCAL

## P0-ERP-017 — Documentos fiscais do primeiro release

**O que significa:** Definir os comprovantes que o ERP deve emitir ou registrar desde o início.

**Exemplo aplicado à Sunset:** Factura A ou B para venda, nota de crédito para devolução e remito para movimentação.

**Decisão sugerida:** Suportar facturas A, B e C conforme condição fiscal, notas de crédito e débito relacionadas, remitos e comprovante interno não fiscal de contingência.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-018 — Integração SI Factura e contingência

**O que significa:** Definir quem autoriza fiscalmente e o que ocorre quando a integração falha.

**Exemplo aplicado à Sunset:** A venda é confirmada, mas SI Factura ou ARCA está indisponível.

**Decisão sugerida:** ERP envia dados à SI Factura por adapter substituível. Em falha, enfileira, emite somente comprovante interno não fiscal e sincroniza depois; nunca inventa CAE.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-019 — IVA, percepções e recuperabilidade

**O que significa:** Definir como impostos de compras e importações serão separados do custo e da despesa.

**Exemplo aplicado à Sunset:** Fatura do porto com neto, IVA, percepção de IVA e percepção de IIBB.

**Decisão sugerida:** Registrar cada tributo em linha própria e em conta própria. Recuperabilidade, vencimento e tratamento contábil devem ser parametrizáveis por tipo de tributo.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-020 — IIBB por jurisdição

**O que significa:** Definir como calcular percepções e retenções de Ingresos Brutos.

**Exemplo aplicado à Sunset:** Cliente de Córdoba pode ter tratamento diferente de cliente de Buenos Aires.

**Decisão sugerida:** Motor versionado por província, regime, padrón, alíquota, vigência e exceção, vinculado à província fiscal do cliente. CABA usa fonte AGIP aplicável.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-021 — Despacho na descrição fiscal

**O que significa:** Definir como o número do despacho acompanha o produto vendido.

**Exemplo aplicado à Sunset:** O pneu vendido veio do despacho IC04-0001.

**Decisão sugerida:** Cada linha faturada deve levar o despacho ou referência exigida, utilizando a camada FIFO do estoque. Vendas com itens de dois despachos devem separar ou detalhar ambas as origens.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-022 — Calendário e obrigações

**O que significa:** Definir quais apurações e arquivos o ERP precisa preparar.

**Exemplo aplicado à Sunset:** IVA mensal, IIBB mensal e relatórios para o contador.

**Decisão sugerida:** Manter calendário fiscal, períodos, vencimentos, bases, saldos, arquivos de suporte e trilha até cada documento. A entrega oficial pode permanecer com o contador, mas o ERP deve reconciliar os números.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# BLOCO 4 — CONTABILIDADE

## P0-ERP-023 — Plano de contas e dimensões

**O que significa:** Definir a estrutura que receberá todos os lançamentos.

**Exemplo aplicado à Sunset:** Uma despesa de frete pode ser analisada por Comex, importação, depósito e centro de custo.

**Decisão sugerida:** Plano de contas argentino com contas analíticas e dimensões independentes: centro de custo, canal, região, depósito, SKU/categoria, importação, venda e campanha quando aplicável.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-024 — Lançamentos automáticos por evento

**O que significa:** Definir quais operações geram débitos e créditos automaticamente.

**Exemplo aplicado à Sunset:** Receber uma fatura do porto cria fornecedor a pagar, despesa ou estoque e créditos fiscais.

**Decisão sugerida:** Cada evento operacional aprovado deve chamar uma matriz contábil parametrizada. Não permitir lançamento desbalanceado; permitir simulação antes de contabilizar.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-025 — Moedas e diferenças cambiais

**O que significa:** Definir como registrar ARS funcional, USD original e USD de apresentação.

**Exemplo aplicado à Sunset:** Dívida de USD 25.000 reconhecida a 1.430 e paga a 1.490.

**Decisão sugerida:** Guardar moeda original e ARS funcional; reconhecer diferença cambial realizada no pagamento e não realizada no fechamento. Demonstrações em USD usam câmbio master do dia de apresentação.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-026 — Estoque e custo da mercadoria vendida

**O que significa:** Definir quando o custo sai do estoque e vira resultado.

**Exemplo aplicado à Sunset:** Ao entregar 20 pneus, o custo das camadas FIFO correspondentes deve virar CMV.

**Decisão sugerida:** Baixar custo no evento definido de saída/entrega confirmada, usando FIFO por disponibilidade, despacho e contêiner. Ajustes tardios seguem a política de landed cost.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-027 — Períodos e fechamentos

**O que significa:** Definir quando usuários podem lançar ou alterar documentos antigos.

**Exemplo aplicado à Sunset:** O mês de junho já foi fechado, mas chega uma fatura com data de junho em julho.

**Decisão sugerida:** Fechamentos diário, semanal, mensal, semestral, anual e fiscal. Período fechado não é alterado; documento tardio entra no período aberto com referência ao período de competência e ajuste autorizado.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-028 — Lançamentos manuais e aprovação

**O que significa:** Definir quem pode criar journals manuais e quais controles existem.

**Exemplo aplicado à Sunset:** Reclassificação de ARS 5 milhões entre duas contas.

**Decisão sugerida:** Somente usuários autorizados; dupla aprovação para lançamentos manuais críticos; anexos e justificativa; master pode override, mas nunca apagar auditoria ou desbalancear.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-029 — Demonstrações e drill-down

**O que significa:** Definir os relatórios contábeis mínimos e o nível de detalhe.

**Exemplo aplicado à Sunset:** Clicar no saldo de bancos no balanço e chegar aos extratos e lançamentos.

**Decisão sugerida:** Balanço patrimonial, DRE, fluxo de caixa, razão, diário, balancete e mutações relevantes em ARS e USD, com drill-down até documento, item, pagamento e evento de origem.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# BLOCO 5 — ESTOQUE

## P0-ERP-030 — Estados do estoque

**O que significa:** Definir quando uma unidade está disponível, reservada ou indisponível.

**Exemplo aplicado à Sunset:** Pneu em trânsito, no porto, em depósito fiscal, disponível, reservado, em entrega ou avariado.

**Decisão sugerida:** Catálogo de estados com regras de disponibilidade. Somente estado vendável entra no ATP; estados fiscais, avaria e ocorrência não podem ser prometidos sem override.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-031 — FIFO e rastreabilidade

**O que significa:** Definir a ordem de consumo e as chaves de rastreio.

**Exemplo aplicado à Sunset:** Dois lotes do mesmo SKU vindos dos despachos IC04-01 e IC04-02.

**Decisão sugerida:** FIFO começa quando a camada fica disponível para venda. Camada identificada por SKU + despacho + contêiner + depósito + data de disponibilidade.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-032 — Reserva e entrega parcial

**O que significa:** Definir quando o pedido prende estoque e como tratar parte da quantidade.

**Exemplo aplicado à Sunset:** Pedido de 100 pneus, com 60 entregues hoje e 40 depois.

**Decisão sugerida:** Orçamento não reserva. Pedido/venda aberta reserva. Permitir reserva e entrega parcial, liberando ou mantendo saldo conforme decisão do usuário autorizado.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-033 — Integração com depósitos terceirizados

**O que significa:** Definir como o ERP recebe posição e confirma movimentos.

**Exemplo aplicado à Sunset:** Operador envia arquivo semanal e remito assinado após a retirada.

**Decisão sugerida:** Aceitar API e Excel. Exigir posição detalhada e resumo semanal sexta-feira 15:30. Entrada comprovada por confirmação de descarga; saída por remito assinado e confirmação do operador.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-034 — Divergências e perdas

**O que significa:** Definir o que ocorre quando ERP e operador não coincidem.

**Exemplo aplicado à Sunset:** ERP mostra 252 pneus e operador informa 251.

**Decisão sugerida:** Tolerância zero: abrir ocorrência urgente, recontar, congelar a diferença, aprovar perda e criar conta a cobrar do operador quando aplicável.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-035 — Transferências, ajustes e devoluções

**O que significa:** Definir os movimentos além da venda.

**Exemplo aplicado à Sunset:** Transferir pneus de TP_NAC para MOR_NAC ou receber devolução do cliente.

**Decisão sugerida:** Todo movimento gera documento, origem, destino, responsável, motivo e trilha. Ajustes críticos exigem dupla aprovação; devolução entra em quarentena até inspeção.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# BLOCO 6 — TESOURARIA

## P0-ERP-036 — Contas bancárias e moedas

**O que significa:** Definir o cadastro e a visualização dos saldos bancários.

**Exemplo aplicado à Sunset:** Conta em ARS no banco local e obrigação em USD ao exterior.

**Decisão sugerida:** Cadastrar contas por banco, moeda, titularidade e uso. Mostrar saldo contábil, saldo conciliado, disponível e compromissos futuros.

**Sua resposta:** ALTERAR PARA: Cadastrar contas por banco, país, moeda, titularidade e uso. A Sunset poderá manter contas em ARS e USD na Argentina, além de contas no exterior quando existirem. Mostrar saldo contábil, saldo conciliado, saldo disponível, valores bloqueados e compromissos futuros por conta e por moeda.

---

## P0-ERP-037 — Workflow de pagamento

**O que significa:** Definir como uma obrigação vira saída bancária.

**Exemplo aplicado à Sunset:** Pagar despachante e porto após aprovação.

**Decisão sugerida:** Proposta → conferência → dupla aprovação → execução → confirmação bancária → conciliação. Master pode override auditado; nenhuma saída é apagada.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-038 — Pagamento por conta de terceiros

**O que significa:** Definir como pagar várias faturas de credores diferentes por meio de uma contraparte.

**Exemplo aplicado à Sunset:** Enviar 100 ao despachante, que fica com 70 e paga 30 ao porto.

**Decisão sugerida:** Selecionar documentos de vários credores, contraparte liquidadora e valor pago. Liquidar cada documento; sobra ou falta vira saldo a pagar/receber da contraparte liquidadora.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-039 — Recebimentos e alocação

**O que significa:** Definir como dinheiro recebido quita uma ou várias vendas.

**Exemplo aplicado à Sunset:** Cliente transfere ARS 20 milhões para duas facturas.

**Decisão sugerida:** Permitir pagamento parcial, múltiplos documentos e múltiplos meios. Somente valor confirmado/conciliado libera mercadoria, salvo regra autorizada.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-040 — Cheques, cartões e depósitos

**O que significa:** Definir os instrumentos de cobrança e seus estados.

**Exemplo aplicado à Sunset:** Cheque físico recebido hoje, com vencimento em 30 dias.

**Decisão sugerida:** Registrar instrumento, emissor, vencimento, custódia, depósito, compensação, rejeição e encargos. Cartão e depósito mantêm taxas e prazo de liquidação.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-041 — Conciliação bancária assistida

**O que significa:** Definir como o sistema lê extratos e sugere lançamentos.

**Exemplo aplicado à Sunset:** Extrato mostra transferência de ARS 5 milhões com referência parcial.

**Decisão sugerida:** Importar extrato, sugerir correspondência por valor, data, CUIT e referência, e criar proposta de lançamento. Usuário revisa antes de confirmar.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-042 — Caixa, financiamento e previsão

**O que significa:** Definir como prever liquidez e controlar empréstimos.

**Exemplo aplicado à Sunset:** Pagamento de importação em 120 dias e recebimento de uma financeira antes da entrega.

**Decisão sugerida:** Fluxo diário, semanal e mensal com realizado, comprometido e previsto; controlar empréstimos, aportes, juros, vencimentos, financeiras e limites.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# BLOCO 7 — COMERCIAL

## P0-ERP-043 — Canais e sequência da venda

**O que significa:** Definir o mesmo processo para B2B, B2C, marketplace, portal, WhatsApp e e-mail.

**Exemplo aplicado à Sunset:** Cliente pede preço por WhatsApp, recebe orçamento, confirma e paga.

**Decisão sugerida:** Contato → orçamento → negociação → aprovação → pedido/venda aberta → factura → recebimento confirmado → remito → retirada/entrega → encerramento.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-044 — Formação de preço

**O que significa:** Definir quais valores entram no preço e na análise de margem.

**Exemplo aplicado à Sunset:** Custo gerencial USD 165, preço desejado USD 190, cobrança em ARS.

**Decisão sugerida:** Preço base em USD ou ARS, com câmbio selecionado, custo gerencial, margem mínima, impostos, frete, seguro e comissão visíveis. Guardar a taxa usada.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-045 — Descontos e aprovações

**O que significa:** Definir quando um desconto é livre e quando precisa de aprovação.

**Exemplo aplicado à Sunset:** Vendedor pede 8% de desconto e a margem cai abaixo do mínimo.

**Decisão sugerida:** Faixas parametrizadas por papel, produto, canal e margem. Acima da alçada ou abaixo da margem mínima exige aprovação; master pode override auditado.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-046 — Reserva, faturamento e liberação

**O que significa:** Definir a ordem entre pedido, factura, pagamento e estoque.

**Exemplo aplicado à Sunset:** Cliente confirma 100 pneus, recebe factura e paga antes da retirada.

**Decisão sugerida:** Reserva ao abrir a venda. Faturar conforme documento fiscal aplicável. Liberar mercadoria somente após crédito confirmado ou pagamento da financeira.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-047 — Pagamentos e entregas parciais

**O que significa:** Definir como a venda continua quando nem tudo ocorre de uma vez.

**Exemplo aplicado à Sunset:** Cliente paga 50%, depois 50%; recebe 60 pneus e depois 40.

**Decisão sugerida:** Permitir múltiplos pagamentos e entregas parciais, mantendo saldos financeiros, fiscais e físicos por linha.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-048 — Devolução, nota de crédito e comissão

**O que significa:** Definir os efeitos de uma devolução ou cancelamento.

**Exemplo aplicado à Sunset:** Cliente devolve 10 pneus depois de pagar integralmente.

**Decisão sugerida:** Abrir devolução, inspecionar, emitir nota de crédito quando cabível, ajustar estoque e resultado. Comissão só vence após quitação integral; comissão já paga não é recuperada automaticamente.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-049 — Documentos e comunicação

**O que significa:** Definir o que o sistema gera e envia ao cliente.

**Exemplo aplicado à Sunset:** Orçamento em PDF por e-mail e WhatsApp; factura e remito depois.

**Decisão sugerida:** Templates versionados para orçamento, pedido, factura referenciada, remito, comprovante de pagamento e entrega. Registrar envio, versão, destinatário e confirmação.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# BLOCO 8 — COMPRAS

## P0-ERP-050 — Fluxo de compra nacional

**O que significa:** Definir como nasce e é aprovada uma compra de bem ou serviço local.

**Exemplo aplicado à Sunset:** Comprar papel para o escritório ou contratar armazenamento.

**Decisão sugerida:** Solicitação → cotação quando necessária → aprovação → pedido/contratação → recebimento → fatura → contas a pagar. Permitir compra emergencial com regularização posterior.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-051 — Captura e conferência de faturas

**O que significa:** Definir como o sistema lê e valida documentos de fornecedores.

**Exemplo aplicado à Sunset:** Fatura do porto com vários serviços, IVA e percepções.

**Decisão sugerida:** OCR/IA extrai fornecedor, CUIT, número, data, itens líquidos e tributos; cria proposta. Validar duplicidade e comparar com pedido/serviço antes de aprovar.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-052 — Bem, serviço, despesa ou estoque

**O que significa:** Definir como classificar cada linha comprada.

**Exemplo aplicado à Sunset:** Pneu importado vira estoque; honorário jurídico vira despesa; notebook vira ativo.

**Decisão sugerida:** Cada linha escolhe natureza e tratamento contábil/fiscal. A classificação dirige recebimento, ativo, despesa, estoque e aprovação.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-053 — Aprovações e compras emergenciais

**O que significa:** Definir alçadas e exceções.

**Exemplo aplicado à Sunset:** Compra urgente de material de escritório sem pedido prévio.

**Decisão sugerida:** Alçadas por valor e categoria, com dupla aprovação para campos críticos. Emergência permite executar e exige anexar documento e regularizar dentro do prazo definido.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-054 — Condições e dados bancários

**O que significa:** Definir prazos, adiantamentos e segurança no pagamento.

**Exemplo aplicado à Sunset:** Fornecedor exterior a 120 dias da chegada; fornecedor local a 30 dias.

**Decisão sugerida:** Condição por fornecedor e contrato. Mudança bancária mantém histórico e requer aprovação antes do próximo pagamento.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# BLOCO 9 — CRM

## P0-ERP-055 — Entrada e propriedade dos leads

**O que significa:** Definir de onde surgem os potenciais clientes e quem cuida deles.

**Exemplo aplicado à Sunset:** Lead recebido por site, WhatsApp, vendedor ou marketplace.

**Decisão sugerida:** Registrar origem, segmento, região e responsável. Distribuição manual ou por regras; um lead nunca fica sem dono.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-056 — Etapas do funil

**O que significa:** Definir as fases até virar orçamento ou venda.

**Exemplo aplicado à Sunset:** Novo contato, qualificação, necessidade, proposta e negociação.

**Decisão sugerida:** Novo → contato iniciado → qualificado → oportunidade → orçamento → negociação → ganho/perdido. Cada etapa exige atividade mínima e motivo de perda.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-057 — Histórico de comunicação

**O que significa:** Definir o que será guardado de e-mail, telefone e WhatsApp.

**Exemplo aplicado à Sunset:** Vendedor envia preço e cliente confirma por WhatsApp.

**Decisão sugerida:** Registrar metadados, resumo, anexos e vínculo com cliente/oportunidade. Conteúdo sensível segue permissões e retenção.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-058 — Forecast e indicadores

**O que significa:** Definir como estimar vendas futuras.

**Exemplo aplicado à Sunset:** Oportunidade de 200 pneus com 70% de probabilidade neste mês.

**Decisão sugerida:** Forecast por valor, quantidade, produto, vendedor e período, usando etapa e probabilidade. KPIs: conversão, ciclo, atividade, perda e previsão versus realizado.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# BLOCO 10 — PLATAFORMA

## P0-ERP-059 — Arquitetura de produção

**O que significa:** Definir onde cada parte do sistema roda.

**Exemplo aplicado à Sunset:** Frontend no Vercel, banco no Railway e aplicativo desktop para Mac/Windows.

**Decisão sugerida:** Frontend web no Vercel; API e banco em infraestrutura Railway ou equivalente; documentos em storage próprio; cliente desktop sincronizável. Separar desenvolvimento, homologação e produção.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-060 — Operação offline

**O que significa:** Definir quais funções continuam sem internet e como sincronizam.

**Exemplo aplicado à Sunset:** Vendedor cria orçamento no notebook sem conexão.

**Decisão sugerida:** Permitir consulta, orçamento, pedido, recebimento, histórico e demais operações aprovadas offline. Usar fila local, IDs únicos e sincronização; conflitos críticos vão para revisão manual.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-061 — Papéis, permissões e master

**O que significa:** Definir quem pode ver, criar, aprovar e ignorar regras.

**Exemplo aplicado à Sunset:** Vendedor vê sua carteira; chefe vê o setor; master vê e altera tudo.

**Decisão sugerida:** RBAC por função, setor e carteira; dupla aprovação onde definido; master pode ignorar regra de negócio com trilha, mas não pode quebrar integridade, fabricar autorização fiscal ou apagar auditoria.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-062 — Configuração pela interface

**O que significa:** Definir o que o usuário master consegue parametrizar sem alterar código.

**Exemplo aplicado à Sunset:** Criar nova alíquota, categoria de custo, etapa, aprovação ou integração.

**Decisão sugerida:** Toda configuração funcional deve ter página administrativa, vigência, versão, teste e auditoria. Segredos técnicos ficam protegidos, mas sua rotação é acionada pela interface.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-063 — Documentos, OCR e busca

**O que significa:** Definir armazenamento, versões e recuperação de arquivos.

**Exemplo aplicado à Sunset:** Buscar todas as invoices do fornecedor X no contêiner Y.

**Decisão sugerida:** Guardar arquivo original, hash, versão, tipo, vínculo e campos extraídos. Busca por texto e metadados; OCR cria proposta; documento nunca é sobrescrito sem histórico.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-064 — Desempenho, disponibilidade e backup

**O que significa:** Definir metas possíveis e mensuráveis.

**Exemplo aplicado à Sunset:** Tela de pedido deve abrir rapidamente durante o horário comercial.

**Decisão sugerida:** Meta inicial: ações comuns percebidas em até 0,1 s quando cache/local permitir; APIs simples com SLO por percentil; indisponibilidade planejada fora de 06:00–22:00, segunda a sábado; RPO próximo de zero e RTO de 40 minutos, com backups em camadas e testes de restauração.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-065 — APIs, eventos e monitoramento

**O que significa:** Definir como integrações são controladas.

**Exemplo aplicado à Sunset:** Falha de SI Factura ou arquivo de depósito rejeitado.

**Decisão sugerida:** Adapters versionados, filas, idempotência, retentativas, dead-letter, painel de erros, alertas e reprocessamento pela interface. Todo evento crítico recebe correlation ID e auditoria.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# BLOCO 11 — MÓDULOS COMPLEMENTARES

## P0-ERP-066 — Escopo complementar mínimo

**O que significa:** Definir o que precisa existir já e o que pode esperar.

**Exemplo aplicado à Sunset:** RH pode precisar somente de usuários/cargos; folha salarial pode ficar fora.

**Decisão sugerida:** Primeiro release: cadastro de colaboradores, cargos, setores, ativos essenciais, ocorrências de qualidade/garantia e documentos legais. Folha, manutenção avançada e planejamento sofisticado ficam para fase posterior.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-067 — Qualidade, garantia e reclamação

**O que significa:** Definir o fluxo mínimo para problemas com pneus ou entrega.

**Exemplo aplicado à Sunset:** Cliente informa avaria ou possível defeito.

**Decisão sugerida:** Abrir ocorrência vinculada a cliente, venda, SKU, despacho e evidências; classificar causa, responsável, decisão, crédito/devolução e recuperação com fornecedor.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# BLOCO 12 — TESTES E GO-LIVE

## P0-ERP-068 — Escopo fechado do MVP

**O que significa:** Definir exatamente o que precisa estar funcionando para entrar em produção.

**Exemplo aplicado à Sunset:** Importar, custear, receber em estoque, vender, faturar, receber, entregar e contabilizar.

**Decisão sugerida:** MVP somente é aceito quando o fluxo ponta a ponta principal funciona com documentos, permissões, auditoria e relatórios mínimos. Itens P1/P2 não bloqueiam.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-069 — Cenários críticos de aceite

**O que significa:** Definir quais operações reais serão usadas para aprovar o sistema.

**Exemplo aplicado à Sunset:** Uma importação completa, uma venda com entrega parcial e um pagamento internacional.

**Decisão sugerida:** Criar roteiros com dados reais anonimizados: importação, landed cost, factura, pagamento, estoque, venda, recebimento, entrega, devolução, fechamento e contingência.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-070 — Dados iniciais e migração

**O que significa:** Definir o que será carregado no go-live.

**Exemplo aplicado à Sunset:** SKUs, clientes, fornecedores, saldos bancários, estoque por despacho e documentos em aberto.

**Decisão sugerida:** Migrar somente cadastros e saldos necessários; histórico antigo não é obrigatório. Toda carga deve reconciliar totais e produzir relatório de erros.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-071 — Testes técnicos obrigatórios

**O que significa:** Definir quais riscos precisam ser provados antes do lançamento.

**Exemplo aplicado à Sunset:** Queda de internet, falha da SI Factura, restauração de backup e 70 usuários simultâneos.

**Decisão sugerida:** Executar testes de segurança, permissões, carga, offline/sync, integração, idempotência, backup/restore, RPO/RTO e recuperação de falhas.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-ERP-072 — Cutover, rollback e suporte

**O que significa:** Definir como mudar para o ERP e como voltar se algo grave ocorrer.

**Exemplo aplicado à Sunset:** Entrar em produção numa segunda-feira e detectar falha crítica na faturação.

**Decisão sugerida:** Checklist de corte, congelamento de dados, carga final, validação, responsáveis, janela, plano de rollback, suporte intensivo e critérios objetivos para continuar ou reverter.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

# Resultado esperado

Com as 72 decisões será possível produzir imediatamente:

- blueprint funcional P0 de todos os módulos;
- mapa de entidades e estados;
- workflows ponta a ponta;
- motores de cálculo críticos;
- matriz de permissões e aprovações;
- contratos de integração;
- critérios de aceite e testes do MVP;
- backlog separado de P1 e P2.

Depois destas respostas, o desenvolvimento pode avançar por fatias verticais sem esperar novos levantamentos extensos.