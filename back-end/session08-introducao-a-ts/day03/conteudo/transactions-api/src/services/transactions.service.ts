import TransactionModel, { 
  TransctionInputtableFields, 
  TransctionSequelizeModel, 
} from '../database/models/transaction.model';
import { Transaction } from '../types/Transaction';
import { ServiceResponse } from '../types/ServiceResponse';

function validateParams({
  name, price, type, userId,
}: TransctionInputtableFields): string | null {
  if (!name) return 'name is required';
  if (!price) return 'price is required';
  if (!type) return 'type is required';
  if (!userId) return 'userId is required';
  return null;
}

async function create(
  transaction: TransctionInputtableFields,
): Promise<ServiceResponse<Transaction>> {
  let responseService: ServiceResponse<Transaction>;
  const error = validateParams(transaction);

  if (error) {
    responseService = { status: 'INVALID_DATA', data: { message: error } };
    return responseService;
  }

  const newTransaction = await TransactionModel.create(transaction);

  responseService = { status: 'SUCCESSFUL', data: newTransaction.dataValues };

  return responseService;
}

async function list():Promise<ServiceResponse<TransctionSequelizeModel[]>> {
  const transactions = await TransactionModel.findAll();

  return { status: 'SUCCESSFUL', data: transactions };
}

async function getById(idTransaction: string):Promise<ServiceResponse<Transaction>> {
  const transaction = await TransactionModel.findByPk(idTransaction);
  if (!transaction) return { status: 'NOT_FOUND', data: { message: 'Transaction not found' } };
  return { status: 'SUCCESSFUL', data: transaction.dataValues };
}

export default {
  create,
  list,
  getById,
};