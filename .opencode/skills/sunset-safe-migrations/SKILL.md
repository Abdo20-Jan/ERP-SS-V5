---
name: sunset-safe-migrations
description: Projetar e revisar migrations PostgreSQL reversíveis, expand-contract, backfills e locks para o Sunset ERP.
---
# Safe migrations
Use expand/contract em mudanças críticas. Separe schema, backfill e constraint. Teste banco vazio e banco representativo. Declare lock, duração, rollback, compatibilidade entre versões e validação pós-deploy. Nunca execute em produção pelo agente.
