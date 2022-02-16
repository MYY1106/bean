import { Context } from "koa"
import errorTypes from "../constants"

const errorHandler = (err: Error, ctx: Context) => {
    let status, message
    switch (err.message) {
        case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
            status = 400
            message = "用户名或者密码不能为空"
            break;
        case errorTypes.USER_ALREADY_EXISTS:
            status = 409 // confilict
            message = "用户名已存在"
            break;
        default:
            status = 404
            message = "404 Not Found"
    }

    ctx.status = status
    ctx.body = message
}

export default errorHandler