import type { Context } from 'koa'
import service from '../services/hotTeleOrAniOrDoc.service'

//未写错误处理
class hotDocumentaryController {
    async getHotDocumentaryList(ctx: Context) {
        let hotTableName='hotDocumentaryList', tableName='documentaryList';

        const data = await service.getHotTeleOrAniOrDocListService(tableName, hotTableName);

        ctx.body = data
    }
}

export default new hotDocumentaryController()