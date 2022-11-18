import { Model, INTEGER, DECIMAL, literal } from 'sequelize';
import db from '.';

class Transactions extends Model {
  declare id: number;
  declare debitedAccountId: number;
  declare creditedAccountId: number;
  declare value: number;
  declare createdAt: number;
}

Transactions.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  debitedAccountId : {
    allowNull: false,
    type: INTEGER,
  },
  creditedAccountId: {
    allowNull: false,
    type: INTEGER,
  },
  value: {
    allowNull: false,
    type: DECIMAL(10,2),
  },
  createdAt: {
    type: 'TIMESTAMP',
    defaultValue: literal('CURRENT_TIMESTAMP'),
    allowNull: false,
    field: 'created_at',
  }}, {
    underscored: true,
    sequelize: db,
    modelName: 'transactions',
    timestamps: false,
  }
);

export default Transactions;