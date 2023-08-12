import express, { Request, Response } from 'express';
import transactionRouter from './routers/transactions.router';
import loginRouter from './routers/login.router';
import authMiddleware from './middlewares/auth.middleware';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

app.use('/transactions', transactionRouter);
app.use(authMiddleware);
app.use('/login', loginRouter);

export default app;
