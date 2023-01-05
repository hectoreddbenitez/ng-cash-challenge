import { Router } from 'express';
import ValidateJWT from '../auth/validateJWT';
import AccountsController from '../controllers/AccountsController';

const accountsRouter = Router();

accountsRouter.get('/accounts/:id', ValidateJWT.tokenValidator , AccountsController.findAccount);

export default accountsRouter;