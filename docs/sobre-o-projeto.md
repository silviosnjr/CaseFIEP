# Sobre o Projeto

Este projeto é uma aplicação fullstack desenvolvida como parte de um estudo prático. Seu objetivo é simular a gestão de produtos por meio de uma API backend em Node.js com Express, banco de dados PostgreSQL e um frontend em React.

## Estrutura do Projeto

- **Backend (`case-api`)**: 
  - Desenvolvido em Node.js com Express.
  - Integração com banco de dados PostgreSQL usando Sequelize.
  - Autenticação via JWT.
  - Middleware de proteção de rotas.
  - Registro de logs com Winston e Morgan.
  - Seed para popular dados iniciais.
  - Dockerizado.

- **Frontend (`case-frontend`)**:
  - Criado com React.
  - Consome a API de produtos.
  - Interface com estilos do Bootstrap para listagem, criação, edição e exclusão de produtos.
  - Dockerizado com Nginx para ambiente de produção.

- **Banco de dados**:
  - PostgreSQL.
  - Contêiner Docker com volume persistente.
  - Popular com dados iniciais de produtos e usuário de teste.

## Funcionalidades

- Autenticação de usuários via login (JWT).
- CRUD de produtos (criar, listar, editar, excluir).
- Documentação das APIs.
- Validação de entradas e tratamento de erros.
- Inicialização automática do projeto via Docker Compose.
- Pré-população com dados de teste.

## Tecnologias Utilizadas

- **Backend**: Node.js, Express, Sequelize, JWT, Winston e Morgan.
- **Frontend**: React, Axios e Bootstrap.
- **Banco de dados**: PostgreSQL.
- **Containerização**: Docker, Docker Compose.

## Repositório
Criado Silvio Sales do Nascimento Júnior
[https://github.com/silviosnjr/caseFIEP](https://github.com/silviosnjr/caseFIEP)
