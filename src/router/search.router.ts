import Router from "koa-router";
import searchController from "../controller/search.controller";

const { search } = searchController

const searchRouter = new Router({ prefix: "/search" });

searchRouter.post("/", search);

export default searchRouter;