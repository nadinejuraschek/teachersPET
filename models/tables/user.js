import Sequelize from "sequelize";

export const User = (sequelize) => {
  const UserTable = sequelize.define(
    "User",
    {
      firstName: Sequelize.DataTypes.STRING,
      lastName: Sequelize.DataTypes.STRING,
      email: Sequelize.DataTypes.STRING,
      password: Sequelize.DataTypes.STRING
    },
    {
      timestamps: false
    }
  );

  UserTable.associate = function(models) {
    UserTable.hasMany(models.Class);
  };

  return UserTable;
};
