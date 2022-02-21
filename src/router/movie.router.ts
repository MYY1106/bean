import Router from "koa-router";
import hitMoviesController from "../controller/hitMovies.controller";
import hotMoviesController from "../controller/hotMovies.controller";
import movieDetailController from "../controller/movieDetail.controller";

const { getHitMoviesList } = hitMoviesController
const { getHotMoviesList } = hotMoviesController
const { getMovieDetail } = movieDetailController

const userRouter = new Router({ prefix: "/movie" });

userRouter.get("/hit", getHitMoviesList);
userRouter.get('/hot', getHotMoviesList);
userRouter.get('/detail', getMovieDetail);


export default userRouter;