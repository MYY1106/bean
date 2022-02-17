import type { Context, Next } from 'koa'
import service from '../services/getHitMovies.service'

class HitMoviesController {
    async getHitMoviesList(ctx: Context, next: Next) {
        const res = await service.getHitMovies(ctx);
        ctx.body = res;
    }
}

export default new HitMoviesController()