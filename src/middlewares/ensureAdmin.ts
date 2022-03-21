import {Request, Response, NextFunction} from 'express'
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
  //ensure if the user is admin

  const { user_id } = request;
  const usersRepositories = getCustomRepository(UsersRepositories)

  const { admin } = await usersRepositories.findOne(user_id)

  if(admin){
    return next()
  }

  // 401 = unauthorized
  return response.status(401).json({ error: "Unauthorized, User is not admin "})

}