import Sequelize from "sequelize";

export const Class = (sequelize) => {
  const ClassTable = sequelize.define(
    "Class",
    {
      className: {
        type: Sequelize.DataTypes.STRING,
      },
      notes: {
        type: Sequelize.DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    },
  );

  ClassTable.associate = function(models) {
    ClassTable.belongsTo(models.User);
    ClassTable.hasMany(models.Student);
    ClassTable.hasMany(models.Lessonplan);
    ClassTable.hasMany(models.Assignment);
  };

  return ClassTable;
};
