#!/bin/bash
set -e

echo "🚀 Subindo ambiente de desenvolvimento Sunset ERP..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  Arquivo .env não encontrado. Copiando .env.example..."
    cp .env.example .env
    echo "✅ Arquivo .env criado. Edite com valores apropriados."
fi

# Start PostgreSQL
echo "🐘 Subindo PostgreSQL..."
pnpm db:up

# Wait for PostgreSQL to be ready
echo "⏳ Aguardando PostgreSQL ficar pronto..."
sleep 5

# Check health
until docker exec sunset-erp-postgres pg_isready -U erp -d sunset_erp > /dev/null 2>&1; do
    echo "   Aguardando..."
    sleep 2
done

echo "✅ PostgreSQL pronto!"
echo ""
echo "📦 Instalando dependências..."
pnpm install

echo ""
echo "🎉 Ambiente pronto!"
echo ""
echo "Para iniciar o desenvolvimento:"
echo "  pnpm dev"
echo ""
echo "Para rodar testes:"
echo "  pnpm test"
