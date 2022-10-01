import Sequelize from "sequelize";

export const Assignment = (sequelize) => {
  const AssignmentTable = sequelize.define(
    "Assignment",
    {
      assignmentName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      pointsPossible: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      notes: {
        type: Sequelize.DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    },
  );

  AssignmentTable.associate = function(models) {
    AssignmentTable.belongsTo(models.Class);
  };

  return AssignmentTable;
};
