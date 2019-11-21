'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, JSON } = Sequelize;

    await queryInterface.createTable('lottery_management_deploy', {
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
      prize_list: {
        type: JSON,
        allowNull: false,
        comment: '活动奖品',
      },
      card_list: {
        type: JSON,
        allowNull: false,
        comment: '活动卡片',
      },
      prize_total_num: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '奖品总数量',
      },
      prize_num: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '奖品剩余数量',
      },
      win_num: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '已中奖数量',
      },
      status: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: '状态 1：正常  0：删除',
      },
      created_at: {
        type: DATE,
        allowNull: false,
        comment: '创建时间',
      },
    }, {
      comment: '抽奖活动配置表',
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('lottery_management_deploy');
  },
};
