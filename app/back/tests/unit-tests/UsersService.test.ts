import UsersService from '../../src/services/UsersService';

describe('Testes camada Services de User', () => {
  it.only('Requisição findAll inicial, deve retornar uma lista vazia', async () => {
    const userList: [] = [];

    const response = await UsersService.findAll();
    expect(response).toStrictEqual(userList);
  });

  it('deve criar um usuario com sucesso', async () => {

    await UsersService.create('Diego Siva', 'User04pass');
    //verifica a existencia do usuario criado anterioremente, procurando pelo username
    const usersList = await UsersService.findByName('Diego Silva');
    console.log(usersList);
    

    expect(usersList?.username).toBe('Diego Silva');
  });
});
