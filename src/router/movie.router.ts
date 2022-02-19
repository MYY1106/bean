import Router from "koa-router";
import hitMoviesController from "../controller/hitMovies.controller";
import hotMoviesController from "../controller/hotMovies.controller";

const { getHitMoviesList } = hitMoviesController
const { getHotMoviesList } = hotMoviesController

const userRouter = new Router({ prefix: "/movie" });

userRouter.get("/hit", getHitMoviesList);
userRouter.get('/hot', getHotMoviesList);


export default userRouter;