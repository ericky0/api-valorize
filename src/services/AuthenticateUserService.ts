import { getCustomRepository } from "typeorm";
import { compare } from 'bcryptjs'
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService{
  async execute({ email, password }: IAuthenticateRequest){
    const usersRepositories = getCustomRepository(UsersRepositories);
    // Verificar se o email existe
    
    const userExists = await usersRepositories.findOne({
      where: {email}
    })

    if(!userExists) {
      throw new Error("Email or Password incorrect")
    }

    // Verificar a senha está correta
    const passwordMatch = await compare(password, userExists.password)

    if(!passwordMatch){
      throw new Error("Email or Password incorrect")
    }
    // Gerar Token

    const token = sign(
      { email: userExists.email },
      "7b55f59d034002b5fdb7eee735c8846f",
      {
        subject: userExists.id, 
        expiresIn: "1d"
      })

      return token

  }
}

export { AuthenticateUserService }