import Koa from "koa";
import { myKoa } from '../@types'
import bodyParser from "koa-bodyparser";
import errorHandler from "./error-handle";
import cors from 'koa-cors'

import authRouter from '../router/auth.router'
import userRouter from '../router/user.router'
import hitMoviesRouter from '../router/homeMovies.router'
import searchRouter from '../router/search.router'

const app: myKoa = new Koa();

app.use(bodyParser())
app.use(cors())

app.use(authRouter.routes())
app.use(userRouter.routes())
app.use(hitMoviesRouter.routes())
app.use(searchRouter.routes())

app.on('error', errorHandler);

export default app;
