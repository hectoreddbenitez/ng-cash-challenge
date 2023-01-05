import TransactionsModel from '../database/models/TransactionsModel';
import ITransactions from '../interfaces/Transactions';

export default class TransactionService {
  public static async create(data: ITransactions) {
    const { debitedAccountId, creditedAccountId, value } = data;
    const newTransference = await TransactionsModel.create({
      debitedAccountId,
      creditedAccountId,
      value,
    });
    return newTransference;
  }
}
