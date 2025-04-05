require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const logger = require('./logger');
const sequelize = require('./db');
const produtosRoutes = require('./routes/produtos');
const authRoutes = require('./routes/auth');
const loginLimiter = require('./middlewares/loginLimiter'); 
const authController = require('./controllers/authController');
const seed = require('./seed');

const app = express();

app.use(express.json());
app.use(cors());

app.use(morgan("combined", {
  stream: {
    write: (message) => logger.info(message.trim())
  }
}));

app.post('/login', loginLimiter, authController.login);

app.use('/produtos', produtosRoutes);
app.use('/login', authRoutes);

app.use((req, res, next) => {
  const msg = `Rota não encontrada: ${req.method} ${req.originalUrl}`;
  logger.warn(`${msg}`);
  res.status(404).json({ error: msg });
});

app.use((err, req, res, next) => {
  logger.error(`Erro interno: ${err.message}`);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.sync();
    logger.info(`🟢Servidor rodando na porta ${PORT}`);

    // Criação de usuário de teste
    await seed();
  } catch (err) {
    logger.error('🔴Erro ao sincronizar com o banco de dados:', err);
  }
});