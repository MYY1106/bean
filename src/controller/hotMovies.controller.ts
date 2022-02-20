import type { Context } from 'koa'
import service from '../services/getHotMovies.service'

//未写错误处理
class HotMoviesController {
    async getHotMoviesList(ctx: Context) {
        const { type } = ctx.query

        const data = await service.getHotMovies(type as string)

        ctx.body = data
    }
}

export default new HotMoviesController()