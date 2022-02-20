import type { Context } from 'koa'
import service from '../services/search.service'

//未写错误处理
class searchController {
    async search(ctx: Context) {
        const { keywords } = ctx.request.body
        const data = await service.searchMovies(keywords as string)
        ctx.body = data
    }
}

export default new searchController()