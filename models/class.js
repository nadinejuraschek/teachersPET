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
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Class.hasMany(models.Student);
  };

  return Class;
};
