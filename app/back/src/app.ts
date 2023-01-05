import express from 'express';
import accountsRouter from './routes/AccountsRoutes';
import transactionsRouter from './routes/TransactionsRoutes';
import usersRouter from './routes/UserRoutes';

const app = express();

app.use(express.json());
app.use(usersRouter);
app.use(transactionsRouter);
app.use(accountsRouter);

export default app;
