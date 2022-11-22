import express, { json } from 'express';
import usersRouter from './routes/UserRoutes';

const app = express();

app.use(json());
app.use(usersRouter)
export default app;
