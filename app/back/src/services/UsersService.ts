import UsersModel from "../database/models/UsersModel";
// import Users from "../interfaces/User";

export default class UsersService {

static async create(username: string, password: string) {
  await UsersModel.create({username, password})
}

static async findAll() {
  const userList = await UsersModel.findAll({raw: true})
  return userList;
}
}
