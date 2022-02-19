import type { Context, Next } from 'koa'
import service from '../services/getHotTeleOrAniOrDoc.service'

//未写错误处理
class hotTeleplaysController {
    async getHotTeleplaysList(ctx: Context) {
        const { type } = ctx.query;
        let hotTableName: string, tableName='teleplayList';
        switch (parseInt(type as string)) { 
            case 1:
                hotTableName = 'hotChineseTeleplayList';
                break;
            case 2:
                hotTableName = 'hotAmericanTeleplayList';
                break;
            case 3:
                hotTableName = 'hotJapaneseTeleplayList';
                break;
            case 4:
                hotTableName = 'hotKoreanTeleplayList';
                break;
            // case 6:
            //     tableName = 'janpaneseAnimationList';
            //     hotTableName = 'hotJanpaneseAnimationList';
            //     break;
            // case 7:
            //     tableName = 'documentaryList';
            //     hotTableName = 'hotDocumentaryList';
            //     break;
            default:
                ctx.status = 400
                ctx.body = 'type参数错误'
                return
        }

        const data = await service.getHotTeleOrAniOrDocListService(tableName, hotTableName);

        ctx.body = data
    }
}

export default new hotTeleplaysController()