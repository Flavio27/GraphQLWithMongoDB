# Curso - GraphQL Integração MongoDB 

### <b>Curso de GraphQL para Iniciantes</b>
Integração com mongoDB

### Link:
<a>https://www.youtube.com/watch?v=7RoHxSGVAdU&list=PLPXWI3llyMiK9uw7tfljM2hnQl2qu6CeT&index=1</a>

## Como rodar 
`````
1. Yarn install
2. Ter o mongoDB instalado na maquina rodando na porta localhost:27017
3. Yarn dev

`````
<hr>
<br>

## Exemplos de QUERYs e Mutations usadas nas aulas
<br>

### Criando um novo usuário:
````
mutation {
  createUser(
    data: {
      firstName: "Flavio"
      lastName: "Rocha"
      email: "flavio@test.com"
      active: true
    }
  ) {
    _id
    email
  }
}
````
<br>

### Fazendo um update(alterando info) no usuário:
````
mutation {
  updateUser(id: "6111be22cc9e8737786e5335",
    data: {
      firstName: "Flavio Augusto"
      lastName: "Rocha"
      email: "flavio@test.com"
      active: true
    }
  ) {
    _id
    firstName
    email
  }
}
````

### Buscando todos usuários:
````
query{
  users{
    _id
    firstName
  }
}
````
<br>

### Buscando usuário por ID e exibindo duas informações em uma só:
````
query{
  user(id: "6111be22cc9e8737786e5335"){
    fullName
  }
}
````
<br>

### Criando um post:
````
mutation {
  createPost(
    data: {
      title: "Titulo Teste"
      content: "Texto Teste"
      author: "6111be22cc9e8737786e5335"
    }
  ) {
    title
  }
}
````
<br>

### Buscando os posts e exibindo o autor com informações:
````
query{
  posts{
    title
    author{
      fullName
    }
  }
}
````