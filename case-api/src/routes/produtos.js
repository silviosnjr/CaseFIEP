const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');
const authMiddleware = require('../middlewares/authMiddleware');

// Todas as rotas de produtos precisam de autenticação
router.use(authMiddleware);

router.post('/', authMiddleware, produtosController.createProduto);
router.get('/', produtosController.getAllProdutos);
router.get('/:id', produtosController.getProdutoById);
router.put('/:id', authMiddleware, produtosController.updateProduto);
router.delete('/:id', authMiddleware, produtosController.deleteProduto);

module.exports = router;