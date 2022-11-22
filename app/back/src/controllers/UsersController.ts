import { Request, Response } from 'express';
import UsersService from '../services/UsersService';

export default class UsersController {
  
  public static async findAll(req: Request, res: Response) {
    try {
      const usersList = await UsersService.findAll();
      return res.status(200).send(usersList);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  }

  public static async create(req: Request, res: Response) {
    try {
      const {username, password} = req.body;
      const newUser = await UsersService.create(username, password);
      return res.status(201).send(newUser);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  }
}
