import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import UsersService from '../services/UsersService';

const SECRET = process.env.JWT_SECRET;

export default class ValidateJWT {

  public static async tokenValidator(req: Request, res: Response, next: NextFunction) {
    try{
      const { authorization: token } = req.headers;
      if (!token) return res.status(403).json({ message: 'Token is required' });

      const decoded = jwt.verify(token, SECRET!) as jwt.JwtPayload;      
      
      const user = await UsersService.findByName(decoded.data.username); 
      
      if (!user) return res.status(401).json({ message: 'Invalid token' }); 
            
      next();
    } catch (e) {
      console.log(e);
      return res.status(401).json({message: e})
    }
  }
}