/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('lottery_management', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lottery_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    share_title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    share_icon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    share_intro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    online_start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    online_end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    stop_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lottery_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    lottery_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    created_at: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'lottery_management'
  });

  Model.associate = function() {

  }

  return Model;
};
