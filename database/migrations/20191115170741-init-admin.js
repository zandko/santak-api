'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('admins', {
      id: Sequelize.INTEGER,
    });
    try {
      await queryInterface.bulkInsert('admins', [{
        id: 1,
        name: '管理员',
        username: 'admin', // 账号：admin
        password: '21232f297a57a5a743894a0e4a801fc3', // 密码：admin
      }]);
    } catch (e) {
      console.log(e);
    }
  },

  down: async queryInterface => {
    await queryInterface.dropTable('admins');
  },
};
