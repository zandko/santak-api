'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW } = Sequelize;
    await queryInterface.createTable('admin', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: { type: STRING, allowNull: false },
      password: { type: STRING, allowNull: false },
      created_at: {
        type: DATE,
        allowNull: false,
        defaultValue: NOW,
        comment: '创建时间',
      },
      updated_at: {
        type: DATE,
        allowNull: false,
        defaultValue: NOW,
        comment: '更新时间',
      },
    }, {
      comment: '管理员',
    });
    try {
      await queryInterface.bulkInsert('admin', [{
        id: 1,
        username: 'admin', // 账号：admin
        password: '21232f297a57a5a743894a0e4a801fc3', // 密码：admin
        created_at: '2019-11-26 14:31:52',
        updated_at: '2019-11-26 14:31:52',
      }]);
    } catch (e) {
      console.log(e);
    }
  },

  down: async queryInterface => {
    await queryInterface.dropTable('admin');
  },
};
