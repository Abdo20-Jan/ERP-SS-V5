---
id: BASELINE-P0-TECH-QUALITY-ALL
status: ACCEPTED
version: 1.10.0
approved_by: Proprietário do projeto
---

# Confirmação dos blocos P0 técnicos e de qualidade

O proprietário confirmou integralmente os três blocos da versão 1.9.0:

- Bloco A — arquitetura técnica: 30 decisões;
- Bloco B — qualidade, entrega e go-live: 10 decisões;
- Bloco C — implementação inicial de COMEX: 15 decisões.

Não existem exceções registradas para essas 55 decisões.

## Efeito da confirmação

A fundação técnica está autorizada com:

- TypeScript como linguagem principal;
- monorepo e monólito modular;
- frontend Next.js no Vercel;
- API NestJS/Fastify, workers e PostgreSQL no Railway;
- aplicativo desktop Tauri 2 com SQLite local;
- REST/OpenAPI, filas persistentes, idempotência e auditoria append-only;
- autenticação individual, MFA para papéis críticos e RBAC com escopo;
- documentos em object storage compatível com S3;
- ambientes separados, CI/CD, observabilidade, backup e restauração;
- testes automatizados, homologação, rollback e reconciliação;
- fluxo vertical de COMEX conforme as 15 decisões aprovadas.

## Ampliação de escopo

A implementação não ficará limitada a COMEX. Os treze workstreams abaixo estão autorizados a entrar em preparação e desenvolvimento, respeitando contratos e dependências:

1. COMEX;
2. Landed cost;
3. Fiscal;
4. Contábil — fundação;
5. Estoque;
6. Tesouraria;
7. Comercial;
8. Compras;
9. CRM;
10. Fechamento contábil transversal;
11. Plataforma;
12. Módulos complementares;
13. Testes, migração e implantação.

Decisões P1/P2 não bloqueiam o início. Quando uma lacuna não puder ser resolvida por parametrização ou por regra técnica não destrutiva, ela será registrada no backlog e submetida ao proprietário.
