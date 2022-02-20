import pool from "../app/database"

class topMoviesService {
    async getTopMovies(type: string) {

        const statement = `SELECT JSON_ARRAYAGG(JSON_OBJECT('movieID', movieList.id, 'movieName', movieList.name, 'score', score, 'coverURL' ,coverUrl)) AS json FROM movieList
        JOIN recentMovieList ON recentMovieList.movieID = movieList.id AND type = ?;`

        const [rows] = await pool.execute(statement, [type])

        return (rows as any)[0].json
    }
}

export default new topMoviesService()