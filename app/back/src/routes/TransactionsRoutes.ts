import { Router } from 'express';
import ValidateJWT from '../auth/validateJWT';
import TransactionsController from '../controllers/TransactionsController';

const transactionsRouter = Router();

transactionsRouter.post('/transactions', ValidateJWT.tokenValidator, TransactionsController.create);

export default transactionsRouter;