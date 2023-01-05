import UsersModel from '../database/models/UsersModel';
import AccountsService from './AccountsService';
import ErrorCode from '../interfaces/Error';
import bcrypt from 'bcryptjs'
import IUsers from '../interfaces/Users';
import Users from '../database/models/UsersModel';

export default class UsersService {

  static async create(data: IUsers) {
    const {username, password } = data;

    const userAllreadyExist = await UsersModel.findOne({where : {username}});

    if (userAllreadyExist) {
      return new ErrorCode('Oops! It looks like a user with that name already exists', 401)
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

  static async authenticate(data: IUsers) {
    const {username, password} = data;
    const user = await UsersModel.findOne({ where: { username } })

    if(!user) {
      return new ErrorCode('The username or password is wrong', 401);
    }

    const passwordDb = user.password;
    const passwordIsOk = bcrypt.compareSync(password, passwordDb);

    if(passwordIsOk === false) {
      return new ErrorCode('The username or password is wrong', 401);
    }

    return user;
  }

  static async findByName(name: string) {
    const user = await UsersModel.findOne({where: {username: name}});
    console.log('AQUI O USER', user);

    if(!user) {
      return new ErrorCode('No existe', 400);
    }
    const {id, username, account_id} = user;
    return {id, username, account_id};
  }

  static async findAll () {
    const user = await UsersModel.findAll({raw: true});
    console.log('aqui o user', user);
    return  user;
  }
}
