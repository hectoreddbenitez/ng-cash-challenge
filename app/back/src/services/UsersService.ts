import {Md5} from 'ts-md5'
import UsersModel from '../database/models/UsersModel';
import AccountsService from './AccountsServices';
// import Users from "../interfaces/User";

// const md5 = new Md5();

export default class UsersService {
  static async create(username: string, password: string) {

    const userAllreadyExist = await this.findByName(username);

    if (userAllreadyExist) {
      return ({status: 409, message: 'User already exist'})
    };
    const passCrypt = Md5.hashAsciiStr(password);
    const { id } = await AccountsService.create();
    const newUser = await UsersModel.create({
      username,
      password: passCrypt,
      accountId: id,
    });
    return newUser;
  }

  static async findAll() {
    const userList = await UsersModel.findAll({ raw: true});
    return userList;
  }

  static async findByName(username: string) {
    const user = await UsersModel.findOne({ where: { username } });
    return user;
  }
}
