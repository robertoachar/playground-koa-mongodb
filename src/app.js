import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';

import error from './error';
import router from './router';
import userRouter from './user/user.router';

const app = new Koa();

app.use(helmet());
app.use(bodyParser());
app.use(error);
app.use(router.routes());
app.use(userRouter.routes());

export default app;
