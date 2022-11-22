import { Router } from "express";
import UsersController from "../controllers/UsersController";

const usersRouter = Router();

usersRouter.post('/users', UsersController.create);

export default usersRouter;