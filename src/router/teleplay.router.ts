import Router from "koa-router";
import hotTeleplaysController from "../controller/hotTeleplays.controller";

const { getHotTeleplaysList } = hotTeleplaysController

const userRouter = new Router({ prefix: "/teleplay" });

userRouter.get('/hot', getHotTeleplaysList);


export default userRouter;