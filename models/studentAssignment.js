/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
    var StudentAssignment = sequelize.define(
      "StudentAssignment",
      {
        points_scored: DataTypes.INTEGER,
        notes: DataTypes.STRING
      },
      {
        timestamps: false
      }
    );
    StudentAssignment.associate = function(models) {
        StudentAssignment.belongsTo(models.Class);
      StudentAssignment.hasMany(models.Student);
      StudentAssignment.hasMany(models.Assignment);
    };
    return StudentAssignment;
  };