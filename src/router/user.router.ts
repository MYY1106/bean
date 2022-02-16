import Router from "koa-router";
import userController from "../controller/user.controller"
import { verifyUser, handlePassword } from "../middleware"

const { create } = userController
//路径 - 中间件映射
const userRouter = new Router({ prefix: "/users" });

userRouter.post("/", verifyUser, handlePassword, create);

export default userRouter;