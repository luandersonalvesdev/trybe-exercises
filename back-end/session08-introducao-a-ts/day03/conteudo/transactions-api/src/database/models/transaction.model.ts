import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import { Transaction } from '../../types/Transaction';
import db from '.';

export type TransctionInputtableFields = Optional<Transaction, 'id'>;

type TransctionSequelizeModelCreator = ModelDefined<Transaction, TransctionInputtableFields>;

export type TransctionSequelizeModel = Model<Transaction, TransctionInputtableFields>;

const TransactionModel: TransctionSequelizeModelCreator = db.define('Transaction', {
  name: DataTypes.STRING(30),
  price: DataTypes.DECIMAL(10, 2),
  type: DataTypes.STRING,
  userId: DataTypes.INTEGER,
}, {
  tableName: 'transactions',
  timestamps: false,
  underscored: true,
});

export default TransactionModel;