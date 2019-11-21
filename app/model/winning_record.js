'use strict';
/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('winning_record', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    prize_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    lottery_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    prize_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    user_realname: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    user_mobile: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    user_address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    field1: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    field2: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    field3: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {
    tableName: 'winning_record',
  });

  Model.associate = function() {

  };

  return Model;
};
