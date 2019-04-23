const Koa = require('koa');
const helmet = require('koa-helmet');

const app = new Koa();

app.use(helmet());
app.use(async (ctx) => {
  ctx.body = { message: 'Hello Koa' };
});

module.exports = app;
