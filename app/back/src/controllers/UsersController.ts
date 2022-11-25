import { Request, Response } from 'express';
import JwtHelper from '../helpers/JwtHelper';
import ErrorCode from '../interfaces/Error';
import UsersService from '../services/UsersService';

export default class UsersController {

  public static async create(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const newUser = await UsersService.create(username, password);
      return res.status(201).send(newUser);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  }

  public static async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      if(!username || !password) {
        return res.status(404).send('Completa os campos username e password')
      }
      const user = await UsersService.authenticate(username, password);
      if (user instanceof ErrorCode) {
        return res.status(user.code).json({ message: user.message });
      }
      const token = JwtHelper.tokenGenerator(user);

      return res.status(200).json({ user: user, token });
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }

  public static async findAll(req: Request, res: Response) {
    try {
      const usersList = await UsersService.findAll();
      return res.status(200).send(usersList);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  }
}
