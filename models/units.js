/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('units', {
    'id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'name': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'units'
  });
};
