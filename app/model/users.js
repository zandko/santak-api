'use strict';
/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nick_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    open_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    lottery_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '5',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'users',
  });

  Model.associate = function() {

  };

  return Model;
};
