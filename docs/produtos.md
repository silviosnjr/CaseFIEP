
# API de Produtos

Esta API permite realizar operações de **CRUD** (Criar, Ler, Atualizar e Deletar) sobre os produtos disponíveis no sistema.

## Rotas

### `GET /produtos`
Retorna a lista de todos os produtos cadastrados.

#### Exemplo de resposta:
```json
[
  {
    "id": 1,
    "nome": "Mouse Gamer",
    "descricao": "Mouse com iluminação RGB",
    "preco": 149.9,
    "estoque": 10,
    "categoria": null
  },
  ...
]
```

---

### `GET /produtos/:id`
Retorna os dados de um produto específico com base no ID fornecido.

#### Exemplo de resposta:
```json
{
  "id": 2,
  "nome": "Teclado Mecânico",
  "descricao": "Switch blue com LED",
  "preco": 299.9,
  "estoque": 5,
  "categoria": null
}
```

---

### `POST /produtos`
Cria um novo produto no banco de dados.

#### Corpo da requisição:
```json
{
  "nome": "Monitor 24"",
  "descricao": "Tela Full HD com 75Hz",
  "preco": 899.9,
  "estoque": 3,
  "categoria": "Eletrônicos"
}
```

#### Exemplo de resposta:
```json
{
  "id": 4,
  "nome": "Monitor 24"",
  "descricao": "Tela Full HD com 75Hz",
  "preco": 899.9,
  "estoque": 3,
  "categoria": "Eletrônicos"
}
```

---

### `PUT /produtos/:id`
Atualiza os dados de um produto com base no ID fornecido.

#### Corpo da requisição:
```json
{
  "estoque": 7
}
```

---

### `DELETE /produtos/:id`
Remove um produto do sistema com base no ID.

#### Exemplo de resposta:
```json
{ "message": "Produto excluído com sucesso." }
```