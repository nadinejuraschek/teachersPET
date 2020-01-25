module.exports = function(sequelize, DataTypes) {
  var StudentAssignment = sequelize.define(
    "studentAssignment",
    {
      assignment_name: DataTypes.STRING,
      points_earned: DataTypes.INTEGER,
      notes: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  StudentAssignment.associate = function(models) {
    StudentAssignment.belongsTo(models.Student);
  };
  return StudentAssignment;
};
