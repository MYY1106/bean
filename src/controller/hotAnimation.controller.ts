import type { Context } from 'koa'
import service from '../services/hotTeleOrAniOrDoc.service'

//未写错误处理
class hotAnimationController {
    async getHotAnimationList(ctx: Context) {
        let hotTableName='hotJapaneseAnimationList', tableName='animationList';

        const data = await service.getHotTeleOrAniOrDocListService(tableName, hotTableName);

        ctx.body = data
    }
}

export default new hotAnimationController()