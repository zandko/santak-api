'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('admin', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: { type: STRING, allowNull: false },
      password: { type: STRING, allowNull: false },
    }, {
      comment: '管理员',
    });
    try {
      await queryInterface.bulkInsert('admin', [{
        id: 1,
        username: 'admin', // 账号：admin
        password: '21232f297a57a5a743894a0e4a801fc3', // 密码：admin
      }]);
    } catch (e) {
      console.log(e);
    }
  },

  down: async queryInterface => {
    await queryInterface.dropTable('admin');
  },
};
