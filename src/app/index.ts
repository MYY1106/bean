import Koa from "koa";
import Router from "koa-router";

const app: Koa = new Koa();

//路径 - 中间件映射
const userRouter = new Router({ prefix: "/users" });

userRouter.post("/", async (ctx, next) => {
  ctx.body = "successfully create account";
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

export default app;
