export const AssignmentModel = (sequelize, DataTypes) => {
  const Assignment = sequelize.define(
    "Assignment",
    {
      // eslint-disable-next-line camelcase
      assignment_name: DataTypes.STRING,
      // eslint-disable-next-line camelcase
      points_possible: DataTypes.INTEGER,
      notes: DataTypes.STRING
    },
    {
      timestamps: false,
      freezeName: true
    }
  );
  Assignment.associate = function(models) {
    Assignment.belongsTo(models.Class);
  };

  return Assignment;
};
