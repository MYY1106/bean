import service from "../services/user.service"
import type { Context, Next } from 'koa'
import type { Query } from "mysql2"

class authController {
    async create(ctx: Context, next: Next) {
        //获取用户请求传递的参数
        const user = ctx.request.body
        //查询数据
        const result = await service.create(user)
        //返回数据
        ctx.body = result
    }
}

export default new authController()