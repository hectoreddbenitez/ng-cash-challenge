import Accounts from "../../src/database/models/AccountsModel";
import AccountsService from "../../src/services/AccountsServices";


jest.mock('../../src/database/models/AccountsModel');  
(Accounts.findAll as jest.Mock).mockResolvedValue([])
(Accounts.create as jest.Mock).mockResolvedValue([{id: 1, balance: "100.00"}])

describe.only('Testes camada Services de Accounts', () => {
it('Requisição inicial findAll, deve retornar uma lista vazia', async () => {
  const accountsList: [] = [];

  const response = await AccountsService.findAll();
  expect(response).toStrictEqual(accountsList);
});

it('Deve criar uma account com sucesso, e retornar Id da conta e valor inicial de $100,00', async () => {
  const expectedAccount = {id: 1, balance: "100.00"};

  const response = await AccountsService.create();
  expect(response).toStrictEqual(expectedAccount);
})
});
