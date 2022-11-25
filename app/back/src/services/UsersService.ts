import UsersModel from '../database/models/UsersModel';
import AccountsService from './AccountsServices';
import ErrorCode from '../interfaces/Error';
import bcrypt from 'bcryptjs'

export default class UsersService {

  static async create(username: string, password: string) {

    const userAllreadyExist = await UsersModel.findOne({where : {username}});

    if (userAllreadyExist) {
      return ({status: 409, message: 'Opss! parece que já existe um usuario com esse nome'})
    };
    const { id } = await AccountsService.create();
    const passwordHash = bcrypt.hashSync(password, 10);
    const newUser = await UsersModel.create({
      username,
      password: passwordHash,
      accountId: id,
    });
    const { id: userId } = newUser;
    const newUserWithoutPass = {userId, username, accountId: id}
    return newUserWithoutPass;
  }

  static async authenticate(username: string, pass: string) {
    const user = await UsersModel.findOne({ where: { username } })

    if(!user) {
      const errorPayload = new ErrorCode('O usuario ou senha estão errados', 401);
      return errorPayload;
    }

    const passwordDb = user.password;
    const passwordIsOk = bcrypt.compareSync(pass, passwordDb);

    if(passwordIsOk === false) {
      const errorPayload = new ErrorCode('O usuario ou senha estão errados', 401);
      return errorPayload;
    }

    const { id } = user;
    const userToReturn = {id, username}

    return userToReturn;
  }

  static async findAll() {
    const userList = await UsersModel.findAll({ raw: true});
    return userList;
  }
}
