'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW } = Sequelize;
    await queryInterface.createTable('users', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '自增id',
      },
      nick_name: {
        type: STRING,
        comment: '用户昵称',
      },
      phone: {
        type: STRING,
        comment: '用户手机号',
      },
      open_id: {
        type: STRING,
        allowNull: false,
        comment: '小程序open_id',
      },
      lottery_num: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 5,
        comment: '抽奖次数',
      },
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
      comment: '用户表',
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
