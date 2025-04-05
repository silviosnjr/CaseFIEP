#!/bin/sh

echo "⏳ Aguardando o PostgreSQL iniciar em $1:$2..."
while ! nc -z "$1" "$2"; do
  sleep 1
  echo "⏳ Aguardando o PostgreSQL iniciar em $1:$2..."
done

echo "✅ PostgreSQL está pronto! Iniciando a aplicação..."
shift 2
exec "$@"
