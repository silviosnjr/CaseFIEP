
# Configurações do Projeto

Este documento descreve as principais configurações e variáveis de ambiente necessárias para executar o projeto corretamente.


## Configuração do Docker

O projeto utiliza Docker para facilitar a execução. As principais configurações estão no arquivo `docker-compose.yml`, que orquestra os serviços:

- **case-db**: container com PostgreSQL
- **case-api**: backend em Node.js com Express
- **case-frontend**: frontend em React

Para iniciar o projeto com Docker, use:

```bash
docker-compose up --build
```

## Estrutura dos Contêineres

| Serviço       | Porta local | Descrição                            |
|---------------|-------------|----------------------------------------|
| case-db       | 5432        | Banco de dados PostgreSQL              |
| case-api      | 3000        | Backend da aplicação                   |
| case-frontend | 5173        | Interface web acessível via navegador  |

## Observações

- O projeto possui um script de _seed_ que é executado automaticamente na inicialização do `case-api`. Ele cria um usuário e alguns produtos de teste.
- Logs são gerenciados com `winston` e `morgan`, e armazenados na pasta `logs/`.

---

Caso tenha dúvidas, consulte a documentação no repositório principal ou entre em contato com a equipe de desenvolvimento.