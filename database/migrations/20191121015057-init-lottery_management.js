'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;

    await queryInterface.createTable('lottery_management', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '抽奖活动编号',
      },
      lottery_name: {
        type: STRING(50),
        allowNull: false,
        comment: '活动名称',
      },
      share_title: {
        type: STRING(50),
        comment: '分享标题',
      },
      share_icon: {
        type: STRING,
        comment: '分享图片地址',
      },
      share_intro: {
        type: STRING,
        comment: '分享描述',
      },
      online_start_date: {
        type: DATE,
        allowNull: false,
        comment: '活动上线时间',
      },
      online_end_date: {
        type: DATE,
        allowNull: false,
        comment: '活动下线时间',
      },
      start_date: {
        type: DATE,
        allowNull: false,
        comment: '活动开始时间',
      },
      stop_date: {
        type: DATE,
        allowNull: false,
        comment: '活动结束时间',
      },
      lottery_type: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: '活动类型(1集卡,2抽奖)',
      },
      lottery_num: {
        type: INTEGER,
        allowNull: false,
        comment: '抽奖次数',
      },
      status: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: '状态 1：正常  0：删除',
      },
      created_at: {
        type: INTEGER,
        allowNull: false,
        comment: '创建时间',
      },
      updated_at: {
        type: DATE,
        allowNull: false,
        comment: '更新时间',
      },
      deleted_at: {
        type: DATE,
        allowNull: false,
        comment: '删除时间',
      },
    }, {
      comment: '抽奖活动管理',
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('lottery_management');
  },
};

