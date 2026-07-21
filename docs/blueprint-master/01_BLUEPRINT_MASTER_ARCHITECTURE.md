# Blueprint master — arquitetura alvo

**Status:** `BUILD-READY BASELINE`  
**Versão:** 3.0.0  
**Data:** 2026-07-20

## 1. Produto

ERP operacional, financeiro, fiscal e contábil para a SUNSET TIRES CORPORATION S.A.S., com operação web e desktop offline, dados centrais na nuvem, interface trilíngue e rastreabilidade ponta a ponta por documento, operação, SKU, despacho, contêiner, depósito, lançamento e usuário.

## 2. Arquitetura aprovada

```text
Usuários web / aplicativo desktop
        │
        ├── Next.js no Vercel
        └── Tauri 2 + SQLite local + outbox/inbox
                    │
              REST/OpenAPI v1
                    │
      API modular NestJS/Fastify no Railway
                    │
      ├── PostgreSQL central no Railway
      ├── Workers e filas assíncronas
      ├── Object storage para documentos
      ├── OCR e revisão humana
      └── Integrações: SI Factura/ARCA, bancos, depósitos e fontes fiscais
```

## 3. Princípios técnicos

- Monólito modular inicialmente; fronteiras de domínio explícitas.
- PostgreSQL como fonte transacional central.
- TypeScript como linguagem principal; Rust apenas na camada nativa Tauri.
- Dinheiro em decimal, nunca `float`.
- Eventos versionados, outbox transacional, idempotência e retry controlado.
- Auditoria append-only.
- Configurações funcionais administráveis pela interface.
- Migrações reversíveis e padrão expand/contract para mudanças críticas.
- Operação offline com sincronização e revisão manual de conflitos críticos.

## 4. Camadas

1. **Experience:** web, desktop, design system, acessibilidade, atalhos.
2. **Application:** casos de uso, workflows, approvals, commands/queries.
3. **Domain:** regras, estados, cálculos, invariantes e eventos.
4. **Integration:** SI Factura, ARCA, bancos, operadores, e-mail e arquivos.
5. **Data:** PostgreSQL, SQLite offline, documentos e auditoria.
6. **Operations:** logs, métricas, traces, backups, DR, CI/CD e segurança.

## 5. Requisitos não funcionais

- Até 70 usuários simultâneos na baseline inicial, sem teto funcional fixo de usuários cadastrados.
- Operação comercial de segunda a sábado; mudanças produtivas fora do horário operacional.
- Meta de experiência percebida de 0,1 s para interações comuns, usando cache, atualização otimista e processamento assíncrono quando necessário.
- RPO objetivo zero para transações confirmadas, com WAL/PITR e replicação; RTO operacional de 40 minutos.
- Timezone de negócio: `America/Argentina/Buenos_Aires`; persistência técnica em UTC.
- Idiomas: espanhol, português e inglês.
- Moeda funcional: ARS; apresentação principal: USD; transações em ARS e USD.

## 6. Segurança

- RBAC com escopos, segregação de funções e dupla aprovação.
- Master override auditado, sem capacidade de quebrar invariantes técnicas, fiscais ou contábeis.
- Criptografia em trânsito e repouso, segredos fora do código e rotação.
- Logs sem dados sensíveis; trilha de acesso e mudanças críticas.

## 7. Fonte de verdade

- Catálogo funcional: `docs/catalog/`.
- Blueprints resumidos: `docs/blueprint-master/modules/` e `submodules/`.
- Corpus aceito de 71.500 decisões: `docs/blueprint-accepted/`.
- Controllers e slices: `docs/requirements/pr-programs/`.
- Ordem de implementação: `docs/execution/`.
