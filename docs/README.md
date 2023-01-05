# NG-CASH CHALLENGE

## Descrição

Desafio tecnico para criação de uma app FullStack, para realizar transferências entre os usuarios. Cada usuario poderá realizar o cadastro e posterior login, cotando com um valor inicial automático de $R 100, obtido no momento da criação da conta. O projeto se encontra em andamento, pelo que ainda terá modificações. 

## Requisitos

- [x] userServices.findAll
- [x] userServices.create
- [x] usersService.findByName
- [x] update en valor das contas
- [ ] findAll em Transactions (dia, cash in/out)
### Requisito 1 

- [ ] validar dados (Back) de username e password

Qualquer pessoa deverá poder fazer parte da NG. Para isso, basta realizar o cadastro informando username e password. 
- Deve-se garantir que cada username seja único e composto por, pelo menos, 3 caracteres. 
- Deve-se garantir que a password seja composta por pelo menos 8 caracteres, um número e uma letra maiúscula. Lembre-se que ela deverá ser hashada ao ser armazenada no banco
```js
	  rota POST User : { 
			username: string, 
			      3 caracteres mínimo

		password: string 
				  8 caracteres mínimo, 1 numero, 1 letra maiuscula
					    hasheada antes de armazenar
 			      }
```
### Requisito 2

			- [x] accountsServices.create
  
- Durante o processo de cadastro de um novo usuário, sua respectiva conta deverá ser criada automaticamente na tabela Accounts com um balance de R$ 100,00. É importante ressaltar que caso ocorra algum problema e o usuário não seja criado, a tabela Accounts não deverá ser afetada. 

### Requisito 3

			- [x] autenticação do usuario JWT

- Todo usuário deverá conseguir logar na aplicação informando username e password. Caso o login seja bem-sucedido, um token JWT (com 24h de validade) deverá ser fornecido. 

### Requisito 4

- [] findOne em Accounts

- Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de visualizar seu próprio balance atual. Um usuário A não pode visualizar o balance de um usuário B, por exemplo. 
	
	rota GET Account 


 ### Requisito 5

- [ ] validar quantidade a ser tranferida para não ser maior que o balance da account
- [ ] validar que o usuario não pode realizar cash-out pra si mesmo
- [ ] usuario pode realizar cash-out em outros usuarios
- [ ] usuario não deve conseguir fazer cash-out com valores negativos
  
- Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de realizar um cash-out informando o username do usuário que sofrerá o cash-in), caso apresente balance suficiente para isso. Atente-se ao fato de que um usuário não deverá ter a possibilidade de realizar uma transferência para si mesmo. 

	Rota POST Account

 ### Requisito 6

			- [ ] create en transactions
			- [ ] tratar erros en caso de falha da transação
      
    - Toda nova transação bem-sucedida deverá ser registrada na tabela Transactions. Em casos de falhas transacionais, a tabela Transactions não deverá ser afetada. 

	Rota POST Transactions


### Requisito 7

    - Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de visualizar as transações financeiras (cash-out e cash-in) que participou. Caso o usuário não tenha participado de uma determinada transação, ele nunca poderá ter acesso à ela. 

	Rota GET Transactions (findByPk)


###	Requisito 8

- Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de filtrar as transações financeiras que participou por:
               - Data de realização da transação e/ou 
               - Transações de cash-out; 
               - Transações de cash-in. 
          
	Rota GET Transactions 