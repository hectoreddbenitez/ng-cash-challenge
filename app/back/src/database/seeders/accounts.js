module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'accounts',
      [
        {
          balance: 90.00,
        },
        {
          balance: 110.00,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('accounts', null, {});
  },
};