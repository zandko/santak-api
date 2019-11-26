/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('prize', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    prize_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    prize_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    prize_icon: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    prize_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    prize_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    prize_lev: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    prize_probability: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000'
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    created_at: {
      type: DataTypes.DATE,
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
    tableName: 'prize'
  });

  Model.associate = function() {

  }

  return Model;
};
