#!/bin/bash
set -e

echo "🛑 Parando ambiente de desenvolvimento Sunset ERP..."

# Stop PostgreSQL
echo "🐘 Parando PostgreSQL..."
pnpm db:down

echo "✅ Ambiente parado!"
