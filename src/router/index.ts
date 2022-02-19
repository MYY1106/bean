import fs from 'fs'
import { myKoa } from '../@types'

// 在上线环境由于typescript版本过低，对this的类型检查不出来（使用了any都不行）
// 所以只能在index.ts中注册路由

const useRoutes = function () {
    console.log(this);
    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.ts') return;
        const router = require(`./${file}`).default;
        (this as any).use(router.routes());
        (this as any).use(router.allowedMethods());
    })
}

export default useRoutes