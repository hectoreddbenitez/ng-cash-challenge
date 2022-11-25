import { Router } from "express";
import UsersController from "../controllers/UsersController";

const usersRouter = Router();

usersRouter.post('/users', UsersController.create);
usersRouter.post('/users/login', UsersController.login);

export default usersRouter;