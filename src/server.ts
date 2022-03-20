import express, {Request, Response, NextFunction} from 'express';
import "express-async-errors"
import { router } from './routes'
import 'reflect-metadata';
import './database';

const app = express()
app.use(express.json());
app.use(router)


/**
 * por padrão a biblioteca do express não tem suporte para erros assincronos
 * precisamos instalar uma biblioteca para isso
 * yarn add express-async-errors
 */

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})

app.listen(3000, () =>
  console.log('🔥 server started at http://localhost:3000')
);