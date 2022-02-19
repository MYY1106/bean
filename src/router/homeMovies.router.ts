import Router from "koa-router";
import hitMoviesController from "../controller/hitMovies.controller";
import hotMoviesController from "../controller/hotMovies.controller";

const { getHitMoviesList } = hitMoviesController
const { getHotMoviesList } = hotMoviesController

const userRouter = new Router({ prefix: "/home-movies" });

userRouter.get("/hit-movies", getHitMoviesList);
userRouter.get('/hot-movies', getHotMoviesList);


export default userRouter;