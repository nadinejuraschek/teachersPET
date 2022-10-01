import Sequelize from "sequelize";

export const Class = (sequelize) => {
  const ClassTable = sequelize.define(
    "Class",
    {
      className: {
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

  ClassTable.associate = function(models) {
    ClassTable.belongsTo(models.User);
    ClassTable.hasMany(models.Student);
    ClassTable.hasMany(models.Lessonplan);
    ClassTable.hasMany(models.Assignment);
  };

  return ClassTable;
};
