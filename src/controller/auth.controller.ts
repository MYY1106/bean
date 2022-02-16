import type { Context, Next } from 'koa'


class authController {
    async login(ctx: Context, next: Next) {
        const { username } = ctx.request.body;
        // const result = await service.create(user)
        //返回数据
        // ctx.body = result
    }
}

export default new authController()