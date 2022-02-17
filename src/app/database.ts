import mysql from 'mysql2/promise';
import type { Pool } from 'mysql2/promise';
import { MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD } from './config'

let pool: Pool;
const connectMysql = async () => {
    pool = mysql.createPool({
        host: MYSQL_HOST,
        port: Number(MYSQL_PORT),
        database: MYSQL_DATABASE,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD
    })

    pool.getConnection().then(conn =>
        conn.connect()
    ).then(() => {
        console.log('数据库连接成功')
    }).catch(err =>
        console.log(err)
    )


}

connectMysql()

export default pool;

