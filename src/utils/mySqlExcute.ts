import pool from "../app/database"

export default async function (statement: string, args?: string[]) {
    
    const [rows] = await pool.execute(statement, args)     
    return (rows as any)[0]
}