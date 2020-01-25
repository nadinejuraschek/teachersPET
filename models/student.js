/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define(
    "Student",
    {
      // eslint-disable-next-line camelcase
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      contact_name: DataTypes.STRING,
      contact_phone: DataTypes.STRING,
      address: DataTypes.STRING,
      notes: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Student.associate = function(models) {
    Student.belongsTo(models.Class);
    return Student;
  };
};
