import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

export const Lessonplan = (sequelize) => {
  const LessonplanTable = sequelize.define(
    "Lessonplan",
    {
      lessonplanName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      notes: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );

  LessonplanTable.associate = function(models) {
    LessonplanTable.belongsTo(models.Class);
  };

  return LessonplanTable;
};
