import Sequelize from "sequelize";

export const Student = (sequelize) => {
  const StudentTable = sequelize.define(
    "Student",
    {
      firstName: {
        type: Sequelize.DataTypes.STRING,
      },
      lastName: {
        type: Sequelize.DataTypes.STRING,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
      },
      contactName: {
        type: Sequelize.DataTypes.STRING,
      },
      contactPhone: {
        type: Sequelize.DataTypes.STRING,
      },
      address: {
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

  StudentTable.associate = function(models) {
    StudentTable.belongsTo(models.Class);
  };

  return StudentTable;
};
