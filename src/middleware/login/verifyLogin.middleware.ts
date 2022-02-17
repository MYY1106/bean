import { Context, Next } from 'koa'
import { md5password } from '../../utils'
import errorTypes from "../../constants"
import service from "../../services/user.service"


const verifyLogin = async (ctx: Context, next: Next) => {
    // 1. 获取用户名和密码
    const { username, password } = ctx.request.body
    // 2. 查询数据库，验证用户名和密码是否为空
    if (!username || !password) {
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error, ctx)
    }
    // 3. 判断用户是否存在
    const result = (await service.getUserByName(username)) as any[]
    const poolUser = result[0];
    if (!poolUser) {
        console.log('1')
        const error = new Error(errorTypes.USER_NOT_EXISTS);
        return ctx.app.emit('error', error, ctx)
    }
    // 4. 判断密码是否和数据库中一致
    if (md5password(password) !== poolUser.password) {
        const error = new Error(errorTypes.PASSWORD_IS_INCORRECT);
        return ctx.app.emit('error', error, ctx)
    }
    // 5. 等待中间件执行完
    ctx.user = poolUser;
    await next()
}

export default verifyLogin