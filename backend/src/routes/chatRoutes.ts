import { Router } from "express";
import { chatAIController } from "../controllers/chatControllers/chatAiController";

const chatRouter = Router();

chatRouter.post('/nemo-chat', chatAIController);


export default chatRouter;
