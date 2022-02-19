import Router from "koa-router";

import userController from "../controller/user.controller"
import authController from "../controller/auth.controller"
import introController from "../controller/intro.controller"
import { verifyUser, handlePassword, verifyLogin, verifyAuth } from "../middleware"

// 从类的实例中取出对应方法
const { create } = userController
const { login, success } = authController
const { getIntro, changeIntro } = introController

//路径 - 中间件映射
const userRouter = new Router({ prefix: "/users" });

userRouter.post("/register", verifyUser, handlePassword, create);
userRouter.post("/login", verifyLogin, login);
userRouter.post('/intro', verifyAuth, changeIntro);
userRouter.get("/intro", verifyAuth, getIntro);
userRouter.get("/test", verifyAuth, success)

export default userRouter;