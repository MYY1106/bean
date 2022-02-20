import pool from "../app/database"
import type { Context } from "koa";

class UserService {
    async getHitMovies(ctx: Context) {
        // 1. 获取用户相关信息
        const user = ctx.user
        const statement = `SELECT JSON_ARRAYAGG(JSON_OBJECT('movieID', movieList.id, 'movieName', movieList.name, 'score', score, 'coverURL' ,coverUrl)) as json FROM movieList
        JOIN hitMovieList on hitMovieList.movieID = movieList.id;`
        const [rows, fields] = await pool.query(statement)
        return (rows as any)[0].json
    }
}

export default new UserService()