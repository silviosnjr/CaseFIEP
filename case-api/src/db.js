const { Sequelize } = require('sequelize');
const logger = require('./logger');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false, // Você pode ativar para debug: logging: msg => logger.info(msg),
  }
);

sequelize.authenticate()
  .then(() => logger.info('🟩 Conexão com o PostgreSQL estabelecida com sucesso.'))
  .catch(err => logger.error(`🟥 Falha na conexão com o banco de dados: ${err.message}`));

module.exports = sequelize;
