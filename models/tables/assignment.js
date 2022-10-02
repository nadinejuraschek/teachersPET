import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

export const Assignment = (sequelize) => {
  const AssignmentTable = sequelize.define(
    "Assignment",
    {
      _id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      assignmentName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pointsPossible: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      notes: {
        type: DataTypes.STRING,
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
