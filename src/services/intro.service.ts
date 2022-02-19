import pool from "../app/database"

class UserService {
    async getIntro(id: number) {
        const statement = `SELECT intro FROM users WHERE id = ${id}`
        const result: any = await pool.query(statement, [id])
        return (result as any)[0][0].intro
    }
    async changeIntro(id: number, intro: string) {
        const statement = `UPDATE users SET intro = ? WHERE id = ${id}`
        const result: any = await pool.query(statement, [intro])
        console.log(result)
        return (result as any)
    }
}

export default new UserService()