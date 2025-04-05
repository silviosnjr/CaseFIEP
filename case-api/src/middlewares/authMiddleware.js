const jwt = require('jsonwebtoken');
require('dotenv').config();
const logger = require('../logger');

module.exports = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    logger.warn('Tentativa de acesso sem token ou formato inválido');
    return res.status(401).json({ error: 'Token não fornecido ou inválido' });
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    logger.warn(`Token inválido: ${error.message}`);
    return res.status(401).json({ error: 'Token inválido ou expirado' });
  }
};
