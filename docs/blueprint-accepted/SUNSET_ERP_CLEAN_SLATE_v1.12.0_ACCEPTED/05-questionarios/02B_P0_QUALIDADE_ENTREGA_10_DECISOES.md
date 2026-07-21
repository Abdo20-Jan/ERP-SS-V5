---
version: 1.10.0
status: ACCEPTED
priority: P0
---

# P0 — Qualidade, entrega e go-live



## P0-START-31 — Definition of Done

**O que significa:** Definir quando uma tarefa pode ser chamada de pronta.

**Exemplo aplicado à Sunset:** Uma tela bonita não está pronta se não tiver permissão, auditoria, teste e tratamento de erro.

**Decisão sugerida:** Uma feature só é concluída com código revisado, migration, testes, documentação, permissões, auditoria, observabilidade, tratamento de erro, acessibilidade básica e aceite funcional.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-32 — Estratégia de testes automatizados

**O que significa:** Definir quais tipos de testes devem existir desde o começo.

**Exemplo aplicado à Sunset:** A fórmula de landed cost precisa de teste unitário; o fluxo importação→estoque precisa de teste integrado.

**Decisão sugerida:** Exigir testes unitários de domínio, integração com banco, contratos de API e testes ponta a ponta dos fluxos críticos. Priorizar risco, não apenas percentual de cobertura.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-33 — Cobertura dos motores financeiros

**O que significa:** Definir o nível de prova para cálculos que afetam dinheiro, estoque e contabilidade.

**Exemplo aplicado à Sunset:** Câmbio, rateio, margem, IVA, saldo, débito e crédito não podem mudar silenciosamente após uma refatoração.

**Decisão sugerida:** Manter 100% dos cenários críticos catalogados em golden tests com entradas e resultados esperados. Toda alteração exige atualização justificada e aprovada dos resultados.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-34 — Testes de integrações externas

**O que significa:** Definir como testar SI Factura, depósitos, bancos, e-mail e arquivos sem depender sempre do ambiente real.

**Exemplo aplicado à Sunset:** A SI Factura pode responder sucesso, rejeição, timeout ou duplicidade.

**Decisão sugerida:** Criar adapters com mocks e contract tests; manter testes de homologação separados; testar timeout, retentativa, idempotência, rejeição, resposta incompleta e indisponibilidade.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-35 — Testes de segurança

**O que significa:** Definir verificações mínimas antes de cada release.

**Exemplo aplicado à Sunset:** Um vendedor não pode acessar tesouraria mudando a URL ou enviando requisição manual.

**Decisão sugerida:** Executar análise estática, dependências vulneráveis, segredos, autorização, isolamento de dados, upload malicioso e principais riscos web. Falhas críticas bloqueiam produção.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-36 — Testes do modo offline e sincronização

**O que significa:** Definir situações reais de queda de conexão e conflito.

**Exemplo aplicado à Sunset:** Dois notebooks trabalham offline no mesmo pedido, um sincroniza primeiro e outro depois.

**Decisão sugerida:** Testar queda durante gravação, reenvio, duplicidade, ordem fora de sequência, conflito, anexos grandes, sessão expirada, relógio incorreto e reconexão após vários dias.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-37 — Teste de carga e desempenho

**O que significa:** Definir quando a meta de velocidade será comprovada.

**Exemplo aplicado à Sunset:** 70 usuários consultam estoque e criam pedidos enquanto um relatório é processado.

**Decisão sugerida:** Criar teste reproduzível com 70 usuários simultâneos, picos de pedidos, importações de documentos e relatórios. Medir p50, p95, p99, erros, CPU, memória, banco e filas.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-38 — Homologação funcional

**O que significa:** Definir quem executa e quem aprova o UAT, isto é, o teste real de negócio.

**Exemplo aplicado à Sunset:** Um roteiro de importação é executado com documentos e valores semelhantes aos reais.

**Decisão sugerida:** Cada módulo terá um usuário operacional responsável por executar o roteiro; o proprietário do projeto dá o aceite final. Evidências, erros e ressalvas ficam anexados.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-39 — Release, rollback e correção emergencial

**O que significa:** Definir como publicar e voltar à versão anterior.

**Exemplo aplicado à Sunset:** Uma nova versão quebra a reserva de estoque após o deploy.

**Decisão sugerida:** Deploy automático somente após testes; produção com aprovação; migrations compatíveis com rollback ou plano de correção; botão/processo de rollback; hotfix com trilha e revisão posterior.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

## P0-START-40 — Migração e reconciliação inicial

**O que significa:** Definir como provar que cadastros, estoque, bancos e saldos foram carregados corretamente.

**Exemplo aplicado à Sunset:** O Excel informa 1.008 pneus e o ERP carrega 1.006.

**Decisão sugerida:** Toda carga gera totais de origem, destino, rejeições e diferenças. Go-live exige reconciliação assinada de estoque, bancos, contas abertas, clientes, fornecedores, SKUs e saldos contábeis.

**Sua resposta:** CONFIRMO A DECISÃO SUGERIDA.

---

