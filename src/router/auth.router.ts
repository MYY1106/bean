import Router from "koa-router";
import authController from "../controller/auth.controller"
import { verifyLogin } from "../middleware";

const { login } = authController

const authRouter = new Router({ prefix: "/users" });

authRouter.post("/login", verifyLogin, login);


export default authRouter