
<h1> Api de </h1>

> Status: Concluído

## Essa aplicação é capaz de: 

+ criar usuários, tags e elogios <--> (`users | tags | compliments`)
+ autenticar um usuário por meio de um `JWT`
+ para criar um compliment e enviar a outra pessoa o usuário deve estar autenticado
+ só é possível criar uma tag quando o usuário autenticado for um administrador
+ listar todos os compliments que um usuário enviou a alguém
+ listar todos os compliments que o usuário recebeu
+ listar todas as tags existentes
+ listar todos os usuários existentes

![bd](https://user-images.githubusercontent.com/53923000/159203888-376209de-ec84-47e7-8a6f-9d8016be7558.PNG)

## ✨ Tecnologias usadas

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Você deverá criar um container com o postgres no docker 🐳
- Para rodar e abrir arquivos `.yml` você tem que instalar o Docker Composer
  Depois da instalação, vá para o diretório do seu docker-composer.yml e execute `docker-compose up` para criar e iniciar os serviços do arquivo docker-compose.yml
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3000`
