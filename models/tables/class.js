import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

export const Class = (sequelize) => {
  const ClassTable = sequelize.define(
    "Class",
    {
      _id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      className: {
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

  ClassTable.associate = function(models) {
    ClassTable.belongsTo(models.User);
    ClassTable.hasMany(models.Student);
    ClassTable.hasMany(models.Lessonplan);
    ClassTable.hasMany(models.Assignment);
  };

  return ClassTable;
};
