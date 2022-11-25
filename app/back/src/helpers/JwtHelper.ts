import jwt from 'jsonwebtoken';
import 'dotenv/config';
import IUsers from '../interfaces/Users';

const SECRET = process.env.JWT_SECRET;

export default class JwtHelper {
  public static tokenGenerator(user: IUsers) {
    const token = jwt.sign({ data: user }, SECRET!, { expiresIn: '24h', algorithm: 'HS256', });
    return token;
  }

  public static tokenValidator(token: string) {
    const decoded = jwt.verify(token, SECRET!) as jwt.JwtPayload;
    const { username } = decoded.data;
    return username;
  }
}