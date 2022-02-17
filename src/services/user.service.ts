import pool from "../app/database"
import type { IUser } from "../@types/index"

class UserService {
    async create(user: IUser) {
        //将 user 存储到数据库
        const { username, password } = user
        const statement = `INSERT INTO users (username,password) VALUES (?,?)`
        const result = await pool.execute(statement, [username, password])
        console.log(result)
        return result
    }

    async getUserByName(username: string) {
        const statement = `SELECT * FROM users WHERE username = ?;`
        const result = await pool.query(statement, [username])
        return result[0]
    }
}

export default new UserService()