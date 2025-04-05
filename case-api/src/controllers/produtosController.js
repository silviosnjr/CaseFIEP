const Produto = require('../models/produtos');
const logger = require('../logger');

exports.createProduto = async (req, res) => {
  try {
    const { nome, descricao, preco, estoque, categoria } = req.body;
    const produto = await Produto.create({ nome, descricao, preco, estoque, categoria });

    logger.info(`Produto criado: ID ${produto.id}, Nome: ${produto.nome}`);
    return res.status(201).json(produto);
  } catch (error) {
    logger.error(`Erro ao criar produto: ${error.message}`);
    return res.status(500).json({ error: 'Erro ao criar o produto' });
  }
};

exports.getAllProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    logger.info(`Listagem de produtos: ${produtos.length} encontrados`);
    return res.json(produtos);
  } catch (error) {
    logger.error(`Erro ao buscar produtos: ${error.message}`);
    return res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
};

exports.getProdutoById = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) {
      logger.warn(`Produto não encontrado (ID: ${req.params.id})`);
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    logger.info(`Produto retornado (ID: ${produto.id})`);
    return res.json(produto);
  } catch (error) {
    logger.error(`Erro ao buscar produto por ID: ${error.message}`);
    return res.status(500).json({ error: 'Erro ao buscar produto' });
  }
};

exports.updateProduto = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) {
      logger.warn(`Produto não encontrado para atualização (ID: ${req.params.id})`);
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    await produto.update(req.body);
    logger.info(`Produto atualizado: ID ${produto.id}`);
    return res.json(produto);
  } catch (error) {
    logger.error(`Erro ao atualizar produto (ID: ${req.params.id}): ${error.message}`);
    return res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};

exports.deleteProduto = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) {
      logger.warn(`Produto não encontrado para exclusão (ID: ${req.params.id})`);
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    await produto.destroy();
    logger.info(`Produto deletado: ID ${produto.id}`);
    return res.status(204).send();
  } catch (error) {
    logger.error(`Erro ao deletar produto (ID: ${req.params.id}): ${error.message}`);
    return res.status(500).json({ error: 'Erro ao deletar produto' });
  }
};