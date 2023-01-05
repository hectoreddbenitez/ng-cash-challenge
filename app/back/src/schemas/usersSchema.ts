import Joi from 'joi';
import IUsers from '../interfaces/Users';

export const usersSchema = (login: IUsers) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    accountId: Joi.number()
  });
  return schema.validate(login);
};
