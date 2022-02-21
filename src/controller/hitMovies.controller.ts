import type { Context, Next } from 'koa'
import service from '../services/hitMovies.service'

//未写错误处理
class HitMoviesController {
    async getHitMoviesList(ctx: Context, next: Next) {
        const res = await service.getHitMovies(ctx);
        ctx.body = res;
    }
}

export default new HitMoviesController()