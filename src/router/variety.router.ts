import Router from "koa-router";
import hotVarietyController from "../controller/hotVariety.controller";

const { getHotVarietyList } = hotVarietyController

const varietyRouter = new Router({ prefix: "/variety" });

varietyRouter.get('/hot', getHotVarietyList);


export default varietyRouter;