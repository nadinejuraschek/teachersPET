module.exports = function(sequelize, DataTypes) {
  var Class = sequelize.define(
    "Class",
    {
      // eslint-disable-next-line camelcase
      class_name: DataTypes.STRING,
      notes: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Class.associate = function(models) {
    Class.belongsTo(models.User);

    Class.hasMany(models.Student);
    Class.hasMany(models.Lessonplan);
    Class.hasMany(models.Assignment);
  };

  return Class;
};
