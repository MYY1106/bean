import Router from "koa-router";
import getHitMovies from "../controller/hitMovies.controller";

const { getHitMoviesList } = getHitMovies

const userRouter = new Router({ prefix: "/hitMovies" });

userRouter.get("/",  getHitMoviesList);

export default userRouter;