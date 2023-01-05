import { Request, Response } from 'express';
import { password, username } from '../database/config/database';
import JwtHelper from '../helpers/JwtHelper';
import ErrorCode from '../interfaces/Error';
import { usersSchema } from '../schemas/usersSchema';
import UsersService from '../services/UsersService';

export default class UsersController {

  public static async create(req: Request, res: Response) {
    try {
      const valid = usersSchema(req.body);
      if(valid.error) {
        return res.status(400).json(valid.error.message)
      }
      const newUser = await UsersService.create(req.body);
      if (newUser instanceof ErrorCode) {
        return res.status(newUser.code).json({ message: newUser.message });
      }
      return res.status(201).send(newUser);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  }

  public static async login(req: Request, res: Response) {
    try {
      const valid = usersSchema(req.body);
      if(valid.error) {
        return res.status(400).json(valid.error.message)
      }
      const user = await UsersService.authenticate(req.body);
      if (user instanceof ErrorCode) {
        return res.status(user.code).json({ message: user.message });
      }
      const { id, username} = user;
      const token = JwtHelper.tokenGenerator(user);

      return res.status(200).json({ id, username, token });
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

  public static async findByName(req: Request, res: Response) {
    try {
      const {username} = req.body;
      const user = await UsersService.findByName(username);
      if (user instanceof ErrorCode) {
        return res.status(user.code).json({ message: user.message });
      }
      const {id} = user;
      return res.status(200).json(user);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  }
}
