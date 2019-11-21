'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;

    await queryInterface.createTable('winning_record', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '自增ID',
      },
      prize_id: {
        type: INTEGER,
        allowNull: false,
        comment: '奖品ID',
      },
      user_id: {
        type: INTEGER,
        allowNull: false,
        comment: '中奖用户ID',
      },
      lottery_id: {
        type: INTEGER,
        allowNull: false,
        comment: '活动ID',
      },
      prize_name: {
        type: STRING,
        allowNull: false,
        comment: '奖品名称',
      },
      user_name: {
        type: STRING,
        allowNull: false,
        comment: '中奖用户名称',
      },
      user_realname: {
        type: STRING,
        comment: '用户姓名，中奖时填写',
      },
      user_mobile: {
        type: STRING,
        comment: '用户手机号，中奖时填写',
      },
      user_address: {
        type: STRING,
        comment: '用户收货地址，中奖时填写',
      },
      created_at: {
        type: DATE,
        allowNull: false,
        comment: '中奖时间',
      },
      field1: {
        type: STRING,
        allowNull: false,
        comment: '备用字段1',
      },
      field2: {
        type: STRING,
        allowNull: false,
        comment: '备用字段2',
      },
      field3: {
        type: STRING,
        allowNull: false,
        comment: '备用字段3',
      },
    }, {
      comment: '中奖记录表',
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('winning_record');
  },
};
