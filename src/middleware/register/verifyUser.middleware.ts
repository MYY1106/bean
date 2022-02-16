import type { Context, Next } from 'koa'
import errorTypes from "../../constants"
import services from "../../services/user.service"

const verifyUser = async (ctx: Context, next: Next) => {
    // 1. 获取用户名和密码
    const { username, password } = ctx.request.body
    // 2. 查询数据库，验证用户名和密码是否正确
    if (!username || !password) {
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit("error", error, ctx)
    }
    // 3. 判断用户是否存在
    const result = (await services.getUserByName(username)) as any[]
    console.log(result)
    if (result[0]) {
        const error = new Error(errorTypes.USER_ALREADY_EXISTS);
        return ctx.app.emit("error", error, ctx);
    }
    // 4. 等待中间件执行完
    await next()
}

export default verifyUser