const mongoose = require('mongoose');

const app = require('./app');
const config = require('./config');
const logger = require('./logger');

mongoose.connect(config.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
  logger.info('MongoDB connected!');
});

mongoose.connection.on('disconnected', () => {
  logger.warn('MongoDB disconnected!');
  process.exit(1);
});

mongoose.connection.on('error', (err) => {
  logger.error('MongoDB Error!', err.message);
  process.exit(1);
});

app.listen(config.PORT, () => {
  Object.keys(config).map((key) => logger.info(`${key}: ${config[key]}`));
});
