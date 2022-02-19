import jwt from 'jsonwebtoken'
import { PUBLIC_KEY } from '../app/config'
import errorTypes from '../constants'

import type { Context, Next } from 'koa'

const verifyAuth = async (ctx: Context, next: Next) => {
    console.log('验证授权中间件')
    try {
        const authrization = ctx.headers.authorization
        const token = authrization? authrization.replace('Bearer ', ''): ''
        const result = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        })
        ctx.user = result
        await next()
    } catch (err) {
        console.log('2')
        const error = new Error(errorTypes.UNAUTHORIZED)
        ctx.app.emit('error', error, ctx)
    }
}

export default verifyAuth