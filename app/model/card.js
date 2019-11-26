/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('card', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    card_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
    },
    card_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    card_icon: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    card_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
    },
    card_probability: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.0000',
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false,
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
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'card',
  });

  Model.associate = function() {

  };

  return Model;
};
