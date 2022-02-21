import Router from "koa-router";
import hotDocumentaryController from "../controller/hotDocumentary.controller";

const { getHotDocumentaryList } = hotDocumentaryController

const DocumentaryRouter = new Router({ prefix: "/documentary" });

DocumentaryRouter.get('/hot', getHotDocumentaryList);


export default DocumentaryRouter;