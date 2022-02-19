import Koa from "koa";
import { myKoa } from '../@types'
import bodyParser from "koa-bodyparser";
import errorHandler from "./error-handle";
// import useRoutes from '../router'
import cors from 'koa-cors'

import authRouter from '../router/auth.router'
import userRouter from '../router/user.router'
import hitMoviesRouter from '../router/homeMovies.router'

const app: myKoa = new Koa();
// app.useRoutes = useRoutes;

app.use(bodyParser())
app.use(cors())

app.use(authRouter.routes())
app.use(userRouter.routes())
app.use(hitMoviesRouter.routes())
// app.useRoutes()

app.on('error', errorHandler);

export default app;
