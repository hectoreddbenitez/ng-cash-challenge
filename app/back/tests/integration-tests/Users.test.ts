import request from 'supertest'
import app from '../../src/app'

describe('Endpoint POST - Users', () => {
  it('Deve criar un novo usuario com sucesso', async () => {
    const res = await request(app)
      .post('/users')
      .send({ username: 'Lucas Silva', password: 'Userpass01',
     });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('username');
    expect(res.body).toHaveProperty('accountId');
    expect(res.body).not.toHaveProperty('password');
  });
});

// import UsersController from '../../controllers/UsersController';

// describe('camada de Controller de Users', () => {
//   it('Requisição GET - findAll, deve retornar uma lista vazia', async () => {
//     const response = await UsersController.findAll();

//     expect(response).toStrictEqual(response);
//   });
// });
