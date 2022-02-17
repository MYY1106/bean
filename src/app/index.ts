import Koa from "koa";
import { myKoa } from '../@types'
import bodyParser from "koa-bodyparser";
import errorHandler from "./error-handle";
import useRoutes from '../router'
import cors from 'koa-cors'

const app: myKoa = new Koa();
app.useRoutes = useRoutes;

app.use(bodyParser())
app.use(cors())
app.useRoutes()

app.on('error', errorHandler);

export default app;
