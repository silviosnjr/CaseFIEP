const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/usuarios');
require('dotenv').config();
const logger = require('../logger');

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    logger.info(`Tentativa de login para o e-mail: ${email}`);

    const user = await User.findOne({ where: { email } });
    if (!user) {
      logger.warn(`Login falhou - Usuário não encontrado: ${email}`);
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      logger.warn(`Login falhou - Senha inválida para o e-mail: ${email}`);
      return res.status(400).json({ error: 'Senha inválida' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    logger.info(`Login bem-sucedido para o e-mail: ${email}`);
    return res.json({ token });

  } catch (error) {
    logger.error(`Erro ao realizar login para o e-mail ${email}: ${error.message}`);
    return res.status(500).json({ error: 'Erro no servidor' });
  }
};