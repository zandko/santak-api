'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, DECIMAL, TEXT, NOW } = Sequelize;
    await queryInterface.createTable('card', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '自增ID',
      },
      card_type: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: '类型: 1普通卡片,0用于填坑位的未抽中卡片',
      },
      card_name: {
        type: STRING(50),
        allowNull: false,
        comment: '名称',
      },
      card_icon: {
        type: STRING,
        allowNull: false,
        comment: 'icon',
      },
      card_num: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '数量',
      },
      card_probability: {
        type: DECIMAL(6, 4),
        allowNull: false,
        defaultValue: 0,
        comment: '概率',
      },
      remarks: {
        type: TEXT,
        allowNull: false,
        comment: '备注',
      },
      status: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: '状态: 1正常,0删除',
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
      deleted_at: {
        type: DATE,
        comment: '删除时间',
      },
    }, {
      comment: '卡片表',
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('card');
  },
};
