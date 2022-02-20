import service from "../services/movieDetail.service"
import type { Context, Next } from 'koa'

// 未进行错误处理，比如输入的movieID不存在，或movieID不是数字
class movieDetailController {
    async getMovieDetail(ctx: Context, next: Next) {
        //获取用户请求的movieID
        const { id:movieID } = ctx.request.query
        
        //查询数据
        const result = await service.getMovieDetail(movieID as string)
        
        //返回数据
        ctx.body = result
    }
}

export default new movieDetailController()