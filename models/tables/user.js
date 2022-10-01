/* eslint-disable camelcase */
export const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // eslint-disable-next-line camelcase
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  User.associate = function(models) {
    User.hasMany(models.Class);
  };
  return User;
};
