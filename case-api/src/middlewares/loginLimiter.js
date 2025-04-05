const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutos
  max: 5, // máximo de 5 tentativas
  standardHeaders: true, // retorna rate limit nos headers
  legacyHeaders: false,
  message: { error: "🚫 Muitas tentativas de login. Tente novamente mais tarde." },

  handler: (req, res) => {
    res.status(429).json({
      error: "🚫 Muitas tentativas de login. Tente novamente mais tarde."
    });
  }
});

module.exports = loginLimiter;
