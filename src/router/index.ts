import fs from 'fs'
import { myKoa } from '../@types'

const useRoutes = function () {
    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.ts') return;
        const router = require(`./${file}`).default;
        (this as myKoa).use(router.routes());
        (this as myKoa).use(router.allowedMethods());
    })
}

export default useRoutes