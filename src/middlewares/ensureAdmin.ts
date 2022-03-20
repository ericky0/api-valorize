import {Request, Response, NextFunction} from 'express'

export function ensureAdmin(request: Request, response: Response, next: NextFunction){
  //ensure if the user is admin

  const admin = true;

  if(admin){
    return next()
  }

  // 401 = unauthorized
  return response.status(401).json({ error: "Unauthorized, User is not admin "})

}