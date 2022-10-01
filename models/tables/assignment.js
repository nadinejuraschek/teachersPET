import Sequelize from "sequelize";

export const Assignment = (sequelize) => {
  const AssignmentTable = sequelize.define(
    "Assignment",
    {
      assignmentName: {
        type: Sequelize.DataTypes.STRING,
      },
      pointsPossible: {
        type: Sequelize.DataTypes.INTEGER,
      },
      notes: {
        type: Sequelize.DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      freezeName: true,
    },
  );

  AssignmentTable.associate = function(models) {
    AssignmentTable.belongsTo(models.Class);
  };

  return AssignmentTable;
};
