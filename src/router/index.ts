import fs from 'fs'

const useRoutes = function () {
    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.ts') return;
        const router = require(`./${file}`).default;
        this.use(router.routes());
        this.use(router.allowedMethods());
    })
}

export default useRoutes