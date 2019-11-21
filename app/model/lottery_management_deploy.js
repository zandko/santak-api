'use strict';
/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lottery_management_deploy', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    lottery_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    prize_list: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    card_list: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    prize_total_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
    },
    prize_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
    },
    win_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'lottery_management_deploy',
  });

  Model.associate = function() {

  };

  return Model;
};
