module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'transactions',
      [
        {
          debited_account_id: 1,
          credited_account_id: 2,
          value: 20.00,
        },
        {
          debited_account_id: 2,
          credited_account_id: 1,
          value: 10.00,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('transactions', null, {});
  },
};