'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      nick_name: { type: STRING },
      phone: { type: STRING },
      open_id: { type: STRING },
      session_key: { type: STRING },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
