import type { Context, Next } from 'koa'
import jwt from 'jsonwebtoken'
import { PRIVATE_KEY, PUBLIC_KEY } from '../app/config'


class authController {
    async login(ctx: Context, next: Next) {
        const { id, username } = ctx.user;

        const token = jwt.sign({ id, username }, PRIVATE_KEY, {
            expiresIn: '24h',
            algorithm: 'RS256'
        })
        ctx.body = { id, username, token }
    }

    async success(ctx: Context) {
        ctx.body = '授权成功'
    }
}

export default new authController()