import AccountsModel from "../database/models/AccountsModel";

export default class AccountsService {

  static async findAll() {
    const accountsList = AccountsModel.findAll({raw: true})
    return accountsList;
  };

  static async create() {
    const newAccount = await AccountsModel.create()
    return newAccount.dataValues;
  }
}