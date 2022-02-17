import Router from "koa-router";
import authController from "../controller/auth.controller"
import { verifyLogin, verifyAuth } from "../middleware";

const { login, success } = authController

const authRouter = new Router({ prefix: "/users" });

authRouter.post("/login", verifyLogin, login);
authRouter.get("/test", verifyAuth, success)

export default authRouter