import mySqlExcute from "../utils/mySqlExcute"

class getHotTeleOrAniOrDocListService {
    async getHotTeleOrAniOrDocListService(tableName: string, hotTableName:string) {
        const statement = `SELECT JSON_ARRAYAGG(JSON_OBJECT('ID', ${tableName}.id, 'name', ${tableName}.name, 'score', score, 'coverURL' ,coverUrl)) AS json FROM ${tableName}
        JOIN ${hotTableName} ON ${hotTableName}.id = ${tableName}.id;`
        
        const res = await mySqlExcute(statement)
        
        return res
    }
}

export default new getHotTeleOrAniOrDocListService()