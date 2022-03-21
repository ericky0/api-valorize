import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // receive token

  const authToken = request.headers.authorization

  // validate if token is filled
  if (!authToken) {
    return response.status(401).json({ message: 'token missing' })
  }

  // validate if token is valid
  const [, token] = authToken.split(' ')

  try {
    const { sub } = verify(token, '7b55f59d034002b5fdb7eee735c8846f') as IPayload
    request.user_id = sub
  } catch (err) {
    return response.status(401).json({ message: 'invalid token' })
  }


  return next();



  // retrieve user information
}