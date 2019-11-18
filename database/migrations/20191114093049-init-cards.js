'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('cards', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: STRING },
      picture: { type: STRING },
      probability: { type: INTEGER, defaultValue: 0 },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('cards');
  },
};
