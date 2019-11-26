'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, DECIMAL, TEXT, NOW } = Sequelize;

    await queryInterface.createTable('prize', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '自增ID',
      },
      prize_type: {
        type: INTEGER,
        allowNull: false,
        comment: '奖品类型: 1虚拟物品,2邮寄实物,3用于填坑位的未中奖奖品',
      },
      prize_name: {
        type: STRING(50),
        allowNull: false,
        comment: '名称',
      },
      prize_icon: {
        type: STRING,
        allowNull: false,
        comment: 'icon',
      },
      prize_price: {
        type: DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
        comment: '价值',
      },
      prize_num: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '数量',
      },
      prize_lev: {
        type: INTEGER,
        allowNull: false,
        comment: '等级',
      },
      prize_probability: {
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
      comment: '奖品表',
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('prize');
  },
};
