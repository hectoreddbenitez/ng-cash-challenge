import UsersService from '../services/UsersService';

it('Lista de Users', async () => {
  const userList = [
    {
      accountId: 1,
      id: 1,
      password: '9329c2519ad19bfde2a50e00f1bd7af0',
      username: 'João Clever',
    },
    {
      accountId: 2,
      id: 2,
      password: '0fd79d0e8717d97ccc5829bdc56dc490',
      username: 'Charles do Bronx',
    },
  ];

  const response = await UsersService.findAll();
  expect(response).toStrictEqual(userList);
});

it.skip('deve criar um usuario com sucesso', async () => {
  //Arrange
  //lista de usuarios deve ter 2 usuarios iniciais

  //Act
  // chama função para criar um usuario
  await UsersService.create('Diego Siva', 'User04pass');

  //Assert
  //verifica a existencia de 3 usuarios, um de eles o criado anterioremente
  const usersList = await UsersService.findAll();
  
  expect(usersList).toHaveLength(3);
});
