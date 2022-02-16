import Koa from "koa";
import userRouter from '../router/user.router'
import authRouter from '../router/auth.router'
import bodyParser from "koa-bodyparser";
import errorHandler from "./error-handle";

const app: Koa = new Koa();

app.use(bodyParser())
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.use(authRouter.routes());
app.use(authRouter.allowedMethods());

app.on('error', errorHandler);

export default app;
