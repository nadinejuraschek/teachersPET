import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

export const Student = (sequelize) => {
  const StudentTable = sequelize.define(
    "Student",
    {
      _id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      },
      contactName: {
        type: DataTypes.STRING,
      },
      contactPhone: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      notes: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    },
  );

  StudentTable.associate = function(models) {
    StudentTable.belongsTo(models.Class);
  };

  return StudentTable;
};
