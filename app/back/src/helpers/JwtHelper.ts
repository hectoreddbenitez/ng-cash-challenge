import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Request, Response } from 'express';
import IUsers from '../interfaces/Users';

const SECRET = process.env.JWT_SECRET;

export default class JwtHelper {
  public static tokenGenerator(data: IUsers) {
    const { id, username } = data;
    const token = jwt.sign({ data: {id, username} }, SECRET!, {
      expiresIn: '24h',
      algorithm: 'HS256',
    });
    return token;
  }
}
