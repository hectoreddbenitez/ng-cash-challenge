import AccountsModel from '../database/models/AccountsModel';
import ErrorCode from '../interfaces/Error';
import { Sequelize } from 'sequelize';
import config from '../database/config/database';

const sequelize = new Sequelize(config);

export default class AccountsService {
  static async findAll() {
    const accountsList = AccountsModel.findAll({ raw: true });
    return accountsList;
  }

  static async create() {
    const newAccount = await AccountsModel.create();
    return newAccount.dataValues;
  }

  static async findOne(id: string) {
    console.log(id);
    const account = await AccountsModel.findOne({ where: { id } });
    console.log(account, 'aqui el account');

    if (!account) {
      const errorPayload = new ErrorCode('conta inexistente ', 401);
      return errorPayload;
    }
    return account;
  }

  static async updaterAccount(
    accountOutId: number,
    accountInnId: number,
    value: number
  ) {
    try {
      const accountOut = (await AccountsModel.findOne({
        where: { id: accountOutId },
      })) as AccountsModel;
      const newValueAccountOut = accountOut.balance - value;

      const accountInn = (await AccountsModel.findOne({
        where: { id: accountInnId },
      })) as AccountsModel;
      const newValueAccountInn = accountInn.balance + value;

      const moneyTransferResult = await sequelize.transaction(async (t) => {
        await AccountsModel.update(
          { value: newValueAccountOut },
          { where: { id: accountOutId }, transaction: t }
        );

        await AccountsModel.update(
          { value: newValueAccountInn },
          { where: { id: accountInnId }, transaction: t }
        );
      });
      return moneyTransferResult;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
