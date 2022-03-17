import pool from "../app/database"
import { IComments } from "../@types"

class commentService {
    async getComment(username: string) {
        const statement = `SELECT * FROM comments WHERE username = ?;`
        const [rows]: any = await pool.query(statement, [username])
        console.log(rows)
        return (rows as any)
    }
    async addComment(username: string, body: IComments) {
        const { filmName, content, stars } = body
        console.log(username, filmName, content, stars)
        const statement = `INSERT INTO comments (filmName, content, username, stars) VALUES (?, ?, ?, ?);`
        const result: any = await pool.execute(statement, [filmName, content, username, stars])
        console.log(result)
        return result[0]
    }
}

export default new commentService()