import { Request, Response } from "express";
import TransactionService from "../services/TransactionsService";


export default class TransactionsController {

  public static async create(req: Request, res: Response) {
    try {
      await TransactionService.create(req.body)
      return res.status(201).send('Transferência realizada com sucesso!');
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  }
}