import type { Context } from 'koa'
import service from '../services/topMovies.service'

//未写错误处理
class topMoviesController {
    async getTopMovies(ctx: Context) {
        const { limit } = ctx.query
        const data = await service.getTopMovies(limit as string)
        ctx.body = data
    }
}

export default new topMoviesController()