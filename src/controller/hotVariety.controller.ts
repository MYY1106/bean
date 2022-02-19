import type { Context, Next } from 'koa'
import service from '../services/getHotTeleOrAniOrDoc.service'

//未写错误处理
class hotVarietyController {
    async getHotVarietyList(ctx: Context) {
        
        let hotTableName='hotVarietyList', tableName='varietyList';

        const data = await service.getHotTeleOrAniOrDocListService(tableName, hotTableName);
        console.log(data);

        ctx.body = data
    }
}

export default new hotVarietyController()