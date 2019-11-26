'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, NOW } = Sequelize;

    await queryInterface.createTable('lottery_log', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '自增ID',
      },
      lottery_id: {
        type: INTEGER,
        allowNull: false,
        comment: '活动ID',
      },
      user_id: {
        type: INTEGER,
        allowNull: false,
        comment: '用户ID',
      },
      card_id: {
        type: INTEGER,
        allowNull: false,
        comment: '卡片ID',
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
      comment: '抽奖记录表',
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('lottery_log');
  },
};
