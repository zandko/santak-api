'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, DECIMAL, TEXT } = Sequelize;

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
        comment: '奖品类型 1.虚拟物品，2.邮寄实物，3.用于填坑位的未中奖奖品',
      },
      prize_name: {
        type: STRING(50),
        allowNull: false,
        comment: '奖品名称',
      },
      prize_icon: {
        type: STRING,
        allowNull: false,
        comment: '奖品图片',
      },
      prize_price: {
        type: DECIMAL(10, 2),
        allowNull: false,
        defaultValue: Sequelize.NOW,
        comment: '奖品价值',
      },
      prize_num: {
        type: INTEGER,
        allowNull: false,
        comment: '奖品数量',
      },
      prize_lev: {
        type: INTEGER,
        allowNull: false,
        comment: '奖品等级',
      },
      prize_probability: {
        type: DECIMAL(6, 4),
        allowNull: false,
        defaultValue: 0,
        comment: '中奖概率',
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
        comment: '状态 1：正常，0删除',
      },
      created_at: {
        type: DATE,
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
      comment: '奖品表',
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('prize');
  },
};
