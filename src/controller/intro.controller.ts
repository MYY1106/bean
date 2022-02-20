import service from "../services/intro.service"
import type { Context } from 'koa'

class introController {
    async getIntro(ctx: Context) {
        const user = ctx.user
        //查询数据
        const result = await service.getIntro(user.id)
        //返回数据
        ctx.body = result
    }

    async changeIntro(ctx: Context) {
        const user = ctx.user
        const body = ctx.request.body
        //修改数据
        const result = await service.changeIntro(user.id, body.intro)
        //返回数据
        ctx.body = result
    }
}

export default new introController()