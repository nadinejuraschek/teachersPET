import Sequelize from "sequelize";

export const Lessonplan = (sequelize) => {
  const LessonplanTable = sequelize.define(
    "Lessonplan",
    {
      lessonplanName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      notes: {
        type: Sequelize.DataTypes.STRING,
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
