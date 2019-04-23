const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const helmet = require('koa-helmet');

const app = new Koa();

app.use(helmet());
app.use(bodyParser());
app.use(async (ctx) => {
  ctx.body = { message: 'Hello Koa' };
});

module.exports = app;
