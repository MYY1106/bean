import type { Context, Next } from 'koa'
import errorTypes from "../constants"
import services from "../services/user.service"
import { md5password } from '../utils'

const handlePassword = async (ctx: Context, next: Next) => {
    const { password } = ctx.request.body
    ctx.request.body.password = md5password(password)
    await next()
}

export default handlePassword