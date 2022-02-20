import pool from "../app/database"

class searchService {
    async searchMovies(keywords: string) {
        console.log(keywords)
        const statement = `SELECT id, name, people, year, country, category, score, coverUrl, doubanID FROM movieList WHERE name REGEXP ?;`
        const [rows] = await pool.execute(statement, [keywords])
        return (rows as any)[0]
    }
}

export default new searchService()