# Pré-requisitos e Instalação

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes softwares instalados:

- [Docker](https://www.docker.com) e [Docker Compose](https://docs.docker.com/compose/)
- [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/pt-br/windows/wsl/install) (necessário apenas para Windows)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/silviosnjr/caseFIEP.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd caseFIEP
   ```

3. Inicie os contêineres Docker:

   ```bash
   docker-compose up
   ```

   Isso iniciará os serviços do backend, frontend e banco de dados.

4. Acesse a aplicação:

   - **Frontend**: `http://localhost:3000`
   - **Backend**: `http://localhost:5000`