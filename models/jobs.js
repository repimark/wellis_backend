/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs', {
    'id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'unitId': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null"
    },
    'jobName': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'startDate': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'jobStatus': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null"
    },
    'endDate': {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "null"
    },
    'createdBy': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'jobs'
  });
};
