module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      debitedAccountId : {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'accounts',
          key: 'id',
        },
        field: 'debited_account_id',
      },
      creditedAccountId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'accounts',
          key: 'id',
        },
        field: 'credited_account_id',
      },
      value: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2),
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        field: 'created_at',
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('transactions');
  },
};