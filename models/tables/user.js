import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

export const User = (sequelize) => {
  const UserTable = sequelize.define(
    "User",
    {
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
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );

  UserTable.associate = function(models) {
    UserTable.hasMany(models.Class);
  };

  return UserTable;
};
