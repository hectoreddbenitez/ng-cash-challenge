import { Request, Response } from 'express';
import ErrorCode from '../interfaces/Error';
import AccountsService from '../services/AccountsService';

export default class AccountsController {
  public static async findAccount(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const account = await AccountsService.findOne(id);
      if (account instanceof ErrorCode) {
        return res.status(account.code).json({ message: account.message });
      }
      return res.status(200).json(account);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }

  // public static async updateAccount(res: Response, req: Request) {
  //   try {
  //     const {id, value} = req.body
  //     await AccountsService.cashIN(id, value)
  //     return res.status(200).send("transferencia ");
  //  } catch (e) {
  //   console.log(e);
  //   res.status(500).json(e);
  //  }
  // }
}
