import Koa from 'koa'

export interface IUser {
    username: string,
    password: string
}

export interface myKoa extends Koa {
    useRoutes?: () => void
}

