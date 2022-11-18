module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'João Clever',
          password: '9329c2519ad19bfde2a50e00f1bd7af0', //'User01pass'
          account_id: 1,
        },
        {
          username: 'Charles do Bronx',
          password: '0fd79d0e8717d97ccc5829bdc56dc490', //'User02pass'
          account_id: 2,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};