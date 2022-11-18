import { Model, INTEGER, DECIMAL } from 'sequelize';
import db from '.';
import Transactions from './TransactionsModel';

class Accounts extends Model {
  declare id: number;
  declare balance: number;
}

Accounts.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  balance: {
    type: DECIMAL(10,2)
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'accounts',
  timestamps: false,
});

Accounts.hasMany(Transactions, {foreignKey: 'debited_account_id'});
Accounts.hasMany(Transactions, {foreignKey: 'credited_account_id'});

Transactions.belongsTo(Accounts, {foreignKey: 'debited_account_id'});
Transactions.belongsTo(Accounts, {foreignKey: 'debited_account_id'});

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Accounts;