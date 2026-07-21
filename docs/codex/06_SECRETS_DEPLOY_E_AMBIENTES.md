# Segredos, deploy e ambientes

## Ambientes

Mantenha desenvolvimento, homologação e produção isolados em Vercel, Railway, PostgreSQL e armazenamento de objetos.

## Segredos

- mantenha apenas nomes em `.env.example`;
- valores reais entram no secret manager do provedor;
- não cole chaves no Codex;
- use credenciais separadas por ambiente e com privilégio mínimo;
- rotacione credenciais após qualquer exposição suspeita.

## Deploy

- previews automáticos para PRs de frontend;
- migrations em etapa controlada;
- deploy de API/worker com health check;
- feature flags para ativação gradual;
- smoke test e reconciliação após deploy;
- rollback documentado antes de produção.
