import Router from "koa-router";
import hotAnimationController from "../controller/hotAnimation.controller";

const { getHotAnimationList } = hotAnimationController

const AnimationRouter = new Router({ prefix: "/animation" });

AnimationRouter.get('/hot', getHotAnimationList);


export default AnimationRouter;