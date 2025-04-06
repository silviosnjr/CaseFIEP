# API de Autenticação

Esta API permite a autenticação de usuários com e-mail e senha, utilizando JWT para controle de sessões.

---

## Endpoint: `POST /login`

Realiza o login de um usuário.

### Requisição

**URL:** `/login`  
**Método:** `POST`  
**Headers:**
- `Content-Type: application/json`

**Body:**
```json
{
  "email": "admin@fiep.org.br",
  "senha": "SilvioNaFiep2025"
}
```

### Respostas

**200 OK**
```json
{
  "token": "jwt_token_gerado"
}
```

**400 Bad Request**
```json
{
  "error": "E-mail e senha são obrigatórios"
}
```

**401 Unauthorized**
```json
{
  "error": "E-mail ou senha inválidos"
}
```

**429 Too Many Requests**
```json
{
  "message": "Muitas tentativas de login. Tente novamente mais tarde."
}
```

---

## Segurança

- O token JWT deve ser utilizado nas demais rotas protegidas da aplicação através do cabeçalho:

```
Authorization: Bearer <token>
```

---

## Observações

- A API utiliza um middleware de limitação de tentativas de login (`loginLimiter`) para evitar ataques de força bruta.
