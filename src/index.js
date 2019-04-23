const config = require('./config');
const logger = require('./logger');

Object.keys(config).map((key) => logger.info(`${key}: ${config[key]}`));
