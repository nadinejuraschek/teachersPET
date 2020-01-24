/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Assignment = sequelize.define(
    "Assignment",
    {
      // eslint-disable-next-line camelcase
      assignment_name: DataTypes.STRING,
      points_possible: DataTypes.INTEGER,
      notes: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Assignment.associate = function(models) {
    Assignment.belongsTo(models.Class);
  };
  return Assignment;
};
