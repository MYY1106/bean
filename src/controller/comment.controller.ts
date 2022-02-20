import service from "../services/comment.service"
import type { Context } from 'koa'

class commentController {
    async getUserComment(ctx: Context) {
        const user = ctx.user
        console.log(user)
        const result = await service.getComment(user.username)
        console.log(result)
        ctx.body = result
    }

    async addUserComment(ctx: Context) {
        const user = ctx.user
        const body = ctx.request.body
        //修改数据
        const result = await service.addComment(user.username, body)
        //返回数据
        console.log(result)
        ctx.body = result
    }
}

export default new commentController()