const path = require('path');
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ 
      filename: path.join(__dirname, '..', 'logs', 'error.log'), 
      level: 'error' 
    }),
    new transports.File({ 
      filename: path.join(__dirname, '..', 'logs', 'combined.log') 
    }),
  ],
});

module.exports = logger;