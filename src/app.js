const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = { message: 'Hello Koa' };
});

module.exports = app;
