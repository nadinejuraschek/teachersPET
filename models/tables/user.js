import Sequelize from "sequelize";

export const User = (sequelize) => {
  const UserTable = sequelize.define(
    "User",
    {
      firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
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
