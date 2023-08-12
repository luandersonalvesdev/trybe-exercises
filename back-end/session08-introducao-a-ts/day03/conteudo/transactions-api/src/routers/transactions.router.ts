import { Router } from 'express';
import transactionsController from '../controllers/transactions.controller';

const transactionRouter = Router();

transactionRouter.get('/', transactionsController.list);
transactionRouter.post('/', transactionsController.create);
transactionRouter.get('/:id', transactionsController.getById);

export default transactionRouter;